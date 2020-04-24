import React, { useState, useEffect } from "react";
import { Container, CssBaseline, Typography, TextField, FormControlLabel, Button, makeStyles, Checkbox } from "@material-ui/core";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    //marginTop: theme.spacing(1),
    marginTop: '3rem',
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("test123");

  const history = useHistory();

  const validateForm = () => {
    if(email === "admin" && password === "test123") {
      history.push("/list");
      return true;
    }
    else
      return false;

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">Prijava djelatnika HCK društava</Typography>
        <form className={classes.form} noValidate onSubmit={validateForm}>
          <FormControlLabel control={ <TextField id="email" required value={email} onChange={setEmail} fullWidth margin="normal" className="textField" variant="outlined" autoFocus /> } label="Korisničko ime:" className="textField" labelPlacement="top" />
          <FormControlLabel control={ <TextField id="password" required value={password} onChange={setPassword} fullWidth className="textField" variant="outlined" type="password" /> } label="Lozinka:" className="textField" labelPlacement="top" />

          <FormControlLabel
            className="no-select"
            control={<Checkbox value="remember" color="primary" />}
            label="Zapamti prijavu"
          />
          <Button type="submit" className={classes.submit} fullWidth variant="contained" color="primary">Prijava</Button>

        </form>
      </div>
    </Container>
  );
}

export default Login