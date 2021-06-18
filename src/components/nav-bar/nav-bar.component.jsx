import React from 'react';

// import NavBarItem from './nav-bar-item/nav-bar-item.component';
// import OnlineShopButton from './online-shop-button/online-shop-button.component';

import './nav-bar.styles.scss';

const NavBar = () => (

    <div className="super-container">

        {/* <div className="double-container"> */}


        <div className="nav-bar-container">
            {/* <OnlineShopButton />

        <NavBarItem>Concept</NavBarItem>
        <NavBarItem>Quality</NavBarItem>
        <NavBarItem>Products</NavBarItem>

        <div className="logo" />

        <NavBarItem>Shops</NavBarItem>
        <NavBarItem>News</NavBarItem>
        <NavBarItem>Contact</NavBarItem> */}

            <div>Concept</div>
            <div>Quality</div>
            <div>Products</div>
            <div className="test-logo"></div>
            <div>Shops</div>
            <div>News</div>
            <div>Contact</div>
        </div>

        <div className="test-button"></div>

        {/* </div> */}
    </div>
);

export default NavBar;