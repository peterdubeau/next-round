import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home(props) {
  console.log(props)


  return (
    <div>
      <Link to='/create-room'><button className='button' id='create'>Create Room</button></Link>
      <Link to='/join-room'><button className='button'>Join Room</button></Link>
      <br />
      <p>Good morning, Constellations! It’s graduation day! A wiser man than I once said “brevity is the soul of wit.” So, I’m going to heed that advice and keep this short. I’m super proud of everybody. We got through an intense three months and now we’re about to be set out into the world. I know you’re all going to do great things! </p>
      <p>Steve, Ali, Bruno, and David; I want to thank all of you for your guidance (and patience with us) as we made our way through the immersive. You're incredible teachers! </p>
      <p>Katelyn, Misha, and Soleil; Thank you for getting us through the toughest times of the class, both technically and sometimes emotionally. I have no idea how we would have done it without you.</p> 
      <p>Last, but certainly not least, thank you Shay! You have an uncanny ability to take difficult concepts and explain them in an easy to understand way. Also, I don’t know how you put up with us every day after class.</p>
      <p> Well, that’s it. I wish everybody the Best of luck, and can’t wait to see what you’re all doing in the future!</p>
      <p>-Pete</p>
      <p>P.S. Shay, What time are TA hours?</p>
    </div>   
  )
}

export default Home
