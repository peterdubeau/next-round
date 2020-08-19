import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (<div className="header">
    <Link to="/"><p className="home">Home</p></Link>
    <h1 className="title">Next Round: Constellations Edtion!</h1>
  </div>)
}
