import {useState} from 'react';
import './ExpenseForm.css';


export default function ExpenseForm() {

    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    // const [userInput, setuserInput] = useState({
    //     enteredTitle: '',
    //     entereAmount: '',
    //     enteredDate:''
    // })
    function submitHandler(event){
event.preventDefault();

const expenseData = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate)
}

console.log(expenseData);
    }

    function titleChangehandler(event) {
        setenteredTitle(event.target.value);
//         setuserInput((prevState)=>{
// return {...prevState, enteredTitle:event.target.value};
//         })
    }

    function amountChangeHandler(event){
setenteredAmount(event.target.value);
    }

    function dateChangeHandler(event){
setenteredDate(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangehandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
        </form>
    );

}