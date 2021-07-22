import React, { useState } from 'react'
import { Answers } from './Answers'

export const QuestionDetails = (props) => {
  const { question, setExpanded } = props

  return (
    <div className='question-details'>
      <h1>{question.title}</h1>
      <p className="text">{question.text}</p>
      <p>{question.username}</p>
      <p>{question.created_at}</p>
      <Answers />
    </div>
  )
}
