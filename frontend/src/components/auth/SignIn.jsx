import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signIn } from "../../store/actions/authActions";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
    setCreds({
      email: "",
      password: "",
    });
  };

  if(auth._id) return <Navigate to='/'/>

  return (
    <>
      <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <h5>Logga in</h5>
        <input
          id="enter-email"
          type="text"
          placeholder="E-mail"
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <input
          id="enter-password"
          type="password"
          placeholder="Lösenord"
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <button>Logga in</button>
      </form>
    </>
  );
};

export default SignIn;
