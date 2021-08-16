import React from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Reviews from './Reviews';
import { Container } from '@material-ui/core';
import { fetchReviewsThunk } from '../store/reviews';

class AccountPage extends React.Component {

  async componentDidMount() {
    await this.props.getReviews(this.props.userId);
  }

  render() {
    const reviews = this.props.reviews;
    if (!reviews) {
      return "Loading"
    };

    return (
      <Container className="account-wrapper">
        <Avatar src='avatar.jpeg' align="center" href="/account" />
        <Grid container spacing={3}>
          {reviews.map((review) => (
            <Grid item key={review.id} xs={12} md={6} lg={4} >
              <Reviews review={review}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    reviews: state.reviews,
    userId: state.auth.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getReviews: (userId) => dispatch(fetchReviewsThunk(userId)),
  }
}

export default connect(mapState, mapDispatch)(AccountPage);
