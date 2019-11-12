import React from "react";
import "./TodoItemCSS.css";


function TodoItem(props) {

    return(
        <label>
            <input type="checkbox" className="option-input checkbox"  />
            <span>{props.text}</span>
        </label>
    )

}

export default TodoItem;