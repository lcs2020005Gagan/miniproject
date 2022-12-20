import React from 'react'
import OrganizationFooter from './OrganizationFooter'
import OrganizationAchievements from './OrganizationAchievements'
import OrganizationBanner from './OrganizationBanner'
import Projects from './Projects'

function Organization() {
  return (
    <div className='Organization'>
        <OrganizationBanner/>
        <OrganizationAchievements/>
        <Projects/>
        <OrganizationFooter/>
    </div>
  )
}

export default Organization