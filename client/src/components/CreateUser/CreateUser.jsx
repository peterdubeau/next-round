import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { postUser } from '../../services/users'
import { createHooks } from '../../services/hooks'
import { postTask, getTasks } from '../../services/tasks'

export default function CreateUser(props) {

  const [formData, setFormData] = useState({
    username: "",
    isAdmin: false,
    code: ''
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    setFormData({
      username: value,
      isAdmin: false
    })
  }

  const handleSubmit = async () => {
    const newTask = await postTask({ code: props.code })
  
    const findId = await getTasks()
    let roomId = findId.filter(id => id.code === props.code)[0].id
    const newHooks = await createHooks({ task_id: roomId })
    // console.log(newHooks.id)
    const addUser = await postUser({
      username: formData.username,
      task_id: roomId,
      is_admin: props.admin,
      on_hook_id: newHooks.id
    })
  }

  return (<>
    <label>
       Username:
      <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
      />
    </label>
        <Link to={`/tasks/${props.code}/users/${formData.username}`}>
          <button onClick={handleSubmit}>Enter Room</button>
        </Link>
   </>)
}
