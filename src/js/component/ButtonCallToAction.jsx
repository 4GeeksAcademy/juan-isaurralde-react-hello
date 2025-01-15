import React from "react";
export const ButtonCallToAction = () => {
    const action = {
        text: "registrate",
        background: 'warning'
    }
    return (
        <button className={`btn btn-${action.background}`} type="button">
           {action.text}
            </button>)
}