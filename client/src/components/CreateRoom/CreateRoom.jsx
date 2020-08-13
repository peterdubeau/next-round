import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { postUser } from '../../services/users'
import { postTask, getTasks } from '../../services/tasks'
import CreateUser from '../CreateUser/CreateUser'

 
function CreateRoom(props) {
  const [formData, setFormData] = useState({
    username: "",
    isAdmin: true
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    setFormData({
      username: value,
      isAdmin: true,
    })
  }

  const handleSubmit = async () => {
    const newTask = await postTask({ code: props.component })
   
    const findId = await getTasks()
    let roomId = findId.filter(id => id.code === props.component)[0].id
    console.log(roomId)
    const addUser = await postUser({
      username: formData.username,
      task_id: roomId,
      is_admin: formData.isAdmin
    })
  }

  console.log(props.component)

  return (
    <div>
      <form>
        <p>Room Code: {props.component}</p>
        <CreateUser code={props.component} admin={formData.isAdmin} />
      </form>
    </div>
  )
}

export default withRouter(CreateRoom)