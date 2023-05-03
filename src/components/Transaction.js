import React, {useContext} from 'react'
import './TransactionList.css'
import {MdDeleteForever} from 'react-icons/md'
import {BiRupee} from 'react-icons/bi'
import { GlobalContext } from './context/Globalstate'

function Transaction({transaction}) {
  const {deleteTransaction} = useContext(GlobalContext)
  const sign = transaction.amount <0 ? '-' : '+';
  return (
    <li className={transaction.amount<0 ? 'minus' :'plus'}>
      {transaction.text} <span> <BiRupee/>{sign}{Math.abs(transaction.amount)} </span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn"><MdDeleteForever/></button>
    </li>
  )
}

export default Transaction