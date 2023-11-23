import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const NavBar = () => {

  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/signin");
  };
  return (
    <>
      <div className="nav-bar">
        
        {auth._id ? (
          <>
            <h5>Logged in as {auth.name}</h5>
            <Link to="/">Mina "tasks"</Link>
            <button onClick={() => handleSignOut()}>Logga ut</button>
          </>
        ) : (
          <>
            <button>
              <Link to="/signin">Logga in</Link>
            </button>
            <button>
              <Link to="/signup">Registrera</Link>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
