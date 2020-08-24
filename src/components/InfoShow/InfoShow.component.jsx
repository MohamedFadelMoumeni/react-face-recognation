import React from 'react';
import { Button } from '../Button/Button.component';
import './InfoShow.css';


export const InfoShow = ({ ShowButton, OnClickedElement, dataColor }) => (
    <div>
        {
            ShowButton ? <Button OnClickedElement={OnClickedElement} dataColor={dataColor} /> : null
        }




    </div>
)