import React, { useState } from 'react'
import {Sidebar} from './Sidebar'
import {Question} from './Question'
export const QuestionList = (props) => {

    const {setAsking, handleLogout, data, token, setExpanded, setSelectedQuestion} = props


    return (
        <>
                <h1 className='title'>QuestionBox<button className="logout" onClick={() => handleLogout(token)}>Logout</button></h1>
                <main>
                    <Sidebar />
                    <div className='questions'>
                        <div className="header">
                            <h2>Top Questions</h2>
                            <button className="ask-question" onClick={() => setAsking(true)}>Ask Question</button>
                        </div>
                        {data.map((question, idx) => {
                        return (
                            <Question question={question} setExpanded={setExpanded} setSelectedQuestion={setSelectedQuestion} />
                        )
                        })}
                    </div>
                </main>
            </>
    )
}