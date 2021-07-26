import React, { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import './App.css'
import { Question } from './components/Question.js'
import { QuestionDetails } from './components/QuestionDetails'
import { Sidebar } from './components/Sidebar'
import { Login } from './components/Login'
import { requestQuestions } from './api'

export function App () {
  const [expanded, setExpanded] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [data, setData] = useState([])
  const [token, setToken] = useLocalStorageState('token', '')

  function setAuthToken (token) {
    setToken(token)
  }

  useEffect(() => {

    if (token) {
        requestQuestions(token)
    // this promise will extract the data from
    // the api response
      .then(data => {
        setData(data)
      })
    }
      // re-render the component if the username
      // or token changes
  }, [token])

    if (token) { 
        return expanded
            ? <>
            <h1 className='title'>QuestionBox</h1>
            <main>
                <Sidebar />
                <QuestionDetails question={selectedQuestion} setExpanded={setExpanded} />
            </main>
            </>
            : (
            <>
                <h1 className='title'>QuestionBox</h1>
                <main>
                    <Sidebar />
                    <div className='questions'>
                        <h2>Top Questions</h2>
                        {data.map((question, idx) => {
                        return (
                            <Question question={question} setExpanded={setExpanded} setSelectedQuestion={setSelectedQuestion} />
                        )
                        })}
                    </div>
                </main>
            </>
        )
        } else {
            return (
                <Login setAuthToken={setAuthToken} />
            )
        }
}

export default App
