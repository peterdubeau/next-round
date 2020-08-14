import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { postUser } from '../../services/users'
import { createHooks, getHooks } from '../../services/hooks'
import { postTask, getTasks } from '../../services/tasks'

export default function CreateUser(props) {

  const [formData, setFormData] = useState({
    username: "",
    isAdmin: false,
    code: '',
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
  
    const findId = await getTasks()
    let roomId = findId.filter(id => id.code === props.code)[0].id
    let thing = props.code
    console.log(roomId)
    let hookId = thing
      // .filter(id => id.code === props.code)[0].id
    const newHooks = await getHooks(hookId)
    console.log(newHooks)
    const addUser = await postUser({
      username: formData.username,
      task_id: roomId,
      is_admin: props.admin,
      on_hook_id: newHooks
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
        <Link to={`/tasks/${props.code}`}>
          <button onClick={handleSubmit}>Enter Room</button>
        </Link>
   </>)
}
