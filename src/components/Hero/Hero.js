import React from 'react'

import image from '../../assets/images/image1 1.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <h1>Save your data storage here.</h1>
            <p>Data Warehouse is a data storage area that has been
                tested for security, so you can store your data here
                safely but not be afraid of being stolen by others.</p>
            <img alt="" src={image} />
            <button>Learn more</button>
        </div>
    )
}

export default Hero
