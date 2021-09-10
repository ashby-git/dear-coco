import React from 'react';

import './shops-page.styles.scss';

// import StandardButton from

const ShopsPage = () => (
    <div>

        <div className="shops-background">
            <div className="title">SHOPS</div>
            <div className="subheading">店舗またはオンラインショップよりご購入いただけます</div>
            <div className="button-group">
                <div className="temp-button" />
                <div className="temp-button" />
                {/* <div className="button-container">
                    <StandardButton>取扱店舗一覧へ</StandardButton>
                </div>
                <div className="button-container"></div>
                    <StandardButton>公式オンラインショップへ</StandardButton>
                </div> */}
            </div>
        </div>

    </div>
);

export default ShopsPage;