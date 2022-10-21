import React from 'react'
import { Link } from 'react-router-dom'
import s from "./ProductCard.module.css"
import { priceWithCommas } from '../../assets/helpers'
import { useDispatch } from "react-redux"
import { getFavoriteProducts } from '../../redux/actions'
import heart from "../../assets/img/heart.png";
import cart from "../../assets/img/shopping-cart.png";


const ProductCard = ({ id, name, image, price, category, numReviews, rating }) => {

   const dispatch = useDispatch()

   const handleFav = (id) => {
      dispatch(getFavoriteProducts(id))

   }

   return (
      <div className={s.container}>
         <div className={s.contents}>

               <div className={s.imgContainer}>
                  <img src={heart} alt="asd" className={s.addFav} onClick={() => handleFav(id)}/>
                  <Link to={`/details/${id}`}>
                  <img src={image} alt={name} className={s.productImage}/>
                  </Link>
                  <img src={cart} alt="" className={s.addCart}/>
               </div>

            <div className={s.category}>{category}</div>
            <div className={s.data}>
               <h2>{name}</h2>
               <div className={s.reviews}>
                  {/* Update to star component */}
                  <div className={s.stars}>
                     <span className={s.blackStars} style={{ color: "#333" }}>☆☆☆☆☆</span>
                     <span className={s.rated} style={{ color: "#ffb400" }}>
                        {[...Array(rating)].map((n, i) => {
                           return (
                              <span key={i} style={{ color: "#ffb400" }}>
                                 ★
                              </span>
                           )
                        })
                        }
                     </span>
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