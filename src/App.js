
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import NoAccess from './pages/NoAccess';
import PrivateRouter from './components/PrivateRouter';
import AdminRouter from './components/AdminRouter';
import ForceRedirect from './components/ForceRedirect';
import store from './redux/store'
import jwt_decode from 'jwt-decode'
import { Logout, setUser } from './redux/actions/authActions';
import { useSelector } from 'react-redux';
import { setAuth } from './util/setAuth';
import EditUser from "./pages/EditUser";
import ViewUser from "./pages/ViewUser";
import React, { useEffect, useState } from "react";
import { a, } from "./pages/Login";
import P from "./pages/P";
import M from "./pages/M";


if (window.localStorage.jwt) {
  const decode = jwt_decode(window.localStorage.jwt)
  store.dispatch(setUser(decode))
  setAuth(window.localStorage.jwt)
  const currentDate = Date.now / 1000

  if (decode.exp > currentDate) {
    store.dispatch(Logout())
  }
}



function App() {

  const user = {
    isConnected: "",
    role: ""
  }

  user.isConnected = localStorage.getItem("c")
  user.role = localStorage.getItem("a")
  console.log(user.role)
  console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")





  return (


    <div className="bg-light" style={{ height: "100vh" }}>

      <Router>

        <Navbar user={user} />


        <Routes>
          <Route exact path="/:id" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/p/:id" element={<P />} />
          <Route exact path="/m/:id/:ido" element={<M />} />
        </Routes>

      </Router>

    </div>

  );
}

export default App;
