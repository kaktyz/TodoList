import React from 'react';
import './App.css';
import TodoItem from "./TodoItem.js";
import todosData from "./todosData.js";


class App extends React.Component{
  
  constructor() {

      super()

      this.state = {

        todos: todosData,

        isDone: false,
        
        isLoading: true,

      }

      this.handelChange = this.handelChange.bind(this)

    }

    handelChange(id){ 

      this.setState(prevState=>{

        const updateTodos = prevState.todos.map(todo=>{
          
          if(todo.id === id){

            if( todo.completed){
              todo.completed = !todo.completed;

              return true;

            }
            todo.completed = !todo.completed;

            return false;

          }

          return todo

        })


        return updateTodos

      })

    }

    componentDidMount() {

      setTimeout(() => {

        this.setState({

            isLoading: false

          })

        }, 500)

    }

    render() {

      const todoItems = this.state.todos.map(

          item => <TodoItem 
            
            key={item.id} 

            item={item} 

            handelChange={this.handelChange}

          
          />

      )

      if(this.state.isLoading){

        return(<div className = "loadingClass">Loading</div>)

      } return (
        
          <div className="todo-list">
            
            {todoItems}
            
          </div>
        
        )
      
    }

}


export default App;
