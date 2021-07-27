import React, { useState } from 'react'
import { Register } from './Register'

import { requestLogin } from '../api.js'

export const Login = ({ setAuthToken }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false)
    const [errors, setErrors] = useState('')
  
    function handleSubmit (e) {
      e.preventDefault()
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
  

    if (register) {
        return (
            <Register />
        )
    }
    return (
      <>
        {errors &&
          <p>{errors}</p>}
        <h1 className='title'>QuestionBox</h1>
        <main>
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
                <span>New to QuestionBox? &nbsp; <button onClick={() => setRegister(true)}>Register Now!</button></span>
            </div>
            </form>
        </main>
      </>
    )
  }
  
  export default Login