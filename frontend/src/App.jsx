import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/Signin";
import SignUp from "./components/auth/SignUp.jsx";
import NavBar from "./components/navBar/NavBar";
import { loadUser } from "./store/actions/authActions.js";

import './App.css'

function App() {
const dispatch = useDispatch()

useEffect(() => {
dispatch(loadUser())
}, [dispatch])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Todos />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
