import React from 'react'
import { updateUser } from '../../services/users'

export default function OffHook(props) {

    const move = async (e) => {
      const remove = await updateUser(e.target.id)
    }
    

    let check = props.component.filter(status => status.off_hook_id)
    let id = props.component.filter(status => status.id)
    if (props.admin === props.user) {
      return (<>
        <div className='off-hook-list'>
          <h3>On The Hook</h3>
          {check.map(thing =>
            <p>
              {thing.username}
              <span className="edit-remove" id={thing.id} onClick={props.delete}> Remove</span> |
              <span className="edit-remove" id={thing.id} onClick={move}> Move</span>
            </p>)}
        </div>
      </>)
    } else {
        return (<>
          <div className='off-hook-list'>
            <h3>On The Hook</h3>
            {check.map(thing =>
              <p>
                {thing.username}
              </p>)}
          </div>
        </>)
    
    }
  }


