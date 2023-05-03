import React, {useContext} from 'react'
import {BiRupee} from 'react-icons/bi'
import { GlobalContext } from './context/Globalstate'

function Balance() {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction=> transaction.amount)
  const sum = amounts.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
  return (
    <div className='balance' >
        <h4>Your Balance</h4>
        <h1 className='amount' ><BiRupee size={28}  />{sum}</h1>
    </div>

    

  )
}
export default Balance