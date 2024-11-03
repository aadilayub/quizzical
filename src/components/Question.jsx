import React from 'react'
import {decode} from 'html-entities'
import {applyOrder} from '../utils/order'

function Question({data, handleChange, hasGameEnded}) {
  const {question, user_answer, correct_answer, incorrect_answers, order} = data

  // add a "correct" property so answers can be checked later
  const answers = [
    {content: correct_answer, correct: true},
    ...incorrect_answers.map((answer) => ({content: answer, correct: false}))
  ]
  const shuffledAnswers = applyOrder(answers, order)

  return (
    <div className="question-wrapper">
      <h2 className="question">{decode(question)}</h2>
      <fieldset className="answers-list">
        {shuffledAnswers.map((answer) => (
          <label
            key={crypto.randomUUID()}
            className={`answer-list--item ${
              hasGameEnded && (answer.correct ? 'correct' : 'wrong')
            }`}
          >
            <input
              type="radio"
              name={question}
              value={answer.content}
              onChange={handleChange}
              checked={user_answer === answer.content}
            />
            {decode(answer.content)}
          </label>
        ))}
      </fieldset>
    </div>
  )
}

export default Question
