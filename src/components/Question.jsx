import React from 'react'
import {decode} from 'html-entities'

function Question({data, handleChange}) {
  const {question, user_answer, correct_answer, incorrect_answers} = data

  // TODO: shuffle this array and persist the order across state somehow
  const answers = [correct_answer, ...incorrect_answers]

  return (
    <div className="question-wrapper">
      <h2 className="question">{decode(question)}</h2>
      <fieldset className="answers-list">
        {answers.map((answer) => (
          <label key={crypto.randomUUID()} className={`answer-list--item`}>
            <input
              type="radio"
              name={question}
              value={answer}
              onChange={handleChange}
              checked={user_answer === answer}
            />
            {decode(answer)}
          </label>
        ))}
      </fieldset>
    </div>
  )
}

export default Question
