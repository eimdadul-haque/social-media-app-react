import React from 'react'
import "./Log_In.css";

export default function Log_In() {
  return (
    <div className='logout-page-container'>
      <div className='login-card border shadow'>
        <div className='form-group mt-2'>
          <input placeholder='username' className='form-control' />
        </div>
        <div className='form-group mt-2'>
          <input placeholder='password' className='form-control' />
        </div>
        <div className='form-group mt-2'>
          <input placeholder='LOGIN' type='submit' style={{ backgroundColor: "#00DF74" }} className='form-control' />
        </div>
        <hr />
        <div className='form-group mt-1 mb-2'>
          <input value={"SIGN UP"} type='submit' style={{ backgroundColor: "#00BB9D" }} className='form-control' />
        </div>
      </div>
    </div>
  )
}
