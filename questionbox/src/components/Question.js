import React from 'react'

export const Question = (props) => {
    const { questions } = props
    
    return (
        <>
        {questions.map((question, idx) => {
            return (
                <div className="question-card">
                <h2>{question.title}</h2>
                <h3>{question.text}</h3>
                <p>{question.username}</p>
                <p>{question.created_at}</p>
                </div>
            )
            
    })}
    </>
    )
}