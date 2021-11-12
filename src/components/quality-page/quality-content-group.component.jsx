import React from 'react';

import './quality-content-group.styles.scss';

const QualityContentGroup = (props) => (
    <div className="content-group-container">
        <div className="top-section">
            <div className="number">{props.number}</div>
            <p className="subheading">{props.subheading}</p>
        </div>
        <div className="quality-line" />
        <p className="quality-content-textbox">{props.textbox}</p>
    </div>
);

export default QualityContentGroup;