import Question from './Question'
import React from 'react'

function Quiz() {
  const [questions, setQuestions] = React.useState([])
  const [checked, setChecked] = React.useState(false)
  const [score, setScore] = React.useState(0)

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'
      )
      const data = await res.json()
      const questionData = data.results
      console.log(questionData)
      setQuestions(data.results)
    }

    fetchData()
  }, [])

  function checkQuestion(selected, question) {
    // TODO: fix entire quiz component re-rendering when correct answer is selected for one question
    if (selected == question.correct_answer) {
      setScore(score + 1)
    }
  }

  return (
    <div className="quiz-screen">
      <div className="questions-list">
        {questions.map((questionData) => (
          <Question
            key={crypto.randomUUID()}
            data={questionData}
            showAnswer={checked}
            handleClick={(selected) => {
              checkQuestion(selected, questionData)
            }}
            selectedAnswer={3}
          />
        ))}
      </div>
      {checked && (
        // TODO: add Play again button
        // TODO: make this match figma design
        <p className="scorecard">You scored {score}/5 correct answers</p>
      )}
      <div
        className="btn"
        onClick={() => {
          setChecked(true)
        }}
      >
        Check answers
      </div>
    </div>
  )
}

export default Quiz
