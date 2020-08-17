import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (<div className="header">
    <Link to="/"><p>Home</p></Link>
    <h1>Next Round</h1>
  </div>)
}
