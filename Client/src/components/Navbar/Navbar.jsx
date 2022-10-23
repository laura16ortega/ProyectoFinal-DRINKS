import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import s from "./Navbar.module.css";
import cart from "../../assets/img/shopping-cart.png";
import heart from "../../assets/img/heart.png";
import user from "../../assets/img/user.png";
import { useAuth0 } from '@auth0/auth0-react';
import SearchBar from "../SearchBar/SearchBar";
import LoginButton from "../LogginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";

function Navbar(props) {
   const {isAuthenticated } = useAuth0();
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
{/*                <div className={s.catBtn}>
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
               </div> */}
            </div>
            <div className={s.logo}>
               <h3>drinks.</h3>
            </div>
            <div >

               {isAuthenticated ? (
                  <div className={s.userBtnBodyIn}>
               <div>
                  <NavLink to='/perfil'>
                     <img className={s.userBtn} src={user} />
                  </NavLink>
               </div>

               <div>
                  <NavLink to='/liked'>
                     <img className={s.userBtn} src={heart} />
                  </ NavLink>
               </div>
               <div>
                  <NavLink to='/carrito'>
                     <img className={s.userBtn} src={cart} />
                  </NavLink>
               </div>
               <div>
               <LogoutButton />
               </div>
               
               </div>
               ) : (
                  <div className={s.userBtnBodyIn}>
                  <div><LoginButton /></div>
                  <div>
                  <NavLink to='/cart'>
                     <img className={s.userBtn} src={cart} />
                  </NavLink>
               </div>
               </div>
               )}



            </div>
         </div>
         <div className={s.bottomContents}>
            <ul className={s.bodyLinks}>
               <li className={s.btnBoxSize}>
                  <NavLink to="/home" className={({ isActive }) => isActive ? `${s.activeBtn}` : `${s.btn}`}>
                     principal
                  </NavLink>
               </li>
               <li className={s.btnBoxSize}>
                  <NavLink to="/productos" className={({ isActive }) => isActive ? `${s.activeBtn}` : `${s.btn}`}>
                     productos
                  </NavLink>
               </li>
               <li className={s.btnBoxSize}>
                  <NavLink to="/acerca" className={({ isActive }) => isActive ? `${s.activeBtn}` : `${s.btn}`} >
                     sobre nosotros
                  </NavLink>
               </li>
               { isAuthenticated ?
(               <li className={s.btnBoxSize}>
                  <NavLink to="/perfil" className={({ isActive }) => isActive ? `${s.activeBtn}` : `${s.btn}`}>
                     mi perfil
                  </NavLink>
               </li>):(<div></div>)}
            </ul>
            <div className={/*setActiveSB ?*/ `${s.searchBar}` /*: `${s.activeSearchBar}`*/}>
               <SearchBar />
            </div>
         </div>
      </div>
   );
}

export default Navbar;