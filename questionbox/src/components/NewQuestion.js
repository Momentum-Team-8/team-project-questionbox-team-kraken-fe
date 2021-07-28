import React, { useState } from 'react'
import { Sidebar } from './Sidebar'

export const NewQuestion = () => {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleTitle = (event) => {
    setTitle(event.target.value)
  }
  return (
    <>
    <h1 className='title'>QuestionBox</h1>
    <main>
    <Sidebar />
      <form className='new-question-form'>
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
