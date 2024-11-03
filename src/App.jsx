/* eslint-disable no-unused-vars */
import React from 'react'
import StartScreen from './components/StartScreen'
import Quiz from './components/Quiz'

function App() {
  const [page, setPage] = React.useState('Start')
  // if page == start, show start screen
  // if page == quiz, show quiz screen

  const startQuiz = () => {
    setPage('Quiz')
  }

  return (
    <>
      {page === 'Start' && <StartScreen onStart={startQuiz} />}
      {page === 'Quiz' && <Quiz />}
    </>
  )
}

export default App
