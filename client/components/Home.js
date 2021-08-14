import React from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import RotatingArt from './RotatingArt'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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

const Home = props => {
  const classes = useStyles();

  const {firstName} = props

  return (
    <div className="home-wrapper">
      <div>
        <Typography variant="h2" color="primary" align="center" gutterBottom>
          Welcome, {firstName ?? 'Art Lover'}!
        </Typography>
      </div>
      <div className="rotating-art-container">
        <RotatingArt />
      </div>
      <div>
        <Button variant="contained" color="primary" href="/signin" >
          Sign In
        </Button>
        <Button variant="contained" color="primary" href="/signup" >
          Sign Up
        </Button>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    firstName: state.auth.firstName
  }
}

export default connect(mapState)(Home)
