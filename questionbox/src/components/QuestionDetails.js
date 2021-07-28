import React, { useState } from 'react'
import { Answers } from './Answers'
import {Sidebar} from './Sidebar'

export const QuestionDetails = (props) => {
  const { question, setExpanded } = props

  return (
    <>
    <h1 className='title'>QuestionBox</h1>
    <main>
        <Sidebar />
        <div className='question-details'>
        <h1>{question.question}</h1>
        <p className='text'>{question.text}</p>
        <p>User: {question.user}</p>
        <p>Favorited by: {question.favorited_by}</p>
        <p>{question.created_at}</p>
        <p>Tags: '{question.tag}'</p>
        {/* question.answers && question.answers.map */}
        <Answers />
        </div>
    </main>
    </>
  )
}
