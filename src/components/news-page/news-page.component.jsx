import React from 'react';

import './news-page.styles.scss';

// TODO import NewsContentGroup from 
// TODO import AnimatedButton from 

// TODO add background leaf

const NewsPage = (props) => (
    <div className="news-page-background">
        <div className="news-title">NEWS</div>
        <div className="news-subheading">お知らせ</div>

        <div className="container-container">
            <div className="news-content-group-container">
                <div className="news-content-group"></div>
                <div className="news-content-group"></div>
                <div className="news-content-group"></div>
                <div className="news-content-group"></div>
                <div className="news-content-group"></div>
                <div className="news-content-group"></div>
            </div>
        </div>
        <div className="tempo-button-container">
            <div className="tempo-anim-button"></div>
        </div>

    </div>
);

export default NewsPage;