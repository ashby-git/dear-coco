import React from 'react';

import './quality-content-group.styles.scss';

const QualityContentGroup = (props) => (
    <div className="container">
        <div className="number">01</div>
        <div className="subheading">100%オーガニックの ココナッツのみを使用</div>
        <div className="line"></div>
        <div className="textbox">DEAR COCOのコスメに使用するココナッツは、化学肥料や農薬は一切不使用。太陽の光をいっぱいに浴びて育った100%オーガニックココナッツオイルを自社契約農家から直接仕入れ・加工しています。</div>

    </div>
);

//<p>{props.children}</p>

export default QualityContentGroup;