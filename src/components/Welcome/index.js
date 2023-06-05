// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  btnText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getBtnText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnText = this.getBtnText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <h2 className="heading-1">Thank you! Happy Learning</h2>
        <button className="btn" type="button" onClick={this.btnText}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default Welcome
