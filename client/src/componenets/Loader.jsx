import React, { Component } from 'react'
import loading from './loading.svg'

export class Loader extends Component {
  render() {
    return (
      <div  style={{
        display: 'flex',          
        justifyContent: 'center', 
        alignItems: 'center',     
        height: '100vh',          
      }}>
        <img src={loading} />
      </div>
    )
  }
}

export default Loader