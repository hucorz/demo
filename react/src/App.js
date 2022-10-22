import React, { Component } from 'react'
import List from './Components/List'
import Search from './Components/Search'
import qs from 'qs'

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
