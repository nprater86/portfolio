import React from 'react';
import blinking_cursor from '../images/blinking_cursor.gif';

const AboutMe = props => {
    return (
        <div id="aboutMeSection">
            <div className="mb-5" style={{marginTop: '100px'}}>
                <h2 className="d-inline">about me</h2>
                <img className="pb-2" src={blinking_cursor} alt="blinking cursor" />
            </div>
            <p>My name is Nathan Prater, and I am an aspiring front and back end developer skilled in Python, MERN, and C#. I really enjoy coding and the challenges that it brings.</p>

            <p>I’ve worked 9 years in account management at a Pharmacy Benefit Manager, building and strengthening my interpersonal and client management skills. However, since I was young I was always interested in computers and loved solving coding problems. Recently I decided to finally take the plunge and fully immerse myself in the development world. To do this, I attended Coding Dojo, an intense coding bootcamp, learning full stack development in Python, MERN, and C# over a 14 week period. Now, I’m looking to join a team where I can work on full stack applications and put my newly developed skills to the test.</p>

            <p>I love working on all ends of development and would like to find myself working through the whole process. I also did enjoy working with my clients in my previous job, and I would love to incorporate client interaction in my work. Working with clients and bringing them high-end, full stack websites or applications would be my dream job.</p>
        </div>
    );
}

export default AboutMe;