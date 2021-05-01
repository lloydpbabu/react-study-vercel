import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/./Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

export default function Expenses(props) {
    const [currentFilter, setcurrentFilter] = useState(2021);



    function filterHandler(selectedFilter) {
        console.log("Expenses.js");
        setcurrentFilter(selectedFilter);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterChange={filterHandler} selected={currentFilter} />
            {props.expenses.map((expense)=>(
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
            ))}
            {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem> */}
        </Card>
    );

}