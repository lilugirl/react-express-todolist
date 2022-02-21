import React from "react";
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { ThemeContext,store } from "./context";
import ChildComponent from './ChildComponent';
import "./App.css";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      store
    };
    console.log('this.state.store',this.state.store)
  }

  _updateState(){
    const state=this.state.store.getState();
    console.log('_updateState',state)
    this.setState(state)
    
  }

  componentDidMount(){
    console.log('component  did mount')
    this.state.store.subscribe(()=>this._updateState())
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
      <ThemeContext.Provider value={{store:this.state.store}}>
        <ChildComponent >哈哈</ChildComponent>
      <div>
        <h1>TodoList</h1>
        {/* <TodoForm addTodoItem={this.addTodoItem} />
        <TodoList todoItems={this.state.todoItems} deleteTodoItem={this.deleteTodoItem} /> */}
      </div>
      </ThemeContext.Provider>
    );
  }
}
