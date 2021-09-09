import React from 'react';

import './standard-button.styles.scss';

const StandardButton = (props) => (

    <div>
        <div className="wrapper">
            <div className="cta">
                <span>{props.children}</span>
            </div>
        </div>
    </div>

);

export default StandardButton;