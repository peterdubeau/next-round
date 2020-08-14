import React, { useState } from 'react'
import { withRouter} from 'react-router-dom'
import CreateUser from '../CreateUser/CreateUser'
import Task from '../Task/Task'

 
function CreateRoom(props) {
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

  return (
    <div>
      <form>
        <p>Room Code: {props.component}</p>
        <label>
       Enter task to be completed:
        <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
             />
        </label>
        <CreateUser code={props.component} admin={formData.isAdmin} />
        <Task name={formData.name}/>
      </form>
    </div>
  )
}

export default withRouter(CreateRoom)