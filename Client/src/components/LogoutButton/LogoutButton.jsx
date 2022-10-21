import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import s from './LogoutButton';

function LogoutButton(props) {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <button className={s.btn} onClick={() => logout()}>
            Salir
        </button>
        )
    );
}

export default LogoutButton;