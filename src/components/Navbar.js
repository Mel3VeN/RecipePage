import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/tags">tags</Link>
        </li>
        <li>
          <Link to="/recipes">recipes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
