import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import AboutMe from './AboutMe';
import SkillSet from './SkillSet';
import Projects from './Projects';
import Contact from './Contact';

const Main = props => {
    return (
        <div className="container">
            <ReactFullpage
                // fullpage options
                licenseKey={process.env.REACT_APP_FULLPAGE_CODE}
                scrollingSpeed = {700}
                anchors={['aboutme', 'skillset', 'projects', 'contact']}
                menu={'#myMenu'}
                keyboardScrolling={false}
                dragAndMove={false}

                render={({ state, fullpageApi }) => (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <AboutMe />
                        </div>
                        <div className="section">
                            <SkillSet />
                        </div>
                        <div className="section">
                            <Projects />
                        </div>
                        <div className="section">
                            <Contact />
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
);
}

export default Main;