import React, { useState, useEffect } from "react";

export const Question = (props) => {

    const { question, setExpanded, setSelectedQuestion } = props

    const seeDetails = (question) => {
        setExpanded(true)
        setSelectedQuestion(question)
    }

    // useEffect(() => {
    //     seeDetails()
    // }, [])


    return (
        <div className="question-card">
            <h2 onClick={() => seeDetails(question)}>{question.title}</h2>
            <p>{question.username}</p>
            <p>{question.created_at}</p>
        </div>
    )

}