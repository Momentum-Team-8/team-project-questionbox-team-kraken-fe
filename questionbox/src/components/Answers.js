import React, { useState } from 'react'

export const Answers = () => {
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <form>
        <h3>Answer this question</h3>
        <div>
          <textarea
            value={text}
            onChange={handleChange}
          />
        </div>
        <div>
          <h2 />
          <p>{text}</p>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </>
  )
}
