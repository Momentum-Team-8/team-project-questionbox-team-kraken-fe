import React, { useState } from "react";

export const QuestionDetails = (props) => {
    const { question, setExpanded } = props

    return (
        <div className="question-card">
            <h2>{question.title}</h2>
            <h3>{question.text}</h3>
            <p>{question.username}</p>
            <p>{question.created_at}</p>
            <button onClick={() => setExpanded(false)}>go back</button>
        </div>
    )
}