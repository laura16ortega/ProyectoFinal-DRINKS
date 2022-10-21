import {React, useState} from 'react';
import s from './Reviews.module.css'
import Review from '../Review/Review';
import { Rating } from 'react-simple-star-rating';
import { useAuth0 } from '@auth0/auth0-react';

function Reviews(props) {
    const { user, isAuthenticated } = useAuth0();

    const [error, setError ] = useState();
    const [review, setReview] = useState({
        Title:'',
        Content:''
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

        if(!review.Title.length) error.Title = 'Agrega un titulo'
        if(!review.Title) error.Title = 'Agrega un titulo'
        if(review.Title.length < 3) error.Title = 'minimo 3 caracteres'
        if(review.Title.length > 20) error.Title = 'maximo 20 caracteres'

        if(!review.Content.length) error.Content = 'Escribe tu reseña'
        if(!review.Content) error.Content = 'Escribe tu reseña'
        if(review.Content < 10) error.Content = 'minimo 10 caracteres'
        if(review.Content > 60) error.Content = 'maximo 60 caracteres'

        return error
    }

    const range = [1,2,3,4,5,6,7,8,9,10];
    const obj = [{"title":"Not so good", "content":"This is a random text that is just meant to occupy space and give space notion ","username":"aribxax","rating":"★★★★☆"},{"title":"I recommend it!", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Not worth its price :/", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Good packaging!", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Delivery was quick :)", "content":"I loved it","username":"aribxax","rating":"★★★★☆"}]
    const onPointerMove = (value, index) => console.log(value, index)
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
        <form className={s.userReview}>

            <input 
            name='Title'

            onChange={(e) => handleInput(e)} 
            className={s.inputTitle} 
            placeholder='Title'
             />

            <input
            name='Content'
            onChange={(e) => handleInput(e)} 
            className={s.inputContent} 
            placeholder='My review...'
            />
  
        </form>
        </>
    );
}

export default Reviews;