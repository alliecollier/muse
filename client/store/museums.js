import axios from 'axios';

const GET_MUSEUMS = 'GET_MUSEUMS';

const getMuseums = (museums) => ({
  type: GET_MUSEUMS,
  museums
});

export const fetchMuseumsThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/museums`);
      dispatch(getMuseums(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default function museumsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSEUMS:
      return action.museums;
    default:
      return state;
  }
}
