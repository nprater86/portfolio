import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import GitHub_Logo_White from '../images/GitHub_Logo_White.png';
import GitHub_Mark_Light from '../images/GitHub-Mark-Light-120px-plus.png';
import LI_ln_Bug from '../images/LI-In-Bug.png';
import LI_Logo from '../images/LI_Logo.png';

const Navigation = props => {

    return (
        <Navbar variant="dark" expand="lg" className="mb-3 border-bottom" fixed="top" id="navbar" collapseOnSelect>
            <Container className="d-flex justify-content-between">
                <div className="d-none d-sm-flex">
                    <Nav.Link href="https://github.com/nprater86" target="_blank">
                        <img style={{height: '35px'}} src={GitHub_Logo_White} alt="Link to Nathan Prater's Github" />
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/nathanprater" target="_blank">
                        <img style={{height: '28px'}} src={LI_Logo} alt="Link to Nathan Prater's Github" />
                    </Nav.Link>
                </div>
                <div className="d-flex d-sm-none">
                    <Nav.Link href="https://github.com/nprater86" target="_blank">
                        <img style={{height: '35px'}} src={GitHub_Mark_Light} alt="Link to Nathan Prater's Github" />
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/nathanprater" target="_blank">
                        <img style={{height: '28px'}} src={LI_ln_Bug} alt="Link to Nathan Prater's Github" />
                    </Nav.Link>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" id="myMenu">
                            <Nav.Link data-menuanchor="aboutme" href="#aboutme">about me</Nav.Link>
                            <Nav.Link data-menuanchor="skillset" href="#skillset">skill set</Nav.Link>
                            <Nav.Link data-menuanchor="projects" href="#projects">projects</Nav.Link>
                            <Nav.Link data-menuanchor="contact" href="#contact">contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default Navigation;