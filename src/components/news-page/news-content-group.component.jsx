import React from 'react';

import './news-content-group.styles.scss';

const NewsContentGroup = (props) => (
    <div className="news-content-group-background">
        <div className="two-sides-container">
            <div className="image-container">
                <img className="image" src={props.image} alt="img" />
            </div>
            <div className="text-group-container">
                <div className="text-group">
                    <div className="article">{props.article}</div>
                    <div className="bottom-text-group">
                        <div className="date">{props.date}</div>
                        <div className="link">{props.link}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default NewsContentGroup;