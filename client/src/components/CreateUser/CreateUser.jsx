import React from 'react'

export default function CreateUser() {

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
        <Link to={`/tasks/${props.component}`}>
          <button onClick={handleSubmit}>Join Room</button>
    </Link>
   </>)
}
