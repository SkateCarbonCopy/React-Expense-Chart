import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
    const [yearFilter, setYearFilter] = useState('2020');

    const setExpenseFilter = newFilter => {
        setYearFilter(newFilter);
    }

    const filteredExpenses = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === yearFilter;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selectedYear={yearFilter}
                    onSetExpenseFilter={setExpenseFilter}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;