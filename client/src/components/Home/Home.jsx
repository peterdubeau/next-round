import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home(props) {
  console.log(props)


  return (
    <div>
      <Link to='/create-room'><button className='button' id='create'>Create Room</button></Link>
      <Link to='/join-room'><button className='button'>Join Room</button></Link>
    </div>
  )
}

export default Home
