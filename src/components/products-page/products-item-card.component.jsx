import React from 'react';

import './products-item-card.styles.scss';

import StandardButton from '../../components/standard-button/standard-button.component';

const ProductsItemCard = (props) => (
    <div className="card-background">
        <div className="items-container">
            <div className="card-heading">
                ココナッツオイル in<br />
                {props.cardHeading}
            </div>
            <img className="image" src={props.image} alt="img" />
            <div className="textbox">{props.textbox}</div>
            <StandardButton width="266px" height="28px" url="https://en.wikipedia.org/wiki/Coconut">
                商品ページへ
            </StandardButton>
        </div>

    </div>
);

export default ProductsItemCard;
