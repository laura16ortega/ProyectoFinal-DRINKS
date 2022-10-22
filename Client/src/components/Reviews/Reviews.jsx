import {React, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import s from './Reviews.module.css'
import Review from '../Review/Review';
import { Rating } from 'react-simple-star-rating';
import { useAuth0 } from '@auth0/auth0-react';
import { addReview } from '../../redux/actions';

function Reviews(props) {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useAuth0();
    const [error, setError ] = useState({});
    const [review, setReview] = useState({
        title:'',
        content:'',
        rating:''
    });
    console.log(user)


    useEffect(() => {

    },[review])
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
    const onPointerMove = (value) => {
        setReview({
            ...review,
            rating:value
        })
        setError(validate({
            ...review,
            rating:value
        }))
    }
    const validate = () => {
        let error = {};

        if(!review.title.length) error.title = 'Agrega un titulo'
        if(!review.title) error.title = 'Agrega un titulo'
        if(review.title.length < 3) error.title = 'minimo 3 caracteres'
        if(review.title.length > 20) error.title = 'maximo 20 caracteres'
        
        if(review.rating == 0) error.rating = 'ingrese su valoracion'

        if(!review.content.length) error.content = 'Escribe tu reseña'
        if(!review.content) error.content = 'Escribe tu reseña'
        if(review.content < 10) error.content = 'minimo 10 caracteres'
        if(review.content > 60) error.content = 'maximo 60 caracteres'

        return error
    }
    const handleNewReview = (e) => {
        e.preventDefault(e);
        if( Object.keys(error).length > 0){
            alert('Completa los campos correctamente')
          } else {
            setReview({
                ...review,
                username:user.nickname,
                profile_img:user.picture
            })
            console.log(review);
            dispatch(addReview(review));
            alert('review added');
          }


    }
    const range = [1,2,3,4,5,6,7,8,9,10];
    const obj = [{"title":"Not so good", "content":"This is a random text that is just meant to occupy space and give space notion ","username":"aribxax","rating":"★★★★☆"},{"title":"I recommend it!", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Not worth its price :/", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Good packaging!", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Delivery was quick :)", "content":"I loved it","username":"aribxax","rating":"★★★★☆"}]




    return (
        <>
        <div className={s.allReviews}>   
            {obj.map((e, i)=> {
            return(
            <div key={i}>
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
          { isAuthenticated ? (<form className={s.userReview} onSubmit={(e) => handleNewReview(e)}>

            <input 
            name='title'

            onChange={(e) => handleInput(e)} 
            className={s.inputTitle} 
            placeholder='Titulo'
             />
              {error.title && <p className={s.alert}>{error.title}</p>}

            <textarea
            name='content'
            onChange={(e) => handleInput(e)} 
            className={s.inputContent} 
            placeholder='My review...'
            />
            {error.content && <p className={s.contentAlert}>{error.content}</p>}
            <button type='submit' className={s.btn}>Enviar</button>
  
        </form>) : (<div></div>)}      
        
        </>
    );
}

export default Reviews;