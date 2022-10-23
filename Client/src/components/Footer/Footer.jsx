import React from 'react';
import s from './Footer.module.css';

function Footer(props) {
    return (
        <>

        <footer className={s.navdown} >
            <div className={s.contact}>
            Principal   Productos   Sobre nosotros
            </div>
            <div className={s.social_media}>
                Facebook
                Instagram
                Github
            </div>
            <div className={s.github}>
        Contacto

            </div>
            
        </footer>
        </>
    );
}

export default Footer;