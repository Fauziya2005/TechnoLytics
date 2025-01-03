import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail from '../../assets/mail.png'
import call from '../../assets/call.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "efca8bf3-7910-4e62-b76f-b74091a3aa79");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message<img src={msg_icon} alt=''/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions are important to us. </p>
        <ul>
            <li><img src={mail}/>Contact@technolytics.com</li>
            <li><img src={call}/>+91 6473674595</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required/>
            <button type='submit' className='btn'>Submit now </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
//<img src={whithe_arrow}/>