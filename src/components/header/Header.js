import React from "react";
//css
import "./Header.css";
//material icon
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import SearchIcon from "@mui/icons-material/Search";
//component
import CountrySelect from "./Country";

function Header() {
  return (
    <>
      <div className="header__one">
        <div className="header__logo">
          <StoreMallDirectoryIcon
            fontSize="large"
            className="header__logoImage"
          />
          <h2 className="header__logoTitle">Amazon.in</h2>
        </div>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <span className="nav__itemLineOne">
            <CountrySelect />
          </span>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
          <div className="nav__item">
            <span className="nav__itemLineOne">Your</span>
            <span className="nav__itemLineTwo">Shop In</span>
          </div>
          <div className="nav__item">
            <span className="nav__itemLineOne">
              <ShoppingCartTwoToneIcon fontSize="large" />
              <span className="nav__itemLineTwo">0</span>
            </span>
            {/* <span className="nav__itemLineTwo">0</span> */}
          </div>
        </div>
      </div>

      <div className="header__two">
        <div className="header__category">
          <p className="category one">All</p>
          <p className="category one">Best Mobiles</p>
          <p className="category one">Customer Service</p>
          <p className="category one">Today's Deals</p>
          <p className="category one">Fashion</p>
          <p className="category one">Prime</p>
          <p className="category one">Electronic</p>
          <p className="category one">Home & Kitchen</p>
          <p className="category one">Amazon Pay</p>
          <p className="category one">Computers</p>
          <p className="category one">Books</p>
          <p className="category one">Sell</p>
          <p className="category one">Coupons</p>
          <p className="category one">Car & Motorbike</p>
          <p className="category one">Beauty</p>
          <p className="category one">Wellness</p>
        </div>
      </div>
    </>
  );
}

export default Header;
