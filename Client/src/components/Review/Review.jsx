import React from 'react';
import s from './Review.module.css';
import userPhoto from '../../assets/img/user.png';


function Review({title, content, username, rating}) {
    return (
        <>
            
                <div className={s.body}>

                    <div className={s.usernameBody}>
                        <img className={s.img} alt='user photo' src={userPhoto} />
                        <div>
                        <p className={s.rating}>{rating}</p>
                         </div>
                       

                    </div>
                    <div>
                    <p className={s.username}>{username}</p>
                    </div>

                    <div >
                        <h3 className={s.title}>{title}</h3>
                       
                        </div>
                    <div >
                        <p className={s.content}>{content}</p>
                    </div>

                </div>   

         
        </>
    );
}

export default Review;