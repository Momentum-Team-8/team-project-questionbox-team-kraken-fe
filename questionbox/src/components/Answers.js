import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const Answers = () => {
  const [body, setBody] = useState('')
  const history = useHistory()

  const handleChange = (event) => {
    setBody(event.target.value)
  }

  const handleSubmit = (event) => {
    alert('Your question has been submitted!')
    axios
      .post(
        'https://team-kraken-questionbox.herokuapp.com/answers/create',
        {
          body: body
        },
        {
          headers: {
            Authorization: 'Token a482d6ba3fe9a578cefe59803a3f8c3031cdb36d',
            'Content-Type': 'application/x-ww-form-urlencoded'
          }
        }
      )
      .then((response) => {
        console.log(response)
        history.push('/home')
      })
    event.preventDefault()
    setBody('')
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <p>Submit your answer below: </p>
      <textarea class='textarea' placeholder='remember...be nice' />
      <p>{body}</p>
      <button type='submit' value='Submit'>
        Submit
      </button>
    </form>
  )
}
