import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { createAdmin } from '../../services/users'
import { postTask, getTasks } from '../../services/tasks'

 
function CreateRoom(props) {
  const [formData, setFormData] = useState({
    username: ""
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    setFormData({
      username: value,
      isAdmin: true
    })
  }

  const handleSubmit = async () => {
    const newTask = await postTask({ code: props.component })
   
    const findId = await getTasks()
    let roomId = findId.filter(id => id.code === props.component)[0].id
    console.log(roomId)
    const addUser = await createAdmin({
      username: formData.username,
      task_id: roomId,
      is_admin: formData.isAdmin
    })
  }

  return (
    <div>
      <form>
        <p>Room Code: {props.component}</p>
        
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
        </label>
        <Link to={`/tasks/${props.component}`}>
          <button onClick={handleSubmit}>Join Room</button>
        </Link>
      </form>
    </div>
  )
}

export default withRouter(CreateRoom)