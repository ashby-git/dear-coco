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
                <br />
                <br />
                地球と人に優しいコスメブランドです
            </div>

            <div className="two-halfs-container">

                <div className="left-half-container">

                    <div className="textbox">
                        生命の木とも呼ばれるココヤシの木。
                        <br />
                        <br />
                        その実から採れるココナッツオイルは栄養豊富で、
                        <br />
                        <br />
                        美容と健康に多くの利益をもたらします。
                        <br />
                        <br />
                        DEAR COCOは、100%オーガニック栽培の
                        <br />
                        <br />
                        タイ産ココナッツのみを厳選。
                        <br />
                        <br />
                        <br />
                        <br />
                        こだわりのココナッツオイルと
                        <br />
                        <br />
                        自然由来の成分のみを使用した
                        <br />
                        <br />
                        地球と人に優しいコスメブランドです。
                    </div>
                    <div className="button-container">
                        <div className="temp-button" />
                    </div>

                </div>
                {/* <div className="image-container"> */}
                <img className="image" src={image} alt="img" />
                {/* </div> */}
            </div>

        </div>
    </div>
);

export default ConceptPage;