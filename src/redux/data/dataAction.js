import { fetchDataCall } from "../../api/index";

export const fetchData = (country = null) => {
  return async (dispatch, getState) => {
    //make aync call to the database
    let data = await fetchDataCall(country);
    dispatch({
      type: "FETCH_DATA",
      payload: { data, country },
    });
  };
};
