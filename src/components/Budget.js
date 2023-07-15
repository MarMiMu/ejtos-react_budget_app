import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const submitEvent = () => {
        var budget_amount = document.getElementById("budget").value;
        var expense = {
            amount: document.getElementById("budget").value,
        };
        const max_budget = 3000;
        console.log(budget); 
        if(parseInt(budget_amount) > max_budget) {
            alert("The budget cannot exceed 20000");
            document.getElementById("budget").value = max_budget;
            dispatch({
                type: 'SET_BUDGET',
                payload: max_budget,
            });
            return;
        }
        else{
            if (budget_amount < totalExpenses ){
                alert("The budget cannot be less than total expenses");
                document.getElementById("budget").value = totalExpenses;
                dispatch({
                    type: 'SET_BUDGET',
                    payload: totalExpenses,
                });
            }
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: expense.amount,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}                     
                <input
                        required='required'
                        type='number'
                        id='budget'
                        step = '10'
                        defaultValue = {budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => submitEvent(parseInt(event.target.value))}>
                    </input>
            </span>
        </div>
    );
};
export default Budget;
