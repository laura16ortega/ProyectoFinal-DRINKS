import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import s from './LoginButton.module.css';
import googleLogo from '../../assets/img/google.png';
function LoginButton(props) {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
        <button  className={s.btn} onClick={() => loginWithRedirect()}><img className={s.logo} src={googleLogo} /> Acceder con cuenta Google  </button>
        )
    );
}

export default LoginButton;