import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';
import './Logo.css';

export const Logo = () => (

    <div className="logo">


        <Tilt className="Tilt" options={{ max: 45 }} style={{ height: 150, width: 150, margin: "1em" }} >
            <div className="Tilt-inner"> <img alt="Logo" src={brain} style={{ height: "100px" }} /> </div>
        </Tilt>

    </div>

)