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
        comment:'',
        rating:'',
        user:''
    });
    console.log(user)

    const [auth, setAuth] = useState(!true);




    useEffect(() => {
       setAuth(!auth);
       const userToken = localStorage.getItem('jwt');
    },[localStorage.getItem('jwt')])
 


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

/*         if(!review.title.length) error.title = 'Agrega un titulo'
        if(!review.title) error.title = 'Agrega un titulo'
        if(review.title.length < 3) error.title = 'minimo 3 caracteres'
        if(review.title.length > 20) error.title = 'maximo 20 caracteres'
         */
        if(review.rating == 0) error.rating = 'ingrese su valoracion'

        if(!review.comment.length) error.comment = 'Escribe tu reseña'
        if(!review.comment) error.comment = 'Escribe tu reseña'
        if(review.comment < 10) error.comment = 'minimo 10 caracteres'
        if(review.comment > 60) error.comment = 'maximo 60 caracteres'

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
                profile_img:user.picture,
                user:userToken
            })
            console.log(review);
            dispatch(addReview(review));
            alert('review added');
          }


    }
    const range = [1,2,3,4,5,6,7,8,9,10];
    const obj = [{"title":"Not so good", "comment":"This is a random text that is just meant to occupy space and give space notion ","username":"aribxax","rating":"★★★★☆"},{"title":"I recommend it!", "comment":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Not worth its price :/", "comment":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Good packaging!", "comment":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Delivery was quick :)", "comment":"I loved it","username":"aribxax","rating":"★★★★☆"}]




    return (
        <>
        <div className={s.allReviews}>   
            {obj.map((e, i)=> {
            return(
            <div key={i}>
            <Review title={e.title} comment={e.comment} username={e.username} rating={e.rating} />
            </div>
            )})}
            
        </div>


          { isAuthenticated || auth ? (<form className={s.userReview} onSubmit={(e) => handleNewReview(e)}>
          <div className={s.userBoardBody}>
        <div>
        <img  className={s.image} src={user?.picture} />
        <h6 className={s.nickname}>{user?.nickname}</h6>
            </div> 
            <div>
            <Rating onClick={onPointerMove} allowFraction="true"/>
        </div>  

        </div>
           {/*  <input 
            name='title'

            onChange={(e) => handleInput(e)} 
            className={s.inputTitle} 
            placeholder='Titulo'
             />
              {error.title && <p className={s.alert}>{error.title}</p>} */}

            <textarea
            name='comment'
            onChange={(e) => handleInput(e)} 
            className={s.inputContent} 
            placeholder='My review...'
            />
            {error.comment && <p className={s.commentAlert}>{error.comment}</p>}
            <button type='submit' className={s.btn}>Enviar</button>
  
        </form>) : (<div></div>)}      
        
        </>
    );
}

export default Reviews;