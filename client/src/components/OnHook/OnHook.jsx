import React from 'react'

export default function OnHook(props) {
  return (<>
    <div className='off-hook-list'>
      <h3>On The Hook</h3>
      {props.component.map(thing =>
        <p>{thing.username}</p>)}
    </div>
  </>)
}

