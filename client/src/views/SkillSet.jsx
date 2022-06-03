import React from 'react';
import blinking_cursor from '../images/blinking_cursor.gif';

const SkillSet = props => {
    return (
        <div id="skillSetSection">
            <div className="mb-5">
                <h2 className="d-inline">skill set</h2>
                <img className="pb-2" src={blinking_cursor} alt="blinking cursor" />
            </div>
            <div className="row">
                <div className="col-3">
                    <h5>Languages</h5>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript (ES6, Node.js)</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5>Frameworks/ Libraries</h5>
                    <ul>
                        <li>Flask</li>
                        <li>Jinja2</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>Bootstrap</li>
                        <li>Material-UI</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5>Databases</h5>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5>Tools</h5>
                    <ul>
                        <li>AJAX</li>
                        <li>AWS(EC2)</li>
                        <li>MySQL Workbench</li>
                        <li>JSON</li>
                        <li>Postman</li>
                        <li>MongoDBCompass</li>
                        <li>Balsamiq</li>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Gitbash</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SkillSet;