import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditingForm, setEditingForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setEditingForm(false);
    props.onAddExpense(expenseData);
  };
  const cancelExpenseDataHandler = () => {
    setEditingForm(false);
  };
  const startEditingform = () => {
    setEditingForm(true);
  };
  return (
    <div className="new-expense">
      {!isEditingForm && (
        <button onClick={startEditingform}>Add new Expecse</button>
      )}
      {isEditingForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpenseData={cancelExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
