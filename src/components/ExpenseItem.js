import React, { useContext } from 'react';
import { TiDelete, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaCirclePlus onClick={event=> increaseAllocation(props.name)} style={{fontSize:30, color: "green"}}></FaCirclePlus></td>
        <td><FaCircleMinus onClick={event=> decreaseAllocation(props.name)} style={{fontSize:30, color: "red"}}></FaCircleMinus></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;