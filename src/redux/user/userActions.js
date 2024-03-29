import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userType";
// type user

export function fetchUser() {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data }))
      .catch((err) =>
        dispatch({ type: FETCH_USERS_FAILURE, payload: err.message })
      );
  };
}

// useEffect with dispaytch