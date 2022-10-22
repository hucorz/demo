import React, { Component } from 'react'
import List from './Components/List'
import Search from './Components/Search'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}
