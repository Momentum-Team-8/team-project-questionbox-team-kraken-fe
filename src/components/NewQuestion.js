import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Sidebar } from './Sidebar'
export const NewQuestion = (props) => {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const history = useHistory()
  const { token, handleLogout } = props

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event, token) => {
    alert('Your question has been submitted!')
    axios
      .post(
        'https://team-kraken-questionbox.herokuapp.com/questions/create/',
        {
          title: title,
          question: text
        },
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      .then((response) => {
        console.log(response)
      })
    event.preventDefault()
    setText('')
    setTitle('')
  }
  return (
    <>
      <h1 className='title'>QuestionBox<button className='logout' onClick={() => handleLogout(token)}>Logout</button></h1>
      <main>
        <Sidebar />
        <form
          className='new-question-form'
          onSubmit={(event) => handleSubmit(event, token)}
        >
          <h3>Ask a question...</h3>
          <div className='question-title'>
            <label for='title'>Title</label>
            <textarea
              id='title'
              value={title}
              onChange={handleTitle}
            />
          </div>
          <div className='question-text'>
            <label for='body'>Body</label>
            <textarea
              placeholder='remember, be nice...'
              id='body'
              value={text}
              onChange={handleChange}
            />
          </div>
          <div>
            <input className='submit' type='submit' value='Submit' />
          </div>
        </form>
      </main>
    </>
  )
}
