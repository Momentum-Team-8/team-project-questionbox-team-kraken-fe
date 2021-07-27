import React, { useState } from 'react'

import { requestLogin } from '../api.js'

export const Login = ({ setAuthToken }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
  
    function handleSubmit (e) {
      e.preventDefault()
      // here I am making a fake api call to
      // authenticate my user
      requestLogin(username, password)
        .then((data) => {
          if (data && data.data.auth_token) {
            setAuthToken(data.data.auth_token)
          }
        })
        .catch((error) => {
          setErrors(error.message)
        })
    }
  
    return (
      <>
        {errors &&
          <p>{errors}</p>}
        <form className='form' onSubmit={handleSubmit}>
          <label className='label'>Username</label>
          <input
            className='input'
            type='text'
            placeholder='email@domain.com or janedoge123'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className='label'>Password</label>
          <input
            className='input'
            type='password'
            // using state to pass a value to this attribute
            // makes this a controlled component
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div id='form-buttons'>
            <button
              className=''
              type='submit'
            >Login
            </button>
            <span>New to QuestionBox? &nbsp; <a className=''>Register Now</a></span>
          </div>
        </form>
      </>
    )
  }
  
  export default Login