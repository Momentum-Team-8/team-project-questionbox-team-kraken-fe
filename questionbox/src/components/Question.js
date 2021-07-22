import React, { useState, useEffect } from "react";
import { QuestionDetails } from "./QuestionDetails";

export const Question = (props) => {
    const [expanded, setExpanded] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    const { question } = props

    const seeDetails = (question) => {
        setExpanded(true)
        setSelectedQuestion(question)
    }

    // useEffect(() => {
    //     seeDetails()
    // }, [])





    return (
        <div className="question-card">
            <h2>{question.title}</h2>
            <p>{question.username}</p>
            <p>{question.created_at}</p>
        </div>
    )

}