import React, { Component } from 'react';

class Inputbox extends Component {
    state = { 
        todoValue :""
     };

     handleOnchange=(e)=>{
         let value=e.target.value;
         this.setState({
             todoValue :value
         })
     };

     handleAddTodo =(e)=>{
         let todo =this.state.todoValue;
         this.props.addTodo(todo);
         this.setState({
             todoValue:""
         })
     };



    render() { 

         let todoValue = this.state.todoValue;
         let handleOnchange =this.handleOnchange;
         let handleAddTodo =this.handleAddTodo;

         


        return ( 
             
            <div className="input-box container input-group mt-4">

                <input type="text" className="form-control" value ={todoValue}
                onChange={handleOnchange}
                />

        
                <button className="btn btn-primary" onClick={handleAddTodo }>Add TODO</button>
            </div>

            );
    }
}
 
export default Inputbox;