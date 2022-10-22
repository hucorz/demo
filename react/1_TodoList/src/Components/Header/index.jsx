import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  handleKeyUp = (event) => {
    if (event.key != 'Enter') {
      return;
    } else if (event.target.value.trim() === ''){
      alert("blank is not allowed")
      return
    }
    const todoObj = {id:nanoid(), name:event.target.value, done:false}
    this.props.addTodo(todoObj)
    event.target.value = ''
  }
  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder='input new todo event'/>
      </div>
    )
  }
}
