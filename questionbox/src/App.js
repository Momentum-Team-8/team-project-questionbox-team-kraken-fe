import React, { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import './App.css'
import { Question } from './components/Question.js'
import { QuestionDetails } from './components/QuestionDetails'
import { Sidebar } from './components/Sidebar'
import { Login } from './components/Login'
import { QuestionList } from './components/QuestionList'
import { NewQuestion } from './components/NewQuestion'
import { requestQuestions } from './api'
import { requestLogout } from './api'

export function App () {
  const [expanded, setExpanded] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [data, setData] = useState([])
  const [token, setToken] = useLocalStorageState('token', '')
  const [asking, setAsking] = useState(false)

  function setAuthToken (token) {
    setToken(token)
  }

  useEffect(() => {
    if (token) {
        requestQuestions(token)
        .then(data => {
            setData(data.data)
        })
    }
  }, [token])

  const handleLogout = (token) => {
    requestLogout(token)
    setToken('')
  }


    if (asking) {
        return (
            <>
            <h1 className='title'>QuestionBox</h1>
            <main>
                <Sidebar />
                <NewQuestion />
            </main>
            </>
        )
    }

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
                <QuestionList handleLogout={handleLogout} setAsking={setAsking} data={data} token={token} setExpanded={setExpanded} setSelectedQuestion={setSelectedQuestion}/>
        )
        } else {
            return (
                <Login setAuthToken={setAuthToken} />
            )
        }
}

export default App
