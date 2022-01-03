import React from "react";
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import "./App.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
    };
  }

  componentDidMount(){
    const that=this;
    axios.get('/items').then(function(response){
      that.setState({todoItems: [...response.data]})
    })
  }

  addTodoItem=(item)=>{
    const newTodoItem={
      id:this.state.todoItems.length,
      value:item,
      done:false,
      delete:false
    };
    const that=this;
    axios.post('/items',{todoItem:newTodoItem}).then(function(response){
      that.setState({todoItems:[...response.data]})
    })
  }

  deleteTodoItem=(item)=>{
     item.delete=true;
     const that=this;
     axios.delete('/items',{data:{id:item.id}}).then(function(response){
       that.setState({todoItems:[...response.data]})
     })
    
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoForm addTodoItem={this.addTodoItem} />
        <TodoList todoItems={this.state.todoItems} deleteTodoItem={this.deleteTodoItem} />
      </div>
    );
  }
}
