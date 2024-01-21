import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userActions";

function UsersList() {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div>
      <h2>Users List</h2>
      {state.loading ? (
        <p>Loading...</p>
      ) : state.error ? (
        <p>{state.error}</p>
      ) : (
        <div>
          {state.data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersList;
