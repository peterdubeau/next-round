import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { postUser } from '../../services/users'


function CreateRoom() {
  const [formData, setFormData] = useState({
    username: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      [name]: value
    })
  }

  function generateCode() {
    let code = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charLength = characters.length
    for (let i = 0; i < charLength; i++) {
      code += characters.charAt(Math.floor(Math.random() * charLength))
    }
    return code.slice(0,4)
  }

  return (
    <div>
      <p>Room Code: {generateCode()}</p>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
        </label>
        <Link to={`/task/${generateCode}`}> </Link>
      </form>
    </div>
  )
}

export default withRouter(CreateRoom)