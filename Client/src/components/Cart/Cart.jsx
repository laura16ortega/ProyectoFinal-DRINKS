import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from "universal-cookie"
import { priceWithCommas } from '../../assets/helpers'
import { deleteCartProduct } from '../../redux/actions'
import s from "./Cart.module.css"

export default function Cart() {

   const dispatch = useDispatch()
   let cookies = new Cookies()
   const cartCookies = cookies.get("cart")
   const cartProducts = Object.entries(cartCookies)
   console.log(cartProducts)
   const cart = useSelector(state => state.cart)

   const handleDelete = (id) => {
      dispatch(deleteCartProduct(id))
      cookies.remove(id)
   }

   const totalPrice = () => {
      const prices = cartProducts.map(e => e[1].price)
      const res = prices.reduce((pv, cv) => pv + cv, 0);
      return priceWithCommas(res)
   }

   return (
      <div className={s.cartContainer}>
         <div className={s.cartWrapper}>
            {cartProducts.length ? (
               cartProducts.map((e) =>
                  <div key={e[1]._id} className={s.productsContainer}>
                     <div className={s.productsWrapper}>
                           <div className={s.deleteButton}>
                              <button onClick={() => handleDelete(e[1]._id)}>
                                 X
                              </button>
                           </div>
                           <div className={s.imgContainer}>
                              <img src={e[1].image} alt="Imagen no encontrada"/>
                           </div>
                           <div className={s.nameContainer}>
                              <h2>{e[1].name}</h2>
                           </div>
                           <div className={s.priceContainer}>
                              <h2>{`$${priceWithCommas(e[1].price)}`}</h2>
                           </div>
                     </div>
                  </div>
               )
            ) : (
               <h1>No agregaste productos a tu carrito</h1>
            )}
            {cartProducts.length ? 
            <div>
               <h1>{`Total: $${totalPrice()}`}</h1>
            </div>
            : ""}
         </div>
      </div>
   )
}




// import React from 'react'
// import { useSelector } from 'react-redux'

// export default function Cart() {
//     const Cart = useSelector (state => state.Cart)

//     const changeQtyToAdd = details.changeQtyToAdd?.map(e => {
//         return {
//             name: e.name,
//             price: e.price,
//             duration: e.duration,
//             rating: e.rating,
//             description: e.description,
//         }
//     })
//   return (
//     <div>
//         <h3>changeQtyToAdd</h3>
//         {
//         <div key={e.id}>
//           <p>Name: {e.name}</p>
//           <p>Price: {e.price}</p>
//           <p>Rating: {e.rating}</p>
//           <p>Description: {e.description}</p>
//           <hr></hr>
//         </div>
//         }
//         {Cart !== "" && <p>{Cart}</p>}
//     </div>
//   )
// }
