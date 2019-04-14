import React, { useEffect, useState } from 'react'

import StoryTeaser from '../StoryTeaser'

import './styles.css'
import MasonryLayout from '../MasonryLayout'

const determineColumns = (newWidth, currColumns) => {
  if (newWidth <= 560 && currColumns !== 1)
  {
    return 1
  }
  else if (newWidth >= 560 && newWidth <= 960 && currColumns !== 2)
  {
    return 2
  }
  else if (newWidth >= 960 && currColumns !== 3)
  {
    return 3
  }

  return null
}

const StoryListing = ({ nodes }) => {
  const [columns, setColumns] = useState(determineColumns(window.innerWidth, null))

  useEffect(() => {
    const determineAndSetColumns = e => {
      const newColumns = determineColumns(e.target.innerWidth, columns)
      if (newColumns) setColumns(newColumns)
    }
    window.addEventListener('resize', determineAndSetColumns)
    return () => {
      window.removeEventListener('resize', determineAndSetColumns)
    }
  })

  return (
    <div className="StoryListing">
      <MasonryLayout columns={columns} gap={6}>
        {nodes.map(({ node }) => {
          return (
            <StoryTeaser key={node.id} link={node.slug} image={node.field_teaser_image.url} />
          )
        })}
      </MasonryLayout>
    </div>
  )
}

export default StoryListing
