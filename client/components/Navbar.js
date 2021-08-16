import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { logout } from '../store/auth';
import {connect} from 'react-redux';
import history from '../history';
import Avatar from '@material-ui/core/Avatar';

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
  },
  avatar: {
    marginLeft: 4,
  }
}));

function NavBar(props) {
  const classes = useStyles();

   return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar title = "header-logo" >
          <img src={'/Muse-logo.svg'} alt='logo' className={classes.logo + " logo"} onClick={() => history.push("/")}/>
          <Typography>

          </Typography>
          {!props.isLoggedIn &&
            <React.Fragment>
              <Button href="/signup" color="inherit" align="right" >
                Sign Up
              </Button>
              <Button href="/login" color="inherit" align="right" >
                Login
              </Button>
            </React.Fragment>
          }
            <Button href="/map" color="inherit" align="right" >
              Find A Museum
            </Button>
          {props.isLoggedIn &&
            <React.Fragment>
              <Button color="inherit" align="right" onClick={props.handleClick} >
                Logout
              </Button>
              <Avatar src='avatar.jpeg' align="right" onClick={() => history.push("/account")} className={classes.avatar} />
            </React.Fragment>
          }

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
