import React from "react";
import "./TodoItemCSS.css"; 


class TodoItem extends React.Component{

    render(){

        const completedStyle = {
            
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
            
        }

        return(

            <label>

                <input 
                
                    type="checkbox" 

                    className = "option-input checkbox" 

                    onChange={()=>this.props.handelChange(this.props.item.id)} 

                />
                
                <span style = {this.props.item.completed ? completedStyle : null } >{this.props.item.text}</span>

            </label>

        )
        
    }

}

export default TodoItem;