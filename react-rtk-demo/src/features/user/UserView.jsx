import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2> List of Users: </h2>
      {user.loading ? <div>Loading...</div> : null}
      {!user.loading && user.error ? <div> Error: {user.error} </div> : null}
      {!user.loading && user.users.length ? (
        <ul style={{ listStyle: "none" }}>
          {user.users.map((user) => (
            <li key={user.id}>
              <img src={user.url} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
