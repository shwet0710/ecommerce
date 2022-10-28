import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import {SlBasket} from 'react-icons/sl';
import {SiTrustedshops} from 'react-icons/si';
import { useStateValue } from "./StateProvider";


const Header = () => {
    const [{basket}, dispatch] = useStateValue();
    return(
        <div className="header">
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="header__logo">
                    <SiTrustedshops className="header__logoImage" fontSize="large"/>
                    <h2 className="header__logoTitle">eDukaan</h2>
                    
                </div>
            </Link>
            
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <AiOutlineSearch className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" style={{ textDecoration:"none" }}>
                    <div className="nav__item">
                        <span className="nav__itemLineTwo">Login/Register</span>
                    </div>
                </Link>

                <Link to='/explore' style={{ textDecoration: "none" }}>
                    <div className="nav__itemBasket">
                        <SlBasket className="shift"/>
                        <span className="nav__itemLineTwo">My Cart</span>
                        <span className="nav__itemLineTwo nav__basketCount">{basket.length > 1 ? <span className="nav__itemLineTwo nav__basketCount">{basket.length} items</span> : <span className="nav__itemLineTwo nav__basketCount">{basket.length} item</span>}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;