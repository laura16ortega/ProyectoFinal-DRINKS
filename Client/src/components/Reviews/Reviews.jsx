import {React, useState} from 'react';
import s from './Reviews.module.css'
import Review from '../Review/Review';
import { Rating } from 'react-simple-star-rating';
import { useAuth0 } from '@auth0/auth0-react';

function Reviews(props) {
    const { user, isAuthenticated } = useAuth0();

    const [error, setError ] = useState({});
    const [review, setReview] = useState({
        title:'',
        content:'',
        rating:''
    });


    const handleInput = (e) => {
        e.preventDefault();
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...review,
            [e.target.name]: e.target.value
        }))
    }

    const validate = () => {
        let error = {};

        if(!review.title.length) error.title = 'Agrega un titulo'
        if(!review.title) error.title = 'Agrega un titulo'
        if(review.title.length < 3) error.title = 'minimo 3 caracteres'
        if(review.title.length > 20) error.title = 'maximo 20 caracteres'

        if(!review.content.length) error.content = 'Escribe tu reseña'
        if(!review.content) error.content = 'Escribe tu reseña'
        if(review.content < 10) error.content = 'minimo 10 caracteres'
        if(review.content > 60) error.content = 'maximo 60 caracteres'

        return error
    }

    const range = [1,2,3,4,5,6,7,8,9,10];
    const obj = [{"title":"Not so good", "content":"This is a random text that is just meant to occupy space and give space notion ","username":"aribxax","rating":"★★★★☆"},{"title":"I recommend it!", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Not worth its price :/", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Good packaging!", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Delivery was quick :)", "content":"I loved it","username":"aribxax","rating":"★★★★☆"}]
    const onPointerMove = (value) => {
        setReview({
            ...review,
            rating:value
        })
    }



    return (
        <>
        <div className={s.allReviews}>   
            {obj.map((e)=> {
            return(
            <div>
            <Review title={e.title} content={e.content} username={e.username} rating={e.rating} />
            </div>
            )})}
            
        </div>

        <div className={s.userBoardBody}>
        <div>
        <img  className={s.image} src={user?.picture} />
        <h6 className={s.nickname}>{user?.nickname}</h6>
            </div>   
        <div>
            <Rating onClick={onPointerMove} allowFraction="true"/>
        </div>
        </div>
        <form className={s.userReview} onSubmit={s}>

            <input 
            name='title'

            onChange={(e) => handleInput(e)} 
            className={s.inputTitle} 
            placeholder='title'
             />
              {error.title && <p className={s.alert}>{error.title}</p>}

            <textarea
            name='content'
            onChange={(e) => handleInput(e)} 
            className={s.inputContent} 
            placeholder='My review...'
            />
            {error.content && <p className={s.alert}>{error.content}</p>}
            <button type='submit' className={s.btn}>Enviar</button>
  
        </form>
        </>
    );
}

export default Reviews;