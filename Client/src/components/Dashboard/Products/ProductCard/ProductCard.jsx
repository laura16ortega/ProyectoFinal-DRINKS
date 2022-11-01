import React from 'react'
import { Link } from 'react-router-dom'
import s from "./ProductCard.module.css"
import { priceWithCommas } from '../../../../assets/helpers'
import { useDispatch, useSelector } from "react-redux"
import pencilEdit from "../../../../assets/img/pencilEdit.svg";
import deleteCross from "../../../../assets/img/redCross.png"
import cart from "../../../../assets/img/shopping-cart.png";
import { Rating } from 'react-simple-star-rating';
import { deleteProduct } from '../../../../redux/actions'

const ProductCard = ({ id, name, image, price, category, numComments, rating, stock, token }) => {
   const dispatch = useDispatch()

   const handleDelete = (id) => {
      dispatch(deleteProduct(token, id))
   }

   return (
      <div className={s.container}>
         <div className={s.contents}>
            <div className={s.imgContainer}>
               <Link to={`/dashboard/editProduct/${id}`}>
               <img src={pencilEdit} alt="asd" className={s.addFav} />
               </Link>
               <Link to={`/details/${id}`}>
                  <img src={image} alt={name} className={s.productImage} />
               </Link>
               <img className={s.addCart} src={deleteCross} onClick={() => handleDelete(id)}/>
            </div>
            <div className={s.category}>{category}</div>
            <div className={s.data}>
               <h2>{name}</h2>
               <div className={s.reviews}>
                  <Rating allowFraction='true' readonly='true' initialValue={rating} size='20' />
                  <span className={s.reviewers}>{`${numComments} comentarios`}</span>
                  <span className={s.reviewers}>{`Stock: ${stock}`}</span>
               </div>
               <h3>{`$${priceWithCommas(price)}`}</h3>
            </div>
         </div>
      </div>
   )
}

export default ProductCard