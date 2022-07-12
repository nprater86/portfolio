import React from 'react';
import blinking_cursor from '../images/blinking_cursor.gif';

const SkillSet = props => {
    return (
        <div id="skillSetSection">
            <div className="row d-none d-lg-flex">
                <div className="mb-5 mt-5">
                    <h2 className="d-inline">skill set</h2>
                    <img className="pb-2" src={blinking_cursor} alt="blinking cursor" />
                </div>
                <div className="col-3">
                    <h5>Languages</h5>
                    <ul>
                        <li>C#</li>
                        <li>Python</li>
                        <li>JavaScript (ES6, Node.js)</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5>Frameworks</h5>
                    <h5>/Libraries</h5>
                    <ul>
                        <li>ASP .NET</li>
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
                        <li>Entity Framework Core</li>
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
            <div className="row d-lg-none gap-2">
                <div className="mb-2">
                    <h2 className="d-inline">skill set</h2>
                    <img className="pb-2" src={blinking_cursor} alt="blinking cursor" />
                </div>
                <div>
                    <h6>Languages</h6>
                    <p className="roboto">C# | Python | JavaScript (ES6, Node.js) | HTML5 | CSS</p>
                </div>
                <div>
                    <h6>Frameworks</h6>
                    <h6>/Libraries</h6>
                    <p className="roboto">ASP .NET | Flask | Jinja2 | React | Express | Bootstrap | Material-UI</p>
                </div>
                <div>
                    <h6>Databases</h6>
                    <p className='roboto'>Entity Framework Core | MySQL | MongoDB | Mongoose</p>
                </div>
                <div>
                    <h6>Tools</h6>
                    <p className='roboto'>AJAX | AWS(EC2) | MySQL Workbench | JSON | Postman | MongoDBCompass | Balsamiq | Git | GitHub | GitBash</p>
                </div>
            </div>
        </div>
    );
}

export default SkillSet;