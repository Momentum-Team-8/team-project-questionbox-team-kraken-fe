import React, { useState } from "react";
import './App.css';

export function App() {
    const [data, setData] = useState ({
            answers: [
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
            ],
            questions: [
                {
                    id: '1',
                    title: 'centering',
                    text: 'how do i center a div?',
                    username: 'roan',
                    created_at: '8 years ago',
                    favorited: 'false'
                },
                {
                    id: '2',
                    title: 'new here',
                    text: 'how do i post a question?',
                    username: 'emily',
                    created_at: 'tomorrow woah crazy',
                    favorited: 'false'
                },
                {
                    id: '3',
                    title: 'BSCode?',
                    text: 'which IDE should I use? I was thinking about the notes app.',
                    username: 'shaune',
                    created_at: 'today',
                    favorited: 'false'
                },
                {
                    id: '4',
                    title: 'IE4???',
                    text: 'how do I support Internet Explorer 4 in css?',
                    username: 'dee',
                    created_at: 'yesterday',
                    favorited: 'false'
                }
            ]
        }
    )
    return (
    <>
    <h1>hello there</h1>

    
    </>
    )
}

export default App;
