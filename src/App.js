import React, { Component } from 'react';
import Inputbox from "./components/InputBox/InputBox.jsx";
import TodosList from "./components/TodosList/TodosList.jsx";


class  App extends Component {
  state = { 
    todos :[
      {id:"1",todo:"learn jsx"},
      {id:"2", todo:"learn css"},
      {id: "3",todo:"learn htims"},

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
}



  render() { 
    let todos=this.state.todos;
    let deleteTodo =this.deleteTOdo;
    return (
      <div className="App">
     <Inputbox></Inputbox>
     <TodosList todos= {todos} deleteTodo ={deleteTodo} ></TodosList>
        </div>
    );
  }
}
 


export default App;
