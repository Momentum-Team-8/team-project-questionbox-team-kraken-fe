import React, { useState } from 'react'
import { requestRegistration } from '../api.js'
import { useHistory } from 'react-router-dom'

export const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    function handleSubmit (event) {
        event.preventDefault()
        requestRegistration(username, email, password)
        setUsername('')
        setEmail('')
        setPassword('')
    }

    return (
        <>
        <h1 className='title'>QuestionBox</h1>
        <div className="login-form">
            <h2>Create an Account</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className="username">
                    <label className='label'>Username</label>
                    <input
                        className='input'
                        type='text'
                        placeholder='janedoge123'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="username">
                    <label className='label'>Email</label>
                    <input
                        className='input'
                        type='text'
                        placeholder="janedoge@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                <label className='label'>Password</label>
                <input
                    className='input'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button
                className='login-button'
                type='submit'
                >Register
                </button>
            </form>
        </div>
        </>
    )
}