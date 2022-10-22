import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { mouse: false }

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  handleCheck = (event) => {
    const {id} = this.props
    this.props.updateTodo(id, event.target.checked)
  }

  handleDelete = () => { 
    const {id} = this.props
    this.props.deleteTodo(id)
  }


  render() {
    const {name, done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck}/>
          <span>{name}</span>
        </label>
        <button style={{display: mouse ? 'block' : 'none'}} className="btn btn-danger" onClick={this.handleDelete}>删除</button>
      </li>
    )
  }
}
