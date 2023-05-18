import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div>
      <Link to="/bookmark">Bookmark</Link>
      <Link to="/">Home</Link>
    </div>
  )
}
