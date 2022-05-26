import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  render() {
    const {users} = this.state
    return (
      <div>
        <Search/>
        <List/>
      </div>
    )
  }
}
