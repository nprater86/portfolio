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
            <ContactForm />
        </div>
    );
}

export default Contact;