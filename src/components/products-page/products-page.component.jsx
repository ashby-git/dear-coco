import React from 'react';

import './products-page.styles.scss';

// import ProductsItemCard
// import AnimatedButton

// import productsImage1 from '../../assets/products_img_01.jpg'
// import productsImage2 from '../../assets/products_img_02.jpg'
// import productsImage3 from '../../assets/products_img_01.jpg'

const ProductsPage = (props) => (
    <div className="products-page-container">
        <div className="title">PRODUCTS</div>
        <div className="subtitle">DEAR COCOのベストセラー商品</div>

        <div className="cards">
            <div className="tempo-card1" />
            <div className="tempo-card2" />
            <div className="tempo-card3" />
            {/* <ProductsItemCard
                cardHeading="ボディ&フェイスソープ"
                image=""
                textbox="全身お使いいただける固形石鹸です。ココナッツオイルの力でしっとり優しく洗い上げます。"
            />
            <ProductsItemCard
                cardHeading="スキンケアセット"
                image=""
                textbox="クレンジング、美容液、保湿ローションのセットです。潤いを保ち、肌トラブルを防ぎます。"
            />
            <ProductsItemCard
                cardHeading="ボディクリーム"
                image=""
                textbox="お風呂上がりの肌や、乾燥が気になるときに。全身にお使いいただけます。"
            /> */}
        </div>
        <div className="tempo-button-container">
            {/* <AnimatedButton>商品一覧へ</AnimatedButton> */}
            <div className="tempo-button" />
        </div>
    </div>
);

export default ProductsPage;