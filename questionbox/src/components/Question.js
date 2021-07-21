import React from 'react'

export const Question = (props) => {
    const { questions } = props
    
    return (
        <>
        {questions.map((question, idx) => {
            return (
                <>
                <h1>{question.title}</h1>
                <h3>{question.text}</h3>
                </>
            )
            
    })}
    </>
    )
}