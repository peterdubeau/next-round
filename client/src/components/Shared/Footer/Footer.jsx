import React from 'react'
import { withRouter } from 'react-router-dom'

function Footer(props) {
  return (
    <div>
      Room Code: {props.match.params.code}
    </div>
  )
}

export default withRouter(Footer)