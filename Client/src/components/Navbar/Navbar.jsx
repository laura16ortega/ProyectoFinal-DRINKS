import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import s from "./Navbar.module.css";
import cart from "../../assets/img/shopping-cart.png";
import heart from "../../assets/img/heart.png";
import user from "../../assets/img/user.png";

import SearchBar from "../SearchBar/SearchBar";

function Navbar(props) {

   /*

   Replaced with the searchbar component

   const [activeSB, setActiveSB] = useState(!true)

   const searchBarHandle = (e) => {
      e.preventDefault(e);
      console.log('handled');
      setActiveSB(!activeSB)
   }
   */


   /*
    background-color: rgb(255, 255, 255);
    height: 5.7rem;
    margin-top: -6.5rem;
    top: 1rem;
    box-shadow: 0px 1px 6px 0px #b1b1b1;
   */
   

   return (
      <div className={window.location.pathname === "/" ? `${s.noDisplay}` : `${s.navBar}`}>
         <div className={s.topContents}>
            <div className={s.categories}>
               <div className={s.catBtn}>
                  <NavLink to='/vino' className={({ isActive }) => isActive ? `${s.activeCategory}` : `${s.catBt}`}>
                     Vino
                  </NavLink>
               </div >
               <div className={s.catBtn}>
                  <NavLink to='/cerveza' className={({ isActive }) => isActive ? `${s.activeCategory}` : `${s.catBt}`}>
                     Cerveza
                  </NavLink>
               </div >
               <div className={s.catBtn}>
                  <NavLink to='/licores' className={({ isActive }) => isActive ? `${s.activeCategory}` : `${s.catBt}`}>
                     Licores
                  </NavLink>
               </div>
            </div>
            <div className={s.logo}>
               <h3>drinks.</h3>
            </div>
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
         </div>
         <div className={s.bottomContents}>
            <ul className={s.bodyLinks}>
               <li className={s.btnBoxSize}>
                  <NavLink to="/home" className={({ isActive }) => isActive ? `${s.activeBtn}` : `${s.btn}`}>
                     home
                  </NavLink>
               </li>
               <li className={s.btnBoxSize}>
                  <NavLink to="/products" className={({ isActive }) => isActive ? `${s.activeBtn}` : `${s.btn}`}>
                     productos
                  </NavLink>
               </li>
               <li className={s.btnBoxSize}>
                  <NavLink to="/about" className={({ isActive }) => isActive ? `${s.activeBtn}` : `${s.btn}`} >
                     sobre nosotros
                  </NavLink>
               </li>
               <li className={s.btnBoxSize}>
                  <NavLink to="/profile" className={({ isActive }) => isActive ? `${s.activeBtn}` : `${s.btn}`}>
                     mi perfil
                  </NavLink>
               </li>
            </ul>
            <div className={/*setActiveSB ?*/ `${s.searchBar}` /*: `${s.activeSearchBar}`*/}>
               <SearchBar />
            </div>
         </div>
      </div>
   );
}

export default Navbar;