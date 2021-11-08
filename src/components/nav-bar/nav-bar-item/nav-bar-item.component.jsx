import React from 'react';

import './nav-bar-item.styles.scss';

const NavBarItem = (props) => (
    <div className="nbi-container">
        <div className="nav-bar-item">
            <p>{props.children}</p>
        </div>
    </div>
);

export default NavBarItem;