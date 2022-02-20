// import { useState } from "react";
import "./contact.scss";

export default function Contact() {
//   const [message, setMessage] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessage(true);
//   };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form name="contact" /*onSubmit={handleSubmit}*/ action="" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <input type="email" name="email" placeholder="Email" />
          <textarea
            placeholder="Message"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
          {/* {message && <span> Thanks , I'll reply ASAP </span>} */}
        </form>
      </div>
    </div>
  );
}
