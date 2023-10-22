import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className='nav-img'>
            <img src="/images/Frame 2 1.png" alt="brand logo" />
        </div>
            <ul>
                <li href = "#">Home</li>
                <li href = "#">About</li>
                <li href = "#">Contact</li>
            </ul>
    </nav>
  )
}

export default Navbar