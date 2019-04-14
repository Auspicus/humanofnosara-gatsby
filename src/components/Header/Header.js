import React from 'react'
import { Link } from 'gatsby'

import './Header.css'

const Header = ({ menu }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-items">
          {menu.map(item => 
            <li key={item.url} className="header__nav-item">
              <Link to={item.url}>
                {item.icon ? <img className="header__nav-item-icon" src={item.icon} alt=""/> : item.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
