import React from 'react';
import "./Header.css";
import {FcBookmark} from "react-icons/fc";
import {FcLike} from "react-icons/fc";
import {FcBusinesswoman} from "react-icons/fc";
import {FcSearch} from "react-icons/fc";


function Header() {
  return (
    <div className="header">
     <div className="header__left">
       <img src="https://images.gr-assets.com/doodles/1619806753i/30.svg" alt="logo" />
     </div>
     <div className="header__search">
       <FcSearch className="search__icon"/>
       <input type="text" placeholder="Search Your Books"/>
     </div>
     <div className="header__right">
       {/* <ul> */}
       <li><FcLike/></li>
       <li><FcBookmark/></li>
       <li><FcBusinesswoman/></li>
       {/* </ul> */}
     </div>
    </div>
  )
}

export default Header
