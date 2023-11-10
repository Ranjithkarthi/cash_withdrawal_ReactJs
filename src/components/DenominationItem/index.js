// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItemList, withdraw} = props
  const {id, value} = denominationItemList
  const callWithdrawal = () => {
    withdraw(value)
  }

  return (
    <li className="list-style">
      <button type="button" className="btn" onClick={callWithdrawal}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
