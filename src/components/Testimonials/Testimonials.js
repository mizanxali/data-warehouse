import React from 'react'
import Testimonial from './Testimonial/Testimonial'
import { BsThreeDots, BsArrowRight, BsArrowLeft } from 'react-icons/bs'

import JohnFang from '../../assets/images/John Fang.png'
import JenyDoe from '../../assets/images/Jeny Doe.png'
import William from '../../assets/images/William.png'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='container'>
            <div className='testimonials'>
                <h1>Testimonials</h1>
                <div className='icon-group'>
                    <BsThreeDots />
                    <span><BsArrowRight /><BsArrowLeft /></span>
                </div>
            </div>
            <div className='overlay'>
                <div className='row-items'>
                    <Testimonial image={JohnFang} name="John Fang" title="wordfaang.com" content="Suspendisse ultrices at diam lectus nullam. 
                Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla." />
                    <Testimonial image={JenyDoe} name="Jeny Doe" title="UX Engineer" content="Suspendisse ultrices at diam lectus nullam. 
                Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla." />
                    <Testimonial image={William} name="William" title="Web Designer" content="Suspendisse ultrices at diam lectus nullam. 
                Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla." />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
