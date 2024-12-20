import React from 'react'
import HeadingSection from './HeadingSection'
import AboutClasses from './AboutClasses'
import ClassesDetails from './ClassesDetails'
import Schedule from './Schedule'

const index = () => {
  return (
    <div>
        <HeadingSection/>
        <AboutClasses/>
        <ClassesDetails/>
        <Schedule/>
    </div>
  )
}

export default index