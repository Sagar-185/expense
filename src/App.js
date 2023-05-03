import React from 'react'
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import { GlobalProvider } from './components/context/Globalstate';


function App() {
  return (
    <GlobalProvider >
      <div className='container' >
      <Header/>
      <Balance/>
      <IncomeExpense/>
      
      <AddTransaction/>
      <TransactionList/>
      </div>


    </GlobalProvider>
  );
}

export default App;
