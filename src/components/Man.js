import React, { Component } from 'react'
import "../components/Man.css"
export default class Man extends Component {
  render() {
    return (
      <div className='man-container'>
          <svg className='man' height='250' width="200">
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />

            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />

            <circle cx="140" cy="70" r="20" />

            <line x1="140" y1="90" x2="140" y2="150" />

            <line x1="140" y1="120" x2="120" y2="100" />
            <line x1="140" y1="120" x2="160" y2="100" />

            <line x1="140" y1="150" x2="120" y2="180" />
            <line x1="140" y1="150" x2="160" y2="180" />


          </svg>

      </div>
    )
  }
}
