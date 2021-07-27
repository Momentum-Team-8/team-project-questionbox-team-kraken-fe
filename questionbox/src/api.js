const answers = [
    {
      id: '1',
      text: 'stufffffff',
      username: 'shaune',
      approved: 'false',
      favorited: 'false',
      created_at: '0.00007 seconds ago'
    },
    {
      id: '2',
      text: 'whyd you do it like that',
      username: 'roan',
      approved: 'false',
      favorited: 'false',
      created_at: '3 days ago'
    },
    {
      id: '3',
      text: 'use this library instead duh',
      username: 'dee',
      approved: 'false',
      favorited: 'false',
      created_at: 'friday'
    },
    {
      id: '4',
      text: 'idk i dont use that',
      username: 'emily',
      approved: 'false',
      favorited: 'false',
      created_at: '54 years ago'
    }
  ]

  const questions = [
    {
      id: '1',
      title: 'centering',
      text: 'how do i center a div?',
      username: 'roan',
      created_at: '8 years ago',
      favorited: 'false',
      answers: answers
    },
    {
      id: '2',
      title: 'new here',
      text: 'how do i post a question?',
      username: 'emily',
      created_at: 'tomorrow woah crazy',
      favorited: 'false',
      answers: answers
    },
    {
      id: '3',
      title: 'BSCode?',
      text: 'which IDE should I use? I was thinking about the notes app.',
      username: 'shaune',
      created_at: 'today',
      favorited: 'false',
      answers: answers
    },
    {
      id: '4',
      title: 'IE4???',
      text: 'how do I support Internet Explorer 4 in css?',
      username: 'dee',
      created_at: 'yesterday',
      favorited: 'false',
      answers: answers
    },
    {
      id: '1',
      title: 'centering',
      text: 'how do i center a div?',
      username: 'roan',
      created_at: '8 years ago',
      favorited: 'false',
      answers: answers
    },
    {
      id: '2',
      title: 'new here',
      text: 'how do i post a question?',
      username: 'emily',
      created_at: 'tomorrow woah crazy',
      favorited: 'false',
      answers: answers
    },
    {
      id: '3',
      title: 'BSCode?',
      text: 'which IDE should I use? I was thinking about the notes app.',
      username: 'shaune',
      created_at: 'today',
      favorited: 'false',
      answers: answers
    },
    {
      id: '4',
      title: 'IE4???',
      text: 'how do I support Internet Explorer 4 in css?',
      username: 'dee',
      created_at: 'yesterday',
      favorited: 'false',
      answers: answers
    }
  ]

  
  export function requestLogin (username, password) {
    return fakeAuthentication(username, password)
  }
  
  export function requestUser (token, username) {
    return fakeUserRequest(token, username)
  }

  export function requestQuestions (token) {
      return fakeQuestionsRequest(token)
  }



function fakeAuthentication(username, password) {
    return new Promise((resolve, reject) => {
        if (username !== '' && password !== '') {
            resolve({
                auth_token: 'token123456789'
            })
        } 
        reject(new Error('authentication failed'))
    })
}
  
function fakeUserRequest (token) {
    // here I am faking an api response that
    // gives me a user object
    return new Promise((resolve, reject) => {
      if (token) {
        resolve(
          // this is a fake user object
          {
            id: 1,
            username: 'username',
            // I am using a lirbary called dayjs that
            // makes working with datetime in JS a litte simpler
            created_at: '2021-07-22',
            avatar_url: 'https://tinyurl.com/mwkjx4nh',
            questions: [{
                id: '1',
                title: 'centering',
                text: 'how do i center a div?',
                username: 'roan',
                created_at: '8 years ago',
                favorited: 'false',
                answers: answers
              },
              {
                id: '2',
                title: 'new here',
                text: 'how do i post a question?',
                username: 'emily',
                created_at: 'tomorrow woah crazy',
                favorited: 'false',
                answers: answers
              }],
            answers: [{
                id: '1',
                text: 'stufffffff',
                username: 'shaune',
                approved: 'false',
                favorited: 'false',
                created_at: '0.00007 seconds ago'
              },
              {
                id: '2',
                text: 'whyd you do it like that',
                username: 'roan',
                approved: 'false',
                favorited: 'false',
                created_at: '3 days ago'
              }]            
          })
      }
      reject(new Error('Authentication failed'))
    })
  }


function fakeQuestionsRequest(token) {
    return new Promise((resolve, reject) => {
        if (token) {
            console.log(token)
            resolve(
                questions
            )
        } 
        reject(new Error('authentication failed'))
    })
}

// function fakeQuestionDetail(token, id) {
//     return new Promise((resolve, reject) => {
//         if (token && id) {
//             resolve ({
//                 question: questions[id]
//             })
//         }
//         reject(new Error('authentication failed'))
//     })
// }

function fakeCreateQuestion(token, question) {
    return new Promise((resolve, reject) => {
        if (token && question) {
            resolve (
                'your question has been posted'
            )
        }
        reject(new Error('your question was not posted'))
    })
}

function fakeCreateAnswer(token, questionID, answer) {
    return new Promise((resolve, reject) => {
        if (token && questionID && answer) {
            resolve (
                'your answer has been posted'
            )
        }
        reject(new Error('your answer was not posted'))
    })
}