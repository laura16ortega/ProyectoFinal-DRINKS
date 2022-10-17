import React from 'react'
import { Link } from 'react-router-dom'
import s from "./ProductCard.module.css"
import { priceWithCommas } from '../../assets/helpers'

const ProductCard = ({ id, name, image, price, category, numReviews, rating }) => {
   return (
      <div className={s.container}>
         <Link to={`/details/${id}`}>
            <div className={s.contents}>
               <div className={s.imgContainer}>
                  <img src={image} alt={name} />
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
         </Link>
      </div>
   )
}

export default ProductCard