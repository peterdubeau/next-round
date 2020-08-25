import React from 'react'
import './Footer.css'

 export default function Footer() {
  return (
    <div>
      <ul className="footer">
        <li className="contact" id="name">Peter Du Beau 2020</li>
        <div className="icon-container">
          <li className="contact"><a href="https://github.com/peterdubeau"><img className="footer-icons" src="https://res.cloudinary.com/dyrvlnond/image/upload/v1598307716/Rookies%20and%20Dragons/github-icon-logo-png-transparent_i2ytsp.png"/></a></li>  
          <li className="contact"><a href="https://www.linkedin.com/in/peterdubeau"><img className="footer-icons" src="https://www.rpost.com/wp-content/uploads/2016/06/Linkedin_circle.svg_.png"/></a></li>
        </div>
      </ul>
    </div>
  )
}

