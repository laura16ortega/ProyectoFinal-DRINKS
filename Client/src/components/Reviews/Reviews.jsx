import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Reviews.module.css'
import Review from '../Review/Review';
import { Rating } from 'react-simple-star-rating';
import { useAuth0 } from '@auth0/auth0-react';
import { addReview, getUser } from '../../redux/actions';
import { Link } from "react-router-dom"
import placeholderImage from "../../assets/img/user.png"
import Swal from 'sweetalert2';

function Reviews({forceUpdate}) {
    const dispatch = useDispatch();
    const product = useSelector(state => state.productDetails)
    const actionErrors = useSelector(state => state.errors)
    const { user, isAuthenticated } = useAuth0();
    const token = window.localStorage.getItem("jwt")
    const localUser = useSelector(state => state.localUser)
    const [error, setError] = useState({});
    const [review, setReview] = useState({
        userId: '',
        userImage: '',
        name: '',
        comment: '',
        rating: ''
    });
    const productReviews = product.reviews

    const setData = () => {
        setReview({
            ...review,
            userId: isAuthenticated ? user.email : localUser._id,
            userImage: isAuthenticated ? user.picture : localUser.image,
            name: isAuthenticated ? user.name : localUser.fullName
        })
    } 

    useEffect(() => {
        dispatch(getUser(token))
    }, [dispatch])


    useEffect(() => {
        setData()
    }, [review.rating])

    const handleInput = (e) => {
        e.preventDefault();
        setData()
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
            rating: value
        })
        setError(validate({
            ...review,
            rating: value
        }))
    }
    const validate = () => {
        let error = {};

        /*         if(!review.title.length) error.title = 'Agrega un titulo'
                if(!review.title) error.title = 'Agrega un titulo'
                if(review.title.length < 3) error.title = 'minimo 3 caracteres'
                if(review.title.length > 20) error.title = 'maximo 20 caracteres'
                 */
        if (review.rating == 0) error.rating = 'ingrese su valoracion'

        if (!review.comment.length) error.comment = 'Escribe tu reseña'
        if (!review.comment) error.comment = 'Escribe tu reseña'
        if (review.comment < 10) error.comment = 'minimo 10 caracteres'
        if (review.comment > 60) error.comment = 'maximo 60 caracteres'

        return error
    }

    const handleNewReview = async (e) => {
        e.preventDefault(e);
        const validator = validate()
        if (Object.keys(validator).length > 0) {
            alert('Completa los campos correctamente')
        } else {
            console.log("Review del submit: ", review);
            dispatch(addReview(product._id, token, review))
            setReview({
                userId: '',
                userImage: '',
                name: '',
                comment: '',
                rating: 0
            })
            Swal.fire({
                icon: "success",
                text: "Review agregada"
                }).then((res) => {
                if (res.value) {
                    forceUpdate()
                }
            })
        }
    }

    if (Object.keys(actionErrors).length) {
        Swal.fire({
           icon: "error",
           text: `${actionErrors.message}`
        })
    }

    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const obj = [{
        "userImage": "https://img.itch.zone/aW1nLzEwMzg2NTc3LnBuZw==/original/lqeJ%2FW.png",
        "comment": "This is a random text that is just meant to occupy space and give space notion ",
        "username": "Viewers",
        "rating": 4
    },
    {
        "userImage": "https://img.itch.zone/aW1hZ2UvMTc1NDI4My8xMDMxODg3MS5wbmc=/347x500/owpRXx.png",
        "comment": `A terrible experiment went wrong and has created the most horrid and hideous being on earth, it's up to you to solve its mistery and escape your creation.  Short (10-15 mins) horror game.

        Warning this game has jumspcares`,
        "username": "The Bark Incident",
        "rating": 4
    }, {
        "userImage": "https://img.itch.zone/aW1nLzEwMzYxMDE1LnBuZw==/original/4x2aZP.png",
        "comment": "Not worth its price :/",
        "username": "STALL",
        "rating": 1
    }, {
        "userImage": "https://img.itch.zone/aW1nLzEwMzYwMTM5LmdpZg==/original/5hGY87.gif",
        "comment": "Good packaging!",
        "username": "We are looking for you",
        "rating": 2
    }, {
        "userImage": "https://img.itch.zone/aW1hZ2UvMTc1Mjk1MC8xMDMyMjk0My5qcGc=/347x500/WcKbFX.jpg",
        "comment": "Use your holy crucifix to perform exorcisms, fight back against possessed cultists, and cleanse haunted objects. Discover a world of dread, isolation, and mystery as you explore haunted forests, abandoned churches, and the inner sanctums of a Satanic cult.",
        "username": "Mortis",
        "rating": 3
    }]


    return (
        <>
            <div className={s.allReviews}>
                {productReviews.length ? productReviews.map((e, i) => {
                    return (
                        <div key={i}>
                            <Review username={e.username? e.username : e.name} userImage={e.userImage} comment={e.comment} rating={e.rating} />
                        </div>
                    )
                }) : <div><h3 style={{ fontSize: "1.6rem", margin: "0", color: "#7F8487" }}>Sin reviews</h3></div>}
            </div>
            {isAuthenticated ? (
                <form className={s.userReview} onSubmit={(e) => handleNewReview(e)}>
                    <div className={s.userBoardBody}>
                        <div className={s.userDataContainer}>
                            <img src={user?.picture} alt="" />
                            <p>{user?.nickname}</p>
                        </div>
                        <div className={s.ratingContainer}>
                            <Rating onClick={onPointerMove} allowFraction="true" />
                        </div>
                    </div>
                    <textarea
                        name='comment'
                        value={review.comment}
                        onChange={(e) => handleInput(e)}
                        className={s.inputContent}
                        placeholder='My review...'
                    />
                    {error.comment && <p className={s.commentAlert}>{error.comment}</p>}
                    <button type='submit' className={s.btn}>Enviar</button>
                </form>
            ) : Object.keys(localUser).length ? (
                <form className={s.userReview} onSubmit={(e) => handleNewReview(e)}>
                    <div className={s.userBoardBody}>
                        <div className={s.userDataContainer}>
                            <img src={localUser?.image ? localUser.image : placeholderImage} alt="" />
                            <p>{localUser?.fullName}</p>
                        </div>
                        <div className={s.ratingContainer}>
                            <Rating onClick={onPointerMove} allowFraction="true" />
                        </div>
                    </div>
                    <textarea
                        name='comment'
                        value={review.comment}
                        onChange={(e) => handleInput(e)}
                        className={s.inputContent}
                        placeholder='My review...'
                    />
                    {error.comment && <p className={s.commentAlert}>{error.comment}</p>}
                    <button type='submit' className={s.btn}>Enviar</button>
                </form>
            ) : <div style={{ textAlign: "center", lineHeight: "100%", marginTop: "6rem" }}>
                <h3>
                    Debes <Link to="/login" style={{ fontWeight: "unset" }}>Iniciar sesion</Link> para agregar una review
                </h3>
            </div>}
        </>
    );
}

export default Reviews;

/*

if (isAuthenticated) {  version auth0 
setReview({
    ...review,
    userId: user.email,  identificador por email 
    userImage: user.picture,
    username: user.name
})
} else {  local user 
    setReview({
        ...review,
        userId: localUser._id,
        userImage: localUser.image,
        username: localUser.fullName,
    })
}


*/