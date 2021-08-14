import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { shadows } from '@material-ui/system';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 160,
  }
}));

function NavBar() {
  const classes = useStyles();

   return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}

          <img src={'/Muse-logo.svg'} alt='logo' className={classes.logo + " logo"} />

          <Typography variant="h6" className={classes.title} href="/">

          </Typography>

            <Button href="/signup" color="inherit" >
              Sign Up
            </Button>
            <Button href="/login" color="inherit">
              Login
            </Button>
            {/* if user is logged in */}
            <Button href="/map" color="inherit">
              Find A Museum
            </Button>
            <Button href="/login" color="inherit">
              Account
            </Button>
            <Button href="/logout" color="inherit">
              Logout
            </Button>

        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavBar);
