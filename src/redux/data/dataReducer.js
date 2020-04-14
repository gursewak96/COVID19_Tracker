const initialState = {
  data: [],
  country: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload.data,
        country: action.payload.country,
      };
    default:
      return state;
  }
};

export default dataReducer;
