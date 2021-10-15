import React from 'react';

import './footer.styles.scss';

const Footer = () => (
    <div className="footer-background">

        <div className="footer-left-side">
            <div className="logo" />
            <div className="logo" />
            <div className="logo" />
        </div>

        <div className="footer-middle">
            <div className="page-info-group">
                <div className="page-name">CONCEPT</div>
                <div className="page-content">DEAR COCOとは</div>
                <div className="page-content">ココナッツの力</div>
                <div className="page-content">ブランドストーリー</div>
            </div>

            <div className="page-info-group">
                <div className="page-name">QUALITY</div>
                <div className="page-content">フェアトレードについて</div>
                <div className="page-content">主な成分</div>
                <div className="page-content">SDGsへの取り組み</div>
            </div>

            <div className="page-info-group">
                <div className="page-name">PRODUCTS</div>
                <div className="page-content">商品一覧</div>
                <div className="page-content">新商品ピックアップ</div>
            </div>

            <div className="page-info-group">
                <div className="page-name">SHOPS</div>
                <div className="page-content">取扱店舗一覧</div>
                <div className="page-content">オンラインショップ</div>
                <div className="page-content">ショップガイド</div>
            </div>

            <div className="page-info-group">
                <div className="page-name">NEWS</div>
                <div className="page-content">新着情報</div>
                <div className="page-content">メディア掲載実績</div>
            </div>

            <div className="page-info-group">
                <div className="page-name">CONTACT</div>
                <div className="page-content">FAQ - よくある質問</div>
                <div className="page-content">問い合わせフォーム</div>
            </div>
        </div>

        <div className="footer-right-side">
            <div className="top-button-container">
                <div className="arrow" />
                <div className="top">TOP</div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="footer-line" />

            <div className="bottom-left1">PRIVACYPolicy</div>
            <div className="bottom-left2">Terms of use</div>

            <div className="bottom-right">©︎DEAR COCO INC. All rights reserved.</div>

        </div>

    </div>
);

export default Footer;