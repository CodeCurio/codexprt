import React from "react";
import "./Contact.css";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ce3f2f86-c7ab-4784-9c8c-a090b1fcd427");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Your Message Has Been Submited");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Let’s Grow Your Business Together!🚀</h3>
        <p>
          Have questions or need expert assistance with website development or
          Google My Business services? We’re here to help! Whether you need a
          custom website, GMB SEO, or business verification, our team is ready
          to assist you.
        </p>
        <ul>
            <li>📧 yourwebcoderr@gmail.com</li>
            <li>📞 +919305030523</li>
            <li>📍 Shop NO. 6, Kursi Rd, Tedhi Pulia, Gaurabagh<br/>Lucnkow, Uttar Pradesh 226022</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required/>
            <label>Phone Number</label>
            <input type="text" name="name" placeholder="Enter Your Number" required/>
            <label>Write Your Message</label>
            <textarea name="message" rows="6" placeholder="Write Your Message" required></textarea>
            <button type="submit" className="btn dark-btn">Sumbit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
