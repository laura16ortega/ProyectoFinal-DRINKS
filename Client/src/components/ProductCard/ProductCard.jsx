import React from 'react'
import { Link } from 'react-router-dom'
import s from "./ProductCard.module.css"
import { priceWithCommas, validateCart } from '../../assets/helpers'
import { useDispatch, useSelector } from "react-redux"
import { addProductToCart, getFavoriteProducts } from '../../redux/actions'
import heart from "../../assets/img/heart.png";
import cart from "../../assets/img/shopping-cart.png";
import redHeart from "../../assets/img/redHeart.png"
import greenCart from "../../assets/img/greenCart.png"
import Cookies from 'universal-cookie'
import { Rating } from 'react-simple-star-rating';

const ProductCard = ({ id, name, image, price, category, numReviews, rating }) => {
   const cookies = new Cookies()
   const favProduct = useSelector(state => state.favoriteProducts)
   const cartProduct = useSelector(state => state.cart)

   const dispatch = useDispatch()

   function getMode(rating) {

      if(!(rating.length > 1)){
         return rating;
      }

      const obj = {};
      rating.forEach(number => {
        if (!obj[number]) {
          obj[number] = 1;
        } else {
          obj[number] += 1;
        }
      });
    
      let highestValue = 0;
      let highestValueKey = -Infinity; 
    
      for (let key in obj) {
        const value = obj[key];
        if (value >= highestValue && Number(key) > highestValueKey) {
          highestValue = value;
          highestValueKey = Number(key);
        }
      }
      return highestValueKey;
    }
    console.log(getMode(rating))

   const handleFav = (id) => {
      dispatch(getFavoriteProducts(id))

   }

   const handleCart = (id) => {
      dispatch(addProductToCart(id))
   }

   const validateFav = (id) => {
      const favCookies = cookies.get("fav")
      if (!favCookies) return false
      const wasFound = favCookies.find(e => e._id === id)

      if (wasFound) return true
      return false
   }

   return (
      <div className={s.container}>
         <div className={s.contents}>

               <div className={s.imgContainer}>
               {validateFav(id) ?
                  <img src={redHeart} alt="asd" className={s.addFav} onClick={() => handleFav(id)} />
                  :
                  <img src={heart} alt="asd" className={s.addFav} onClick={() => handleFav(id)} />
               } {/* isAuthenticated? mostrar : no mostrar */}
                  <Link to={`/details/${id}`}>
                  <img src={image} alt={name} className={s.productImage}/>
                  </Link>
                  {validateCart(id) ?
                  <img src={greenCart} alt="" className={s.addCart} onClick={() => handleCart(id)} />
                  :
                  <img src={cart} alt="" className={s.addCart} onClick={() => handleCart(id)} />
               }
               </div>

            <div className={s.category}>{category}</div>
            <div className={s.data}>
               <h2>{name}</h2>
               <div className={s.reviews}>
                  {/* Update to star component */}
                  <div className={s.stars}>
                     <Rating allowFraction='true' readonly='true' initialValue={getMode(rating)} size='20'/>


                    {/*  <span className={s.blackStars} style={{ color: "#333" }}>☆☆☆☆☆</span>
                     <span className={s.rated} style={{ color: "#ffb400" }}>
                        {[...Array(rating)].map((n, i) => {
                           return (
                              <span key={i} style={{ color: "#ffb400" }}>
                                 ★
                              </span>
                           )
                        })
                        }
                     </span> */}
                  </div>
                  <span className={s.reviewers}>{`${numReviews} reviews`}</span>
               </div>
               <h3>{`$${priceWithCommas(price)}`}</h3>
            </div>
         </div>

      </div>
   )
}

export default ProductCard