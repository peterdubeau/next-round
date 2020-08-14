import React from 'react'

export default function OffHook(props) {
  return (<>
    <div className='off-hook-list'>
      <h3>Off The Hook</h3>
      {props.component.map(thing =>
        <p>{thing.username}</p>)}
    </div>
  </>)
}

