import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from "./components/Budget";
import Savings from "./components/Savings";
import Expenses from "./components/Expenses";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import { useEffect } from 'react';

const App = () => {
  
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1> {/* mt-margin-top */}
        <div className="row mt-3">
          <div className="col-sm">  {/*col-sm Column within a row  */}
            <Budget />
          </div>
          <div className="col-sm">
            <Savings />
          </div>
          <div className="col-sm">
            <Expenses />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>

  )
}

export default App