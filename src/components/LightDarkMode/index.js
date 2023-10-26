// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {light: true}

  changeState = () => {
    this.setState(prevState => ({light: !prevState.light}))
  }

  render() {
    const {light} = this.state
    const container = light ? 'dark-card-container' : 'light-card-container'
    const heading = light ? 'dark-heading' : 'light-heading'
    const button = light ? 'dark-btn-ele' : 'light-btn-ele'
    const btnText = light ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div className={container}>
          <h1 className={heading}>Click To Change Mode</h1>
          <div className="btn-container">
            <button className={button} type="button" onClick={this.changeState}>
              {btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
