import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';


const Contact = () => {
  const [formStatus, setFormStatus] = useState(false);

  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus(true);
    emailjs.sendForm(
      'service_jdg1e0f', 
      'template_jegc42k', 
      form.current, 
      'CVXxApYP3Uz2JtuBL'
      )
      .then((result) => {
          console.log(result.text);
          toast.success("Your message has been sent")
          e.target.reset();
          setFormStatus(false);
      }, (error) => {
          console.log(error.text);
      });
  };


  return ( 
    <>
      <form 
      className="form" 
      ref={form} 
      onSubmit={sendEmail} 
      >
        <div className="input-container">
          <label>Your Name*</label>
          <input 
          name="user_name" 
          placeholder="Enter your name"
          type="text"
          required
          />
        </div>

        <div className="input-container">
          <label>Your Email*</label>
          <input 
          name="user_email" 
          placeholder="Enter your email"
          type="email"
          required
          />
        </div>

        <div className="input-container">
          <label>Your Message*</label>
          <textarea name="message" required/>
        </div>

        <button type="submit" >{formStatus ? (
          <TailSpin color='#fff' height={24} width={24} ariaLabel='loading' className="tailspin"/>
          ) : (
            "SEND MESSAGE"
          )}</button>
      </form>
      <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </>
    );
}

export default Contact;