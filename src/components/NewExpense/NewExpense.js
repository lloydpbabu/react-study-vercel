import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


export default function NewExpense(props){

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpenseHandler(expenseData);
    }


    return(
<div className="new-expense">
<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
</div>
    );

}