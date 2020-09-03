import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'


class HckMaterialTable extends React.Component {
  render() {
    return (
      <MaterialTable
        title="Volonteri"
        columns={[
          { title: 'Ime', field: 'firstName', searchable: true },
          { title: 'Prezime', field: 'lastName', searchable: true },
          { title: 'Datum rođenja', field: 'dob' },
          { title: 'HCK Društvo', field: 'placeOfVolunteering.hckSociety.name' },
          { title: 'Potrebna provjera', field: 'backgroundCheckNeeded' },
          { title: 'Status provjere', field: 'backgroundCheckPassed' },
        ]}
        options={{
                  selection: true,
                  selectionProps: rowData => ({
                    disabled: rowData.name === 'Mehmet',
                    color: 'primary'
                  }),
                  search: true,
                  exportButton: true

                }}

         data={query =>
          new Promise((resolve, reject) => {
            //let url = 'https://reqres.in/api/users?'
            console.log(query);
            let url = '/api/v1/volunteers'
            //url += 'per_page=' + query.pageSize
            //url += '&page=' + (query.page + 1)
            fetch(url)
              .then(response => {
                    console.log("response:", response);
                    return response.json();
                }
              )
              .then(result => {
                    console.log(result);
                    resolve({
                          data: result,
                          //page: 1,
                          //totalCount: result.length,
                    })
              })
          })

          }

          detailPanel={rowData => {
                  return (
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/C0DPdy98e4c"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  )
                }}
          //onRowClick={(event, rowData, togglePanel) => togglePanel()}



      />
    )
  }
}

export default HckMaterialTable;