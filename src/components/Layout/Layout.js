import React from 'react'
import Helmet from 'react-helmet'

import './Layout.css'

const Layout = ({ menu, children }) => {
  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Satisfy|Nunito+Sans:400,700" rel="stylesheet" />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout
