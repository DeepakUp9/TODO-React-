import React, { Component } from 'react';
import Inputbox from "./components/InputBox/InputBox.jsx";
import TodosList from "./components/TodosList/TodosList.jsx";


class  App extends Component {
  state = { 
    todos :[
      {id:"1",todo:"Learn jsx"},
      {id:"2", todo:"Learn css"},
      {id: "3",todo:"Learn html"},
      {id: "3",todo:"Learn react js"},

    ],
   };

deleteTOdo= (id) =>{
  let updateTodos = this.state.todos.filter(function(todoObj){
    if(todoObj.id ===id){
      return false;
    }
    return true;
  })

  this.setState({
    todos:updateTodos
  })
};

addTodo=(todo)=>{
  let updateTodos =[...this.state.todos , {id:this.state.todos.length+1 , todo :todo},];

  this.setState({
    todos:updateTodos
  })
};

  render() { 
    let todos=this.state.todos;
    let deleteTodo =this.deleteTOdo;
    let addTodo= this.addTodo;
    return (
      <div className="App">
     <Inputbox addTodo={ addTodo }></Inputbox>
     <TodosList todos= {todos} deleteTodo ={deleteTodo} ></TodosList>
        </div>
    );
  }
}
 


export default App;
