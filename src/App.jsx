/* eslint-disable no-unused-vars */
import React from 'react'
import Quiz from './components/Quiz'

function App() {
  const [startQuiz, setStartQuiz] = React.useState(false)

  const initQuiz = () => {
    setStartQuiz(true)
  }

  const StartScreen = (
    <div className="start-screen">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className="btn" onClick={initQuiz}>
        Start
      </button>
    </div>
  )

  return <>{startQuiz ? <Quiz /> : StartScreen}</>
}

export default App
