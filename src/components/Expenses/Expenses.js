import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/./Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

export default function Expenses(props) {
    const [currentFilter, setcurrentFilter] = useState('2021');



    function filterHandler(selectedFilter) {
        console.log("Expenses.js");
        setcurrentFilter(selectedFilter);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterChange={filterHandler} selected={currentFilter} />

            {props.expenses.filter(expense => expense.date.getFullYear().toString() === currentFilter).map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}

        </Card>
    );

}