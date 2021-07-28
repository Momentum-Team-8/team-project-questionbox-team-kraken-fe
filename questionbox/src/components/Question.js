import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Question = (props) => {
  const { question, setExpanded, setSelectedQuestion } = props

  const seeDetails = (question) => {
    setExpanded(true)
    setSelectedQuestion(question)
  }

  return (
    <div className='question-card'>
      <h2 onClick={() => seeDetails(question)}>{question.title}</h2>
      <p>{question.user}</p>
      <p>{question.created_at}</p>
    </div>
  )
}
