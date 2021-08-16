import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    width: '100%',
    background: '#f9f9f9'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPeper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  }
});

const Layout = ({ children }) => {
  let classes = useStyles()

  return (
    <div className={classes.root}>
      <Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{ paper: classes.drawerPaper }}>
        <div>
        <Typography variant='h5'>
          Account Information
        </Typography>
        </div>
      </Drawer>
      <div className={classes.page}>
        { children }
      </div>
    </div>
  );
}

export default Layout;
