import React, { useState, useEffect }from 'react'
import { withRouter } from 'react-router-dom'
import { getUsers } from '../../services/tasks'
import { updateUser, deleteUser } from '../../services/users'
import OnHook from '../OnHook/OnHook'
import OffHook from '../OffHook/OffHook'
import './Task.css'

function Task(props) {

  const [users, setUsers] = useState([])

  const showUsers = async () => {
    const res = await getUsers(props.match.params.code)
    setUsers(res.data.users);
  }

  useEffect(() => {
    showUsers()
  }, [])

  const onCompleteClick = async (e) => {
    let user = users.find(user => user.username === props.match.params.name);
    console.log()
    if (user) {
      const hooks = await updateUser({
        id: user.id,
        off_hook_id: user.on_hook_id
      })
    } else {
      alert('You have been booted by the host!')
    }
    
  }

  const removeUser = async (e) => {
    const remove = await deleteUser(e.target.id)
  }

  let admin = users.filter(status => status.is_admin == true)
  let adminStatus = admin.map(name => name.username).toString()
  let currentUser = props.match.params.name
  
    
    return (<>
      <div className="hook-list">
        <OnHook component={users} delete={removeUser} admin={adminStatus} user={currentUser}/>
        <OffHook component={users} delete={removeUser} admin={adminStatus} user={currentUser} />
        <button onClick={onCompleteClick}>I did it!</button>
      </div>
    </>)

}
export default withRouter(Task)