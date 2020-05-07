import React from "react";
import { Route, Switch } from "react-router-dom";
import Registration from "./components/Registration";
import Approval from "./components/Approval";
import Confirmation from "./components/Confirmation";
import Login from "./components/Login";
import "./App.css";
import VolunteersList from "./components/VolunteersList";
import { AuthProvider } from "./contexts/AuthContext";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Approval} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Login} />
        <Route exact path="/list" component={VolunteersList} />
      </Switch>
    )
  }
}

export default App;
