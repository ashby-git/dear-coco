import React from 'react';

import './news-content-group.styles.scss';

const NewsContentGroup = (props) => (
    <div className="news-content-group-background">
        <img className="image" src={props.image} alt="img" />
        <div className="text-group-container">
            <div className="article">{props.article}</div>
            <div className="date">{props.date}</div>
            <div className="link">{props.link}</div>
        </div>

    </div>
);

export default NewsContentGroup;