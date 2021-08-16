import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    color: 'secondary'
  }
});

const LeaveReview = () => {
  const classes = useStyles()

  return (
    <Container>
      <Typography
        className={classes.header}
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a Review:
      </Typography>

      <form noValidate autoComplete="off">
        <TextField
          className={classes.field}
          label='Museum Name'
          variant='outlined'
          color='primary'
          fullWidth
          required
        />
        <TextField
          className={classes.field}
          label='Museum Rating 1-5'
          variant='outlined'
          color='primary'
          fullWidth
          required
        />
        <TextField
          className={classes.field}
          label='details'
          variant='outlined'
          color='primary'
          multiline
          rows={5}
          fullWidth
          required
        />
      </form>

      <Button
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}
        href="/"
      >
        Submit
      </Button>
    </Container>
  );
}

export default LeaveReview;

