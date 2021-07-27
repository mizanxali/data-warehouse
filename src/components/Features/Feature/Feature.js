import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import './Feature.css'

const Feature = (props) => {
    return (
        <div className='feature' style={{backgroundColor: props.color}}>
            <img alt="" src={props.image} />
            <div>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <a href='/'>Learn more <span><BsArrowRight className='arrow' /></span></a>
            </div>
        </div>
    )
}

export default Feature
