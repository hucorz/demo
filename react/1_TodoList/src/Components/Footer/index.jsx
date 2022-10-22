import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleCheckAll = (event) => { 
    this.props.checkAllTodo(event.target.checked)
  }
  
  clearAllDone = () => { 
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce( (pre, todo) => { return todo.done ? pre+1 : pre; }, 0)
    return (
      <div className='todo-footer'>
        <input type="checkbox" checked={doneCount == todos.length && todos.length} onChange={this.handleCheckAll}/>
        {doneCount} / {todos.length} 已完成
        <button onClick={this.clearAllDone}>清除已完成</button>
      </div>
    )
  }
}
