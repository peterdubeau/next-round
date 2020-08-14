import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { getUsers } from '../../services/tasks'


function CompleteTask(props) {

  const handleSubmit = async () => {
    const res = await getUsers(props.match.params.code)
    const users = res.data.users
    let filter = users.find(id => id.username === props.match.params.name)
    let id = filter.id
    let task_id = filter.task_id
    let off_hook_id = filter.off_hook_id
    let on_hook_id = filter.on_hook_id
    console.log(id + " user ID")
    console.log(task_id + " task Id")
    console.log(off_hook_id)
    console.log(on_hook_id)
  }

  return (
    <div>
      <button onClick={handleSubmit}>I did it!</button>
    </div>
  )
}

export default withRouter(CompleteTask)


// let users = props.users
// let userName = props.match.params.name
// let userId = users.find(id => id.username === userName)



// const [currentUser, setCurrentUser] = useState({
//   name: userName,
//   id: userId.id
// })

// const { name, id } = currentUser

// console.log(currentUser)
