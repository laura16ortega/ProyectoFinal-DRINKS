import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from "universal-cookie"
import { deleteCartProduct } from '../../redux/actions'

export default function Cart() {

   const dispatch = useDispatch()
   let cookies = new Cookies()
   const cartCookies = cookies.get("cart")
   const cartProducts = Object.entries(cartCookies)
   const cart = useSelector(state => state.cart)

   const handleDelete = (id) => {
      dispatch(deleteCartProduct(id))
      cookies.remove(id)
   }

   return (
      <div style={{ paddingTop: "6rem", backgroundColor: "black" }}>
         <div>
            {cartProducts.length ? (
               cartProducts.map((e) =>
                  <div key={e[1]._id} >
                     <div style={{ display: "flex", justifyContent: "space-between" }}>
                     <div>
                        <button onClick={() => handleDelete(e[1]._id)}>
                           X
                        </button>
                     </div>
                        <div style={{ display: "flex" }}>
                           <img src={e[1].image} alt="Imagen no encontrada" style={{ height: "255px" }} />
                           <h1>{e[1].name}</h1>
                        </div>
                        <div>
                           <h2>{e[1].price}</h2>
                           <button>COMPRAR</button>
                        </div>
                     </div>
                  </div>
               )
            ) : (
               <h1>No agregaste productos a tu carrito</h1>
            )}
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
