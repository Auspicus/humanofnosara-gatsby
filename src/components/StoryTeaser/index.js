import React from 'react'

import { Link } from 'gatsby'

import './styles.css'

const StoryTeaser = ({ link, image }) => {
  return (
    <div className="StoryTeaser">
      <Link className="StoryTeaser__link-wrapper" to={`/human/${link}`}>
        <img className="StoryTeaser__image" src={`https:${image}`} alt="" />
        <div className="StoryTeaser__image-overlay"></div>
        <div className="StoryTeaser__link">Read the story &raquo;</div>
      </Link>
    </div>
  )
}

export default StoryTeaser
