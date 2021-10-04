import React from 'react';

import './message-page.styles.scss';

const MessagePage = (props) => (

    <div className="message-container">
        <div className="message-background">
            <div className="message-card">
                <div className="message-title"></div>
                <div className="message-text-group">
                    <div className="paragraph"></div>
                    <div className="paragraph"></div>
                    <div className="paragraph"></div>
                </div>
                <div className="tempo-ani-button"></div>
            </div>
        </div>
    </div>
);

export default MessagePage;