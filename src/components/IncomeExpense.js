import React, {useContext} from 'react'
import { GlobalContext } from './context/Globalstate'
import './IncomeExpense.css'
import {BiRupee} from 'react-icons/bi'
function IncomeExpense() {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction=> transaction.amount)
  const income = amounts.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
      accumulator += currentValue;
    }
    return accumulator;
  }, 0);
  const spend = amounts.filter(item => item<0).reduce((accumulator, currentValue) => accumulator += currentValue, 0);
  

  return (
    <div className='IncomeExpense' >
        <div><h4> Income</h4> <p className='money green' ><BiRupee size={17}  />{income}</p> </div>
        <div><h4> Expense</h4><p className='money red' ><BiRupee size={18}  />{Math.abs(spend)}</p></div>
        
    </div>
  )
}

export default IncomeExpense