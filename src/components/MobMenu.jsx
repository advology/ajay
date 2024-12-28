import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMobileMenu, hideOverlay } from "./Action";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { NavData } from "../data/NavData";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, useLocation } from 'react-router-dom';


export const MobMenu = () =>{
    const location = useLocation();
    const location2 = location.pathname.split('/')[1];

    const dispatch = useDispatch();
    const isOverlayVisible = useSelector((state) => state.isOverlayVisible);
    
    const isMobileMenuOpen = useSelector((state) => state.isMobileMenuOpen);
    const handleCloseMenu = () => {
        dispatch(hideMobileMenu());
        dispatch(hideOverlay());
    };

    return (
        <>
            {isOverlayVisible && (
                <div className={`overlay ${isOverlayVisible ? "active" : ""}`} onClick={handleCloseMenu}></div>
            )}
            <div className={`Model_Video ${isMobileMenuOpen ? "active" : ""}`}>
                <div className="close_model" onClick={handleCloseMenu}>
                    <IoMdCloseCircleOutline />
                </div>
                <div className="modelBody">
                    <ul>
                        {NavData &&
                        NavData.map((nav, index) => {
                            const { name, url, icon: IconComponent } = nav;
                            return (
                            <li key={index}>
                                <NavLink to={url} className={location2 === url.split('/')[1] ? 'active' : ''} onClick={handleCloseMenu}>
                                    <IconComponent />
                                    {name}
                                </NavLink>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
        )
}