import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'
import OctoCats from './components/OctoCats'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <OctoCats />
        <Footer />
      </>
    )
  }
}
export default App
