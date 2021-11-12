import React from 'react';

import './shops-page.styles.scss';

import StandardButton from '../standard-button/standard-button.component'

const ShopsPage = () => (

    <div id="shops" className="shops-background">
        <h1 className="shops-title">SHOPS</h1>
        <h2 className="shops-subheading">店舗またはオンラインショップよりご購入いただけます</h2>
        <div className="shops-button-group">
            <StandardButton width="408px" height="96px" url="https://en.wikipedia.org/wiki/Coconut">
                取扱店舗一覧へ
            </StandardButton>
            <StandardButton width="408px" height="96px" url="https://en.wikipedia.org/wiki/Coconut">
                公式オンラインショップへ
            </StandardButton>
        </div>
    </div>
);

export default ShopsPage;