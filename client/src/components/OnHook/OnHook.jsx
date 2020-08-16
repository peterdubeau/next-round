import React from 'react'

export default function OnHook(props) {

  let check = props.component.filter(status => status.off_hook_id == null)
  
  if (props.admin === props.user) {
    return (<>
      <div className='off-hook-list'>
        <h3>On The Hook</h3>
        {check.map(thing =>
          <p>
            {thing.username}
            <span className="edit-remove" id={thing.id} onClick={props.delete}> Remove</span>
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
