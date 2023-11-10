// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {accBalance: 2000}

  withdraw = value => {
    this.setState(prevState => ({accBalance: prevState.accBalance - value}))
  }

  render() {
    const {accBalance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="calc-container">
          <h1>Sarah Williams</h1>
          <div className="acc-balance">
            <p className="bold-text">Your Balance</p>
            <div>
              <p className="acc-balance-num">{accBalance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p className="bold-text">Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul className="rupees-btn-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationItemList={eachItem}
                key={eachItem.id}
                withdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
