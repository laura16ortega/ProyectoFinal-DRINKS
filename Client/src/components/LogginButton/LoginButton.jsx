import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import s from './LoginButton.module.css';

function LoginButton(props) {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
        <button  className={s.btn} onClick={() => loginWithRedirect()}>
            Acceder
        </button>
        )
    );
}

export default LoginButton;