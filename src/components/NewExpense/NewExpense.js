import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


export default function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseHandler() {
        setIsEditing(true);
    }

    function saveExpenseCanceller(){
        setIsEditing(false);
    }

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpenseHandler(expenseData);
        setIsEditing(false);
    }


    return (
        <div className="new-expense">
                {!isEditing && <button onClick={saveExpenseHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={saveExpenseCanceller} />}
        </div>
    );

}