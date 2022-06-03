import React, { useState } from "react";
import { Form } from 'react-bootstrap';

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("Sending...");

        const { name, email, message } = e.target.elements;

        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
        });

        setStatus("Submit");
        let result = await response.json();
        console.log(result.status);
    };

    return (
        <Form className="w-50 d-flex flex-column" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" id="name" required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" id="email" required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Message:</Form.Label>
                <textarea className="form-control" id="message" cols="30" rows="10" style={{resize: "none"}} required/>
            </Form.Group>
            <button className="btn text-white align-self-end" type="submit">{status}</button>
        </Form>
    );
};

export default ContactForm;