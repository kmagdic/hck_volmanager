import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import PanoramaWideAngleIcon from '@material-ui/icons/PanoramaWideAngle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& div.label': {
      display: 'none',
      width: '0px',
      maxWidth: '0px'
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  'label-not-sent': {
    display: 'block',
    color: 'grey',
  },
  'label-not-passed': {
    display: 'block',
    color: '#E10050'
  },
  'label-passed': {
    display: 'block',
    color: '#46C243'
  }
}));

export default function CustomSelect(props: any) {
  console.log("CustomSelect props:", props);
  const classes = useStyles();
  const [status, setStatus] = React.useState(props.status);
  const handleChange = (event: any) => {
    setStatus(event.target.value);
    props.onChange(event.target.value);
  };
  return (
    <form className={classes.root} autoComplete="off">     
      <FormControl className={classes.margin}>
        <Select
          value={status}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={"null"}>
            <ListItemIcon>
              <PanoramaWideAngleIcon className={classes["label-not-sent"]} />
              <div className={'label'}>provjera nije poslana ili je u tijeku</div>
            </ListItemIcon>
          </MenuItem>
          <MenuItem value={"false"}>
            <ListItemIcon>
              <ThumbDownIcon className={classes["label-not-passed"]} />
              <div className={'label'}>provjera nije prošla</div>
            </ListItemIcon>
          </MenuItem>
          <MenuItem value={"true"}>
            <ListItemIcon>
              <ThumbUpIcon className={classes["label-passed"]} />
              <div className={"label"}>provjera je prošla</div>
            </ListItemIcon>
          </MenuItem>
        </Select>
      </FormControl>      
    </form>
  );
}
