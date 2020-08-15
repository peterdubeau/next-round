import React, { useState, useEffect }from 'react'
import { withRouter } from 'react-router-dom'
import { getUsers } from '../../services/tasks'
import { updateUser } from '../../services/users'
import OnHook from '../OnHook/OnHook'
import OffHook from '../OffHook/OffHook'
import './Task.css'

function Task(props) {
  const [users, setUsers] = useState([])
  const [button, setButton] = useState({
    button: false
  })


  const showUsers = async () => {
    const res = await getUsers(props.match.params.code)
    setUsers(res.data.users);
  }

  useEffect(() => {
    showUsers()
  }, [])

  
  const onCompleteClick = async (e) => {
    let user = users.find(user => user.username === props.match.params.name);
    setButton({ button: true })
    const hooks = await updateUser({
      id: user.id,
      off_hook_id: user.on_hook_id
    })
    
  }

  if (button !== true) {
    return (<>
      <div className="hook-list">
        <OnHook component={users} />
        <OffHook component={users} />
        <button onClick={onCompleteClick}>I did it!</button>
      </div>
    </>)
  } else {
    return (<>
      <div className="hook-list">
        <OnHook component={users} />
        <OffHook component={users} />
      </div>
    </>)
  }
}

export default withRouter(Task)