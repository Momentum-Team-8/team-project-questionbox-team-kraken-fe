import React, { useState } from "react";

export const Question = (props) => {
    const [expanded, setExpanded] = useState(false)
    const { questions } = props

    // const seeDetails = () => {
    //     setExpanded(true)
    // }

    if (expanded) {
        return (
            <h1>I HAVE BEEN EXPANDED</h1>
        )
    } else {
        return (
            <>
            {questions.map((question, idx) => {
                return (
                    <div className="question-card" onClick={() => setExpanded(true)}>
                    <h2>{question.title}</h2>
                    <p>{question.username}</p>
                    <p>{question.created_at}</p>
                    </div>
                )
                
        })}
        </>
        )
    }
}