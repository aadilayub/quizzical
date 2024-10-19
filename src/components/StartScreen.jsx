function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className="btn" onClick={onStart}>Start</button>
    </div>
  );
}

export default StartScreen;