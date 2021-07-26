import React from 'react'
import Feature from './Feature/Feature'

import image1 from '../../assets/images/image3 1.png'
import image2 from '../../assets/images/image4.png'
import image3 from '../../assets/images/image5 1.png'
import image4 from '../../assets/images/image6 1.png'
import './Features.css'

const Features = () => {
    return (
        <div className='features'>
            <h1>Features</h1>
            <p>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
            <div className='features-grid'>
                <Feature image={image1} title="Search Data" content="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time." />
                <Feature image={image2} title="24 Hours Access" content="Access is given 24 hours a full morning to night and
                                                                            meet again in the morning, giving you comfort when
                                                                            you need data when urgent." />
                <Feature image={image3} title="Print Out" content="Print out service gives you convenience if someday
                                                                    you need print data, just edit it all and just print it." />
                <Feature image={image4} title="Security Code" content="Data Security is one of our best facilities. Allows for your files
                                                                        to be safer. The file can be secured with a code or password that 
                                                                        you created, so only you can open the file." />
            </div>
        </div>
    )
}

export default Features
