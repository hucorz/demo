import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  handleSearch = () => {
    const searchName = this.inputElement.value
    PubSub.publish('SearchResult', {isFirst: false, isLoading: true})
    axios.get(`https://api.github.com/search/users?q=${searchName}`).then(
      response => {
        const users = response.data.items
        PubSub.publish('SearchResult', {users, isLoading: false, errInfo:''})
      },
      error => {
        PubSub.publish('SearchResult', {errInfo: error.message, isLoading: false})
      }
    )
  }
  
  render() {
    return (
        <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={ s => this.inputElement = s } type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}
