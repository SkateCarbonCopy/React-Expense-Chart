import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    };

    const viewForm = () => {
        setShowForm(true);
    }

    const formCancelHandler = () => {
        setShowForm(false);
    }

    return (
        <div className="new-expense">
            {!showForm && <button onClick={viewForm}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onFormCancel={formCancelHandler} />}
        </div>
    )
}

export default NewExpense;