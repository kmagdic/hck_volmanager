import React, { useState, useEffect } from "react";
import { Button, FormControl,  TextField, FormControlLabel, Checkbox, FormLabel, RadioGroup, Radio, MenuItem } from '@material-ui/core';
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
  const [groupedPlaces, setGroupedPlaces] = useState(emptyGroup);
  const [groupedSkills, setGroupedSkills] = useState(emptyGroup);
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

  const qualificationList: any = [];
  const customQualificationList: any = [];
  const experienceList: any = [];
  const customExperienceList: any = [];
  const serviceList: any = [];
  const customServiceList: any = [];
  const skillList: any = [];
  const customSkillList: any = [];
  var placeOfLiving: number | null;
  var placeOfVolunteering: number;

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log("fields:", event.target.elements);
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      dob: event.target.dob.value,
      oib: event.target.oib.value,
      gender: event.target.gender.value,
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
    request('volunteers', (data: any) => {
        console.log("response:", data);
      }, "POST", data);
    // history.push("/confirmation");
  }

  const getValues = (values: any[], list: any[], custom: any[]) => {
    list.length = 0;
    custom.length = 0;
    if (values) {
      values.forEach((value: any) => {
        if (value["__isNew__"]) {
          custom.push({ name: value.label});
        } else {
          list.push({ id: value.id });
        }
      });
    }
  };

  const qualificationsOnChange = (values: any, action: any) => {
    console.log("on change:", values);
    getValues(values, qualificationList, customQualificationList);
  }

  const experiencesOnChange = (values: any, action: any) => {
    //console.log("on change:", values);
    getValues(values, experienceList, customExperienceList);
  }

  const servicesOnChange = (values: any, action: any) => {
    //console.log("on change:", values);
    getValues(values, serviceList, customServiceList);
  }

  const skillsOnChange = (values: any, action: any) => {
    //console.log("on change:", values);
    getValues(values, skillList, customSkillList);
  }

  const placeOfLivingOnChange = (place: any, action: any) => {
    console.log("on change:", place, action);
    placeOfLiving = place ? place.value : null;;
  }

  const placeOfVolunteeringOnChange = (place: any, action: any) => {
    console.log("on change:", place, action);
    placeOfVolunteering = place ? place.value : null;
  }

  const noOptionsMessage = (search: any) => `nije nađeno "${search.inputValue}"`;

  const includes = (search: string, options: GroupedOption[]): boolean => {
    search = search.trim().toLocaleLowerCase();
    return !search.length || !!options.find(category => category.options.find((item: ListItem) => item.label.toLocaleLowerCase() === search));
  }

  return (
    <div className="App">
    <header className="App-header">

    <div className="ctnRegister">
      <form onSubmit={onSubmit} action="http://localhost:8080/api/v1/volunteers" target="_self" autoComplete="off">
      <fieldset className="fieldset">
        <legend>Osobni podaci volontera</legend>
        <FormControlLabel control={ <TextField id="firstName" className="textField" variant="outlined" /> }  label="Ime:" className="textField" labelPlacement="top" />
        <FormControlLabel control={ <TextField id="lastName" className="textField" variant="outlined" /> }  label="Prezime:" className="textField" labelPlacement="top" />
        <FormControlLabel id="dob" control={
          <Datetime viewMode="years" viewDate={new Date("1990-1-1")} dateFormat={"DD.MM.YYYY"} closeOnSelect={true} className="textField rdt-datepicker" renderInput={renderInput} timeFormat={false} locale="hr-HR" />
          }  label="Datum rođenja:" className="textField" labelPlacement="top"
        />
        <FormControlLabel control={ <TextField id="oib" inputProps={{ minlength: 11, maxlength: 11 }} className="textField" variant="outlined" />} label="OIB:" className="textField" labelPlacement="top" />
        <FormControlLabel control={
            <TextField id="gender" name="gender" className="textField" variant="outlined" select>
              {genders.map((option: any) => (
                <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
              ))}
            </TextField>
          } label="Spol:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ <TextField id="address" className="textField" variant="outlined" />} label="Adresa:" className="textField" labelPlacement="top" />
        
        <FormControlLabel id="placeOfLiving" name="placeOfLiving" control={ 
            <Select className="fullWidth" placeholder="Odaberi..." onChange={placeOfLivingOnChange} options={groupedPlaces} noOptionsMessage={noOptionsMessage}
            />
          }
          label="Mjesto prebivališta:" className="textField" labelPlacement="top"
        />

        <FormControlLabel id="placeOfLiving" name="placeOfLiving" control={ 
            <Select className="fullWidth" placeholder="Odaberi..." onChange={placeOfVolunteeringOnChange} options={groupedPlaces} noOptionsMessage={noOptionsMessage}
            />
          }
          label="Mjesto u kojem želite volontirati:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ <TextField id="phone" className="textField" variant="outlined" />} label="Broj telefona/mobitela:" className="textField" labelPlacement="top" />
        <FormControlLabel control={ <TextField id="email" className="textField" variant="outlined" type="email" />} label="Email adresa:" className="textField" labelPlacement="top" />
        <FormControlLabel
          control={
            <TextField id="iceName" className="textField" variant="outlined" 
              helperText="Molimo unesite ime i prezime osobe koje možemo kontaktirati u slučaju nužde, kao i broj telefona te osobe."
            />
          } label="Kontakt u slučaju nužde (član obitelji, prijatelj, sl.):" className="textField" labelPlacement="top"
        />
        <FormControlLabel control={ <TextField id="icePhone" className="textField" variant="outlined" /> } className="textField" label="Broj telefona kontakta u nuždi:" labelPlacement="top" />
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

        <FormControlLabel id="qualifications" name="qualifications" control={ <CreatableSelect className="fullWidth" placeholder="Odaberi..." onChange={qualificationsOnChange} options={qualifications} formatCreateLabel={option => `Dodaj: "${option}"`} isMulti /> }
          label="Zanimanje/profesionalne kvalifikacije:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ <CreatableSelect className="fullWidth" placeholder="Odaberi..." onChange={experiencesOnChange} options={experiences} isMulti /> }
          label="Iskustva:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ <CreatableSelect className="fullWidth" placeholder="Odaberi..." onChange={servicesOnChange} options={services} isMulti /> }
          label="Dodatne usluge:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={
            <CreatableSelect className="fullWidth" placeholder="Odaberi..." onChange={skillsOnChange} options={groupedSkills} 
              isValidNewOption={search => !includes(search, groupedSkills)} formatGroupLabel={formatGroupLabel} isMulti
            />
          }
          label="Dodatne vještine:" className="textField" labelPlacement="top"
        />

        <FormControlLabel control={ <TextField id="healthDetails" className="textField" variant="outlined" multiline /> } label="Zdravstveni detalji:" className="textField" labelPlacement="top" />
        <FormControlLabel control={ <TextField id="availabilityHoursWeekly" className="textField" variant="outlined" type="number" /> } label="Koliko ste sati tjedno izdvojiti na volontiranje:" className="textField" labelPlacement="top" />
        <FormControlLabel control={
            <TextField id="availabilityDetails" className="textField" variant="outlined" multiline
              helperText="Navedite kada ste dostupni za volontiranje (što preciznije - koji dani u tjednu i u kojem vremenskom razdoblju)"
            /> 
          } 
          label="Ostali detalji o vašoj raspoloživosti za volontiranje:" className="textField" labelPlacement="top"
      />
      </fieldset>

      <Law></Law>
      <FormLabel component="legend">
      </FormLabel>
      <RadioGroup aria-label="criminalRecord" name="criminalRecord">
        <div className="criminalRecord">
          <FormControlLabel value="true" control={<Radio color="primary" />} label="Da"/>
          <FormControlLabel value="false" control={<Radio color="primary" />} label="Ne"/>
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
  </div>
  );
}

export default Registration