import React from 'react';
import s from './NotFound.module.css';

function NotFound(props) {
    return (
        
        <div className={s.body}>
            <h1>404</h1>
            <h2>No encontrada</h2>
            <p >
           La pagina que estas buscando no pudo ser encontrada o no existe.</p>
        </div>
    );
}

export default NotFound;