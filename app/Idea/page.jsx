
import React from 'react'
import { GoogleEffect } from './_component/GoogleEffect'
import { TimelineData } from './_component/TimelineData'
import ContactMarquee from './_component/ContactMarquee'



const page = () => {
  return (
    <div className=''>
    <GoogleEffect/>
    <TimelineData/>
    <ContactMarquee/>
    </div>
  )
}

export default page