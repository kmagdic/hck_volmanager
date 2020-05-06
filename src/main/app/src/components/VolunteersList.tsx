import React, { useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';
import Switch from '@material-ui/core/Switch';
import CustomSelect from './CustomSelect';
import { request } from '../utils/requests';
import { format } from 'date-fns';
import MenuAppBar from './MenuAppBar';
const _filefy = require("filefy");

interface Row {
  id: number,
  firstName: string;
  lastName: string;
  dob: string;
  backgroundCheckNeeded: boolean;
  backgroundCheckPassed: any;
}

interface TableState {
  columns: Array<Column<Row>>,
  data: Row[],
  isLoading: boolean
}

export default function VolunteersList() {
  const cellStyle = {
    padding: '0 14px',
  };
  const getForRenderFullName = (rowData: any)  => rowData.firstName + ' ' + rowData.lastName;
  const getForRenderDob = (rowData: any) => format(new Date(rowData.dob), 'dd.MM.yyyy');
  const tableTitle = (count: number) => `Ukupno ${count} volonter` + (((count % 100 === 11) || (count % 10) !== 1) ? 'a' : '');
  const [title, setTitle] = React.useState(tableTitle(0));
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'ID', field: 'id', searchable: true,
          ...{ width: 60 }, // width of column - https://github.com/mbrn/material-table/issues/291
          cellStyle: { color: '#cacaca'},
          defaultSort: 'asc'
      },
      { title: 'Ime i prezime', export: true, cellStyle, searchable: true, customFilterAndSearch: (filter: any, rowData: any, columnDef: any): boolean => {
          const s = getForRenderFullName(rowData).toLocaleLowerCase();
          return s.indexOf(filter.toLocaleLowerCase()) >= 0;
        },
        render: getForRenderFullName
      },
      { title: 'Datum rođenja', field: 'dob', type: 'date', export: false, cellStyle, searchable: true, customFilterAndSearch: (filter: any, rowData: any, columnDef: any): boolean => {
          const s = getForRenderDob(rowData);
          return s.indexOf(filter.toLocaleLowerCase()) >= 0;
        },          
        render: getForRenderDob
      },
      { title: 'OIB', field: 'oib', cellStyle, export: true, hidden: true, searchable: true },
      { title: 'HCK Društvo', field: 'placeOfVolunteering.name', export: false, cellStyle, searchable: false },
      { title: 'Potrebna provjera', field: 'backgroundCheckNeeded', type: 'boolean', export: false, cellStyle, searchable: false,
        render: (rowData: any) =>
        <Switch
          checked={rowData.backgroundCheckNeeded}
          onChange={e => {
            //console.log("rowData:", rowData);
            setState((prevState: TableState) => {
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
      { title: 'Background check status', field: 'backgroundCheckPassed', type: 'boolean', export: false, cellStyle, searchable: false,
        render: (rowData: any) => {
          return(
            <CustomSelect 
              status={rowData.backgroundCheckPassed == null ? "null" : rowData.backgroundCheckPassed.toString()}
              onChange={(status: any) => {
                // console.log("onChange bgStatus rowData:", rowData);
                setState((prevState: TableState) => {
                  const data = [...prevState.data];
                  rowData.backgroundCheckPassed = (status === "null") ? null : status;
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
            </CustomSelect>
          )
        }
     }
    ],
    data: [],
    isLoading: true
  });

  useEffect(() => {
    request('volunteers', (response: any) => {
      //console.log("volunteers:", data);
      response.json().then((data: any) => {
        setState((prevState) => ({ ...prevState, data, isLoading: false }));
        const count= tableRef.current.dataManager.searchedData.length;
        setTitle(tableTitle(count));
      });
    })
  }, []);
  
  const exportCsv = (allColumns: any, allData: any) => {
    console.log('columns:', allColumns);
    console.log('data:', allData);
    const additionalColumns = [
      { 
        field: 'years', title: 'Dob',
        render: (rowData: any) => {
          const now = new Date();
          const dob = new Date(rowData.dob);
          const diff = now.valueOf() - dob.valueOf();
          //return new Date(diff).getFullYear() - 1970;
          return Math.abs(new Date(new Date().valueOf() - new Date(rowData.dob).valueOf()).getUTCFullYear() - 1970);
          //return Math.abs(diff.getUTCFullYear() - 1970);
        }
      }
    ];
    const columns = allColumns.filter((columnDef: any) => columnDef["export"] !== false)
      .concat(additionalColumns);
    const exportedData = allData
      .filter((rowData: any) => rowData.backgroundCheckNeeded && (rowData.backgroundCheckPassed === null))
      .map((rowData: any) => columns.map((columnDef: any) => columnDef.render ? columnDef.render(rowData) : columnDef.field === 'oib' ? `'${rowData[columnDef.field]}` : rowData[columnDef.field]));

    console.log('exported data:', exportedData);
    new _filefy.CsvBuilder("Volonteri.csv")
      .setDelimeter(';')
      .setColumns(columns.map((columnDef: any) => columnDef.title))
      .addRows(exportedData)
      .exportFile();
  }

  const tableRef: any = React.useRef();

  return (
    <>
      <MenuAppBar title="HCK - pregled volontera"></MenuAppBar>
      <div style={{height: "4rem"}}></div>
      <MaterialTable
        title={title}
        columns={state.columns}
        data={state.data}
        isLoading={state.isLoading}
        tableRef={tableRef}
        onSearchChange={() => {
          if (tableRef && tableRef.current) {
            const count= tableRef.current.dataManager.searchedData.length;
            setTitle(tableTitle(count));
          }
        }}
        options={
          {
            paging: false,
            exportAllData: true,
            exportButton: true,
            exportDelimiter: ';',
            exportFileName: 'Volonteri',
            tableLayout: 'fixed',

            exportCsv,
            headerStyle: { position: 'sticky', top: 0, backgroundColor: '#ECECEC', fontWeight: 'bold' },
            maxBodyHeight: 'calc(100vh - 128px)',
          }
        }
        localization={{
          toolbar: {
            exportTitle: 'Izvoz podataka za provjeru',
            exportAriaLabel: 'Izvoz podataka za provjeru u CSV',
            exportName: 'Izvoz podataka za provjeru u CSV',
            searchPlaceholder: 'Pretraživanje...',
            searchTooltip: 'Pretraživanje volontera'
          },
          body: {
            emptyDataSourceMessage: '',
          },
        }}
      />
    </>
  );
}
