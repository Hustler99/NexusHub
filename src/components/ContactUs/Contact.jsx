import React from 'react'
import img1 from "../../assets/imgs/contact.png"

export default function Contact() {
  return (
    <>
    <div className="container bg-light main-panel">
      <div className="row">
        <div className="col-md-4 d-flex flex-column justify-content-center">
          <h3 className=''>Get in Touch with Agarly</h3>
          <p>Have questions about renting or renting out products? Or perhaps you're curious about how Agarly fosters a sustainable sharing economy? We're here to help. Reach out to us and we'll provide you with all the information you need to get started.</p>
        </div>
        <div className="col-md-8 mt-3">
          <img src={img1} alt="Contact Us" height={"400px"} width={"700px"}/>
        </div>
      </div>
    </div>
    <div className="container my-4">
      <div className="row justify-content-between">
        <div className="col-md-3 bg-light main-panel p-4">
          <h4>Our Office Location</h4>
          <p>Find us at the heart of the community where we bring the sharing economy to life. Our team is ready to assist you with any inquiries.</p>
          <span className='org fw-bold'>Agarly Headquarters, [Maadi, Cairo]</span>
        </div>
        <div className="col-md-3 bg-light main-panel p-4">
          <h4>Email Agarly Support</h4>
          <p>For inquiries related to rentals, partnerships, or platform support, feel free to contact us via email. Our team will respond as soon as possible to assist you.</p>
          <span className='org fw-bold'>support@agarly.com</span>
        </div>
        <div className="col-md-3 bg-light main-panel p-4">
          <h4>Chat with Us</h4>
          <p>Got a quick question or need assistance while browsing through products? Chat with us instantly via WhatsApp or give us a call!</p>
          <span className='org fw-bold'>+20 123 456 7890</span>
        </div>
      </div>
    </div>
    </>
  )
}
