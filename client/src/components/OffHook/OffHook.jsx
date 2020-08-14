import React from 'react'

export default function OffHook(props) {

  let check = props.component.filter(status => status.off_hook_id !== null)
  return (<>
    <div className='off-hook-list'>
      <h3>Off The Hook</h3>
      {check.map(thing =>
        <p>
          {thing.username}
        </p>)}
    </div>
  </>)
}

