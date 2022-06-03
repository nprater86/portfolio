import React, { useState } from 'react';
import blinking_cursor from '../images/blinking_cursor.gif';
import drinkmixr from '../images/drinkmixr.png';
import dojoweather from '../images/dojoweather.png';

const Projects = props => {
    const [imgDisplay, setImgDisplay] = useState('none');
    const [img, setImg] = useState();

    const popup = document.getElementById('popup');

    document.addEventListener('mousedown', (e) => {
        if(!popup.contains(e.target)){
            setImgDisplay('none');
        }
    })

    document.addEventListener('wheel', (e) => {
        setTimeout(() => { setImgDisplay('none'); }, 700);
    })

    function imgDisplayOpen(img) {
        setImg(img);
        setImgDisplay('flex');
    }

    function imgDisplayClose() {
        setImgDisplay('none');
    }

    return (
        <div id="projectsSection" className="d-none d-md-block">
            <div className="mb-5">
                <h2 className="d-inline">projects</h2>
                <img className="pb-2" src={blinking_cursor} alt="blinking cursor" />
            </div>
            <div className="row justify-content-between">
                <div className="col-4 d-flex flex-column justify-content-end">
                        <img onClick={ e => imgDisplayOpen(drinkmixr) } className="img-thumbnail mb-3 thumbnail" src={drinkmixr} alt="" />
                </div>
                <div className="col-4">
                    <img onClick={ e => imgDisplayOpen(dojoweather) } className="img-thumbnail mb-3 thumbnail" src={dojoweather} alt="" />
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-4">
                    <h5 className="mb-3">DrinkMixr</h5>
                    <p>Social media site for aspiring mixologists. Browse recipes, comment on them, add them to your favorites, or create your own! Built using Python, Flask, and MySQL.</p>
                </div>
                <div className="col-4">
                    <h5 className="mb-3">Dojo Weather</h5>
                    <p>Simple and fast, check on the weather in any city in the US. Register to gain access to a dashboard where you can save locations for ease of access. Built using MongoDB, Express, React, and Node.js. Powered by the OpenWeather and Google Maps APIs.</p>
                </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle px-5 pb-5 pt-4 w-100 border flex-column rounded" style={{backgroundColor: 'black', display:imgDisplay}} id="popup">
                <i onClick={ e => imgDisplayClose() } className="fa-solid fa-xmark mb-3 align-self-end thumbnail"></i>
                <img className="img-fluid mb-3" src={img} alt="" />
            </div>
        </div>
    );
}

export default Projects;