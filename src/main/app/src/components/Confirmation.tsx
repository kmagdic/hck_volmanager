import React from "react";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import logo from '../assets/volonteri.jpg';

function Confirmation() {
  return (
    <div className="App">
    <header className="App-header">

    <div className="ctnConfirmation">
    <div className="approval">

      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Obrazac za prijavu volontera</h2>
      </div>
      <div className="statement">
      <p>
        Hvala!
        </p>
        <p>
        Hrvatski Crveni križ
        </p>
      </div>
      <div className="buttons">
        <div className="btnContainer">
          <Link to="/">     
            <Button className="btn" variant="contained" color="primary">Pošalji drugi odgovor</Button>
          </Link>
        </div>
      </div>
    </div>
    </div>

</header>
</div>
  )
}

export default Confirmation
