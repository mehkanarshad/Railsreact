import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to = "/">Posts Lists</Link> {"  |  "}
      <Link to = "/new">New Post</Link>

    </div>
  )
}
