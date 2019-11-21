import React from "react";
import "./TodoItemCSS.css";


function TodoItem(props) {

    return(
        <label>
            <input type="checkbox" className="option-input checkbox" onChange={()=>{console.log("123")}} />
            <span>{props.item.text}</span>
        </label>
    )

}

export default TodoItem;