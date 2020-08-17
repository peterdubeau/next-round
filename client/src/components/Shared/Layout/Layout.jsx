import React from 'react'
import Nav from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout(props) {
  return (<>
    <Nav />
    <div className='layout'>
      {props.children}
    </div>
    <Footer code={props.code}/>
  </>)
}
