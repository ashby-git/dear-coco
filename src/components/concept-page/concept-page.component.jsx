import React from 'react';
import image from '../../assets/concept_bg.png'

import './concept-page.styles.scss';

const ConceptPage = () => (
    <div className="full-container">

        <div className="page-break" />
        <div className="page-container">

            <div className="title">DEAR COCO is...</div>
            <div className="subheading">
                オーガニックココナッツから生まれた
                地球と人に優しいコスメブランドです
            </div>

            <div className="two-halfs-container">
                <div className="left-half-container">
                    <div className="textbox-container">
                        <div className="textbox1">
                            生命の木とも呼ばれるココヤシの木。
                            <br />
                            その実から採れるココナッツオイルは栄養豊富で、
                            <br />
                            美容と健康に多くの利益をもたらします。
                            <br />
                            DEAR COCOは、100%オーガニック栽培の
                            <br />
                            タイ産ココナッツのみを厳選。
                        </div>

                        <div className="textbox2">
                            こだわりのココナッツオイルと
                            <br />
                            自然由来の成分のみを使用した
                            <br />
                            地球と人に優しいコスメブランドです。
                        </div>
                    </div>

                    <div className="button-container">
                        <div className="temp-button" />
                    </div>
                </div>
                <img className="image" src={image} alt="img" />
            </div>
        </div>
    </div>
);

export default ConceptPage;