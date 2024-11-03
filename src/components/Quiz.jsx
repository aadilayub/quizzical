import Question from './Question'
import React from 'react'

function Quiz() {
  const [questions, setQuestions] = React.useState([])
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

  return (
    <form className="quiz-screen">
      <div className="questions-list">
        {questions.map((questionData) => (
          <Question key={crypto.randomUUID()} data={questionData} />
        ))}
      </div>
      {/* TODO: mark incorrect answers on check */}
      <button className="btn">Check answers</button>
    </form>
  )
}

export default Quiz
