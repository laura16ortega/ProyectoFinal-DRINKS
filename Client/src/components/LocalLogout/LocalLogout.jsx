import React from 'react';
import s from './LocalLogout.module.css';

function LocalLogout(props) {

    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwt');
        document.location.href = '/login';

    }

    return (
        <div className={s.container}>
            <button onClick={(e) => logoutHandler(e)} className={s.btn}>Salir</button>
        </div>
    );
}

export default LocalLogout;