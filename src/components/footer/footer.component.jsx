import React from 'react';

import footerLogo from '../../assets/footer-logo.svg';
import fbLogo from '../../assets/f_logo_white.svg';
import twitterLogo from '../../assets/twitter_logo_white.svg';


import './footer.styles.scss';

const Footer = () => (
    <div className="footer-background">
        <div className="footer-top-section">

            <div className="footer-left-side">
                <img className="footer-logo" src={footerLogo} alt="footer logo" />
                <div className="smaller-logos">
                    <img className="fb-logo" src={fbLogo} alt="footer logo" />
                    <img src={twitterLogo} alt="footer logo" />
                </div>
            </div>

            <div className="footer-middle">
                <div className="page-info-group-container">
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
            </div>

            <div className="footer-right-side">
                <div className="top-button-container">
                    <div className="arrow">{'\u25B2'}</div>
                    <div className="top">TOP</div>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="line" />
            <div className="footer-bottom-text-container">
                <div className="bottom-left">PRIVACYPOLICY | Terms of use</div>
                <div className="bottom-right">©︎DEAR COCO INC. All rights reserved.</div>
            </div>
        </div>

    </div>
);

export default Footer;