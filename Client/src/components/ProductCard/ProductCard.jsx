import React from 'react'
import s from "./ProductCard.module.css"

const ProductCard = ({ name, image, price, category }) => {
   return (
      <div className={s.container}> {/* style={{ margin: "10px 25px", backgroundColor: "rebeccapurple" }} */}
            <div className={s.imgContainer}>
               <img src={image} alt={name} style={{ width: "250px", height: "250px" }} />
            </div>
            <div className={s.data}>
               <h2>{name}</h2>
               <h3>Category: {category}</h3>
               <h3 className={s.price}>${price}</h3>
            </div>
      </div>
   )
}

export default ProductCard