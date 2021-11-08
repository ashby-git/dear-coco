import React from 'react';
import NavBarItem from './nav-bar-item/nav-bar-item.component.jsx';
import OnlineShopButton from './online-shop-button/online-shop-button.component.jsx';
import logo from '../../assets/logo.svg';
import './nav-bar.styles.scss';

const NavBar = () => (
    <div className="fixed-position">
        <div className="nav-bar-container">

            <div className="nbi-wrap">
                <div className="nav-bar-item-container">
                    <NavBarItem>Concept</NavBarItem>
                </div>
                <div className="nav-bar-item-container">
                    <NavBarItem>Quality</NavBarItem>
                </div>
                <div className="nav-bar-item-container">
                    <NavBarItem>Products</NavBarItem>
                </div>
            </div>

            <div className="logo-container">
                <img src={logo} alt="white logo" />
            </div>

            <div className="nbi-wrap">
                <div className="nav-bar-item-container">
                    <NavBarItem>Shops</NavBarItem>
                </div>
                <div className="nav-bar-item-container">
                    <NavBarItem>News</NavBarItem>
                </div>
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