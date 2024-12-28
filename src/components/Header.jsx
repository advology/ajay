import React from 'react'
import '../assets/sass/style.css'
import {NavLink, Link } from 'react-router-dom'
import { Images } from './AllImages';
import { useDispatch } from "react-redux";
import { showPopup } from './Action';
import LeadFormPopup from './LeadFormPopup';
import { NavData } from '../data/NavData';
import { MdSupportAgent } from "react-icons/md";
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { showMobileMenu, showOverlay } from './Action';
import { MobMenu } from './MobMenu';
import { useSelector } from 'react-redux';
import { hideMobileMenu } from './Action';


export const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const location1 = location.pathname.split('/')[1];
    // mobilemenu define
    const isMobileMenuOpen = useSelector((state) => state.isMobileMenuOpen);
    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            dispatch(hideMobileMenu());
        } else {
            dispatch(showMobileMenu());
        }
    };
    return (
        <header>
            <div className="container">
                <div className="header-wrapper">
                    <div className="flex">
                        <div className="colA">
                            <div className="logo"><Link to="/"><img src={Images.Logo} alt="Logo" /></Link></div>
                        </div>
                        <div className="colB">
                            <nav>
                                <ul>
                                    {NavData &&
                                        NavData.map((nav, index) => {
                                            const { name, url, icon: IconComponent } = nav;
                                            return (
                                                <li key={index}><NavLink to={url} className={location1 === url.split('/')[1] ? 'active' : ''}  onClick={() => window.scrollTo({ top: 0 })}><IconComponent/>{name}</NavLink></li>
                                            );
                                    })}
                                    <li onClick={() => dispatch(showPopup())}><MdSupportAgent />Inquiry</li>
                                    <li onClick={toggleMobileMenu}><FaBars/></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}