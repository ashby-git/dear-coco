import React from 'react';
import NavBarItem from './nav-bar-item/nav-bar-item.component.jsx';
import OnlineShopButton from './online-shop-button/online-shop-button.component.jsx';
import './nav-bar.styles.scss';

const NavBar = () => (

    <div className="nav-bar-container">
        <div className="items">
            <NavBarItem>Concept</NavBarItem>
        </div>
        <div className="items">
            <NavBarItem>Quality</NavBarItem>
        </div>
        <div className="items">
            <NavBarItem>Products</NavBarItem>
        </div>
        <div className="logo-container">
            <div className="logo" />
        </div>
        <div className="items">
            <NavBarItem>Shops</NavBarItem>
        </div>
        <div className="items">
            <NavBarItem>News</NavBarItem>
        </div>
        <div className="items">
            <NavBarItem>Contact</NavBarItem>
        </div>
        <div className="shop-button">
            <OnlineShopButton />
        </div>
    </div>
);

export default NavBar;