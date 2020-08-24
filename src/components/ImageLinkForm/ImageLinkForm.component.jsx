import React from 'react';


import './ImageLinkForm.css';

export const ImageLinkForm = ({ handleChange, OnElementClicked }) => {


    return (
        < div className="ImageLinkForm" >
            <p className="paragraph">
                {'This magic Brain will detect faces in your pictures . (Pictures must contain one face)'}
            </p>

            <div className="form">
                <input type="text" onChange={handleChange} />
                <button onClick={OnElementClicked}>Detect</button>
            </div>

        </div >
    )
}