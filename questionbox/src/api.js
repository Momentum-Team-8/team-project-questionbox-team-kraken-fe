import axios from 'axios'

export function requestLogin (username, password) {
  return axios.post('https://team-kraken-questionbox.herokuapp.com/auth/token/login', {
    username: username,
    password: password
  })
}

export function requestLogout (token) {
  return axios.post('https://team-kraken-questionbox.herokuapp.com/auth/token/logout/',
    {},
    {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response)
}

export function requestRegistration (username, email, password) {
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

export function requestUserInfo (token) {
  return axios.get('https://team-kraken-questionbox.herokuapp.com/auth/users/me',
    {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response)
}
function getAnswers (token) {
  if (token) {
    return axios.get('https://team-kraken-questionbox.herokuapp.com/answers')
      .then(res => res)
  }
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

export function deleteQuestion (token, id) {
    if (token) {
        return axios.delete(`https://team-kraken-questionbox.herokuapp.com/questions/${id}/delete`)
        .then((response) => response)
    }
}