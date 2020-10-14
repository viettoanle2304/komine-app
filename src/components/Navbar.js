import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './Button'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/komine-app" className="navbar-logo" onClick={closeMobileMenu}>
                        <img className='navbar-logo__komine-head' src={process.env.PUBLIC_URL + '/images/KomineHead.png'} alt="Logo"/>
                        <img className='navbar-logo__main-logo' src={process.env.PUBLIC_URL + '/images/4.png'} alt="Logo"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/komine-app' className='nav-links' onClick={closeMobileMenu}>
                                <i className='fas fa-home'></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/latest' className='nav-links' onClick={closeMobileMenu}>
                                Latest
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/genres' className='nav-links' onClick={closeMobileMenu}>
                                Genres
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/popular' className='nav-links' onClick={closeMobileMenu}>
                                Popular
                            </Link>
                        </li>
                        <li className="nav-links-mobile">
                            <Link to='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                            <i className='fas fa-user-circle'></i> Sign In
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>
                        <i className='fas fa-user-circle'></i> SIGN IN
                        </Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
