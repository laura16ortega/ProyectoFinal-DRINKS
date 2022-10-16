import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import s from "./Navbar.module.css";
import cart from "../../assets/img/shopping-cart.png";
import heart from "../../assets/img/heart.png";
import user from "../../assets/img/user.png";

function Navbar(props) {

  const [activeSB, setActiveSB] = useState(1)

  const searchBarHandle = (e) => {
    e.preventDefault(e);
    console.log('handled');
    setActiveSB(0)
  }

  useEffect(() => {

  },[activeSB]);


  return (
    <>


    <div className={s.container}>
            <div className={s.categories}>
        <div className={s.catBtn}>
        <NavLink to='/wine' className={({ isActive }) => isActive ? `${s.activeCategory}` : `${s.catBt}`}>
        Wine
        </NavLink>
        </div >
        <div className={s.catBtn}>
        <NavLink to='/beer' className={({ isActive }) => isActive ? `${s.activeCategory}` : `${s.catBt}`}>
        Beer
        </NavLink>
        </div >
        <div className={s.catBtn}>
        <NavLink to='/spirits' className={({ isActive }) => isActive ? `${s.activeCategory}` : `${s.catBt}`}>
        Spirits
        </NavLink>
        </div>

      </div>


      <ul className={s.bodyLinks}>

      
        <li className={s.btnBoxSize}>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? `${s.activeBtn}` : `${s.btn}`
            }
          >
            home.
          </NavLink>
        </li>
        <li className={s.btnBoxSize}>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? `${s.activeBtn}` : `${s.btn}`
            }
          >
            products.
          </NavLink>
        </li>
        <li className={s.btnBoxSize}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${s.activeBtn}` : `${s.btn}`
            }
          >
            about us.
          </NavLink>
        </li>
        <li className={s.btnBoxSize}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? `${s.activeBtn}` : `${s.btn}`
            }
          >
            my profile.
          </NavLink>
        </li>
      </ul>
      <div className={s.bodyContainer}></div>
      <div className={s.userBtnBody}>
        <div>
            <NavLink to='/profile'>
        <img className={s.userBtn} src={user} />
            </NavLink>
        </div>
        <div>
        <NavLink to='/liked'>
        <img className={s.userBtn} src={heart} />
        </ NavLink>
        </div>
        <div>
        <NavLink to='/cart'>
        <img className={s.userBtn} src={cart} />
        </NavLink>
        </div>
      </div>
      <div >
            <input className={ setActiveSB ? `${s.searchInput}` : `${s.searchInput}`} onClick={(e) => searchBarHandle(e)} /* className={s.searchInput} */ placeholder='Search' />
      </div>
    </div>
    <div className={s.logo}>
    <h3>drinks.</h3>
  </div>
    </>
  );
}

export default Navbar;
