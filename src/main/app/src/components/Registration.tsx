import React, { useState, useEffect } from "react";
import { Button, FormControl,  TextField, FormControlLabel, Checkbox, FormLabel, RadioGroup, Radio, FormHelperText } from '@material-ui/core';
import Law from './Law';
import CreatableSelect from 'react-select/creatable';
import Datetime from 'react-datetime';
import '../../node_modules/react-datetime/css/react-datetime.css';
import Select from 'react-select';
import { request } from "../utils/requests"
import { ListItem, GroupedOption, groupingOptions, sortData, defaultDataGroupSort, emptyGroup } from "../utils/json-methods"
import { genders } from "../utils/data"
import { useHistory } from "react-router-dom";
import { checkOIB } from "../utils/oib";
import { parse } from "date-fns";

/*
DateTime.d.ts - at line 101 add next line>
renderInput?: any;
*/

require('moment/locale/hr');

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
  const initDateTime: any = undefined;
  const [dateTimeOpened, setDateTimeOpen] = useState(initDateTime);
  const [dateTimeValue, setDateTimeValue] = useState(new Date("1990-1-1"));

  const [groupedPlaces, setGroupedPlaces] = useState(emptyGroup);

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
  const [qualificationSelect, setQualificationSelect] = React.useState(emptyGroup);
  const [qualificationList, setQualificationList] = React.useState(emptyGroup);
  const [customQualificationList, setCustomQualificationList] = React.useState([]);

  // experiences
  const [experienceSelect, setExperienceSelect] = React.useState(emptyGroup);
  const [experienceList, setExperienceList] = React.useState(emptyGroup);
  const [customExperienceList, setCustomExperienceList] = React.useState([]);

  // services
  const [serviceSelect, setServiceSelect] = React.useState(emptyGroup);
  const [serviceList, setServiceList] = React.useState(emptyGroup);
  const [customServiceList, setCustomServiceList] = React.useState([]);

  // skills
  const [skillSelect, setSkillSelect] = React.useState(emptyGroup);
  const [skillList, setSkillList] = React.useState(emptyGroup);
  const [customSkillList, setCustomSkillList] = React.useState([]);

  const history = useHistory();

  const inputRef: any = React.useRef();

  const setFocus = () => { inputRef.current.focus(); };

  useEffect(() => {
    // fetching places
    request('places', (placesResponse: any) => {
      console.log("placesResponse:", placesResponse);
      placesResponse.json().then((placesData: any) => {
        const places = placesData.map((place: any) => ({ value: place.id, name: place.name, postcode: place.postCode, label: `${place.name}, ${place.postCode}, ${place.county}`, group: place.county }));
        // const sortedPlaces = sortData(places, ["group", "label"]);

        const sortedPlaces = sortData(places, [
          "group",
          (a: any, b: any) => {
            var cmp = 0;
            const groupAName = a.group.toLocaleLowerCase();
            const groupBName = b.group.toLocaleLowerCase();
            const indexA = groupAName.indexOf(a.name.toLocaleLowerCase());
            const indexB = groupBName.indexOf(b.name.toLocaleLowerCase());
            if ((indexA === -1) && (indexB !== -1)) {
              cmp = 1;  
            }
            else if ((indexA !== -1) && (indexB === -1)) {
              cmp = -1;
            } else {
              if ((indexA >= 0) && (indexB >= 0)) {
                cmp = b.name.length - a.name.length;
              }
              if (cmp === 0) {
                cmp = a.postcode - b.postcode;
              }
              if (cmp === 0) {
                cmp = a.label.localeCompare(b.label);
              }
            }
            /*
            console.log("comparing", a, b, "with result", cmp);
            console.log("groupAName", groupAName, "groupBName", groupBName);
            console.log("indexA", indexA, "indexB", indexB);
            */
            return cmp;
            }
        ]);

      const newGroupedPlaces = groupingOptions(sortedPlaces);
      setGroupedPlaces(newGroupedPlaces);
      });
    });

    // fetching qualifications
    request('qualifications', (qualificationsResponse: any) => {
      console.log("qualificationsResponse:", qualificationsResponse);
      qualificationsResponse.json().then((qualificationsData: any) => {
        const qualifications = qualificationsData.map((qualification: any) => (
          {
            value: qualification.id, 
            label: qualification.name, 
            group: qualification.qualificationGroup ? qualification.qualificationGroup.name : '', 
            orderNum: qualification.orderNum, 
            groupOrderNum: qualification.qualificationGroup ? qualification.qualificationGroup.orderNum : undefined
          }));
        const sortedQualifications = sortData(qualifications, defaultDataGroupSort);
        const newGroupedQualifications = groupingOptions(sortedQualifications);
        setQualificationSelect(newGroupedQualifications);
      });
    });

    // fetching experiences
    request('experiences', (experiencesResponse: any) => {
      console.log("experiencesResponse:", experiencesResponse);
      experiencesResponse.json().then((experiencesData: any) => {
        const experiences = experiencesData.map((experience: any) => (
          { 
            value: experience.id, 
            label: experience.name, 
            group: experience.experienceGroup ? experience.experienceGroup.name : '', 
            orderNum: experience.orderNum,
            groupOrderNum: experience.experienceGroup ? experience.experienceGroup.orderNum : undefined
          }));
        const sortedExperiences = sortData(experiences, defaultDataGroupSort);
        const newGroupedExperiences = groupingOptions(sortedExperiences);
        setExperienceSelect(newGroupedExperiences);
      });
    });

    // fetching services
    request('services', (servicesResponse: any) => {
      console.log("servicesResponse:", servicesResponse);
      servicesResponse.json().then((servicesData: any) => {
        const services = servicesData.map((service: any) => (
          { 
            value: service.id, 
            label: service.name, 
            orderNum: service.orderNum 
          }));
        const sortedServices = sortData(services, ["orderNum", "label"]);
        setServiceSelect(sortedServices);
      });
    });

    // fatching skills
    request('skills', (skillsResponse: any) => {
      console.log("skillsResponse:", skillsResponse);
      skillsResponse.json().then((skillsData: any) => {
        const skills = skillsData.map((skill: any) => (
          { 
            value: skill.id, 
            label: skill.name, 
            group: skill.skillGroup ? skill.skillGroup.name : '', 
            orderNum: skill.orderNum, 
            groupOrderNum: skill.skillGroup ? skill.skillGroup.orderNum : undefined
          }));
        const sortedSkills = sortData(skills, defaultDataGroupSort);
        const newGroupedSkills = groupingOptions(sortedSkills);
        setSkillSelect(newGroupedSkills);
      });
    });

    setTimeout(setFocus, 200);
  }, []);

  const renderInput = (props: any) => <TextField id="dob" className="textField fullWidth" variant="outlined" {...props} />;

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

  const parseDate = (s: string): Date | null => {
    const strDate = s.replace(/ /gi, "");
    var dDate = parse(strDate, "dd.MM.yyyy", new Date());
    //console.log(`"${dDate.toString()}" typeof ${typeof dDate}`);
    if (dDate.toString() === "Invalid Date") {
      // special char
      const sc: any = strDate.split('').find((c: any) => !(c > -1));
      if (!sc) {
        return null;
      }
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
    }
    if (dDate.toString() === "Invalid Date") {
      return null;
    }
    const d = new Date(dDate.getTime() - dDate.getTimezoneOffset() * 60000); // fix time-zone and return only date part of datetime
    return d;
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
    data.dob = parseDate(data.dob);
    if (!data.dob) {
      console.error("Invalid date:", data.dob);
      setHelperTextDOB('datum rođenja neispravan');
      setErrorDOB(true);
      form.dob.focus();
      return false;
    }
    data.dob = data.dob.toISOString().substr(0, 10);
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
    request('volunteers', (response: any) => {
        console.log("response:", response);
        if (!response.ok) {
          throw new Error('Response was not ok');
        }
        history.push("/confirmation");
      }, "POST", data);
  }

  const onChangeDateTime = (event: any) => {
    console.log("datetime changed:", event); 
    setDateTimeOpen(false);
    const dateTime = event._isValid ? event._d : parseDate(event);
    if (dateTime) {
      setDateTimeValue(dateTime);
    }
    setTimeout(() => setDateTimeOpen(initDateTime), 100);
  }

  const getValues = (values: any[], list: any[], custom: any[]) => {
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

  const noOptionsMessage = (search: any) => {
    console.log("search:", search);
    console.log("typeof search:", typeof search);
    return search.inputValue ? `nije nađeno "${search.inputValue}"` : "nema podataka";
  };

  const includes = (search: string, options: GroupedOption[]): boolean => {
    search = search.trim().toLocaleLowerCase();
    return !search.length || !!options.find(category => category && category.options && category.options.find((item: ListItem) => item && item.label && item.label.toLocaleLowerCase() === search));
  }

  return (
    <div className="App">
    <header className="App-header">

    <div className="ctnRegister">
      <form onSubmit={onSubmit} action="http://localhost:8080/api/v1/volunteers" target="_self" autoComplete="off">
      <fieldset className="fieldset">
        <legend>Osobni podaci volontera</legend>
        <FormControlLabel control={
          <TextField id="firstName" required={true} className="textField" variant="outlined" inputRef={inputRef} />
          } label="Ime*:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={
          <TextField id="lastName" required={true} className="textField" variant="outlined" /> }
          label="Prezime*:" className="textField" labelPlacement="top"
        />

        <FormControl error={errorDOB}>
          <FormControlLabel id="dob" control={
            <Datetime viewMode="years" viewDate={dateTimeValue} dateFormat={"DD.MM.YYYY"} open={dateTimeOpened} onChange={onChangeDateTime} closeOnSelect={true} className="textField rdt-datepicker" renderInput={renderInput} timeFormat={false} locale="hr-HR" />
            }  label="Datum rođenja*:" className="textField" labelPlacement="top"
          />
          <FormHelperText className="helper-text">{helperTextDOB}</FormHelperText>
        </FormControl>

        <FormControlLabel control={ 
          <TextField id="oib" error={errorOIB} required={true} inputProps={{ onBlur: (event) => validateOIB(event.target, event.target.value), minLength: 11, maxLength: 11 }} className="textField" variant="outlined" helperText={helperTextOIB} />
          } label="OIB*:" className="textField" labelPlacement="top"
        />

        <FormControl error={errorGender} className="fullWidth">
          <FormControlLabel control={
            <Select inputId="gender00" className="fullWidth" required={true} placeholder="Odaberi..." onChange={genderOnChange} options={genders} noOptionsMessage={noOptionsMessage}
            />
            } label="Spol*:" className="textField" labelPlacement="top"
          />
          <FormHelperText className="helper-text">{helperTextGender}</FormHelperText>
        </FormControl>

        <FormControlLabel control={ 
          <TextField id="address" required={true} className="textField" variant="outlined" />
          } label="Adresa*:" className="textField" labelPlacement="top"
        />
        
        <FormControl error={errorPlaceOfLiving} className="fullWidth">
          <FormControlLabel control={ 
            <Select inputId="placeOfLiving" className="fullWidth" required={true} placeholder="Odaberi..." onChange={placeOfLivingOnChange} options={groupedPlaces} noOptionsMessage={noOptionsMessage}
            />
            }
            label="Mjesto prebivališta*:" className="textField" labelPlacement="top"
          />
          <FormHelperText className="helper-text">{helperTextPlaceOfLiving}</FormHelperText>
        </FormControl>

        <FormControl error={errorPlaceOfVolunteering} className="fullWidth">
          <FormControlLabel control={ 
            <Select inputId="placeOfVolunteering" className="fullWidth" required={true} placeholder="Odaberi..." onChange={placeOfVolunteeringOnChange} options={groupedPlaces} noOptionsMessage={noOptionsMessage}
            />
            }
            label="Mjesto u kojem želite volontirati*:" className="textField" labelPlacement="top"
          />
          <FormHelperText className="helper-text">{helperTextPlaceOfVolunteering}</FormHelperText>
        </FormControl>

        <FormControlLabel control={ 
          <TextField id="phone" required={true} className="textField" variant="outlined" />
          } label="Broj telefona/mobitela*:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ 
          <TextField id="email" required={true} className="textField" variant="outlined" type="email" />
          } label="Email adresa*:" className="textField" labelPlacement="top"
        />

        <FormControlLabel
          control={
            <TextField id="iceName" required={true} className="textField" variant="outlined" 
              helperText="Molimo unesite ime i prezime osobe koje možemo kontaktirati u slučaju nužde, kao i broj telefona te osobe."
            />
          } label="Kontakt u slučaju nužde (član obitelji, prijatelj, sl.)*:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ 
          <TextField id="icePhone" required={true} className="textField" variant="outlined" />
          } className="textField" label="Broj telefona kontakta u nuždi*:" labelPlacement="top"
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend>Važne informacije</legend>
        <div className="fieldset-info">Važne informacije tijekom voloniranja za vrijeme epidemije COVID-19</div>
        <FormControlLabel className="fullWidth" control={ <Checkbox name="householdElderly" color="primary" /> } label="Imate li u kućanstvu osobu stariju od 65 godina?"/>
        <FormControlLabel className="fullWidth" control={ <Checkbox name="householdPregnatWomen" color="primary" /> } label="Imate li u kućanstvu trudnicu?" />
        <FormControlLabel className="fullWidth" control={ <Checkbox name="pregnatWoman" color="primary" /> } label="Jeste li vi trudnica?" />
        <FormControlLabel className="fullWidth" control={ <Checkbox name="householdChild" color="primary" /> } label="Imate li u kućanstvu malo dijete?" />
        <FormControlLabel className="fullWidth" control={ <Checkbox name="householdChronicPatient" color="primary" /> } label="Imate li u kućanstvu kroničnog bolesnika?" />
        <FormControlLabel className="fullWidth" control={ <Checkbox name="healthfine" color="primary" /> } label="Imate li sami zdravstvenih poteškoća?" />
      </fieldset>

      <fieldset className="fieldset">
        <legend>Dodatne informacije</legend>
        <div className="fieldset-info">Kako bi brže i učinkovitije rasporedili volontere na odgovarajuće volonterske pozicije i najbolje iskoristili resurse kojima raspolažemo, molimo da odgovorite na dodatnih nekoliko pitanja.</div>

        <FormControl className="fullWidth">
          <FormControlLabel control={ 
            <CreatableSelect inputId="qualifications" className="fullWidth" placeholder="Odaberi..." onChange={qualificationsOnChange} options={qualificationSelect} closeMenuOnSelect={false}
              isValidNewOption={search => !includes(search, qualificationSelect)} formatGroupLabel={formatGroupLabel} formatCreateLabel={option => `Dodaj: "${option}"`} noOptionsMessage={noOptionsMessage} isMulti
            />
            }
            label="Zanimanje/profesionalne kvalifikacije*:" className="textField" labelPlacement="top"
          />
        </FormControl>

        <FormControl className="fullWidth">
          <FormControlLabel control={ 
            <CreatableSelect inputId="experiences" className="fullWidth" placeholder="Odaberi..." onChange={experiencesOnChange} options={experienceSelect} closeMenuOnSelect={false}
              isValidNewOption={search => !includes(search, experienceSelect)} formatGroupLabel={formatGroupLabel} formatCreateLabel={option => `Dodaj: "${option}"`} noOptionsMessage={noOptionsMessage} isMulti
            />
            }
            label="Iskustva*:" className="textField" labelPlacement="top"
          />
          <FormHelperText className="helper-text">Navedite postojeća iskustva u odgovoru na kriznu situaciju ili pripadnost nekoj drugoj organizaciji</FormHelperText>
        </FormControl>

        <FormControl className="fullWidth">
          <FormControlLabel control={ 
            <CreatableSelect inputId="services" className="fullWidth" placeholder="Odaberi..." onChange={servicesOnChange} options={serviceSelect} closeMenuOnSelect={false}
              isValidNewOption={search => !includes(search, serviceSelect)} formatCreateLabel={option => `Dodaj: "${option}"`} noOptionsMessage={noOptionsMessage} isMulti
            />
            }
            label="Dodatne usluge*:" className="textField" labelPlacement="top"
          />
          <FormHelperText className="helper-text">Navedite ukoliko želite ponuditi dodatne usluge koje smatrate da mogu doprinijeti radu Crvenog križa (npr. usluge prijevoza, ustupanja vozila i sl.)</FormHelperText>
        </FormControl>

        <FormControl className="fullWidth">
          <FormControlLabel control={
            <CreatableSelect inputId="skills" className="fullWidth" placeholder="Odaberi..." onChange={skillsOnChange} options={skillSelect} closeMenuOnSelect={false}
              isValidNewOption={search => !includes(search, skillSelect)} formatGroupLabel={formatGroupLabel} formatCreateLabel={option => `Dodaj: "${option}"`} noOptionsMessage={noOptionsMessage} isMulti
            />
            }
            label="Dodatne vještine*:" className="textField" labelPlacement="top"
          />
        </FormControl>

        <FormControlLabel control={ 
          <TextField id="healthDetails" required={true} className="textField" variant="outlined" multiline
            helperText="U svrhu zaštite vašeg zdravlja molimo da navedete zdravstvene detalje (npr. alergije, kronične bolesti i sl.)"
          /> 
          }
          label="Zdravstveni detalji*:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ 
          <TextField id="availabilityHoursWeekly" required={true} className="textField" variant="outlined" type="number" />
          }
          label="Koliko ste sati tjedno spremni izdvojiti na volontiranje*:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={
            <TextField id="availabilityDetails" required={true} className="textField" variant="outlined" multiline
              helperText="Što preciznije navedite kada ste dostupni za volontiranje,  koje dane u tjednu i u kojem vremenskom razdoblju (npr. pon od 18-20h, uto od 11-14h)" /> 
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
      </div>
      </form>
    </div>

    </header>
  </div>
  );
}

export default Registration