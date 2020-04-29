import React, { useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';
import Switch from '@material-ui/core/Switch';
import CustomSelect from './CustomSelect';
import { request } from '../utils/requests';
import { format } from 'date-fns';
import MenuAppBar from './MenuAppBar';

interface Row {
  id: number,
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
  const cellStyle = {
    padding: '0 14px',
  };
  const getForRenderFullName = (rowData: any)  => rowData.firstName + ' ' + rowData.lastName;

  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'ID', field: 'id', cellStyle, defaultSort: 'asc' },
      { title: 'Ime i prezime', export: false, cellStyle, searchable: true, customFilterAndSearch: (filter: any, rowData: any, columnDef: any): boolean => {
          const s = getForRenderFullName(rowData).toLocaleLowerCase();
          return s.indexOf(filter.toLocaleLowerCase()) >= 0;
        },
        //render: rowData => rowData.firstName + ' ' + rowData.lastName
        render: getForRenderFullName
      },
      { title: 'Datum rođenja', field: 'dob', type: 'date', cellStyle,
        render: rowData => format(new Date(rowData.dob), 'dd.MM.yyyy')
       },
      { title: 'HCK Društvo', field: 'placeOfVolunteering.name', cellStyle },
      { title: 'Potrebna provjera', field: 'backgroundCheckNeeded', type: 'boolean', export: false, cellStyle,
        render: rowData => 
        <Switch
        checked={rowData.backgroundCheckNeeded}
        onChange={e => {
          //console.log("rowData:", rowData); 
          setState((prevState) => {
            const data = [...prevState.data];
            rowData.backgroundCheckNeeded = !rowData.backgroundCheckNeeded;
            request('volunteers/' + rowData.id, (response: any) => {
              //console.log("response:", response);
            }, "PUT", rowData);
            //console.log("rowData:", rowData);
            data[data.indexOf(rowData)] = rowData;
            return { ...prevState, data };
          });
        }}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
     },
      { title: 'Background check status', field: 'backgroundCheckPassed', type: 'boolean', export: false, cellStyle,
        render: rowData => {
          const s = rowData.backgroundCheckPassed == null ? "null" : rowData.backgroundCheckPassed.toString();
          // console.log("s:", s, typeof s);
          // console.log("rowData:", rowData, typeof rowData);
          return(
        <CustomSelect 
          status={rowData.backgroundCheckPassed == null ? "null" : rowData.backgroundCheckPassed.toString()}
          onChange={(status: any) => {
            // console.log("onChange bgStatus rowData:", rowData);
            setState((prevState) => {
              const data = [...prevState.data];
              rowData.backgroundCheckPassed = status;
              //console.log("rowData:", rowData);
              request('volunteers/' + rowData.id, (response: any) => {
                // console.log("response:", response);
              }, "PUT", rowData);
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
    data: [],
  });

  useEffect(() => {
    request('volunteers', (data: any) => {
      console.log("volunteers:", data);
      setState((prevState) => ({ ...prevState, data }));
    });
  }, []);
  
  return (
    <>
    <MenuAppBar title="HCK - pregled volontera"></MenuAppBar>
    <div style={{height: "4rem"}}></div>
    <MaterialTable
      title=''
      columns={state.columns}
      data={state.data}
      options={
        {
          paging: false,
          //columnsButton: true,
          exportAllData: false,
          exportButton: true,
          exportDelimiter: ';',
          exportFileName: 'Volonteri',
          /*
          fixedColumns: {
            right: 2
          },*/
          headerStyle: { position: 'sticky', top: 0 },
          maxBodyHeight: 500,
        }
      }
      localization={{
        toolbar: {
          exportTitle: 'izvoz podataka',
          exportAriaLabel: 'Izvoz podataka u CSV',
          exportName: 'Izvoz podataka u CSV',
          searchPlaceholder: 'Pretraživanje...',
          searchTooltip: 'Pretraživanje volontera'
        },
        body: {
          emptyDataSourceMessage: 'Nema podataka',
      },
    }}
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
    </>
  );
}
