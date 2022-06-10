import ExpenseItems from './ExpenseItems';
import './ExpenseData.css'
import Card from './Card'
function ExpenseData(props) {
  return (
//     <div className='expenses'>
// <ExpenseItems title={props.expenses[0].title} amount = {props.expenses[0].amount} date = {props.expenses[0].date}/>
// <ExpenseItems title={props.expenses[1].title} amount = {props.expenses[1].amount} date = {props.expenses[1].date}/>
// <ExpenseItems title={props.expenses[2].title} amount = {props.expenses[2].amount} date = {props.expenses[2].date}/>
// <ExpenseItems title={props.expenses[3].title} amount = {props.expenses[3].amount} date = {props.expenses[3].date}/>
// </div>) }
    <Card className='expenses'>
<ExpenseItems title={props.expenses[0].title} amount = {props.expenses[0].amount} date = {props.expenses[0].date}/>
<ExpenseItems title={props.expenses[1].title} amount = {props.expenses[1].amount} date = {props.expenses[1].date}/>
<ExpenseItems title={props.expenses[2].title} amount = {props.expenses[2].amount} date = {props.expenses[2].date}/>
<ExpenseItems title={props.expenses[3].title} amount = {props.expenses[3].amount} date = {props.expenses[3].date}/>
</Card>) 
// explaination of this @Card.js
}
export default ExpenseData;
// import in App.js