import React from 'react'
import Logo from '../Logo/Logo'

import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'

import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-col1'>
                    <h4><Logo /> DataWarehouse</h4>
                    <h5>Warehouse Society, 234<br />Bahagia Ave Street PRBW 29281</h5>
                    <p>info@warehouse.project<br />1-232-3434 (Main)</p>

                </div>
                <div className='footer-col2'>
                    <h4>About</h4>
                    <p>Profile</p>
                    <p>Features</p>
                    <p>Careers</p>
                    <p>DW News</p>
                </div>
                <div className='footer-col3'>
                    <h4>Help</h4>
                    <p>Support</p>
                    <p>Sign up</p>
                    <p>Guide</p>
                    <p>Reports</p>
                    <p>Q&A</p>
                </div>
                <div className='footer-col4'>
                    <h4>Social Media</h4>
                    <div className='footer-icons'>
                        <FaFacebook />
                        <AiFillTwitterCircle />
                        <AiFillInstagram />
                    </div>
                </div>
            </div>
            <div className='post-footer'>
                <p>© Datawarehouse™, 2020. All rights reserved.<br />Company Registration Number: 21479524.</p>
                <IoChatbubbleEllipsesSharp className='chat-icon' />
            </div>
        </>
    )
}

export default Footer
