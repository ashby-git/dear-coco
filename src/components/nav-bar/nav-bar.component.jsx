import React from 'react';
import { Link } from 'react-scroll';
import NavBarItem from './nav-bar-item/nav-bar-item.component.jsx';
import OnlineShopButton from './online-shop-button/online-shop-button.component.jsx';
import logo from '../../assets/logo.svg';
import './nav-bar.styles.scss';

const NavBar = () => (
    <div className="fixed-position">
        <div className="nav-bar-container">

            <div className="nbi-wrap">
                <Link
                    className="nav-bar-item-container"
                    to="concept"
                    smooth={true}
                    duration={500}
                >
                    <NavBarItem>Concept</NavBarItem>
                </Link>
                <Link
                    className="nav-bar-item-container"
                    to="quality"
                    smooth={true}
                    duration={500}
                >
                    <NavBarItem>Quality</NavBarItem>
                </Link>
                <Link
                    className="nav-bar-item-container"
                    to="products"
                    smooth={true}
                    duration={500}
                    offset={-180}
                >
                    <NavBarItem>Products</NavBarItem>
                </Link>
            </div>

            <Link
                className="logo-container"
                to="top"
                smooth={true}
                duration={500}
            >
                <img src={logo} alt="white logo" />
            </Link>

            <div className="nbi-wrap">
                <Link
                    className="nav-bar-item-container"
                    to="shops"
                    smooth={true}
                    duration={500}
                    offset={-180}
                >
                    <NavBarItem>Shops</NavBarItem>
                </Link>
                <Link
                    className="nav-bar-item-container"
                    to="news"
                    smooth={true}
                    duration={500}
                    offset={35}
                >
                    <NavBarItem>News</NavBarItem>
                </Link>
                <div className="nav-bar-item-container">
                    <NavBarItem>Contact</NavBarItem>
                </div>
            </div>

            <div className="shop-button-container">
                <OnlineShopButton />
            </div>
        </div>
    </div>
);

export default NavBar;