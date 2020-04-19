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
