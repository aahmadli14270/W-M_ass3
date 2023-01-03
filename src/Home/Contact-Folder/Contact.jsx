import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import '../../general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vp7o0pb', 'template_c3ef8vr', form.current, '4l93Ik3opPXKcqc0T')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
        });
    };
    return (
        <div id='container'>
            <div id='box1'>
                <img src='https://www.pitara.com/media/the-pigeon-post.jpg' alt='Pigeon carrying mail'></img>
            </div>
            <div id='box2'>
                {/* <br/> <br/> <br/> <br/>  */}
                <p>Contact Us!</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label></label>
                    <input type="text" name="user_name" placeholder='Enter your full name'/>
                    <label></label>
                    <input type="email" name="user_email" placeholder='Enter your email'/>
                    <label></label>
                    <textarea name="message" placeholder='Message'/>
                    <input type="submit" value="Send" id='submit'/>
                </form> 
                <span className='social-media-icons-white'>
                    <a href='https://facebook.com'>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href='https://instagram.com'>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href='https://twitter.com'>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href='https://github.com'>
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href='https://youtube.com'>
                        <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                </span> 
            </div>
        </div>
    );
}
export default Contact;
