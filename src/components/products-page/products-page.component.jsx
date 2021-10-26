import React from 'react';

import './products-page.styles.scss';

import ProductsItemCard from '../products-page/products-item-card.component';
import AnimatedButton from '../animated-button/animated-button.component';

import productsImage1 from '../../assets/products_img_01.jpg'
import productsImage2 from '../../assets/products_img_02.jpg'
import productsImage3 from '../../assets/products_img_01.jpg'

const ProductsPage = () => (
    <div className="products-page-container">
        <div className="title">PRODUCTS</div>
        <div className="subtitle">DEAR COCOのベストセラー商品</div>

        <div className="cards">
            <ProductsItemCard
                cardHeading="ボディ&フェイスソープ"
                image={productsImage1}
                textbox="全身お使いいただける固形石鹸です。ココナッツオイルの力でしっとり優しく洗い上げます。"
            />
            <ProductsItemCard
                cardHeading="スキンケアセット"
                image={productsImage2}
                textbox="クレンジング、美容液、保湿ローションのセットです。潤いを保ち、肌トラブルを防ぎます。"
            />
            <ProductsItemCard
                cardHeading="ボディクリーム"
                image={productsImage3}
                textbox="お風呂上がりの肌や、乾燥が気になるときに。全身にお使いいただけます。"
            />
        </div>
        <div className="tempo-button-container">
            <AnimatedButton url="https://en.wikipedia.org/wiki/Coconut">
                商品一覧へ
            </AnimatedButton>
        </div>
    </div>
);

export default ProductsPage;