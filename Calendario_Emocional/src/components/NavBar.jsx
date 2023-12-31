import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div className='navBar'>
        <ul>
            <li><a href="">¿Para que sirve?</a></li>
            <li><a href="">Balance inicial</a></li>
            <li><a href="">Establece tus objetivos</a></li>
            <li><a href="">Manos a la obra</a></li>
        </ul>
      </div>
    )
  }
}
