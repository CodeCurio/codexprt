import React from 'react'
import './Services.css'


const Services = () => {
  return (
    <div className='services container'>
        <div className="service">
            <img src="https://media.istockphoto.com/id/1201166649/photo/office-responsive-devices-web-design-website.webp?a=1&b=1&s=612x612&w=0&k=20&c=xwyXVLCiuigRsT65xjq6LtrOoUGPwZXbafmHRjQKLE0=" alt="" />
            <div className="caption">
                <img src="https://www.svgrepo.com/show/454707/responsif-seo-website.svg" alt="" />
                <p>Website Development</p>
            </div>
        </div>
        <div className="service">
            <img src="https://plus.unsplash.com/premium_photo-1661678060948-b8d1d293889a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFNlb3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div className="caption">
                <img src="https://www.svgrepo.com/show/343841/seo-training-marketing-presentation.svg" alt="" />
                <p>Search Engine Optimization</p>
            </div>
        </div>
        <div className="service">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div className="caption">
                <img src="https://www.svgrepo.com/show/343854/digital-marketing-promotion-advertising.svg" alt="" />
                <p>Digital Marketing</p>
            </div>
        </div>
    </div>
  )
}

export default Services