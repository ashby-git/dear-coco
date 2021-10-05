import React from 'react';

import './products-item-card.styles.scss';

// TODO import StandardButton from  

const ProductsItemCard = (props) => (
    <div className="card-background">
        <div className="items-container">
            <div className="card-heading">
                ココナッツオイル in<br />
                {props.cardHeading}
            </div>
            <img className="image" src={props.image} alt="img" />
            <div className="textbox">{props.textbox}</div>
            <div className="button-container">
                {/* TODO < className="standard-button"StandardButton>商品ページへ</StandardButton*/}
                <div className="tempo-standard-button"></div>
            </div>
        </div>

    </div>
);

export default ProductsItemCard;
