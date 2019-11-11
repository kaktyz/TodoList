import React from "react";
import "./TodoItemCSS.css";

function TodoItem() {

    // return(
    //     <div>
    //         <input type="checkbox" />
    //         <p>Text</p>
    //     </div>
    // )

    return(
        <label>
            <input type="checkbox" className="option-input checkbox"  />
            <span>Text</span>
        </label>
    )

}

export default TodoItem;