import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Newsarea from './Components/Newsarea'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Newsarea />
      </>
    )
  }
}

