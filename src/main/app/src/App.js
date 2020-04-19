import React from 'react';
import logo from './logo.svg';
import './App.css';
import HckMaterialTable from './HckMaterialTable.js'
import VolunteersList from './components/VolunteersList'

function App() {
  return (
    <div className="App">
        <HckMaterialTable />
        <VolunteersList />
    </div>
  );
}

export default App;
