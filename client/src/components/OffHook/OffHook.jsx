import React from 'react'

export default function OffHook(props) {

  let check = props.component.filter(status => status.off_hook_id)
  return (<>
    <div className='off-hook-list'>
      <h3>Off The Hook</h3>
      {check.map(thing =>
        <p>
          {thing.username} <span className = "edit-remove">Remove | Move</span>
        </p>)}
    </div>
  </>)
}

