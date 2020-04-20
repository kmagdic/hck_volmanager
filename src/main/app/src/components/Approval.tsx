import React from "react";
import { Button, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import { Link } from 'react-router-dom'
import logo from '../assets/volonteri.jpg';

function Approval() {
  return (
    <div className="App">
    <header className="App-header">

    <div className="ctnApproval">
    <div className="approval">

      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Obrazac za prijavu volontera</h1>
        <p>Poštovani,</p>
        <p>
        hvala Vam što ste iskazali želju i volju za volontiranjem u Hrvatskom Crvenom križu i društvima Crvenog križa diljem Hrvatske. 
        Ukoliko ste u mogućnosti, molimo Vas da se za volontiranje prijavite direktno društvima Crvenog križa na čijem području se nalazite i želite volontirati. Kontakt podaci svih društava Crvenog križa u Hrvatskoj nalaze se na poveznici 
        </p>
        <a href="https://www.hck.hr/novosti/ovo-su-kontakti-drustava-crvenoga-kriza-za-ljude-u-potrebi/10282">
          https://www.hck.hr/novosti/ovo-su-kontakti-drustava-crvenoga-kriza-za-ljude-u-potrebi/10282
        </a>

        <p>
        Ovo je centralna evidencija spontanih volontera Hrvatskog Crvenog križa, iz koje ćemo podatke o potencijalnim volonterima prosljeđivati društvima Crvenog križa koji organiziraju aktivnosti sukladno potrebama lokalnog stanovništva na čijem području djeluju. 
        Nakon što ostavite svoje podatke, molimo Vas sačekajte poziv naših kolega iz društava Crvenog križa, koji će Vas pozvati ukoliko će im zatrebati Vaša pomoć. 
        </p>

        <p>
        Hvala!
        </p>
        <p>
        Hrvatski Crveni križ
        </p>
      </div>
      <div className="statement">
        <p>
        Podnošenjem ovog obrasca dajete suglasnost za prikupljanje i obradu Vaših osobnih podataka u svrhu organizacije i provedbe volonterskih aktivnosti društava Hrvatskog Crvenog križa u skladu s Općom uredbom o zaštiti podataka (Uredba EU 2016/679) i Zakonom o provedbi Opće uredbe o zaštiti podataka (NN 42/2018). Podaci su nužni radi organizacije i provedbe volonterskih aktivnosti društva Crvenog križa.
        </p>
        <p>
        Podaci mogu biti dijeljeni s Hrvatskim Crvenim križem, drugim društvima Crvenog križa te s tijelima javne vlasti u slučaju zaprimanja zahtjeva sukladno zakonskim propisima.
        </p>
        <p>
        Prijava i podaci iz nje će se čuvati do roka predviđenog u članku 10., stavku 2. Zakona o financijskom poslovanju i računovodstvu neprofitnih organizacija, odnosno 11 godina.
Voditelj obrade Vaših osobnih podataka je društvo Crvenog križa koje će Vas kontaktirati radi uključivanja u volonterski rad. Ukoliko i kada zaprimimo Vaš zahtjev za pristup, ispravak ili brisanje osobnih podataka, opoziv privole, zahtjev za ograničenjem obrade vaših osobnih podataka, odnosno bilo koji sličan prigovor, odmah ćemo postupiti prema Vašem zahtjevu te Vas o istom izvijestiti. Navedena prava možete ostvariti slanjem pisanog zahtjeva na e-mail društva Crvenog križa koje će Vas uključiti u volonterski rad.        
        </p>
      </div>
      <div>
        <RadioGroup aria-label="approval" name="approval">
          <div className="approval-radiobuttons">
            <FormControlLabel value="true" control={<Radio required color="primary" />} label="dajem suglasnost"/>
            <FormControlLabel value="false" control={<Radio required color="primary" />} label="ne dajem suglasnost"/>
          </div>
        </RadioGroup>
      </div>
      <div className="buttons">
        <div className="btnContainer">
          <Link to="/registration">     
            <Button className="btn" variant="contained" color="primary">Dalje</Button>
          </Link>
          <Link to="/confirmation">     
            <Button className="btn" variant="contained" color="primary">Dalje</Button>
          </Link>
        </div>
        <div className="btnContainer">
          <Link to="/login">
            <Button className="btn" variant="contained" color="primary">Login</Button>
          </Link>
        </div>
      </div>
    </div>
    </div>

</header>
</div>
  )
}

export default Approval
