import React from 'react'

import './Testimonial.css'

const Testimonial = (props) => {
    return (
        <div className='testimonial'>
            <img alt="" src={props.image} />
            <div className='content'>
                <h1>{props.name}</h1>
                <h4>{props.title}</h4>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Testimonial
