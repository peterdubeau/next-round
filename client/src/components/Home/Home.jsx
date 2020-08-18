import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  console.log(props)


  return (
    <div>
      <Link to='/create-room'><button>Create Room</button></Link>
      <Link to='/join-room'><button>Join Room</button></Link>
    </div>
  )
}

export default Home
