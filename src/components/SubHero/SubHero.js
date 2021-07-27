import React from 'react'

import image from '../../assets/images/image2.png'
import './SubHero.css'

const SubHero = () => {
    return (
        <div className='sub-hero'>
            <img alt="" src={image} />
            <div>
                <h1>We are a high-level data storage bank</h1>
                <p>
                    The place to store various data that you can access at any time through the internet and where you can carry it.
                    This very flexible storage area has a high level of security.
                    To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.
                </p>
            </div>
        </div>
    )
}

export default SubHero
