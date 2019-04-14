import React from 'react'

import './styles.css'

const StoryDetail = ({ image, text }) => {
  return (
    <div className="StoryDetail">
      <img className="StoryDetail__featured-image" src={`https:${image}`} alt="" />
      <div className="StoryDetail__body" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default StoryDetail
