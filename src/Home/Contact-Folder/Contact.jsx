import React, { useRef } from "react";
import "./Contact.css";
import "../../general.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const form = useRef();
  return (
    <div id="container">
      <div id="box1">
        <img
          src="https://www.pitara.com/media/the-pigeon-post.jpg"
          alt="Pigeon carrying mail"
        ></img>
      </div>
      <div id="box2">
        <p className="contactus-contact">Contact Us!</p>
        <form action="http://localhost:3000/emails" method="post">
          <label></label>
          <input
            type="text"
            name="new-name"
            id="new-name"
            placeholder="Enter your full name"
          />
          <label></label>
          <input
            type="email"
            name="new-email"
            id="new-email"
            placeholder="Enter your email"
          />
          <label></label>
          <textarea 
            name="message-context" 
            id="message-context"
            placeholder="Message" />
          <input type="submit" value="Send" id="submit" />
        </form>
        <span className="social-media-icons-white">
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://youtube.com">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </span>
      </div>
    </div>
  );
};
export default Contact;
