import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { requestUserInfo } from '../api'
import { requestQuestions } from '../api'
import { requestAnswers } from '../api'
import { Sidebar } from './Sidebar'
import { Question } from './Question.js'
import { AnswerDetail } from './AnswerDetail'


export const Profile = (props) => {
    const {token, handleLogout} = props
    const [user, setUser] = useState(null)
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])


    useEffect(() => {
        requestUserInfo(token)
        .then(data => {
            setUser(data.data.id)
        })
        requestQuestions(token)
        .then(data => {
            setQuestions(data.data)
        })
        requestAnswers(token)
        .then(data => {
            setAnswers(data.data)
        })
    }, [])

    


    return (
        <>
        <h1 className='title'>QuestionBox<button className="logout" onClick={() => handleLogout(token)}>Logout</button></h1>
        <main>
            <Sidebar />
            <div className='questions'>
                <h2>Profile</h2>

                <h3>Asked Questions: </h3>
                {questions.map((question, idx) => {
                    if (question.user === user) {
                        return (
                            <Question question={question} />
                        )
                    }
                })}
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