import React from 'react'

function NoContent() {
  return (
    <div className='NoContentJs' style={{"width":"30%","height":"30%","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","margin":"auto","color":"white","gap":"0.7rem"}}>
        <img src="https://byblosmiami.com/wp-content/plugins/elementor/assets/images/no-search-results.svg" alt=""  style={{"width":"100%","height":"100%"}}/>
        <h4>It's empty here</h4>
    </div>
  )
}

export default NoContent