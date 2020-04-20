import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from './components/Registration';
import Approval from './components/Approval';
import Confirmation from './components/Confirmation';
import Login from './components/Login';
import logo from './logo.svg';
import './App.css';
import HckMaterialTable from './HckMaterialTable';
import VolunteersList from './components/VolunteersList';

/*
        <Registration />

        <HckMaterialTable />
        <VolunteersList />
*/

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Approval} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/list" component={VolunteersList} />
      </Switch>
    )
  }
  /*
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <PreRegistration />
      </header>
    </div>
    )
  };
  */
}

export default App;
