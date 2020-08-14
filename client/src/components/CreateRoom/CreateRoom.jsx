import React, { useState } from 'react'
import { withRouter} from 'react-router-dom'
import CreateUser from '../CreateUser/CreateUser'
import Task from '../Task/Task'

 
function CreateRoom(params) {
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

  const handleSubmit = () => {

  }

  return (
    <div>
      <form>
        <p>Room Code: {params.match.params.code}</p>
        <label>
          Enter task: 
        <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onSubmit = {handleSubmit}
             />
        </label>
          <CreateUser code={params.match.params.code} admin={formData.isAdmin} />
          <Task name={formData.name}/>
      </form>
    </div>
  )
}

export default withRouter(CreateRoom)