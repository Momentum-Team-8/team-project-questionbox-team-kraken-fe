import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { requestUserInfo } from '../api'
import { requestQuestions } from '../api'
import { requestAnswers } from '../api'
import { deleteQuestion } from '../api'
import { Sidebar } from './Sidebar'
import { Question } from './Question.js'
import { AnswerDetail } from './AnswerDetail'

export const Profile = (props) => {
    const { token, handleLogout, setExpanded, setSelectedQuestion} = props
    const [user, setUser] = useState(null)
    const [username, setUsername] = useState('')
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])


    useEffect(() => {
        requestUserInfo(token)
        .then(data => {
            setUser(data.data.id)
            setUsername(data.data.username)
        })
        requestQuestions(token)
        .then(data => {
            setQuestions(data.data)
        })
        requestAnswers(token)
        .then(data => {
            setAnswers(data.data)
        })
    })

    const d = (token, id) => {
        deleteQuestion(token, id)
    }


    return (
        <>
        <h1 className='title'>QuestionBox<button className="logout" onClick={() => handleLogout(token)}>Logout</button></h1>
        <main>
            <Sidebar />
            <div className='profile'>
                <h2>Profile<h3>{username}</h3></h2>
                

                <div className="asked-questions">
                    <h3>Asked Questions: </h3>
                    {questions.map((question, idx) => {
                        if (question.user === user) {
                            return (
                                <div className="user-question">
                                    <Question question={question} setExpanded={setExpanded} setSelectedQuestion={setSelectedQuestion} />
                                    <button className="delete-button" onClick={() => d(token, question.id)}>Delete</button>
                                </div>
                            )
                        }
                    })}
                </div>
                <h3>Given Answers</h3>
                {answers.map((answer, idx) => {
                    if (answer.user === user) {
                        return (
                            <AnswerDetail answer={answer} />
                        )
                    }
                })}
            </div>
        </main>

    </>
  )
}
