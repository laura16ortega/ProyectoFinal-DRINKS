import React from "react";
import { NavLink } from "react-router-dom";
import s from "./styles/Navbar.module.css";
import cart from "../assets/img/shopping-cart.png";
import heart from "../assets/img/heart.png";
import user from "../assets/img/user.png";

function Navbar(props) {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <h3>drinks.</h3>
      </div>

      <ul className={s.body}>
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
    </div>
  );
}

export default Navbar;
