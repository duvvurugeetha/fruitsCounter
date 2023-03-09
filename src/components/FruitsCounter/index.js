// Write your code here
import {Component} from 'react'
import './index.css'

class FruitCounter extends Component {
  state = {count1: 0, count2: 0}
  mangoes = () => {
    this.setState(prevState => {
      return {count1: prevState.count1 + 1}
    })
  }
  bananas = () => {
    this.setState(prevState => {
      return {count2: prevState.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div>
        <h1>
          Bob ate {count1} mangoes {count2} bananas
        </h1>
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              alt="mango"
            />
            <button onClick={this.mangoes}>Eat Mango</button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button onClick={this.bananas}>Eat Banana</button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitCounter
