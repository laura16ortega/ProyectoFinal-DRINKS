import React from 'react';
import s from './Review.module.css';
import userPhoto from '../../assets/img/user.png';
import { Rating } from 'react-simple-star-rating';


function Review({ username, userImage, comment, rating }) {
    return (
        <>
            <div className={s.body}>
                <div className={s.usernameBody}>
                    <img className={s.img} alt='user photo' src={userImage ? userImage : userPhoto} />
                    <p className={s.username}>{username}</p>
                </div>
                <div className={s.reviewContainer}>
                    <div>
                        {/*<p className={s.rating}>{rating}</p>*/}
                        <Rating className={s.rating} iconsCount={5} initialValue={rating} readonly={true} allowFraction={true} />
                    </div>
                    <div>
                        <p className={s.content}>{comment}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Review;