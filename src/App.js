import React, { Component } from 'react';
import Inputbox from "./components/InputBox/InputBox.jsx";
import TodosList from "./components/TodosList/TodosList.jsx";


class  App extends Component {
  state = {  };
  render() { 
    return (
      <div className="App">
     <Inputbox></Inputbox>
     <TodosList></TodosList>
    
        </div>
    );
  }
}
 


export default App;
