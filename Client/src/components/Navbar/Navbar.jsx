import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "./Navbar.module.css";
import cart from "../../assets/img/shopping-cart.png";
import heart from "../../assets/img/heart.png";
import user from "../../assets/img/user.png";
import { useAuth0 } from '@auth0/auth0-react';
import SearchBar from "../SearchBar/SearchBar";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import FavoriteProducts from "../FavoriteProducts/FavoriteProducts";
import LocalLogout from "../LocalLogout/LocalLogout";

function Navbar(props) {
   const {isAuthenticated } = useAuth0();
  /*  const [showMenu, setShowMenu] = useState(!false); */
   console.log(localStorage.getItem('jwt'))
   const [auth, setAuth] = useState(!true);




   useEffect(() => {
/*       if(localStorage.getItem('jwt') == null){
         setAuth(false);
      }
      setAuth(!auth); */
   },[localStorage])

   return (
      <div className={window.location.pathname.includes("dashboard") ? s.noDisplay : s.navBar}>
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
               <h3>drinks</h3>
            </div>
            <div >

               {isAuthenticated || !(localStorage.getItem('jwt') == null) ? (
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
                  { isAuthenticated ? (<div><LogoutButton /> </div> ) : (<div><LocalLogout /></div>)}
               </div>
               
               </div>
               ) : (
                  <div className={s.userBtnBodyIn}>
                  <div>

                     <NavLink to='/login'>
                        <button className={s.accessBtn}>Acceder</button>
                     </NavLink>
                  </div>
                  <div>

                  <NavLink to='/carrito'>
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
                  <NavLink to="/" className={({ isActive }) => isActive ? `${s.activeBtn}` : `${s.btn}`}>
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
               { isAuthenticated || !(localStorage.getItem('jwt') == null) ?
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