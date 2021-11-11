import React from 'react';
import { Link } from 'react-scroll';

import footerLogo from '../../assets/footer-logo.svg';
import fbLogo from '../../assets/f_logo_white.svg';
import twitterLogo from '../../assets/twitter_logo_white.svg';

import './footer.styles.scss';

const Footer = () => (
    <div className="footer-background">
        <div className="footer-top">

            <div className="footer-left-side">
                <div className="footer-logo-group">
                    <Link to="top" smooth={true} duration={500}>
                        <img src={footerLogo} alt="footer logo" />
                    </Link>
                    <div className="footer-smaller-logos">
                        <a href="https://en.wikipedia.org/wiki/Facebook"><img src={fbLogo} alt="footer logo" /></a>
                        <a href="https://en.wikipedia.org/wiki/Twitter"><img src={twitterLogo} alt="footer logo" /></a>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="page-info-group-container">
                    <div className="page-info-group">
                        <Link
                            className="page-name"
                            to="concept"
                            smooth={true}
                            duration={500}
                        >CONCEPT</Link>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">DEAR COCOとは</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">ココナッツの力</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">ブランドストーリー</a>
                    </div>

                    <div className="page-info-group">
                        <Link
                            className="page-name"
                            to="quality"
                            smooth={true}
                            duration={500}
                        >QUALITY</Link>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">フェアトレードについて</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">主な成分</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">SDGsへの取り組み</a>
                    </div>

                    <div className="page-info-group">
                        <Link
                            className="page-name"
                            to="products"
                            smooth={true}
                            duration={500}
                            offset={-180}
                        >PRODUCTS</Link>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">商品一覧</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">新商品ピックアップ</a>
                    </div>

                    <div className="page-info-group">
                        <Link
                            className="page-name"
                            to="shops"
                            smooth={true}
                            duration={500}
                            offset={-180}
                        >SHOPS</Link>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">取扱店舗一覧</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">オンラインショップ</a>
                        <a href="https://en.wikipedia.org/wiki/Coconut" className="page-content">ショップガイド</a>
                    </div>

                    <div className="page-info-group">
                        <Link
                            className="page-name"
                            to="news"
                            smooth={true}
                            duration={500}
                            offset={35}
                        >NEWS</Link>
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
                <Link
                    className="top-button-container"
                    to="top"
                    smooth={true}
                    duration={500}
                >
                    <div className="arrow">{'\u25B2'}</div>
                    <p className="top">TOP</p>
                </Link>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="footer-line" />
            <div className="footer-bottom-text-container">
                <a href="https://en.wikipedia.org/wiki/Privacy_policy" className="footer-bottom-text">PRIVACYPOLICY | Terms of use</a>
                <p className="footer-bottom-text">©︎DEAR COCO INC. All rights reserved.</p>
            </div>
        </div>
    </div>
);

export default Footer;