import axios from 'axios';

//const SET_MUSEUMS = 'SET_MUSEUMS';
const GET_MUSEUMS = 'GET_MUSEUMS';

// const setMuseums = (museums) => ({
//   type: SET_MUSEUMS,
//   museums,
// });

const getMuseums = (museums) => ({
  type: GET_MUSEUMS,
  museums
});

// export const setMuseumsThunk = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get('/api/museums');
//       dispatch(setMuseums(data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

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
    // case SET_MUSEUMS:
    //   return action.museums;
    case GET_MUSEUMS:
      return action.museums;
    default:
      return state;
  }
}
