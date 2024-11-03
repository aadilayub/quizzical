import Question from './Question'
import React from 'react'
import {randomOrder} from '../utils/order'

function Quiz() {
  const [questions, setQuestions] = React.useState([])
  const [score, setScore] = React.useState(0)
  const [hasGameEnded, setHasGameEnded] = React.useState(false)

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'
      )
      const data = await res.json()
      const questionData = data.results.map((result) => ({
        ...result,
        user_answer: null,
        order: randomOrder()
      }))
      setQuestions(questionData)
    }

    fetchData()
  }, [])

  function handleChange(e) {
    setQuestions((oldQuestions) => {
      /* map over questions, and add user_answer for question 
      that is current e.target */
      return oldQuestions.map((question) => {
        if (question.question === e.target.name) {
          return {...question, user_answer: e.target.value}
        }
        return question
      })
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const tally = questions.reduce(
      (acc, question) =>
        question.user_answer === question.correct_answer ? acc + 1 : acc,
      0
    )
    setScore(tally)
    setHasGameEnded(true)
  }

  return (
    <form onSubmit={handleSubmit} className="quiz-screen">
      <div className="questions-list">
        {questions?.map((question) => (
          <Question
            key={crypto.randomUUID()}
            data={question}
            handleChange={handleChange}
          />
        ))}
      </div>
      {/* TODO: mark incorrect answers on check */}
      {hasGameEnded ? (
        <p>You scored {score}/5 correct answers</p>
      ) : (
        <button className="btn check-answers">Check answers</button>
      )}
    </form>
  )
}

export default Quiz
