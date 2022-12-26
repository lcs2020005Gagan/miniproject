import React from 'react'

function Alert(props) {
  return (
//     <div className={`alert alert-${props.color} d-flex align-items-center`} role="alert" style={{"fontSize":"0.6rem","display":"flex","padding":"0","margin":"0"}}>
//   <div style={{"height":"100%","display":"flex","padding":"0.5rem","margin":"0"}}>
//     {props.message}
//   </div>
// </div>
<div className="alert alert-warning alert-dismissible fade show" role="alert" style={{"fontSize":"0.6rem"}}>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert