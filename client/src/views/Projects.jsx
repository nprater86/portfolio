import React, { useState } from 'react';
import blinking_cursor from '../images/blinking_cursor.gif';
import drinkmixr from '../images/drinkmixr.png';
import dojoweather from '../images/dojoweather.png';
import storefronts from '../images/storefronts.png';

const Projects = props => {
    const [imgDisplay, setImgDisplay] = useState('none');
    const [src, setSrc] = useState();

    const videoPlayer = document.getElementById("videoPlayer");

    document.addEventListener('wheel', (e) => {
        
        setTimeout(() => { 
            videoPlayer.src = videoPlayer.src;
            setImgDisplay('none'); 
        }, 700);
    })

    function imgDisplayOpen(src) {
        setSrc(src);
        setImgDisplay('flex');
    }

    function imgDisplayClose() {
        videoPlayer.src = videoPlayer.src;
        setImgDisplay('none');
    }

    return (
        <div id="projectsSection">
            <div className="mb-5">
                <h2 className="d-inline">projects</h2>
                <img className="pb-2" src={blinking_cursor} alt="blinking cursor" />
            </div>
            <div className="row d-none d-md-block">
                <div className="row justify-content-between">
                    <div className="col-4 d-flex flex-column justify-content-end">
                        <img onClick={ e => imgDisplayOpen("https://www.youtube.com/embed/L2REJARYuYQ") } className="img-thumbnail mb-3 thumbnail" src={drinkmixr} alt="" />
                    </div>
                    <div className="col-4">
                        <img onClick={ e => imgDisplayOpen("https://www.youtube.com/embed/7aLRZ2AXgLc") } className="img-thumbnail mb-3 thumbnail" src={dojoweather} alt="" />
                    </div>
                    <div className="col-4">
                        <img onClick={ e => imgDisplayOpen("https://www.youtube.com/embed/lbN6KBkn_V8") } className="img-thumbnail mb-3 thumbnail" src={storefronts} alt="" />
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-4">
                        <h5 className="mb-3">DrinkMixr</h5>
                        <p>Social media site for aspiring mixologists. Browse recipes, comment on them, add them to your favorites, or create your own! Built using Python, Flask, and MySQL.</p>
                        <a href="https://www.youtube.com/watch?v=L2REJARYuYQ" target="_blank">Demo</a>
                    </div>
                    <div className="col-4">
                        <h5 className="mb-3">Dojo Weather</h5>
                        <p>Simple and fast, check on the weather in any city in the US. Register to gain access to a dashboard where you can save locations for ease of access. Built using MongoDB, Express, React, and Node.js. Powered by the OpenWeather and Google Maps APIs.</p>
                        <a href="https://www.youtube.com/watch?v=7aLRZ2AXgLc" target="_blank">Demo</a>
                    </div>
                    <div className="col-4">
                        <h5 className="mb-3">Dojo Storefronts</h5>
                        <p>E-commerce website where users can browse storefronts and buy products from a variety of sellers, or create a storefront of their own! Built using C#, ASP .NET, and MySQL.</p>
                        <a href="https://www.youtube.com/watch?v=lbN6KBkn_V8" target="_blank">Demo</a>
                    </div>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle px-5 pb-5 pt-4 w-100 border flex-column rounded" style={{backgroundColor: 'black', display:imgDisplay}} id="popup">
                    <i onClick={ e => imgDisplayClose() } className="fa-solid fa-xmark mb-3 align-self-end thumbnail"></i>
                    <div>
                        <iframe id="videoPlayer" style={{width:"100%", height: "65vh"}} src={src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="row d-md-none">
                <div className="row align-items-center">
                    <div className="col-6">
                        <a href="https://www.youtube.com/watch?v=L2REJARYuYQ" target="_blank"><img className="img-thumbnail mb-3 thumbnail" src={drinkmixr} alt="" /></a>
                    </div>
                    <div className="col-6">
                        <h6 className="mb-3">DrinkMixr</h6>
                        <a href="https://www.youtube.com/watch?v=L2REJARYuYQ" target="_blank">Demo</a>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-6">
                        <a href="https://www.youtube.com/watch?v=7aLRZ2AXgLc" target="_blank"><img className="img-thumbnail mb-3 thumbnail" src={dojoweather} alt="" /></a>
                    </div>
                    <div className="col-6">
                        <h6 className="mb-3">Dojo Weather</h6>
                        <a href="https://www.youtube.com/watch?v=7aLRZ2AXgLc" target="_blank">Demo</a>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-6">
                    <a href="https://www.youtube.com/watch?v=lbN6KBkn_V8" target="_blank"><img className="img-thumbnail mb-3 thumbnail" src={storefronts} alt="" /></a>
                    </div>
                    <div className="col-6">
                        <h6 className="mb-3">Dojo Storefronts</h6>
                        <a href="https://www.youtube.com/watch?v=lbN6KBkn_V8" target="_blank">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;