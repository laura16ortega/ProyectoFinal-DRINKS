import React from 'react';
import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
function Footer(props) {
    const {isAuthenticated } = useAuth0();
    return (
        <>

        <footer className={s.navdown} >



            <div className={s.contact}>
                <div className={s.header}><h3>Enlaces</h3></div>
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
            </div>
            <div className={s.contact}>
               <div className={s.header}><h3>Contacto</h3></div>

            </div>
            <div className={s.github}>
        <div className={s.contact}> <div className={s.header}><h3>Redes</h3></div></div>

            </div>

        </footer>
        </>
    );
}

export default Footer;