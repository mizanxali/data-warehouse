import React from 'react'

import './Feature.css'

const Feature = (props) => {
    return (
        <div className='feature'>
            <img src={props.image} />
            <div>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <a href='#'>Learn more</a>
            </div>
        </div>
    )
}

export default Feature
