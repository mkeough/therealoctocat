import React, { Component } from 'react'
import Icon from '../images/Icon.png'

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul class="leftside">
          <li>
            <img src={Icon} alt="" />
          </li>
          <li class="octo">
            <a href="">Octodex</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
        <ul class="rightside">
          <li>
            <a href="">Follow us on Twittwer</a>
          </li>
          <li>
            <a href="">Back to GitHub.com</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default NavBar
