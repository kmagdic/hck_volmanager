import { genders } from "../utils/data"
import { deepField, dateTime } from "../utils/json-methods"
const _filefy = require("filefy");

const boolToString = (value: boolean, sTrue: string = 'da', sFalse: string = 'ne') => value ? sTrue : sFalse;

export const columnsForExportForCheck = [
  { title: 'Ime', field: 'firstName' },
  { title: 'Prezime', field: 'lastName' },
  { 
    field: 'years', title: 'Dob',
    render: (rowData: any) => Math.abs(new Date(new Date().valueOf() - new Date(rowData.dob).valueOf()).getUTCFullYear() - 1970)
  },
  { title: 'OIB', field: 'oib' },
];

export const columnsForExportAll = [
  { title: 'id', field: 'id' },
  { title: 'Ime', field: 'firstName' },
  { title: 'Prezime', field: 'lastName' },
  { 
    field: 'years', title: 'Dob',
    render: (rowData: any) => Math.abs(new Date(new Date().valueOf() - new Date(rowData.dob).valueOf()).getUTCFullYear() - 1970)
  },
  { title: 'OIB', field: 'oib' },
  { 
    title: 'Spol', field: 'gender',
    render: (rowData: any) => {
      const found = genders.find((gender: any) => gender.value === rowData.gender);
      return found ? found.label : '';
    }
  },
  { title: 'Adresa', field: 'addressOfLiving' },
  { title: 'Mjesto prebivališta', field: 'placeOfLiving.name' },
  { title: 'Poštanski broj', field: 'placeOfLiving.postCode' },
  { title: 'Županija prebivališta', field: 'placeOfLiving.county' },
  { title: 'Željeno mjesto volontiranja', field: 'placeOfVolunteering.name' },
  { title: 'Poštanski broj', field: 'placeOfVolunteering.postCode' },
  { title: 'Županija volontiranja', field: 'placeOfVolunteering.county' },
  { title: 'Broj telefona/mobitela', field: 'phone' },
  { title: 'Email adresa', field: 'email' },
  { title: 'ICE osoba', field: 'iceName' },
  { title: 'ICE telefon', field: 'icePhone' },

  { title: 'U kućanstvu starija osoba', field: 'householdElderly', render: (rowData: any) => boolToString(rowData.householdElderly) },
  { title: 'U kućanstvu trudnica', field: 'householdPregnantWomen', render: (rowData: any) => boolToString(rowData.householdPregnantWomen) },
  { title: 'Trudnica', field: 'pregnantWoman', render: (rowData: any) => boolToString(rowData.pregnantWoman) },
  { title: 'U kućanstvu malo dijete', field: 'householdChild', render: (rowData: any) => boolToString(rowData.householdChild) },
  { title: 'U kućanstvu kronični bolesnik', field: 'householdChronicPatient', render: (rowData: any) => boolToString(rowData.householdChronicPatient) },
  { title: 'Zdravstveni problemi', field: 'healthFine', render: (rowData: any) => boolToString(rowData.healthFine) },

  { 
    title: 'Zanimanja/profesionalne kvalifikacije', field: 'qualifications',
    render: (rowData: any) => rowData.qualifications.map((q: any) => q.name).join('\n')
  },
  { 
    title: 'Posebna zanimanja/profesionalne kvalifikacije', field: 'customQualifications',
    render: (rowData: any) => rowData.customQualifications.map((q: any) => q.name).join('\n')
  },
  { 
    title: 'Iskustva', field: 'experiences',
    render: (rowData: any) => rowData.experiences.map((q: any) => q.name).join('\n')
  },
  { 
    title: 'Posebna iskustva', field: 'customExperiences', 
    render: (rowData: any) => rowData.customExperiences.map((q: any) => q.name).join('\n')
  },
  { 
    title: 'Dodatne usluge', field: 'services', 
    render: (rowData: any) => rowData.services.map((q: any) => q.name).join('\n')
  },
  { 
    title: 'Posebne dodatne usluge', field: 'customServices', 
    render: (rowData: any) => rowData.customServices.map((q: any) => q.name).join('\n')
  },
  { 
    title: 'Dodatne vještine', field: 'skills', 
    render: (rowData: any) => rowData.qualifications.map((q: any) => q.name).join('\n')
  },
  { 
    title: 'Posebne dodatne vještine', field: 'customSkills', 
    render: (rowData: any) => rowData.customSkills.map((q: any) => q.name).join('\n')
  },

  { title: 'Zdravstveni detalji', field: 'healthDetails' },
  { title: 'Broj sati tjedno za volontiranje', field: 'availabilityHoursWeekly' },
  { title: 'Ostali detalji raspoloživosti za volontiranje', field: 'availabilityDetails' },
  { title: 'Posebna skupina', field: 'criminalRecord', render: (rowData: any) => boolToString(rowData.criminalRecord) },
  { 
    title: 'Datum unosa', field: 'dateTimeEntry',
    render: (rowData: any) => dateTime(new Date(rowData.dateTimeEntry))
  },
  { title: 'Potrebna provjera', field: 'backgroundCheckNeeded', render: (rowData: any) => boolToString(rowData.backgroundCheckNeeded) },
  { 
    title: 'Status provjere', field: 'backgroundCheckPassed', 
    render: (rowData: any) => rowData.backgroundCheckPassed === null ? "provjera nije poslana ili je u tijeku" : 
      boolToString(rowData.backgroundCheckPassed, 'provjera je prošla', 'provjera nije prošla')
  },
];

export const exportCsv = (allColumns: any, allData: any, filter: any, fileName: string) => {
  console.log('columns:', allColumns);
  console.log('data:', allData);
  const columns = allColumns.filter((columnDef: any) => columnDef["export"] !== false);

  const exportedData = allData
    .filter(filter)
    .map((rowData: any) => columns.map((columnDef: any) => 
      columnDef.render ? columnDef.render(rowData) : 
        columnDef.field === 'oib' ? `'${deepField(rowData, columnDef.field)}` : deepField(rowData, columnDef.field)));
    
  console.log('exported data:', exportedData);
  new _filefy.CsvBuilder(`${fileName}.csv`)
    .setDelimeter(';')
    .setColumns(columns.map((columnDef: any) => columnDef.title))
    .addRows(exportedData)
    .exportFile();
}

