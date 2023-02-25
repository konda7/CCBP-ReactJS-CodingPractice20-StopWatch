import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
  }

  clearTimeInterval = () => {
    clearInterval(this.timerId)
  }

  onClickResetTimer = () => {
    this.clearTimeInterval()
    this.setState({
      timeElapsedInSeconds: 0,
    })
  }

  onClickStopTimer = () => {
    this.clearTimeInterval()
  }

  incrementTimeInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStartTimer = () => {
    this.timerId = setInterval(this.incrementTimeInSeconds, 1000)
  }

  getStopWatchDisplay = () => {
    const {timeElapsedInSeconds} = this.state

    const stringifyMinutes = Math.floor(timeElapsedInSeconds / 60)
    const stringifySeconds = timeElapsedInSeconds % 60

    const minutes =
      stringifyMinutes > 9 ? stringifyMinutes : `0${stringifyMinutes}`
    const seconds =
      stringifySeconds > 9 ? stringifySeconds : `0${stringifySeconds}`

    return `${minutes}:${seconds}`
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-name-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="timer-name">Timer</p>
          </div>
          <h1 className="stopwatch-time">{this.getStopWatchDisplay()}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="btn green"
              onClick={this.onClickStartTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="btn red"
              onClick={this.onClickStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn golden-yellow"
              onClick={this.onClickResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
