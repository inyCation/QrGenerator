import React from 'react'
import "./style.scss"


const Header = () => {
  return (
    <nav>
        <div className="logo">GEN QR</div>
        <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Feedback</li>
        </ul>

    </nav>
  )
}

export default Header