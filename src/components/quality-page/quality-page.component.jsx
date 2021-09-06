import React from 'react';

import './quality-page.styles.scss';

// import QualityContentGroup from 

const QualityPage = () => (

    <div className="quality-page-container">

        <div className="page-break"></div>

        <div className="title">OUR QUALITY</div>

        <div className="subheading">DEAR COCOの３つのこだわり</div>

        <div className="content-layout">

            <div className="row1">
                <div className="image1"></div>
                <div
                    // QualityContentGroup
                    className="quality-content-group1"
                    number="01"
                    subheading="100%オーガニックの ココナッツのみを使用"
                    textbox="DEAR COCOのコスメに使用するココナッツは、化学肥料や農薬は一切不使用。太陽の光をいっぱいに浴びて育った100%オーガニックココナッツオイルを自社契約農家から直接仕入れ・加工しています。"
                />
            </div>

            <div className="row2">
                <div
                    //  QualityContentGroup
                    className="quality-content-group2"
                    number="02"
                    subheading="天然由来素材100%"
                    textbox="DEAR COCOの製品は人工の界面活性剤や添加物を使用していません。100%天然由来の素材だけで作られているから、敏感肌の方やお子様にも安心してお使いいただけます。"
                />
                <div className="image2"></div>
            </div>

            <div className="row3">
                <div className="image3"></div>
                <div
                    //  QualityContentGroup
                    className="quality-content-group3"
                    number="03"
                    subheading="環境への取り組み"
                    textbox="DEAR COCOのパッケージは無駄なくシンプル。 限られた資源を大切にするため、100%リサイクル可能な素材で作られています。自然とヒトとの共存を目指し、サステナブルな未来づくりに貢献します。"
                />
            </div>

        </div>

        {/* <div className="button">DEAR COCOのこだわり</div> */}

    </div>
);

export default QualityPage;