import React from 'react'
import { List } from '../List/List.component'

export const Button = ({ OnClickedElement, dataColor }) => {
    return (
        <div>
            <center>
                <button onClick={OnClickedElement}>Click me</button>
                <List dataColor={dataColor} />
            </center>
        </div>


    )



}
/*


*/