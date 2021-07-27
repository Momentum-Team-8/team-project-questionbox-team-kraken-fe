import React, { useState } from 'react'
import { Answers } from './Answers'

export const QuestionDetails = (props) => {
  const { question, setExpanded } = props

  return (
    <div className='question-details'>
      <h1>{question.question}</h1>
      <p className='text'>{question.text}</p>
      <p>User: {question.user}</p>
      <p>Favorited by: {question.favorited_by}</p>
      <p>{question.created_at}</p>
      <p>Tags: {question.tag}</p>
      <Answers />
    </div>
  )
}
