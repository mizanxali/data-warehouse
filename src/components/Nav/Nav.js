import React from 'react'
import Logo from '../Logo/Logo'
import { BsArrowRight } from 'react-icons/bs'

import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <div>
                <Logo />
                <span className='links'>
                    <a className='active' href='#'>About</a>
                    <a href='#'>Help</a>
                    <a href='#'>Features</a>
                    <a href='#'>Signup</a>
                </span>
            </div>
            <div>
                <button><span>Request Demo</span><span><BsArrowRight className='arrow' /></span></button>
            </div>
        </div>
    )
}

export default Nav
