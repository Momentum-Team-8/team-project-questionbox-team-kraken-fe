import React, { useState } from 'react'

export const Register = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <>
        <h1 className='title'>QuestionBox</h1>
        <main>
            <form className='form' onSubmit={handleSubmit}>

            </form>
        </main>
        </>
    )
}