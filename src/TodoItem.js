import React from "react";
import "./TodoItemCSS.css"; 


class TodoItem extends React.Component{

    render(){
        
        return(

            <label>

                <input 
                
                    type="checkbox" 
                    className="option-input checkbox" 
                    onChange={()=>this.props.handelChange(this.props.item.id)} 
                    
                />
                
                <span>{this.props.item.text}</span>

            </label>

        )
        
    }

}

export default TodoItem;