import React, { useState } from 'react'
import "./Log_In.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_LINK } from '../../api/API_LINK';

const value = {
  userName: "",
  password: ""
}
export default function Log_In() {

  const navigate = useNavigate()
  const [info, setinfo] = useState(value)
  const signup = () => {
    navigate("/signup");
  }

  const handleInput = (event) => {
    const { value, name } = event.target;
    setinfo({
      ...info,
      [name]: value
    })
  }

  const login = (info) => {
    axios.post(API_LINK.LOGIN, {
      ...info
    })
      .then(res => {
        localStorage.setItem("token", "Bearer " + res.data.token);
        localStorage.setItem("tokenR", res.data.token);
        localStorage.setItem("userName", res.data.userName);
        navigate("/");
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='logout-page-container'>
      <div className='login-card border shadow'>
        <div className='form-group mt-2'>
          <input type="email" name='userName' onChange={(e) => handleInput(e)} placeholder='username' className='form-control' />
        </div>
        <div className='form-group mt-2'>
          <input name='password' placeholder='password' onChange={(e) => handleInput(e)} type="password" className='form-control' />
        </div>
        <div className='form-group mt-2'>
          <button onClick={() => login(info)} style={{ backgroundColor: "#00DF74" }} className='form-control' > Log In</button>
        </div>
        <hr />
        <div className='form-group mt-1 mb-2'>
          <button onClick={() => signup(info)} style={{ backgroundColor: "#00BB9D" }} className='form-control' >SIGN UP</button>
        </div>
      </div>
    </div>
  )
}
