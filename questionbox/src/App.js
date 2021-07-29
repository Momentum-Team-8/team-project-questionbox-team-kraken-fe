import React, { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import './App.css'
import { Question } from './components/Question.js'
import { QuestionDetails } from './components/QuestionDetails'
import { Sidebar } from './components/Sidebar'
import { Login } from './components/Login'
import { QuestionList } from './components/QuestionList'
import { NewQuestion } from './components/NewQuestion'
import { requestQuestions, requestLogout } from './api'
import { Profile } from './components/Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export function App () {
  const [expanded, setExpanded] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [data, setData] = useState([])
  const [token, setToken] = useLocalStorageState('token', '')
  const [asking, setAsking] = useState(false)
  const [profile, setProfile] = useState(false)

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
      <Router>
        <Switch>
          <Route path='/NewQuestion'>
            <NewQuestion />
          </Route>
        </Switch>
      </Router>
    )
  }

  if (token) {
    return expanded
      ? <Router>
        <QuestionDetails question={selectedQuestion} setExpanded={setExpanded} token={token} />
      </Router>
      : (
        <Router>
          <Switch>
            <Route path='/Profile'>
              <Profile token={token} handleLogout={handleLogout} />
            </Route>
            <Route path='/'>
              <QuestionList handleLogout={handleLogout} setAsking={setAsking} data={data} token={token} setExpanded={setExpanded} setSelectedQuestion={setSelectedQuestion} />
            </Route>
          </Switch>
        </Router>
        )
  } else {
    return (
      <Login setAuthToken={setAuthToken} />
    )
  }
}

export default App
