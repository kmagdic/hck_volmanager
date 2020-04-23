import React, { useState, useEffect } from "react";
import { Button, FormControl,  TextField, FormControlLabel, Checkbox, FormLabel, RadioGroup, Radio, MenuItem, FormHelperText } from '@material-ui/core';
import Law from './Law';
import CreatableSelect from 'react-select/creatable';
import Datetime from 'react-datetime';
import '../../node_modules/react-datetime/css/react-datetime.css';
import Select from 'react-select';
import { request } from "../utils/requests"
import { ListItem, GroupedOption, groupingOptions, join, emptyGroup } from "../utils/json-methods"
import { Place, Skill, genders, placesData, qualificationsData, experiencesData, servicesData, skillsData } from "../utils/data"
import { latinize } from "../utils/string-search";
import { Link, useHistory } from "react-router-dom";
import { checkOIB } from "../utils/oib";
import { parse } from "date-fns";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { zhCN } from '@material-ui/core/locale';
/*
DateTime.d.ts - at line 101 add next line>
renderInput?: any;
*/

require('moment/locale/hr');

const theme = createMuiTheme({}, zhCN);

function Registration() {
  const groupStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1rem',
    borderTop: '2px #b7b4b4 solid',
    borderBottom: '1px #b7b4b496 solid',
    padding: '5px 0'
  };
  const groupBadgeStyles: React.CSSProperties = {
    backgroundColor: 'rgb(235, 236, 240)',
    color: 'rgb(23, 43, 77)',
    lineHeight: '1rem',
    minWidth: '1px',
    textAlign: 'center',
    fontSize: '0.7rem',
    borderRadius: '2em',
    padding: '0.16666666666667em 0.5em',
  };
  const formatGroupLabel = (data: any) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
  //const newGroupedPlaces = groupingOptions(placesData, (place: Place) => ({ value: place.id, label: `${place.name}, ${place.postCode}, ${place.county}`}), "county");
  const [groupedPlaces, setGroupedPlaces] = useState(emptyGroup);
  const [groupedSkills, setGroupedSkills] = useState(emptyGroup);

  // dob
  const [errorDOB, setErrorDOB] = React.useState(false);
  const [helperTextDOB, setHelperTextDOB] = React.useState('');

  // OIB
  const [errorOIB, setErrorOIB] = React.useState(false);
  const [helperTextOIB, setHelperTextOIB] = React.useState('');

  // Gender
  const [gender, setGender] = React.useState('');
  const [errorGender, setErrorGender] = React.useState(false);
  const [helperTextGender, setHelperTextGender] = React.useState('');

  // placeOfLiving
  const [placeOfLiving, setPlaceOfLiving] = React.useState({ id: undefined });
  const [errorPlaceOfLiving, setErrorPlaceOfLiving] = React.useState(false);
  const [helperTextPlaceOfLiving, setHelperTextPlaceOfLiving] = React.useState('');

  // placeOfVolunteering
  const [placeOfVolunteering, setPlaceOfVolunteering] = React.useState({ id: undefined });
  const [errorPlaceOfVolunteering, setErrorPlaceOfVolunteering] = React.useState(false);
  const [helperTextPlaceOfVolunteering, setHelperTextPlaceOfVolunteering] = React.useState('');

  // qualifications
  const [qualificationList, setQualificationList] = React.useState([]);
  const [customQualificationList, setCustomQualificationList] = React.useState([]);

  // experiences
  const [experienceList, setExperienceList] = React.useState([]);
  const [customExperienceList, setCustomExperienceList] = React.useState([]);

  // services
  const [serviceList, setServiceList] = React.useState([]);
  const [customServiceList, setCustomServiceList] = React.useState([]);

  // skills
  const [skillList, setSkillList] = React.useState([]);
  const [customSkillList, setCustomSkillList] = React.useState([]);

  const history = useHistory();

  //setGroupedPlaces(newGroupedPlaces);

  //const newPlaces = join(places, counties, (p: any, c: any) => (p.county === c.id) ? { ...p, countyName: c.name } : null );
  //console.log("newPlaces:", newPlaces);

  useEffect(() => {
    console.log("before fetching...");

    // fetching places
    request('places', (placesData: any) => {
      console.log("placesData:", placesData);
      const newGroupedPlaces = groupingOptions(placesData, (place: Place) => ({ value: place.id, label: `${place.name}, ${place.postCode}, ${place.county}`}), "county");
      setGroupedPlaces(newGroupedPlaces);
    });

    // fatching skills
    request('skills', (skillsData: any) => {
      console.log("skillsData:", skillsData);
      const newGroupedSkills = groupingOptions(skillsData, (skill: Skill) => ({ value: skill.id, label: skill.name, group: skill.skillGroup.name }), "skillGroup.name");
      setGroupedSkills(newGroupedSkills);
    });
    console.log("after fetching...");
  }, []);

  //const groupedSkills = groupingOptions(skillsData2, (skill: Skill) => ({ value: skill.id, label: skill.name }), "group");

  const qualifications = qualificationsData.map(option => ({ value: option.id, label: option.name} as ListItem));
  const experiences = experiencesData.map(option => ({ value: option.id, label: option.name} as ListItem));
  const services = servicesData.map(option => ({ value: option.id, label: option.name} as ListItem));
  const skills = skillsData.map(option => ({ value: option.id, label: option.name} as ListItem));

  const renderInput = (props: any, openCalendar: any, closeCalendar: any) => {
    function clear(){
      props.onChange({target: {value: ''}});
    };
    return (
      <TextField id="dob" className="textField fullWidth" variant="outlined" {...props} />
    );
  };

  const validateOIB = (target: any, oib: string, focus: boolean = false): boolean => {
    // console.log("validateOIB:", target);
    // console.log("validating:", oib);
    if (!checkOIB(oib)) {
      console.error(`OIB "${oib}" is not valid`);
      setHelperTextOIB('OIB je neispravan');
      setErrorOIB(true);
      if (focus) {
        target.focus();
      }
      return false;
    }
    setHelperTextOIB('');
    setErrorOIB(false);
    return true;
  }

  const validatingFields = (form: any, data: any): boolean => {
    if (!validateOIB(form.oib, data.oib, true)) {
      return false;
    }

    if (!gender) {
      console.error('gender is not valid');
      setHelperTextGender('nije odabran spol');
      setErrorGender(true);
      form.gender00.focus();
      return false;
    }
    if (errorGender) {
      setHelperTextGender('');
      setErrorGender(false);
    }

    // dob
    if (!data.dob) {
      console.error('dob is null');
      setHelperTextDOB('nije unesen datum rođenja');
      setErrorDOB(true);
      form.dob.focus();
      return false;
    }
    const strDate = data.dob.replace(/ /gi, "");
    var dDate = parse(strDate, "dd.MM.yyyy", new Date());
    //console.log(`"${dDate.toString()}" typeof ${typeof dDate}`);
    if (dDate.toString() === "Invalid Date") {
      // special char
      const sc = strDate.split('').find((c: any) => !(c > -1));
      console.log(`special char "${sc}"`);
      const dateParts = strDate.split(sc);
      if (dateParts.length >= 3) {
        const newDate = dateParts.filter((p: string) => p.length > 0).join(sc);
        if (dateParts[0].length === 4) {
          dDate = parse(newDate, `yyyy${sc}MM${sc}dd`, new Date());
        } else {
          dDate = parse(newDate, `dd${sc}MM${sc}yyyy`, new Date());
        }
      }
      if (dDate.toString() === "Invalid Date") {
        console.error(dDate);
        setHelperTextDOB('datum rođenja neispravan');
        setErrorDOB(true);
        form.dob.focus();
        return false;
      }
    }
    data.dob = new Date(dDate.getTime() - dDate.getTimezoneOffset() * 60000).toISOString().substr(0, 10); // fix time-zone and return only date part of datetime
    if (errorDOB) {
      setHelperTextDOB('');
      setErrorDOB(false);
    }

    // placeOfLiving
    if (!placeOfLiving.id) {
      console.error('placeOfLiving is null');
      setHelperTextPlaceOfLiving('nije odabrano mjesto prebivališta');
      setErrorPlaceOfLiving(true);
      form.placeOfLiving.focus();
      return false;
    }
    if (errorPlaceOfLiving) {
      setHelperTextPlaceOfLiving('');
      setErrorPlaceOfLiving(false);
    }

    // placeOfVolunteering
    if (!placeOfVolunteering.id) {
      console.error('placeOfVolunteering is null');
      setHelperTextPlaceOfLiving('nije odabrano mjesto u kojem želite volontirati');
      setErrorPlaceOfVolunteering(true);
      form.placeOfVolunteering.focus();
      return false;
    }
    if (errorPlaceOfVolunteering) {
      setHelperTextPlaceOfVolunteering('');
      setErrorPlaceOfVolunteering(false);
    }

    return true;
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log("fields:", event.target.elements);
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      dob: event.target.dob.value,
      oib: event.target.oib.value,
      gender,
      address: event.target.address.value,
      placeOfLiving,
      placeOfVolunteering,
      phone: event.target.phone.value,
      email: event.target.email.value,
      iceName: event.target.iceName.value,
      icePhone: event.target.icePhone.value,
      householdElderly: event.target.householdElderly.checked,
      householdPregnatWomen: event.target.householdPregnatWomen.checked,
      pregnatWoman: event.target.pregnatWoman.checked,
      householdChild: event.target.householdChild.checked,
      householdChronicPatient: event.target.householdChronicPatient.checked,
      healthfine: event.target.healthfine.checked,
      qualifications: qualificationList,
      customQualifications: customQualificationList,
      experiences: experienceList,
      customExperiences: customExperienceList,
      services: serviceList,
      customServices: customServiceList,
      skills: skillList,
      customSkills: customSkillList,
      healthDetails: event.target.healthDetails.value,
      availabilityHoursWeekly: event.target.availabilityHoursWeekly.value,
      availabilityDetails: event.target.availabilityDetails.value,
      criminalRecord: event.target.criminalRecord.value,
    };
    console.log("form data:", data);
    if (!validatingFields(event.target, data)) {
      return;
    }
    request('volunteers', (data: any) => {
        console.log("response:", data);
        /*
          is status === 200 {
            history.push("/confirmation");
        }
        */
      }, "POST", data);
  }

  const getValues = (values: any[], list: any[], custom: any[]) => {
    //list.length = 0;
    //custom.length = 0;
    if (values) {
      const aValues = Array.isArray(values) ? values : [values];
      aValues.forEach((item: any) => {
        if (item["__isNew__"]) {
          custom.push({ name: item.label});
        } else {
          list.push({ id: item.value });
        }
      });
    }
  };

  const genderOnChange = (newGender: any, action: any) => {
    console.log("on change:", newGender, action);
    setGender(newGender ? newGender.value : null);
    setHelperTextGender('');
    setErrorGender(false);
  }

  const qualificationsOnChange = (values: any, action: any) => {
    console.log("qualifications on change:", values);
    const lQualificationList: any = [];
    const lCustomQualificationList: any = [];
    getValues(values, lQualificationList, lCustomQualificationList);
    setQualificationList(lQualificationList);
    setCustomQualificationList(lCustomQualificationList);
  }

  const experiencesOnChange = (values: any, action: any) => {
    console.log("experiences on change:", values);
    getValues(values, experienceList, customExperienceList);
    const lExperienceList: any = [];
    const lCustomExperienceList: any = [];
    getValues(values, lExperienceList, lCustomExperienceList);
    setExperienceList(lExperienceList);
    setCustomExperienceList(lCustomExperienceList);
  }

  const servicesOnChange = (values: any, action: any) => {
    console.log("services on change:", values);
    const lServiceList: any = [];
    const lCustomServiceList: any = [];
    getValues(values, lServiceList, lCustomServiceList);
    setServiceList(lServiceList);
    setCustomServiceList(lCustomServiceList);
  }

  const skillsOnChange = (values: any, action: any) => {
    console.log("skills on change:", values);
    const lSkillList: any = [];
    const lCustomSkillList: any = [];
    getValues(values, lSkillList, lCustomSkillList);
    setSkillList(lSkillList);
    setCustomSkillList(lCustomSkillList);
  }

  const placeOfLivingOnChange = (place: any, action: any) => {
    console.log("on change:", place, action);
    setPlaceOfLiving({ id: place ? place.value : null });
    setErrorPlaceOfLiving(false);
    setHelperTextPlaceOfLiving('');
  }

  const placeOfVolunteeringOnChange = (place: any, action: any) => {
    console.log("on change:", place, action);
    setPlaceOfVolunteering({ id: place ? place.value : null });
    setErrorPlaceOfVolunteering(false);
    setHelperTextPlaceOfVolunteering('');
  }

  const noOptionsMessage = (search: any) => `nije nađeno "${search.inputValue}"`;

  const includes = (search: string, options: GroupedOption[]): boolean => {
    search = search.trim().toLocaleLowerCase();
    return !search.length || !!options.find(category => category.options.find((item: ListItem) => item.label.toLocaleLowerCase() === search));
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
    <header className="App-header">

    <div className="ctnRegister">
      <form onSubmit={onSubmit} action="http://localhost:8080/api/v1/volunteers" target="_self" autoComplete="off">
      <fieldset className="fieldset">
        <legend>Osobni podaci volontera</legend>
        <FormControlLabel control={ <TextField id="firstName" required={true} className="textField" variant="outlined" /> } label="Ime*:" className="textField" labelPlacement="top" />
        <FormControlLabel control={ <TextField id="lastName" required={true} className="textField" variant="outlined" /> } label="Prezime*:" className="textField" labelPlacement="top" />
        <FormControl error={errorDOB}>
          <FormControlLabel id="dob" control={
            <Datetime viewMode="years" viewDate={new Date("1990-1-1")} dateFormat={"DD.MM.YYYY"} closeOnSelect={true} className="textField rdt-datepicker" renderInput={renderInput} timeFormat={false} locale="hr-HR" />
            }  label="Datum rođenja*:" className="textField" labelPlacement="top"
          />
          <FormHelperText className="helper-text">{helperTextDOB}</FormHelperText>
        </FormControl>

        <FormControlLabel control={ <TextField id="oib" error={errorOIB} required={true} inputProps={{ onBlur: (event) => validateOIB(event.target, event.target.value), minLength: 11, maxLength: 11 }} className="textField" variant="outlined" helperText={helperTextOIB} />} label="OIB*:" className="textField" labelPlacement="top" />

        <FormControl error={errorGender}>
          <FormControlLabel control={
              <Select inputId="gender00" className="fullWidth" required={true} placeholder="Odaberi..." onChange={genderOnChange} options={genders} noOptionsMessage={noOptionsMessage}
              />
            } label="Spol*:" className="textField" labelPlacement="top"
          />
          <FormHelperText className="helper-text">{helperTextGender}</FormHelperText>
        </FormControl>

        <FormControlLabel control={ <TextField id="address" required={true} className="textField" variant="outlined" />} label="Adresa*:" className="textField" labelPlacement="top" />
        
        <FormControl error={errorPlaceOfLiving}>
          <FormControlLabel control={ 
            <Select inputId="placeOfLiving" className="fullWidth" required={true} placeholder="Odaberi..." onChange={placeOfLivingOnChange} options={groupedPlaces} noOptionsMessage={noOptionsMessage}
            />
            }
            label="Mjesto prebivališta*:" className="textField" labelPlacement="top"
          />
          <FormHelperText className="helper-text">{helperTextPlaceOfLiving}</FormHelperText>
        </FormControl>

        <FormControl error={errorPlaceOfVolunteering}>
          <FormControlLabel control={ 
            <Select inputId="placeOfVolunteering" className="fullWidth" required={true} placeholder="Odaberi..." onChange={placeOfVolunteeringOnChange} options={groupedPlaces} noOptionsMessage={noOptionsMessage}
            />
            }
            label="Mjesto u kojem želite volontirati*:" className="textField" labelPlacement="top"
          />
          <FormHelperText className="helper-text">{helperTextPlaceOfVolunteering}</FormHelperText>
        </FormControl>

        <FormControlLabel control={ <TextField id="phone" required={true} className="textField" variant="outlined" />} label="Broj telefona/mobitela*:" className="textField" labelPlacement="top" />
        <FormControlLabel control={ <TextField id="email" required={true} className="textField" variant="outlined" type="email" />} label="Email adresa*:" className="textField" labelPlacement="top" />
        <FormControlLabel
          control={
            <TextField id="iceName" required={true} className="textField" variant="outlined" 
              helperText="Molimo unesite ime i prezime osobe koje možemo kontaktirati u slučaju nužde, kao i broj telefona te osobe."
            />
          } label="Kontakt u slučaju nužde (član obitelji, prijatelj, sl.)*:" className="textField" labelPlacement="top"
        />
        <FormControlLabel control={ <TextField id="icePhone" required={true} className="textField" variant="outlined" /> } className="textField" label="Broj telefona kontakta u nuždi*:" labelPlacement="top" />
      </fieldset>
      <fieldset className="fieldset">
        <legend>Važne informacije</legend>
        <FormControlLabel control={ <Checkbox name="householdElderly" color="primary" /> } label="imate li u kućanstvu stariju osobu?" />
        <FormControlLabel control={ <Checkbox name="householdPregnatWomen" color="primary" /> } label="imate li u kućanstvu trudnicu?" />
        <FormControlLabel control={ <Checkbox name="pregnatWoman" color="primary" /> } label="jeste li vi trudnica?" />
        <FormControlLabel control={ <Checkbox name="householdChild" color="primary" /> } label="imate li u kućanstvu malo dijete?" />
        <FormControlLabel control={ <Checkbox name="householdChronicPatient" color="primary" /> } label="imate li u kućanstvu kroničnog bolesnika?" />
        <FormControlLabel control={ <Checkbox name="healthfine" color="primary" /> } label="imate li sami zdravstvenih poteškoća?" />
      </fieldset>
      <fieldset className="fieldset">
        <legend>Dodatne informacije</legend>
        <div className="fieldset-info">Kako bi brže i učinkovitije rasporedili volontere na odgovarajuće volonterske pozicije i najbolje iskoristili resurse kojima raspolažemo, molimo da odgovorite na dodatnih nekoliko pitanja.</div>

        <FormControlLabel control={ 
          <CreatableSelect inputId="qualifications" className="fullWidth" placeholder="Odaberi..." onChange={qualificationsOnChange} options={qualifications} formatCreateLabel={option => `Dodaj: "${option}"`} isMulti /> }
          label="Zanimanje/profesionalne kvalifikacije*:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ 
          <CreatableSelect inputId="experiences" className="fullWidth" placeholder="Odaberi..." onChange={experiencesOnChange} options={experiences} formatCreateLabel={option => `Dodaj: "${option}"`} isMulti /> }
          label="Iskustva*:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ 
          <CreatableSelect inputId="services" className="fullWidth" placeholder="Odaberi..." onChange={servicesOnChange} options={services} formatCreateLabel={option => `Dodaj: "${option}"`} isMulti /> }
          label="Dodatne usluge*:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={
            <CreatableSelect inputId="skills" className="fullWidth" placeholder="Odaberi..." onChange={skillsOnChange} options={groupedSkills} 
              isValidNewOption={search => !includes(search, groupedSkills)} formatGroupLabel={formatGroupLabel} formatCreateLabel={option => `Dodaj: "${option}"`} isMulti
            />
          }
          label="Dodatne vještine*:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ <TextField id="healthDetails" required={true} className="textField" variant="outlined" multiline /> } label="Zdravstveni detalji*:" className="textField" labelPlacement="top" />
        <FormControlLabel control={ <TextField id="availabilityHoursWeekly" required={true} className="textField" variant="outlined" type="number" /> } label="Koliko ste sati tjedno izdvojiti na volontiranje*:" className="textField" labelPlacement="top" />
        <FormControlLabel control={
            <TextField id="availabilityDetails" required={true} className="textField" variant="outlined" multiline
              helperText="Navedite kada ste dostupni za volontiranje (što preciznije - koji dani u tjednu i u kojem vremenskom razdoblju)"
            /> 
          } 
          label="Ostali detalji o vašoj raspoloživosti za volontiranje*:" className="textField" labelPlacement="top"
      />
      </fieldset>

      <Law></Law>
      <FormLabel component="legend">
      </FormLabel>
      <RadioGroup aria-label="criminalRecord" name="criminalRecord">
        <div className="criminalRecord">
          <FormControlLabel value="true" control={<Radio required={true} className="no-select" color="primary" />} label="Da"/>
          <FormControlLabel value="false" control={<Radio required={true} className="no-select" color="primary" />} label="Ne"/>
        </div>
      </RadioGroup>

      <div className="ctnSubmit">
          <Button className="btnSumbit" fullWidth variant="contained" type="submit" color="primary">Potvrdi</Button>
        <Link to="/confirmation">
        </Link>
      </div>
      </form>
    </div>

    </header>
    </ThemeProvider>
  </div>
  );
}

export default Registration