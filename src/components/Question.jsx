import React from 'react'
import {decode} from 'html-entities'

function Question({data, showAnswer, handleClick}) {
  const incorrectAnswers = data.incorrect_answers.map((answer) => ({
    content: answer,
    correct: false
  }))

  const answers = [
    {content: data.correct_answer, correct: true},
    ...incorrectAnswers
  ]

  // TODO: use separate shuffledAnswers array for list, and wrap it in a useEffect
  React.useEffect(() => {
    answers.sort(() => Math.random() - 0.5) // shuffling the array
  }, [])

  // TODO: mark incorrect answers on check
  return (
    <div className="question-wrapper">
      <h2 className="question">{decode(data.question)}</h2>
      <ul className="answers-list">
        {answers.map((answer) => (
          <li
            key={crypto.randomUUID()}
            className={`answer-list--item ${
              showAnswer ? (answer.correct ? 'correct' : 'wrong') : ''
            }`}
            onClick={(e) => {
              e.currentTarget.classList.toggle('selected')
              handleClick(decode(answer.content))
            }}
          >
            {decode(answer.content)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question
