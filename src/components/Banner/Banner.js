import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import './Banner.css'

const Banner = () => {
    return (
        <>
            <hr />
            <div className='banner'>
                <div className='content'>
                    <h1>Try for free!</h1>
                    <h4>Get limited 1 week free try our features!</h4>
                </div>
                <div className='button-group'>
                    <button className='learn-more-button'>Learn more</button>
                    <button className='request-demo-button'><span>Request Demo</span><span><BsArrowRight className='arrow' /></span></button>
                </div>
            </div>
        </>
    )
}

export default Banner
