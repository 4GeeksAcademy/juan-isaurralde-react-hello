import React from "react";
export const ButtonCallToAction = () => {
    let action = {
        text: "registrate",
        background: 'warning'
    }
    const handleOnClick = ()=>{
       alert('presione el boton')
    }
    return (
        <button 
        className={`btn btn-${action.background}`} 
        type="button"
        onClick={handleOnClick}>
           {action.text}
            </button>)
}