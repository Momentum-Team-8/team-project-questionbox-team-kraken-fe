import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

export const Answers = (props) => {
  const [answer, setAnswer] = useState('')
  const history = useHistory()
  const { id } = useParams()
  const { token, question } = props

  const handleChange = (event) => {
    setAnswer(event.target.value)
  }

  const handleSubmit = (event) => {
    alert('Your answer has been submitted!')
    axios
      .post(
        'https://team-kraken-questionbox.herokuapp.com/answers/create/',
        {
          answer: answer,
          question: question.id
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
    setAnswer('')
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <p>Submit your answer below: </p>
      <textarea
        class='textarea' placeholder='remember...be nice' value={answer}
        onChange={(event) => setAnswer(event.target.value)}
      />
      <button type='submit' value='Submit'>
        Submit
      </button>
    </form>
  )
}
