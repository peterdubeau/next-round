import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { postUser } from '../../services/users'
import { postTask } from '../../services/tasks'


function CreateRoom(props) {
  const [formData, setFormData] = useState({
    userName: ""
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    setFormData({
      userName: value,
      isAdmin: true
    })
  }

  const handleSubmit = async () => {
    const newTask = await postTask(props.component)
    // const newUser = await postUser(formData.userName)
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
          <button onClick={handleChange}>Join Room</button>
        </Link>
      </form>
    </div>
  )
}

export default withRouter(CreateRoom)