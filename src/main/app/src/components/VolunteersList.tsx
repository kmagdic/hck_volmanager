import React, { useEffect, useContext } from 'react';
import MaterialTable, { Column } from 'material-table';
import Switch from '@material-ui/core/Switch';
import CustomSelect from './CustomSelect';
import { request } from '../utils/requests';
import { format } from 'date-fns';
import MenuAppBar from './MenuAppBar';
import { AuthContext } from "./../contexts/AuthContext";
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import { asDateTime } from './../utils/json-methods';
import { exportCsv, columnsForExportForCheck, columnsForExportAll } from './../utils/export-data';

interface Row {
  id: number,
  firstName: string,
  lastName: string,
  dob: string,
  backgroundCheckNeeded: boolean,
  backgroundCheckPassed: any,
}

interface Place {
  [key: number]: string;
}

interface TableState {
  columns: Array<Column<Row>>,
  data: Row[],
  isLoading: boolean
}
//const ColumnDefs =
export default function VolunteersList() {
  const cellStyle = {
    padding: '0 14px',
  };
  const { user } = useContext(AuthContext);
  const getForRenderFullName = (rowData: any)  => rowData.firstName + ' ' + rowData.lastName;
  const getForRenderDob = (rowData: any) => format(new Date(rowData.dob), 'dd.MM.yyyy');
  const tableTitle = (count: number) => `Ukupno ${count} volonter` + (((count % 100 === 11) || (count % 10) !== 1) ? 'a' : '');
  const [dataLoaded, setDataLoaded] = React.useState(0);
  const [title, setTitle] = React.useState(tableTitle(0));
  const [places, setPlaces] = React.useState<Place>({});
  const [placesOfLiving, setPlacesOfLiving] = React.useState<Place>({});

  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'ID', field: 'id', searchable: true,
          ...{ width: 60 }, // width of column - https://github.com/mbrn/material-table/issues/291
          cellStyle: { color: '#cacaca'},
          defaultSort: 'asc'
      },
      { title: 'Ime i prezime', cellStyle, searchable: true, customFilterAndSearch: (filter: any, rowData: any, columnDef: any): boolean => {
          const s = getForRenderFullName(rowData).toLocaleLowerCase();
          return s.indexOf(filter.toLocaleLowerCase()) >= 0;
        },
        render: getForRenderFullName
      },
      { title: 'Datum rođenja', field: 'dob', type: 'date', cellStyle, searchable: true, customFilterAndSearch: (filter: any, rowData: any, columnDef: any): boolean => {
          const s = getForRenderDob(rowData);
          return s.indexOf(filter.toLocaleLowerCase()) >= 0;
        },          
        render: getForRenderDob
      },
      { title: 'OIB', field: 'oib', cellStyle, searchable: true },
      { title: 'HCK Društvo',
        field: 'placeOfVolunteering.id', hidden: !user?.admin, cellStyle,
        searchable: !user?.admin,
        lookup: placesOfLiving,
      },
      { title: 'Potrebna provjera', field: 'backgroundCheckNeeded', type: 'boolean', cellStyle, searchable: false,
        render: (rowData: any) =>
        <Switch
          disabled={!user?.changeCheck}
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
      { title: 'Status provjere', field: 'backgroundCheckPassed', type: 'boolean', cellStyle, searchable: false,
        render: (rowData: any) => {
          return(
            <CustomSelect 
              disabled={!user?.changeStatus}
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
                // console.log("state:", state);
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

  const refreshFilters = () => {
    console.log(1);
    console.log(state.data);
    if (!state.data.length)
      return;
    console.log(2);
    if (!Object.keys(places).length)
      return;
    console.log(3);
    console.log("places:", places);
    const placesOfLiving: any = {};
    state.data.filter((v: any) => v.placeOfLiving && v.placeOfLiving.id).forEach( (v: any) => placesOfLiving[v.placeOfLiving.id] = places[v.placeOfLiving.id] );

    console.log("New placesOfLiving: ", placesOfLiving);
    setPlacesOfLiving(placesOfLiving);
    setState(prevState => {
      const oldState = { ...prevState };
      oldState.columns[4].lookup = placesOfLiving;
      return { ...prevState, oldState};
    });
  };

  useEffect(refreshFilters, [dataLoaded]);

  useEffect(() => {
    request('volunteers', (response: any) => {
      response.json().then((data: any) => {
        console.log("volunteers:", data);
        setState((prevState) => ({ ...prevState, data, isLoading: false }));
        //setTitleWithCount();
        setDataLoaded(1);
      })
      .catch((error: any) => {
        console.log("error:", error);
      });
    });

    request('places', (response: any) => {
      console.log("places:", response);
      response.json().then((data: any) => {
        //places = [{id:"name"}]
        console.log("Places JSON: ", data);
        const newPlaces: any = {};
          data.forEach((city: any) => {
            newPlaces[city.id] = city.name;
          });
        console.log("New places: ", newPlaces);
        setPlaces(newPlaces);
        setDataLoaded(2);
      })
      .catch((error: any) => {
        console.log("error:", error);
      });
    })
  }, []);

  const dataAll = () => true;
  const dataForCheck = (rowData: any) => rowData.backgroundCheckNeeded && (rowData.backgroundCheckPassed === null);

  const tableRef: any = React.useRef();

  const setTitleWithCount = () => {
    if (tableRef && tableRef.current) {
      const count= tableRef.current.dataManager.searchedData.length;
      setTitle(tableTitle(count));
    }
  }

  return (
    <>
      <MenuAppBar title={"HCK - Pregled volontera za " + (user?.admin ? "administratora" : ("HCK društvo '" + user?.hckSocietyName + "'")) }></MenuAppBar>
      <div style={{height: "4rem"}}></div>
      <MaterialTable
        title={title}
        columns={state.columns}
        data={state.data}
        isLoading={state.isLoading}
        tableRef={tableRef}
        onSearchChange={setTitleWithCount}
        onFilterChange={setTitleWithCount}
        options={
          {
            paging: false,
            tableLayout: 'fixed',
            headerStyle: { position: 'sticky', top: 0, backgroundColor: '#ECECEC', fontWeight: 'bold' },
            maxBodyHeight: 'calc(100vh - 128px)',
            filtering: true,
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
        actions={[
          {
            icon: () => <PlayForWorkIcon />,
            tooltip: 'Izvoz podataka za provjeru',
            isFreeAction: true,
            hidden: !user?.exportForCheck,
            onClick: () => exportCsv(columnsForExportForCheck, tableRef.current.dataManager.sortedData, dataForCheck, 'Volonteri za provjeru ' + asDateTime(new Date()))
          },
          {
            icon: () => <SystemUpdateAltIcon />,
            tooltip: 'Izvoz svih podataka',
            isFreeAction: true,
            hidden: !user?.exportAll,
            onClick: () => exportCsv(columnsForExportAll, tableRef.current.dataManager.sortedData, dataAll, 'Svi volonteri ' + asDateTime(new Date()))
          }
        ]}

        detailPanel={[
          {
              tooltip: 'Show Name',
              render: rowData => {
                 console.log(rowData);
                 return (
                     <div
                       style={{
                         fontSize: 100,
                         textAlign: 'center',
                         color: 'white',
                         backgroundColor: '#43A047',
                       }}
                     >
                       {rowData.id}
                     </div>
                   )
               }
          }
          ]}
        //onRowClick={(event, rowData, togglePanel) => togglePanel()}

      />
    </>
  );
}
