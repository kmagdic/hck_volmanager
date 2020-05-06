import React, { useState } from "react";
import { Container, CssBaseline, Typography, TextField, FormControlLabel, Button, makeStyles, Checkbox, InputAdornment, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import { request } from "../utils/requests"

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

interface LoginMessage {
  show: boolean,
  type?: 'error' | 'warning',
  message?: string
};

function Login() {
  const classes = useStyles();

  const adminEmail = "admin";
  const adminPassword = "admin-hck2020";

  const [email, setEmail] = useState(adminEmail);
  const [password, setPassword] = useState(adminPassword);
  const [showPassword, setShowPassword] = useState(false);
  const [showMessage, setShowMessage] = useState<LoginMessage>({ show: false });

  const history = useHistory();

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validateForm = (event: any) => {
    event.preventDefault();

    /*const data = {
      username: event.target.username.value,
      password: event.target.lastName.value,
      admin: event.target.dob.value,
      enabled: event.target.oib.value,
      gender,
      address: event.target.address.value,
      placeOfLiving,
      placeOfVolunteering,
    }*/

    request('auth?username=' + email + '&password=' + password , (response: any) => {
        console.log("Auth response:", response);
        response.json().then((user:any) => {
          console.log("User: ", user)
        })
    }, "POST");

    if((email === adminEmail) && (password === adminPassword)) {
      history.push("/list");
      return true;
    }
    else {
      setShowMessage({ show: true, type: 'error', message: 'pogrešno korisničko ime ili lozinka' });
      return false;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">Prijava djelatnika HCK društava</Typography>
        <form className={classes.form} noValidate onSubmit={validateForm}>
          <Typography variant="h6" gutterBottom color="error">
            <div className="login-message">
              { showMessage.show ? (showMessage.type === 'warning' ? <WarningIcon /> : <ErrorIcon />) : null }
              <div className="login-message-text">{showMessage.message}</div>
            </div>
          </Typography>
          <FormControlLabel control={
              <TextField id="email" required value={email} onChange={changeEmail} fullWidth margin="normal" className="textField" variant="outlined" autoFocus
              />
            }
            label="Korisničko ime:" className="textField" labelPlacement="top"
          />
          <FormControlLabel control={
              <TextField id="password" required value={password} onChange={changePassword} fullWidth className="textField" variant="outlined" type={showPassword ? 'text' : 'password' }
                InputProps={{
                  endAdornment: 
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                }}
              />
            }
            label="Lozinka:" className="textField" labelPlacement="top"
          />

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