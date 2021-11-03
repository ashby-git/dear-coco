import React from 'react';

import './standard-button.styles.scss';

const StandardButton = (props) => (

    <a href={props.url} style={{ height: props.height, width: props.width }} className="std-wrapper">
        <div className="std-cta">
            <p>{props.children}</p>
        </div>
    </a>

);

export default StandardButton;