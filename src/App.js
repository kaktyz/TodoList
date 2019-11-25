import React from 'react';
import './App.css';
import TodoItem from "./TodoItem.js";
import todosData from "./todosData.js";


class App extends React.Component{
  
  constructor() {
      super()
      this.state = {
       todos: todosData
      }
      this.handelChange = this.handelChange.bind(this)
    }

                                // Обновите состояние так, чтобы у элемента с заданным id свойство
                                // completed поменялось бы c false на true (или наоборот).
                                // Помните о том, что предыдущую версию состоянию менять не следует.
                                // Вместо этого нужно вернуть новую версию состояния, содержащуюизменения.
                                // (Подумайте о том, как для этого использовать метод массивов map.)

    handelChange(id){

      this.setState(prevState=>{

        const updateTodos = prevState.todos.map(todo=>{
          
          if(todo.id === id){todo.completed = !todo.completed}
          return todo

        })

        return updateTodos

      })

    }

    render() {
      const todoItems = this.state.todos.map(

          item => <TodoItem 
            
            key={item.id} 
            item={item} 
            handelChange={this.handelChange}
          
          />

        )
      return (
        <div className="todo-list">
          {todoItems}
        </div>
      )
    }

}


export default App;
