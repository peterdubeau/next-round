import React, { useState, useEffect }from 'react'
import { withRouter } from 'react-router-dom'
import { getUsers } from '../../services/tasks'
import OnHook from '../OnHook/OnHook'
import OffHook from '../OffHook/OffHook'
import './Task.css'

function Task(params, props) {
  const initialState = {
  users: []
}
  const [usersState, usersSetState] = useState(initialState)


  const showUsers = async () => {
    const res = await getUsers(params.match.params.code)
    usersSetState({
      users: res.data.users
    })
  }

  useEffect(() => {
     showUsers()
  }, [])
  
  console.log(props.name)
  return (<>
    <div className= "hook-list">
      <OnHook component={usersState.users} />
      <OffHook component={usersState.users} />
    </div>
 </>)
}

export default withRouter(Task)