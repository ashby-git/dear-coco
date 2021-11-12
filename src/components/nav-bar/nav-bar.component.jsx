import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NavBarItem from './nav-bar-item/nav-bar-item.component.jsx';
import OnlineShopButton from './online-shop-button/online-shop-button.component.jsx';
import logo from '../../assets/logo.svg';
import './nav-bar.styles.scss';

const NavBar = () => {

    const [navbarFixed, setNavbarFixed] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbarFixed(true);
        } else {
            setNavbarFixed(false);
        }
    };

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={navbarFixed ? 'navbarFixed active' : 'navbarFixed'}>
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
                    <Link
                        className="nav-bar-item-container"
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={10}
                    >
                        <NavBarItem>Contact</NavBarItem>
                    </Link>
                </div>
                <OnlineShopButton />
            </div>
        </div>
    )
};

export default NavBar;