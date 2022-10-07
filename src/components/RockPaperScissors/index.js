import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import ChoiceItem from '../ChoiceItem'
import ShowResults from '../ShowResults'
import './index.css'

class RockPaperScissors extends Component {
  state = {
    gameInProgress: true,
    score: 0,
    activeChoiceId: '',
    yourImageUrl: '',
    opponentUrl: '',
    result: '',
  }

  onClickPlay = () => {
    this.setState({gameInProgress: true})
  }

  onClickChoice = id => {
    this.setState({activeChoiceId: id})
    this.setState({gameInProgress: false}, this.getItemResults)
  }

  getChoicesList = () => {
    const {choicesList} = this.props

    return (
      <div className="choice-container">
        <div className="choice-list">
          {choicesList.map(eachChoice => (
            <ChoiceItem
              key={eachChoice.id}
              choiceDetails={eachChoice}
              onClickChoice={this.onClickChoice}
            />
          ))}
        </div>
      </div>
    )
  }

  getItemResults = () => {
    const {activeChoiceId} = this.state
    const {choicesList} = this.props
    const randomNo = Math.floor(Math.random() * 3)
    const randomGenerateItem = choicesList[randomNo].imageUrl
    const activeItem = choicesList.find(
      eachChoice => eachChoice.id === activeChoiceId,
    )
    const activeGenerateItem = activeItem.imageUrl
    const randomId = choicesList[randomNo].id
    let res = ''
    if (activeChoiceId === randomId) {
      res = 'IT IS DRAW'
    } else {
      if (
        (activeChoiceId === 'ROCK' && randomId === 'SCISSORS') ||
        (activeChoiceId === 'PAPER' && randomId === 'ROCK') ||
        (activeChoiceId === 'SCISSORS' && randomId === 'PAPER')
      ) {
        res = 'YOU WON'
        this.setState(prevState => ({
          score: prevState.score + 1,
        }))
      } else {
        res = 'YOU LOSE'
        this.setState(prevState => ({
          score: prevState.score - 1,
        }))
      }
      const k = 0
    }
    this.setState({
      result: res,
      yourImageUrl: activeGenerateItem,
      opponentUrl: randomGenerateItem,
    })
  }

  getResults = () => {
    const {yourImageUrl, opponentUrl, result} = this.state
    return (
      <ShowResults
        activeId={yourImageUrl}
        randomChoiceId={opponentUrl}
        onClickPlay={this.onClickPlay}
        result={result}
      />
    )
  }

  render() {
    const {score, gameInProgress} = this.state
    return (
      <div className="bg-container">
        <div className="score-card-container">
          <h1 className="item">
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </h1>
          <div className="score-container">
            <p className="score-para">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        {gameInProgress && this.getChoicesList()}
        {!gameInProgress && this.getResults()}
        <Popup
          trigger={
            <button className="rules-btn" type="button">
              Rules
            </button>
          }
          position="top center"
          modal
          className="pops-container"
        >
          {close => (
            <div className="pop-container">
              <button className="close-btn" type="button" onClick={close}>
                <RiCloseLine className="icon" />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-img"
              />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default RockPaperScissors
