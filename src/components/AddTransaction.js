import React, {useState, useContext} from 'react'
import './AddTransaction.css'
import { v4 as uuidv4 } from "uuid"; 
import { GlobalContext } from './context/Globalstate'


function AddTransaction  ()  {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [inputError, setinputError] = useState("");
  const {addTransaction} = useContext(GlobalContext)

  const handleExpense = (event) => {
    event.preventDefault();
    if(+amount >0 && +amount<1000000){
      const newTransaction = {
        id : uuidv4(),
        text: text,
        amount: +amount * -1
      }
      addTransaction(newTransaction)
      setinputError('')
      setText('')
      setAmount(0)
    }
    else{
      setinputError('Please put valid value')
      setText('')
      setAmount(0)
    }
    
  };
  const handleEarn = (event) => {
    event.preventDefault();
    if(+amount >0 && +amount<1000000){
      const newTransaction = {
        id : uuidv4(),
        text: text,
        amount: +amount 
      }
      addTransaction(newTransaction)
      setinputError('')
      setText('')
      setAmount(0)
    }
    else{
      setinputError('Please put valid value')
      setText('')
      setAmount(0)
    }
  };
  return (
    <div>
      <h3>Add new Transaction</h3>
      <div>
        <p className='label' >Text</p>
        <input 
          type='text' 
          placeholder='enter something'
          value={text} 
          onChange={(e)=>setText(e.target.value)} 
          />
      </div>
      <div>
        <p className='label' >Amount</p>
        <input 
          type='text' 
          placeholder='positive for negative'
          value={amount} 
          onChange={(e)=>setAmount(e.target.value)} 
          />
      </div>
      <div>{inputError}</div>
      <div className='buttons' >
        <button className='btn' onClick={handleExpense}>Expense</button>
        <button className='btn' onClick={handleEarn}>Earn</button>
      </div>

    </div>
  )
}
export default AddTransaction