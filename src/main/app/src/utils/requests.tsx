const urlAPI = "/api/v1/";
//const urlAPI = "http://localhost:8080/api/v1/";
//const urlAPI = "https://hck-volmanager-dev.herokuapp.com/api/v1/";

const proxyurl = "";
//const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const request = (resource: string, fetching: any, method: string = "GET", body: any = null) => {
  fetch(proxyurl + urlAPI + resource)
    .then(response => response.json())
    .then(fetching)
    .catch(() => console.log("Can’t access " + proxyurl + urlAPI + resource + " response."));
}


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