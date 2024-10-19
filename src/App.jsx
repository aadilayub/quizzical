/* eslint-disable no-unused-vars */
import React from 'react'
import Blob from './components/Blob'
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
      <Blob color="yellow" />
      {page === 'Start' && <StartScreen onStart={startQuiz} />}
      {page === 'Quiz' && <Quiz />}
      <Blob color="blue" />
    </>
  )
}

export default App
