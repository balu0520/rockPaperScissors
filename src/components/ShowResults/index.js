import './index.css'

const ShowResults = props => {
  const {activeId, randomChoiceId, result, onClickPlay} = props

  const onClickPlayAgain = () => {
    onClickPlay()
  }

  return (
    <>
      <div className="play-again-container">
        <div className="you-container">
          <h1 className="you-heading">YOU</h1>
          <img src={activeId} alt="your choice" className="choice-icon" />
        </div>
        <div className="you-container">
          <h1 className="you-heading">OPPONENT</h1>
          <img
            src={randomChoiceId}
            alt="opponent choice"
            className="choice-icon"
          />
        </div>
      </div>
      <div className="result-container">
        <p className="result-heading">{result}</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={onClickPlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    </>
  )
}

export default ShowResults
