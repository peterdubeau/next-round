import React from 'react'
import '../OnHook/OnHook.css'


export default function OffHook(props) {
  
    let check = props.component.filter(status => status.off_hook_id)
    let id = props.component.filter(status => status.id)

    if (props.admin === props.user) {
      return (<>
        <div className='hook'>
          <h3>Off The Hook:</h3>
          {check.map(thing =>
            <p className="username">
              {thing.username}
              <div className="edit-remove">
                <span id={thing.id} onClick={props.delete}> Remove</span> |
                <span id={thing.id} onClick={props.move}> Move</span>
              </div>
            </p>)}
        </div>
      </>)
    } else {
        return (<>
          <div className='hook'>
            <h3>Off The Hook:</h3>
            {check.map(thing =>
              <p className="username">
                {thing.username}
              </p>)}
          </div>
        </>)
    
    }
  }


