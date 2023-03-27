import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
//special kind of variable
//array destructuring
  const [title, setTitle] = useState(props.title);
  console.log('expense item evaluated by React')

  return (
    //not using hardcoded text. instead it is dynamic 
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
