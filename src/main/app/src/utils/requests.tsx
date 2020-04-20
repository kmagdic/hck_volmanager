const urlAPI = "/api/v1/";
//const urlAPI = "http://localhost:8080/api/v1/";
//const urlAPI = "https://hck-volmanager-dev.herokuapp.com/api/v1/";

const proxyurl = "";
//const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const request = (resource: string, fetching: any, method: string = "GET", body: any = null) => {
  fetch(proxyurl + urlAPI + resource, 
    { 
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body? JSON.stringify(body) : undefined
    } )
    .then(response => response.json())
    .then(fetching)
    .catch(() => console.log("Can’t access " + proxyurl + urlAPI + resource + " response."));
}

/*
fetch(url, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: JSON.stringify(data) // body data type must match "Content-Type" header
});
*/

/*
function performSignIn(username: string, password: string) {
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Authorization', 'Basic ' + btoa(username + ":" +  password));
  headers.append('Origin','http://localhost:3000');

  fetch(url, {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: headers
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log('Authorization failed : ' + error.message));
}
*/