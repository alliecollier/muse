import React from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import RotatingArt from './RotatingArt'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'


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
    <div className="home-wrapper" >
      <div className="left-home">
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          <Box fontWeight="fontWeightBold" m={1}>
            Find some inspiration!
          </Box>
        </Typography>
        <div className="rotating-art-container">
          <RotatingArt />
        </div>
      </div>
      <div className="right-home" >
        <Typography variant="h5" color="primary" align="center" gutterBottom>
          <Box fontWeight="fontWeightBold" m={3}>
            About MUSE:
          </Box>
        </Typography>
        <Box fontWeight="fontWeightRegular" m={3} color="inherit" fontSize={18} align="center" >
          Welcome to MUSE, youre one stop shop for finding museums in your prefered location.
          <br/>
          Find museums near you, see what current exhibts they have, and leave a review.
          <br/>

        </Box>
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
