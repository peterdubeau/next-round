import React, { useState, useEffect }from 'react'
import { withRouter } from 'react-router-dom'
import { getUsers } from '../../services/tasks'

function Task(params) {
  const initialState = {
  users: []
}
  const [usersState, usersSetState] = useState(initialState)


  const showUsers = async () => {
    const res = await getUsers(params.match.params.code)
    console.log(res.data.users)
    usersSetState({
      users: res.data.users
    })
    // return res.data.users
    }
    
  useEffect(() => {
     showUsers()
},[])
  return (<>
    
    {usersState.users.map(thing =>
      <p>{thing.username}</p>)}
 </>)
}

export default withRouter(Task)