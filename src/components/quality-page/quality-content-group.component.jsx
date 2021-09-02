import React from 'react';

import './quality-content-group.styles.scss';

const QualityContentGroup = (props) => (
    <div className="container">
        <div className="top-section">

            <div className="number">{props.number}</div>
            <div className="subheading">{props.subheading}</div>

        </div>
        <div className="line"></div>
        <div className="textbox">{props.textbox}</div>

    </div>
);

//<p>{props.children}</p>


export default QualityContentGroup;