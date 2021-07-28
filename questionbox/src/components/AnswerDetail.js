import React, { useState } from 'react'
import { Answers } from './Answers'
import {Sidebar} from './Sidebar'

export const AnswerDetail = (props) => {
    const { answer } = props
  
    return (
        <>
        <div className='question-card'>
        <h4>{answer.answer}</h4>
        <p>{answer.user}</p>
        <p>{answer.created_at}</p>
      </div>
      </>
    )
  }