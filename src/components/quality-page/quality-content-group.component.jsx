import React from 'react';

import './quality-content-group.styles.scss';

const QualityContentGroup = (props) => (
    <div className="container">
        <div className="top-section">
            <div className="number">{props.number}</div>
            <div className="subheading">{props.subheading}</div>
        </div>
        <div className="line" />
        <div className="textbox">{props.textbox}</div>
    </div>
);

export default QualityContentGroup;