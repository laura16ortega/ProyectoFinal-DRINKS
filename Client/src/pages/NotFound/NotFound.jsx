import React from 'react';
import s from './NotFound.module.css';
import {Link} from 'react-router-dom';

function NotFound(props) {
    return (
        
        <div className={s.body}>
            <h1>404</h1>
            <h2>No encontrada</h2>
            <p >
           La pagina que estas buscando no pudo ser encontrada o no existe.</p>
           <Link to="/home">ir allá</Link>
        </div>
    );
}

export default NotFound;