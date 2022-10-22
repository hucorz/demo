import React, { Component } from 'react'
import Header from './Components/Header'
import List from './Components/List'
import Footer from './Components/Footer'
import './App.css';

export default class App extends Component {
  state = {
    todos: [
      {id:'01', name:'吃饭', done:true},
      {id:'02', name:'睡觉', done:true},
      {id:'03', name:'打豆豆', done:false}
    ]
  }  

  addTodo = (todoObj) => {        // 新增一个 Item
    const {todos} = this.state
    const newTodos = [...todos, todoObj]
    this.setState({todos: newTodos});
  }
 
  updateTodo = (id, done) => {    // 更新一个 Item 的 done 与否
    const {todos} = this.state
    const newTodos = todos.map( todo => {
      return todo.id === id ? {...todo, done} : todo;
    })
    this.setState({todos: newTodos});
  }

  deleteTodo = (id) => {     // 删除一个 Item
    const {todos} = this.state
    const newTodos = todos.filter( todo => {
      return todo.id !== id;
    })
    this.setState({todos: newTodos});
  }

  checkAllTodo = (done) => { // footer 全选或者全不选
    const {todos} = this.state
    const newTodos = todos.map( todo => {
      return {...todo, done}
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter( todo => { 
      return !todo.done; 
    });
    this.setState({todos:newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    );
  }
}


