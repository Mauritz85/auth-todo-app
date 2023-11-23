import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  if(auth._id) return <Navigate to='/'/>
  
  return (
    <>
      <form action="" noValidate autoComplete="off" onSubmit={ handleSubmit }>
        <h5>Registrering</h5>

        <input
          id="enter-name"
          type="text"
          placeholder="Namn"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          id="enter-email"
          type="text"
          placeholder="E-mail"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          id="enter-password"
          type="password"
          placeholder="Lösenord"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>Registrera</button>
      </form>
    </>
  );
};

export default SignUp;
