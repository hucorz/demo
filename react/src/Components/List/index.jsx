import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    errInfo: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('SearchResult', (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLoading, errInfo} = this.state
    if (isFirst) {
      return (
        <div className="row">
          <div className="card">Welcome!!!</div>
        </div>
      )
    } else if (isLoading) {
      return (
        <div className="row">
          <div className="card">Loading....</div>
        </div>
        
      )
    } else if (errInfo !== '') {
      return (
        <div className="row">
          <div className="card" style={{color: 'red'}}>{errInfo}</div>
        </div>
      )
    } else {
      console.log('user here')
      return (
        <div className="row">
          {
            users.map( user => {
              return (
                <div key={user.id}  className="card">
                  <a href={user.html_url} target="_blank">
                    <img src={user.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{user.login}</p>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
}
