import React from 'react';
import './FaceRecognition.css';

export const FaceRecognition = ({ InputImage, box }) => (
    <div className="flex">
        <div className="FaceRecognition">

            <img id="inputimage" src={InputImage} alt="" width="500px" height="auto" />

            <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
            </div>
        </div>


    </div>

)