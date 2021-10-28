import React from 'react';

import footerLogo from '../../assets/footer-logo.svg';
import fbLogo from '../../assets/f_logo_white.svg';
import twitterLogo from '../../assets/twitter_logo_white.svg';


import './footer.styles.scss';

const scrollToTop = () => {
    window.scrollTo(0, 0);
};

const Footer = () => (
    <div className="footer-background">
        <div className="footer-top-section">

            <div className="footer-left-side">
                <div className="footer-logo-group">
                    <img src={footerLogo} alt="footer logo" />
                    <div className="footer-smaller-logos">
                        <img src={fbLogo} alt="footer logo" />
                        <img src={twitterLogo} alt="footer logo" />
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="page-info-group-container">
                    <div className="page-info-group">
                        <p className="page-name">CONCEPT</p>
                        <p className="page-content">DEAR COCOとは</p>
                        <p className="page-content">ココナッツの力</p>
                        <p className="page-content">ブランドストーリー</p>
                    </div>

                    <div className="page-info-group">
                        <p className="page-name">QUALITY</p>
                        <p className="page-content">フェアトレードについて</p>
                        <p className="page-content">主な成分</p>
                        <p className="page-content">SDGsへの取り組み</p>
                    </div>

                    <div className="page-info-group">
                        <p className="page-name">PRODUCTS</p>
                        <p className="page-content">商品一覧</p>
                        <p className="page-content">新商品ピックアップ</p>
                    </div>

                    <div className="page-info-group">
                        <p className="page-name">SHOPS</p>
                        <p className="page-content">取扱店舗一覧</p>
                        <p className="page-content">オンラインショップ</p>
                        <p className="page-content">ショップガイド</p>
                    </div>

                    <div className="page-info-group">
                        <p className="page-name">NEWS</p>
                        <p className="page-content">新着情報</p>
                        <p className="page-content">メディア掲載実績</p>
                    </div>

                    <div className="page-info-group">
                        <p className="page-name">CONTACT</p>
                        <p className="page-content">FAQ - よくある質問</p>
                        <p className="page-content">問い合わせフォーム</p>
                    </div>
                </div>
            </div>

            <div className="footer-right-side">
                <div onClick={scrollToTop} className="top-button-container">
                    <div className="arrow">{'\u25B2'}</div>
                    <p className="top">TOP</p>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="line" />
            <div className="footer-bottom-text-container">
                <p className="bottom-left">PRIVACYPOLICY | Terms of use</p>
                <p className="bottom-right">©︎DEAR COCO INC. All rights reserved.</p>
            </div>
        </div>
    </div>
);

export default Footer;