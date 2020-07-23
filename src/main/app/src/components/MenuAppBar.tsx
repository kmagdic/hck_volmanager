import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "./../contexts/AuthContext";

function ElevationScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function MenuAppBar(props: any) {
  const classes = useStyles();
  const { isAuth, user } = useContext(AuthContext);

  const [_, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const goToLogin = () => {
    handleClose();
    history.push("/login");
  };

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            {/* commenting hamburger menu
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            */}
            <Typography variant="subtitle1" className={classes.title}>
              {props.title}
            </Typography>
            {isAuth && (
              <div>
                <span>{user?.username}</span>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  ref={anchorRef}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem
                              style={{ display: "none" }}
                              onClick={handleClose}
                            >
                              Profil
                            </MenuItem>

                            <MenuItem onClick={goToLogin}>Odjava</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
