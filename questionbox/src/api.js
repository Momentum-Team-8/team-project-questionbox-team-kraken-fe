import axios from 'axios'


export function requestLogin (username, password) {
  return axios.post('https://team-kraken-questionbox.herokuapp.com/auth/token/login', {
    username: username,
    password: password
  })
}

export function requestLogout(token) {
    return axios.post('https://team-kraken-questionbox.herokuapp.com/auth/token/logout/', 
    {},
        {
            headers: { 
                Authorization: `Token ${token}`, 
                "Content-Type": "application/json"
            }
        })
    .then((response) => response)
}

export function requestRegistration(username, email, password) {
    return axios.post('https://team-kraken-questionbox.herokuapp.com/auth/users/',
    {
        username: username,
        email: email,
        password: password
    },
    {}
    )
    .then((response) => response)
}


export function requestQuestions (token) {
  return getQuestionList(token)
}
export function requestAnswers (token) {
  return getAnswers(token)
}

function getQuestionList (token) {
    if (token) {
      return axios.get('https://team-kraken-questionbox.herokuapp.com/questions')
        .then(res => res)
    }
  }
  function getAnswers (token) {
    if (token) {
      return axios.get('https://team-kraken-questionbox.herokuapp.com/answers')
        .then(res => res)
    }
  }

function fakeUserRequest (token) {
  // here I am faking an api response that
  // gives me a user object
  return new Promise((resolve, reject) => {
    if (token) {
      resolve(
        // this is a fake user object
        )
    }
    reject(new Error('Authentication failed'))
  })
}


function fakeQuestionDetail (token, id) {
  return new Promise((resolve, reject) => {
    if (token && id) {
      resolve({
        
      })
    }
  })
}

function fakeCreateQuestion (token, question) {
  return new Promise((resolve, reject) => {
    if (token && question) {
      resolve(
        'your question has been posted'
      )
    }
    reject(new Error('your question was not posted'))
  })
}

function fakeCreateAnswer (token, questionID, answer) {
  return new Promise((resolve, reject) => {
    if (token && questionID && answer) {
      resolve(
        'your answer has been posted'
      )
    }
    reject(new Error('your answer was not posted'))
  })
}
