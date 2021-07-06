import React from 'react';
import image from '../../assets/concept_bg.png'

import './concept-page-bg.styles.scss';

const ConceptPageBg = () => (
    <div className="full-container">

        <div className="page-break" />
        <div className="page-container">
            <div className="page-items-container">

                <div className="left-half-container">
                    {/* textbox
                button */}
                </div>
                <div className="image-container">
                    <img className="image" src={image} alt="img" />
                </div>
            </div>

        </div>
    </div>
);

export default ConceptPageBg;