import React, { useState, useEffect } from "react";
import { Button, FormControl,  TextField, FormControlLabel, Checkbox, FormLabel, RadioGroup, Radio, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom'
import logo from '../assets/volonteri.jpg';

function PreRegistration() {
  return (
    <div className="preregistration">

      <img src={logo} className="App-logo" alt="logo" />

      <h3>Obrazac za prijavu volontera</h3>
      <div>
        Poštovani,

        hvala Vam što ste iskazali želju i volju za volontiranjem u Hrvatskom Crvenom križu i društvima Crvenog križa diljem Hrvatske. 
        Ukoliko ste u mogućnosti, molimo Vas da se za volontiranje prijavite direktno društvima Crvenog križa na čijem području se nalazite i želite volontirati. Kontakt podaci svih društava Crvenog križa u Hrvatskoj nalaze se na poveznici 
        <a href="https://www.hck.hr/novosti/ovo-su-kontakti-drustava-crvenoga-kriza-za-ljude-u-potrebi/10282">
          https://www.hck.hr/novosti/ovo-su-kontakti-drustava-crvenoga-kriza-za-ljude-u-potrebi/10282
        </a>

        Ovo je centralna evidencija spontanih volontera Hrvatskog Crvenog križa, iz koje ćemo podatke o potencijalnim volonterima prosljeđivati društvima Crvenog križa koji organiziraju aktivnosti sukladno potrebama lokalnog stanovništva na čijem području djeluju. 
        Nakon što ostavite svoje podatke, molimo Vas sačekajte poziv naših kolega iz društava Crvenog križa, koji će Vas pozvati ukoliko će im zatrebati Vaša pomoć. 

        Hvala!
        Hrvatski Crveni križ
      </div>
      <div>
      Podnošenjem ovog obrasca dajete suglasnost za prikupljanje i obradu Vaših osobnih podataka u svrhu organizacije i provedbe volonterskih aktivnosti društava Hrvatskog Crvenog križa u skladu s Općom uredbom o zaštiti podataka (Uredba EU 2016/679) i Zakonom o provedbi Opće uredbe o zaštiti podataka (NN 42/2018).
Podaci su nužni radi organizacije i provedbe volonterskih aktivnosti društva Crvenog križa. Podaci mogu biti dijeljeni s Hrvatskim Crvenim križem, drugim društvima Crvenog križa te s tijelima javne vlasti u slučaju zaprimanja zahtjeva sukladno zakonskim propisima.
Prijava i podaci iz nje će se čuvati do roka predviđenog u članku 10., stavku 2. Zakona o financijskom poslovanju i računovodstvu neprofitnih organizacija, odnosno 11 godina.
Voditelj obrade Vaših osobnih podataka je društvo Crvenog križa koje će Vas kontaktirati radi uključivanja u volonterski rad. Ukoliko i kada zaprimimo Vaš zahtjev za pristup, ispravak ili brisanje osobnih podataka, opoziv privole, zahtjev za ograničenjem obrade vaših osobnih podataka, odnosno bilo koji sličan prigovor, odmah ćemo postupiti prema Vašem zahtjevu te Vas o istom izvijestiti. Navedena prava možete ostvariti slanjem pisanog zahtjeva na e-mail društva Crvenog križa koje će Vas uključiti u volonterski rad.        
      </div>
      <div>
        <RadioGroup aria-label="approval" name="approval">
          <div className="criminalRecord">
            <FormControlLabel value="true" control={<Radio color="primary" />} label="Dajem suglasnost"/>
            <FormControlLabel value="false" control={<Radio color="primary" />} label="Ne dajem suglasnost"/>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Link to="/registration">Dalje</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default PreRegistration