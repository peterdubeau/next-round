import React, { useState} from 'react'
import {Link } from 'react-router-dom'
import { postUser } from '../../services/users'
import { getTasks } from '../../services/tasks'
import CreateUser from '../CreateUser/CreateUser'
 
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

        <CreateUser 
          code={formData.code}
          admin={formData.isAdmin}
        />

      </form>
    </>
  )
}
