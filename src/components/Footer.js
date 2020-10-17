import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Sign Up to receive an email for daily releases chapters
                </p>
                <p className="footer-subscription-text">
                    Let's explore the world of manga together
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Your Email' className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <Link className='footer__link--item' to='/komine-app'>About</Link>
                    <Link className='footer__link--item' to='/komine-app'>Feedback</Link>
                    <Link className='footer__link--item' to='/komine-app'>Help</Link>
                    <Link className='footer__link--item' to='/komine-app'>Terms</Link>
                    <Link className='footer__link--item' to='/komine-app'>Privacy</Link>
                    <Link className='footer__link--item' to='/komine-app'>Personal Data</Link>
                </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                <div class='social-icons'>
                    <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <i class='fab fa-facebook-f' />
                    </Link>
                    <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fab fa-instagram' />
                    </Link>
                    <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fab fa-youtube' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i class='fab fa-twitter' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fab fa-linkedin' />
                    </Link>
                </div>
                </div>
            </section>
            <small class='website-rights'>Copyright © 2020</small>
        </div>
    )
}

export default Footer
