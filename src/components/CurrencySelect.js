import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const CurrencySelect = () => {
    const { currency, dispatch } = useContext(AppContext);
    console.log(currency);
    const submitEvent = () => {
        var e = document.getElementById("currencySelect");
        var currency = e.options[e.selectedIndex].value;
        console.log(currency); 
        if (currency === "dollar"){
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "$",
            });
            return;
        }
        if (currency === "pound"){
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "£",
            });
            return;
        }
        if (currency === "euro"){
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "€",
            });
            return;
        }
        if (currency === "ruppee"){
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "₹",
            });
            return; 
        }
    }
    return (
        <div style={{padding: 16, backgroundColor: "#32CD32", color: "black", borderRadius: 10}}>
            <label htmlFor="inputGroupSelect02" style={{}}>Currency</label>
            <select defaultValue = "pound" className="custom-select" id="currencySelect" onChange={submitEvent} style={{backgroundColor: "transparent", border: "none", color: "black"}}>
                <option value="dollar" name="dollar" style={{border: "none", color: "black"}}>$ Dollar</option>
                <option value="pound" name="pound">£ Pound</option>
                <option value="euro" name="euro">€ Euro</option>
                <option value="ruppee" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default CurrencySelect;
