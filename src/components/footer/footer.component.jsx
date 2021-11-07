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
        <div className="footer-top">

            <div className="footer-left-side">
                <div className="footer-logo-group">
                    <img src={footerLogo} alt="footer logo" />
                    <div className="footer-smaller-logos">
                        <a href="https://en.wikipedia.org/wiki/Facebook"><img src={fbLogo} alt="footer logo" /></a>
                        <a href="https://en.wikipedia.org/wiki/Twitter"><img src={twitterLogo} alt="footer logo" /></a>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="page-info-group-container">
                    <div className="page-info-group">
                        <p className="page-name">CONCEPT</p>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">DEAR COCOとは</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">ココナッツの力</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">ブランドストーリー</a>
                    </div>

                    <div className="page-info-group">
                        <p className="page-name">QUALITY</p>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">フェアトレードについて</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">主な成分</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">SDGsへの取り組み</a>
                    </div>

                    <div className="page-info-group">
                        <p className="page-name">PRODUCTS</p>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">商品一覧</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">新商品ピックアップ</a>
                    </div>

                    <div className="page-info-group">
                        <p className="page-name">SHOPS</p>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">取扱店舗一覧</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">オンラインショップ</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">ショップガイド</a>
                    </div>

                    <div className="page-info-group">
                        <p className="page-name">NEWS</p>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">新着情報</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">メディア掲載実績</a>
                    </div>

                    <div className="page-info-group">
                        <p className="page-name">CONTACT</p>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">FAQ - よくある質問</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">問い合わせフォーム</a>
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
                <a href="https://en.wikipedia.org/wiki/Privacy_policy" className="footer-bottom-text-left">PRIVACYPOLICY | Terms of use</a>
                <p className="footer-bottom-text-right">©︎DEAR COCO INC. All rights reserved.</p>
            </div>
        </div>
    </div>
);

export default Footer;