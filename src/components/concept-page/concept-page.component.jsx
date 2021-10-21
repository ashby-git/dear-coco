import React from 'react';

import conceptImage from '../../assets/concept_bg.png';
import AnimatedButton from '.././animated-button/animated-button.component';

import './concept-page.styles.scss';

const ConceptPage = () => (
    <div className="cp-full-container">

        <div className="cp-page-break" />
        <div className="cp-page-container">

            <div className="cp-title">DEAR COCO is...</div>

            <div className="cp-two-halfs-container">
                <div className="cp-left-half-container">
                    <div className="left-half-elements-group">
                        <div className="cp-subheading">
                            オーガニックココナッツから生まれた <br />
                            地球と人に優しいコスメブランドです
                        </div>

                        <div className="cp-textbox-container">
                            <div className="cp-textbox1">
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

                            <div className="cp-textbox2">
                                こだわりのココナッツオイルと
                                <br />
                                自然由来の成分のみを使用した
                                <br />
                                地球と人に優しいコスメブランドです。
                            </div>
                        </div>

                        <div className="cp-button-container">
                            <AnimatedButton>ココナッツの力について</AnimatedButton>
                        </div>
                    </div>
                </div>
                <div className="cp-image-container">
                    <img src={conceptImage} alt="img" />
                </div>
            </div>
        </div>
    </div>
);

export default ConceptPage;