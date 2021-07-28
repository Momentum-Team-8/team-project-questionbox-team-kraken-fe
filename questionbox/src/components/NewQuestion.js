import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export const NewQuestion = () => {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const history = useHistory()

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    alert('Your question has been submitted!')
    axios
      .post(
        'https://team-kraken-questionbox.herokuapp.com/questions/create/',
        {
          question: title,
          text: text
        },
        {
          headers: {
            Authorization: 'Token b54d8237813117adcf8aadc88ef79b0252557812',
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
      <form
        className='new-question-form'
        onSubmit={(event) => handleSubmit(event)}
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
    </>
  )
}
