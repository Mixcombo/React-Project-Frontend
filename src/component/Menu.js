import React from 'react';
import Treed from './SimpleTree';
import './Menu.css';

function Menu() {
    return (
        <div>
            <div className="container" id="con">
                <div>
                    <Treed style={{display:'flex'}}/>
                </div>
            </div>
        </div>
    )
}

export default Menu;