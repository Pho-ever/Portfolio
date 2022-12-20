const Contact = () => {
  return ( 
    <>
      <form action="" className="form">
        <div className="input-container">
          <label>Your Name*</label>
          <input type="name" placeholder="Enter your name"/>
        </div>

        <div className="input-container">
          <label>Your Email*</label>
          <input type="name" placeholder="Enter your email"/>
        </div>

        <div className="input-container">
          <label>Your Message*</label>
          <textarea />
        </div>

        <button>SEND MESSAGE</button>
      </form>
    </>
    );
}

export default Contact;