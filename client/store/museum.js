import axios from "axios";

const GET_MUSEUM = "GET_MUSEUM";

const getMuseum = (museum) => ({
  type: GET_MUSEUM,
  museum,
});

export const fetchMuseumThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/museums/${id}`);
      dispatch(getMuseum(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export default function museumReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSEUM:
      return action.museum;
    default:
      return state;
  }
}
