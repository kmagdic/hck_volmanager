import React from 'react';
import Registration from './components/Registration';
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
    <div className="App">
      <header className="App-header">
        <Registration />
      </header>
    </div>
    )
  };
}

export default App;
