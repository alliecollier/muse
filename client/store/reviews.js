import axios from 'axios';

const GET_REVIEWS = 'GET_REVIEWS';

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews
});

export const fetchReviewsThunk = (userId) => {
  return async (dispatch) => {
    try {
      console.log(userId)
      const { data } = await axios.get(`/api/reviews/${userId}`);
      dispatch(getReviews(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}
