import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from './components/Registration';
import PreRegistration from './components/PreRegistration';
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
        <Route exact path="/" component={PreRegistration} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={VolunteersList} />
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
