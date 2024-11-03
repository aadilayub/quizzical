import React from 'react'
import {decode} from 'html-entities'

function Question({data}) {
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

  return (
    <div className="question-wrapper">
      <h2 className="question">{decode(data.question)}</h2>
      <fieldset className="answers-list">
        {answers.map((answer) => (
          <label key={crypto.randomUUID()} className={`answer-list--item`}>
            <input
              type="radio"
              name={decode(data.question)}
              value={answer.content}
            />
            {decode(answer.content)}
          </label>
        ))}
      </fieldset>
    </div>
  )
}

export default Question
