import React from 'react';

import './top-page-content.styles.scss';

const TopPageContent = () => (

    <div>
        <div className="japanese-text-container">
            <p className="japanese-text">
                地球に優しいコスメは、
                <br /><br />
                人の肌にも優しい
            </p>
        </div>
        <div className="english-text-container ">
            <p className="english-text">
                {"The power of "}
                <span className="english-text-big">
                    COCONUT
                </span>
            </p>
        </div>
    </div >
);

export default TopPageContent;