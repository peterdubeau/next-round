import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { postTask, getTasks } from '../../services/tasks'  
import { createHooks } from '../../services/hooks'

function Home(props) {
  const handleSubmit = async () => {
    const newTask = await postTask({ code: props.component })
  
    const findId = await getTasks()
    let roomId = findId.filter(id => id.code === props.component)[0].id
    console.log(roomId)
    const newHooks = await createHooks({ task_id: roomId })
    
  }

  return (
    <div>
      <h1>Welcome to next round!</h1>
      <Link to={`/create-room/${props.component}`}><button onClick={handleSubmit}>Create Room</button></Link>
      <Link to='/join-room'><button>Join Room</button></Link>
    </div>
  )
}

export default withRouter(Home)
