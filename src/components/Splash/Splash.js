import React from 'react'

import './Splash.css'
import splash from './splash.jpg'

const Splash = ({ title }) => {
  return (
    <div className="splash">
      <div className="splash__background" style={{ backgroundImage: `url(${splash})` }}></div>
      <h1 className="splash__title">{title}</h1>
    </div>
  )
}

export default Splash
