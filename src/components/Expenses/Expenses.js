import './Expenses.css'
import Card from '../UI/./Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

export default function Expenses(props) {
    const [currentFilter, setcurrentFilter] = useState('2021');



    function filterHandler(selectedFilter) {
        console.log("Expenses.js");
        setcurrentFilter(selectedFilter);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === currentFilter);

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterChange={filterHandler} selected={currentFilter} />

            <ExpensesList items={filteredExpenses}/>

        </Card>
    );

}