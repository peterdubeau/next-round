import React, { useState} from 'react'
import {Link } from 'react-router-dom'
import { postUser } from '../../services/users'

export default function JoinRoom() {

  const [formData, setFormData] = useState({
    userName: '',
    code: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
      isAdmin: false
    })
  }


  const handleSubmit = async () => {
    const newUser = await postUser(formData.userName)
    // const newUser = await postUser(formData.userName)
  }

  return (
    <>
      <form>
        <label>
          Room Code:
          <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              />
        </label>  

        <label>
          Username:
          <input
              type="text"
              name="userName"
              value={formData.username}
              onChange={handleChange}
              />
        </label> 

        <Link to={`/tasks/${formData.code}`}>
          <button onClick={handleSubmit}>Join Room</button>
        </Link>
      </form>
    </>
  )
}
