import React from 'react'
import { deleteUser } from '../../services/users'

export default function OffHook(props) {

    let check = props.component.filter(status => status.off_hook_id)
    let id = props.component.filter(status => status.id)
    return (<>
      <div className='off-hook-list'>
        <h3>Off The Hook</h3>
        {check.map(thing =>
          <p>
            {thing.username} <span className="edit-remove" id={thing.id} onClick={props.delete}>Remove</span>
          </p>)}
      </div>
    </>)
  }


