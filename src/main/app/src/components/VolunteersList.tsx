import React, { useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';
import Switch from '@material-ui/core/Switch';
import CustomSelect from './CustomSelect';
import { request } from '../utils/requests';
import { format } from 'date-fns';

interface Row {
  firstName: string;
  lastName: string;
  dob: string;
  backgroundCheckNeeded: boolean;
  backgroundCheckPassed: any;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function VolunteersList() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Ime', field: 'firstName' },
      { title: 'Prezime', field: 'lastName' },
      { title: 'Datum rođenja', field: 'dob', type: 'date',
        render: rowData => format(new Date(rowData.dob), 'dd.MM.yyyy')
       },
      { title: 'HCK Društvo', field: 'placeOfVolunteering.name' },
      { title: 'Potrebna provjera', field: 'backgroundCheckNeeded', type: 'boolean',
        render: rowData => 
        <Switch
        checked={rowData.backgroundCheckNeeded}
        onChange={e => {
          console.log("rowData:", rowData); 
          setState((prevState) => {
            const data = [...prevState.data];
            rowData.backgroundCheckNeeded = !rowData.backgroundCheckNeeded;
            data[data.indexOf(rowData)] = rowData;
            return { ...prevState, data };
          });
        }}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
     },
      { title: 'Background check status', field: 'backgroundCheckPassed', type: 'boolean',
        render: rowData => {
          const s = rowData.backgroundCheckPassed == null ? "null" : rowData.backgroundCheckPassed.toString();
          console.log("s:", s, typeof s);
          console.log("rowData:", rowData, typeof rowData);
          return(
        <CustomSelect 
          status={rowData.backgroundCheckPassed == null ? "null" : rowData.backgroundCheckPassed.toString()}
          onChange={(status: any) => {
            //console.log("rowData:", rowData);
            //status = status === "null" ? null : status === "true";
            console.log("new status:", status, typeof status);
            setState((prevState) => {
              const data = [...prevState.data];
              rowData.backgroundCheckPassed = status;
              //console.log("rowData:", rowData);
              data[data.indexOf(rowData)] = rowData;
              return { ...prevState, data };
            });
            console.log("state:", state);
          }}
          >
        </CustomSelect>)
        }
     }
    ],
    data: [/*
      { firstName: 'Mehmet', lastName: 'Baran', dob: "1997", backgroundCheckNeeded: true, backgroundCheckPassed: false },
      { firstName: 'Mehmet', lastName: 'Baran', dob: "1997", backgroundCheckNeeded: true, backgroundCheckPassed: true },
      { firstName: 'Zerya Betül', lastName: 'Baran', dob: "2017", backgroundCheckNeeded: false, backgroundCheckPassed: null },*/
    ],
  });

  useEffect(() => {
    request('volunteers', (data: any) => {
      console.log("volunteers:", data);
      setState((prevState) => ({ ...prevState, data }));
    });
  }, []);
  
  return (
    <MaterialTable
      title="Hrvatski Crveni Križ - Sustav za upravljanje volonterima"
      columns={state.columns}
      data={state.data}
      options={{paging: false}}
      /*
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      */
    />
  );
}
