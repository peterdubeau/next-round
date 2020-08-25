import React from 'react'
import './OnHook.css'

export default function OnHook(props) {
      
  let check = props.component.filter(status => status.off_hook_id == null)

  if (props.admin === props.user) {
    return (<>
      <div className='hook'>
        <h3 className="hook">On the hook:</h3>
        {check.map(thing =>
          <p className="username">
            {thing.username}
            <span className="edit-remove" id={thing.id} onClick={props.delete}> Remove</span>
          </p>)} 
      </div>
    </>)
  } else {
      return (<>
        <div className='hook'>
          <h3>On the hook:</h3>
          {check.map(thing =>
            <p className ="username">
              {thing.username}
            </p>)}
        </div>
      </>)
  
  }
}
