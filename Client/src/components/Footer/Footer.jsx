import React from 'react';
import s from './Footer.module.css';

function Footer(props) {
    return (
        <>

        <footer className={s.body} >
            <div className={s.contact}>
                random
                random
            </div>
            <div className={s.social_media}>
                facebook
                instagram
                etc
            </div>
            <div className={s.github}>
                aribxax
                etc etc
                etcetc

            </div>
            
        </footer>
        </>
    );
}

export default Footer;