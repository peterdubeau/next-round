import React, { useState } from 'react'
import CreateUser from '../CreateUser/CreateUser'

 
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
        <CreateUser code={props.component} admin={formData.isAdmin} />
      </form>
    </div>
  )
}

export default CreateRoom