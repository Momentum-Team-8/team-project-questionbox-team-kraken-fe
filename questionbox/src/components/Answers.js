import React, { useState } from 'react'

export const Answers = () => {
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
      <form className='answer-form'>
        <h3>Your Answer</h3>
        <div className='question-text'>
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
