import React from 'react'

import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a target="_blank" rel='noreferrer' href='https://twitter.com/Enrique_Orea'><BsTwitter/></a>
        </div>
        <div>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/enriqueorea/'><BsLinkedin/></a>
        </div>
        <div>
            <a target="_blank" rel='noreferrer' href="https://www.facebook.com/orea.e"><FaFacebookF/></a>
        </div>
    </div>
  )
}

export default SocialMedia