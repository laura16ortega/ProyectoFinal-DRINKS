import React from 'react';
import s from './LoginOptions.module.css';
import LoginButton from '../../components/LoginButton/LoginButton';
import Login from '../../components/Login/Login';
import { NavLink } from 'react-router-dom';
import googleLogo from '../../assets/img/google.png';
function LoginOptions(props) {
    return (
        <>
        <div className={s.container}>
            
            <div className={s.body}>
            <h3 style={{color:'black',margin:'0 auto',fontFamily:'manrope-regular', fontSize:'30px',marginBottom:'3rem', userSelect:'none'}}>Ingresar</h3>
            <Login />
            <LoginButton />

            
            
            </div>
            
        </div>
        <NavLink to='/register'><p className={s.register}>No tienes cuenta? Registrate</p></NavLink>
        </>
    );
}

export default LoginOptions;