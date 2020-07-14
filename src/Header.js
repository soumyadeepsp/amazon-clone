import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{basket,user}, dispatch] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo"></img>
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchInput"></input>
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                    <div className="header_option" onClick={login}>
                        <span className="header_option1"> Hello </span>
                        <span className="header_option2"> {user ? 'Sign Out' : 'Sign In'} </span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option1"> Returns </span>
                        <span className="header_option2"> & Orders </span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option1"> Your </span>
                        <span className="header_option2"> Prime </span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header_option2 basket_count"> {basket?.length} </span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
