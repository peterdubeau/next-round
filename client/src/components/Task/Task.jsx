import React, { useState, useEffect }from 'react'
import { withRouter } from 'react-router-dom'
import { getUsers, destroyTask } from '../../services/tasks'
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

  const adminMoveOn = async (e) => {
    let user = users.find(user => user.username === props.match.params.name);
    if (user) {
      const hooks = await updateUser({
        id: e.target.id,
        off_hook_id: null
      })
    }
  }
    useEffect(() => {
      showUsers()
    }, [])

    const onCompleteClick = async (e) => {
      let user = users.find(user => user.username === props.match.params.name);
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

    const deleteRoom = async () => {
      const remove = await destroyTask(props.match.params.code)
      return remove
    }

    let admin = users.filter(status => status.is_admin == true)
    let room = admin.map(name => name.task_id).toString()
    let adminStatus = admin.map(name => name.username).toString()
    let currentUser = props.match.params.name
    console.log(props.match.params.code)
    return (<>
      <div className="hook-list">
        <OnHook component={users} delete={removeUser} move={onCompleteClick} admin={adminStatus} user={currentUser} />
        <OffHook component={users} delete={removeUser} admin={adminStatus} user={currentUser} move={adminMoveOn}/>
        <button onClick={onCompleteClick}>I did it!</button>
        {adminStatus === currentUser ? <button onClick={deleteRoom}>Delete Room</button> : ''}
      </div>
    </>)

  }


export default withRouter(Task)