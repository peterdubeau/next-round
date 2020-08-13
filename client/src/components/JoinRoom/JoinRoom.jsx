import React, { useState} from 'react'
import {Link } from 'react-router-dom'
import { postUser } from '../../services/users'
import { getTasks } from '../../services/tasks'

export default function JoinRoom() {

  const [formData, setFormData] = useState({
    username: '',
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
    const findId = await getTasks(formData.code)
    let roomId = findId.filter(id => id.code === formData.code)[0].id
    const newUser = await postUser({
      username: formData.username,
      task_id: roomId,
      is_admin: formData.isAdmin
    })

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
              name="username"
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
