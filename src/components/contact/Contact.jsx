// import { useState } from "react";
import "./contact.scss";
import { PopupWidget } from 'react-calendly';

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
          <input type="text" name="subject" placeholder="Subject" />
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
        <PopupWidget
          url="https://calendly.com/nicolasmacenco/meeting"
          /*
          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
          */
          rootElement={document.getElementById("root")}
          text="Schedule a meeting!"
          textColor="#ffffff"
          color="#1F2937"
        />
      </div>
    </div>
  );
}
