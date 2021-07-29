import React, { useEffect, useState } from 'react'
import { Answers } from './Answers'
import { Sidebar } from './Sidebar'
import { AnswerDetail } from './AnswerDetail'
import { getAnswers } from '../api'

export const QuestionDetails = (props) => {
  const { question, setExpanded, token } = props
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    getAnswers(token)
    .then(data => {
        setAnswers(data.data)
      })
  })

  return (
    <>
      <h1 className='title'>QuestionBox</h1>
      <main>
        <Sidebar />
        <div className='question-details'>

          <h1>{question.title}</h1>
          <p className='text'>{question.question}</p>
          <p>User: {question.user}</p>
          <p>Favorited by: {question.favorited_by}</p>
          <p>{question.created_at}</p>
          <p>Tags: '{question.tag}'</p>
          <h3>Given Answers</h3>
          {answers.map((answer, idx) => {
            if (question.id === answer.question) {
              return (
                <AnswerDetail answer={answer} />
              )
            }
          })}
          <Answers token={token} question={question} />
        </div>
      </main>
    </>
  )
}
