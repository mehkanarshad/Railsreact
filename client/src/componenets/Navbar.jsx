import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link className= "navbar-text" to = "/">Posts Lists</Link> {"  |  "}
      <Link  className= "navbar-text" to = "/new">New Post</Link>

    </div>
  )
}
