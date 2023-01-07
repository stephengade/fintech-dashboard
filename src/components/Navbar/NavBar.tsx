import React from "react";
import styles from "./NavBar.module.scss";
import Logo from "../../images/lendrLogo.svg";
import userAvater from "../../images/avatar.svg"

import { CiSearch } from "react-icons/ci";
import {IoIosNotificationsOutline, IoMdArrowDropdown} from 'react-icons/io'
import {RxHamburgerMenu,RxCross2} from "react-icons/rx"

const searchIcon = <CiSearch color="white"/>;
const bellIcon = <IoIosNotificationsOutline color="#213F7D" fontSize={28} />
const dropIcon = <IoMdArrowDropdown color="#213F7D" />

const MenuIcon = <RxHamburgerMenu color="#213F7D" fontSize={28} />;
const closeIcon = <RxCross2 color="#213F7D" fontSize={28} />

export interface iNav {
    username?: string;
    avater?: undefined | string;
    handleNavMenu: () => void
    isMenuOpen: boolean
}

const NavBar = ({username, avater, handleNavMenu, isMenuOpen}: iNav) => {


  return (
    <nav className={styles.nav}>
      {/* logo and search */}
      <div className={styles.left_container}>
        {/* logo */}

        <div className={styles.hambuger} onClick={handleNavMenu}>
           {!isMenuOpen ? MenuIcon : closeIcon}
        </div>

        <div className={styles.logo}>
         
          <a href="/">
            <img src={Logo} alt="lendsqr logo" />
          </a>
        </div>

      
        {/* // search */}

        <div className={`${styles.inputWrapper} ${styles.flex}`}>
          <input type="text" placeholder="search for anything" />
          <span className={styles.button}>{searchIcon}</span>
        </div>
      </div>

      {/* user profile */}

      <div className={styles.right_side}>
        <p>Docs</p>
        <span className={styles.mobile_hide}>{bellIcon}</span>

        <div className={styles.user_profile}>
            <img src={avater} alt={username} width="48px" height="48px" />

            <p className={styles.show_menu}>
                <span className={styles.name}>{username}</span>
                <span>{dropIcon}</span>    
            </p>
        </div>
      </div>

    </nav>
  );
};

NavBar.defaultProps ={
    username: "Adedeji",
    avater: userAvater
}

export default NavBar;
