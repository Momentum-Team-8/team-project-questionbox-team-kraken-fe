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
        <div className="question-card" onClick={() => seeDetails(question)}>
            <h2>{question.title}</h2>
            <p>{question.username}</p>
            <p>{question.created_at}</p>
        </div>
    )

}