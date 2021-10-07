import React from 'react';

import './quality-page.styles.scss';

import QualityContentGroup from './quality-content-group.component';

import qualityImage1 from '../../assets/quality_img_01.jpg'
import qualityImage2 from '../../assets/quality_img_02.jpg'
import qualityImage3 from '../../assets/quality_img_03.jpg'

const QualityPage = () => (

    <div className="quality-page-container">

        <div className="page-break"></div>

        <div className="qp-title">OUR QUALITY</div>

        <div className="qp-subheading">DEAR COCOの３つのこだわり</div>

        <div className="content-layout">

            <div className="row">
                <img className="image" src={qualityImage1} alt="img" />
                <div className="quality-content-group-container">
                    <div className="quality-content-group1">
                        <QualityContentGroup
                            number="01"
                            subheading="100%オーガニックの ココナッツのみを使用"
                            textbox="DEAR COCOのコスメに使用するココナッツは、化学肥料や農薬は一切不使用。太陽の光をいっぱいに浴びて育った100%オーガニックココナッツオイルを自社契約農家から直接仕入れ・加工しています。"
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="quality-content-group-container">
                    <div className="quality-content-group2">
                        <QualityContentGroup
                            number="02"
                            subheading="天然由来素材100%"
                            textbox="DEAR COCOの製品は人工の界面活性剤や添加物を使用していません。100%天然由来の素材だけで作られているから、敏感肌の方やお子様にも安心してお使いいただけます。"
                        />
                    </div>
                </div>
                <img className="image" src={qualityImage2} alt="img" />
            </div>

            <div className="row">
                <img className="image" src={qualityImage3} alt="img" />
                <div className="quality-content-group-container">
                    <div className="quality-content-group3">
                        <QualityContentGroup
                            number="03"
                            subheading="環境への取り組み"
                            textbox="DEAR COCOのパッケージは無駄なくシンプル。 限られた資源を大切にするため、100%リサイクル可能な素材で作られています。自然とヒトとの共存を目指し、サステナブルな未来づくりに貢献します。"
                        />
                    </div>
                </div>
            </div>

        </div>

        <div className="temp-button-container">
            <div className="temp-button">DEAR COCOのこだわり</div>
        </div>
    </div>
);

export default QualityPage;