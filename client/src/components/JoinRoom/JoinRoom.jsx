import React, { useState} from 'react'
import CreateUser from '../CreateUser/CreateUser'
import './JoinRoom.css'

export default function JoinRoom() {

  const [formData, setFormData] = useState({
    username: '',
    code: '',
    isAdmin: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      [name]: value,
      isAdmin: false
    })
  }
  
  return (
      <form className ="details">
        <label>
          <input
              type="text"
              name="code"
              value={formData.code.toUpperCase()}
              onChange={handleChange}
              placeholder = "Room Code"
              />
        </label>  
        <div className='create-user'>
          <CreateUser 
            code={formData.code}
            admin={formData.isAdmin}
          />
        </div>
      </form>
  )
}
