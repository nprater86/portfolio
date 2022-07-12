import React from 'react';
import ContactForm from '../components/ContactForm';
import blinking_cursor from '../images/blinking_cursor.gif';

const Contact = props => {
    return (
        <div>
            <div className="mb-5">
                <h2 className="d-inline">contact me</h2>
                <img className="pb-2" src={blinking_cursor} alt="blinking cursor" />
            </div>
            {/* <ContactForm /> */}
            <div className="row gap-5 d-none d-md-flex">
                <h6 className="mb-0">Voicemail: <span className="roboto">‪(773) 236-0503‬</span></h6>
                <h6 className="mb-0">Email: <span className="roboto">nprater86@gmail.com</span></h6>
            </div>
            <div className="row gap-5 d-md-none">
                <div className="row gap-2">
                    <h6 className="mb-0">Voicemail:</h6>
                    <span className="roboto">‪(773) 236-0503‬</span>
                </div>
                <div className="row gap-2">
                    <h6 className="mb-0">Email:</h6>
                    <span className="roboto">nprater86@gmail.com</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;