import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Inputs from '../components/Inputs'
import { Registration } from '../redux/actions/authActions'
import axios from "axios";


function Register() {
  let navigate = useNavigate();

  const [form, setForm] = useState({})
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    e: "",
  });



  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if (form.password == form.confirm && form.name != "" && form.email != '') {
      user.name = form.name;
      user.email = form.email;
      user.password = form.password
      user.e = "u"

      await axios.post("http://localhost:8070/user", user);
      navigate("/Login");
    }
    if (form.password != form.confirm) {
      alert('Password incorect')

    }
    if (form.name == "") {
      alert('Remplir le champ Obligatoire')

    }
    if (form.email == '') {
      alert('Remplir le champ Obligatoire')


    }

  }

  return (


    <div className="container p-4 mt-4">
      <div className="row justify-content-evenly mt-4">

        <div className="col-lg-6 col-md-12 mt-4">
          <div className="d-flex">
            <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i> <h2>Register</h2>
          </div>
          <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
            <form onSubmit={onSubmit}>
              <Inputs name="name" label="Name" type="text" icon="fa-solid fa-user" onChangeHandler={onChangeHandler} />
              <Inputs name="email" label="Email" type="text" icon="fa-solid fa-at" onChangeHandler={onChangeHandler} />
              <Inputs name="password" label="Password" type="password" icon="fa-solid fa-key" onChangeHandler={onChangeHandler} />
              <Inputs name="confirm" label="Confirm password" type="password" icon="fa-solid fa-key" onChangeHandler={onChangeHandler} />
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-primary">Save <i className="fa-solid fa-floppy-disk"></i></button>
                <Link to="/login">I have account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register