import React from 'react';

import './standard-button.styles.scss';

const StandardButton = (props) => (

    <div>
        <div style={{ height: props.height, width: props.width }} className="wrapper">
            <div className="cta">
                <span>{props.children}</span>
            </div>
        </div>
    </div>

);

export default StandardButton;