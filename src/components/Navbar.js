
import { useDispatch } from "react-redux";

import { Logout } from "../redux/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Navbar({ user }) {
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const LogoutHanlder = () => {

    localStorage.setItem("c", "")
    localStorage.removeItem("a")
    localStorage.setItem("a", "AD")
    console.log(localStorage.getItem("a"))





    navigate("/login")
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          MERN Profile
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {user.role === "ADMIN" ? (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin">
                  Admin
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div className="d-flex">
            <div className="mx-4">
              {
                !user.isConnected ? (
                  <>
                    <Link className="btn btn-outline-primary" to="/login">
                      Login
                    </Link>
                    <Link className="btn btn-outline-primary" to="/register">
                      Register
                    </Link>
                  </>
                ) : (
                  <Link className="btn btn-danger" to="/login" onClick={LogoutHanlder}>
                    Logout
                  </Link>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
