import React from 'react';

import './shops-page.styles.scss';

import StandardButton from '../standard-button/standard-button.component'

const ShopsPage = () => (

    <div className="shops-background">
        <div className="shops-title">SHOPS</div>
        <div className="shops-subheading">店舗またはオンラインショップよりご購入いただけます</div>
        <div className="shops-button-group">
            <div className="shops-button-container">
                <StandardButton width="408px" height="96px" url="https://en.wikipedia.org/wiki/Coconut">
                    取扱店舗一覧へ
                </StandardButton>
            </div>
            <StandardButton width="408px" height="96px" url="https://en.wikipedia.org/wiki/Coconut">
                公式オンラインショップへ
            </StandardButton>
        </div>
    </div>
);

export default ShopsPage;