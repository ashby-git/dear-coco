import React from 'react';

import './news-content-group.styles.scss';

const NewsContentGroup = (props) => (
    <a href={props.url}>
        <div className="news-content-group-background">
            <div className="two-sides-container">
                <div className="news-image-container">
                    <img className="newsImage" src={props.newsImage} alt="news-img" />
                </div>
                <div className="text-group-container">
                    <div className="text-group">
                        <p className="article">{props.article}</p>
                        <div className="bottom-text-group">
                            <p className="date">{props.date}</p>
                            <p className="media-type">{props.mediaType}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </a>
);

export default NewsContentGroup;