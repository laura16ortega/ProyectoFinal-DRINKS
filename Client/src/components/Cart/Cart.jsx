import React from 'react'

export default function Cart() {
  return (
    <div>Cart</div>
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
