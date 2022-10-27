import React, { useState,useEffect } from "react";
/* import { useDispatch, useSelector } from "react-redux"; */
import { useParams, useNavigate } from "react-router-dom";
import s from "./Details.module.css";
import { Rating } from "react-simple-star-rating";
import Amount from "../../components/Amount/Amount";
import { useAuth0 } from '@auth0/auth0-react';
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { clearProductDetails, getProductDetails, addProductToCart } from "../../redux/actions";

function Details() {

   const { id } = useParams();
   const dispatch = useDispatch()
   const product = useSelector(state => state.productDetails)
   const cart = useSelector(state => state.cart)
   const qty = useSelector(state => state.qtyToAdd)
   console.log(cart)
   console.log("id: ", id)
   console.log("product: ", product)

/*    const [rating, setRating] = useState(0); */

   function getMode(array) {
      


      if(!(array.length > 1)){
         return array;
      }

      const obj = {};
      array.forEach(number => {
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
   // Catch Rating value
   const handleRating = (rate) => {
      setRating(rate);

      // other logic
   };
   // Optinal callback functions
   const onPointerEnter = () => console.log("Enter");
   const onPointerLeave = () => console.log("Leave");
   const onPointerMove = (value, index) => console.log(value, index);

   const handleInToCart = (e) => {
      e.preventDefault()
      dispatch (addProductToCart(id))
   }

   /*     const product = useSelector((state) => state.productDetails);
     const {} = product;
 
     const dispatch = useDispatch();
     const navigate = useNavigate(); 
   */

   useEffect(() => {
      dispatch(getProductDetails(id))
      window.scrollTo(0, 0)
      return () => {
         dispatch(clearProductDetails())
      }
   }, [dispatch, id])


   // console.log(React.Children.toArray())
 

   return (
      <div>
         {Object.keys(product).length ?
            <div className={s.productContainer}>
               <div>
                  <div className={s.imgContainer}>
                     <img
                        src={product.image}
                        alt="placeholder"
                     />
                  </div>

               </div>
               <div>
                  <div className={s.rightData}>
                     <div className={s.title}>
                        <h3 style={{ fontSize: "35px  " }}>{product.name}</h3>
                     </div>
                     <div className={s.price}>
                        <p style={{fontSize: "30px"}}>{`$${product.price}`}</p>
                     </div>
                     <div className={s.rating}>
                        <Rating
                           onClick={handleRating}
                           onPointerEnter={onPointerEnter}
                           onPointerLeave={onPointerLeave}
                           onPointerMove={onPointerMove}
                           readonly="true"
                           allowFraction="true"
                           initialValue={getMode(product.rating)}

                        /* Available Props */
                        />
                     </div>
                     <div className={s.description}>

                           <h2>Description</h2>

                           {product.description? product.description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                           enim ad minim veniam, quis nostrud exercitation ullamco laboris
                           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                           reprehenderit in voluptate velit esse cillum dolore eu fugiat
                           nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                           sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                     </div>

                     <div  className={s.amount}>

                        <Amount />
                     </div>
                     <div >
                        <button onClick={handleInToCart} className={s.addToCart}>Add to cart.</button>
                     </div>
                     <div className={s.reviews}>
                        <h2 className={s.reviewsHeader}>
                           Reviews
                        </h2>
                           <Reviews />
                     </div> 

                  </div>
               </div>
            </div>
            : <h1>Loading</h1>
         }
         <Footer />
      </div>
   );
}

export default Details;

