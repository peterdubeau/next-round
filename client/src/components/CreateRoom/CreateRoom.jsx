import React, { useState } from 'react'
import { withRouter} from 'react-router-dom'
import CreateUser from '../CreateUser/CreateUser'
import Task from '../Task/Task'
import { Link } from 'react-router-dom'
import { postUser } from '../../services/users'
import { createHooks, getHooks } from '../../services/hooks'
import { postTask, getTasks } from '../../services/tasks'

 
function CreateRoom(props, params) {
  const [formData, setFormData] = useState({
    username: "",
    name: "", //task name
    isAdmin: true
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { name ,value } = e.target
    setFormData({
      [name]: value,
      isAdmin: true,
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

  return (
    <div>
      <form>
        <p>Room Code: {params.match.params.code}</p>
        {/* <label>
          Enter task: 
        <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onSubmit = {handleSubmit}
             />
        </label> */}
          <CreateUser code={params.match.params.code} admin={formData.isAdmin} />
          <Task name={formData.name}/>
      </form>
    </div>
  )
}

export default withRouter(CreateRoom)