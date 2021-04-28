import Card from './Card';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem(props) {

    return (
        <div>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title.toString()}</h2>
                    <div className="expense-item__price">₹{props.amount}</div>
                </div>
            </Card>

        </div>
    );
}
