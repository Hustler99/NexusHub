import React from 'react'
import img1 from"../../assets/imgs/contact.png"

export default function Contact() {
  return (
    <>
    <div className="container bg-light main-panel">
      <div className="row">
        <div className="col-md-4 d-flex flex-column  justify-content-center">
          <h3 className=''>Contact Us</h3>
          <p>If you have any questions or require additional information, we encourage you to contact us. We are ready to assist in answering your inquiries</p>
        </div>
        <div className="col-md-8 mt-3">
          <img src={img1} alt=""  height={"400px"} width={"700px"}/>
        </div>
      </div>
    </div>
    <div className="container my-4">
      <div className="row justify-content-between ">
        <div className="col-md-3 bg-light main-panel p-4  ">
          <h4>Our Location</h4>
          <p>Jl. Medan Merdeka Barat No. 2, Jakarta Pusat, Jakarta 10110, Indonesia.</p>
          <span className='org fw-bold'>Visit us</span>
        </div>
        <div className="col-md-3 bg-light main-panel p-4 ">
          <h4>Email Us</h4>
          <p>Through email you can submit complaints and also suggestions to us, please contact. .</p>
          <span className='org fw-bold'>NexusHub-acc@contact.com</span>
        </div>
        <div className="col-md-3 bg-light main-panel p-4 ">
          <h4>Mobile Chat</h4>
          <p>We can also be reached using Whatsapp and calling, also suggestions to us, please contact. .</p>
          <span className='org fw-bold '>+62 812 382 33xxx</span>
        </div>
      </div>
    </div>
    
    </>
  )
}
