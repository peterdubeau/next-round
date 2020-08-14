import React, { useState} from 'react'
import CreateUser from '../CreateUser/CreateUser'
 
export default function JoinRoom() {

  const [formData, setFormData] = useState({
    username: '',
    code: '',
    isAdmin: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      [name]: value,
      isAdmin: false
    })
  }
  
  return (
    <>
      <form>
        <label>
          Room Code:
          <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              />
        </label>  

        <CreateUser 
          code={formData.code}
          admin={formData.isAdmin}
        />

      </form>
    </>
  )
}
