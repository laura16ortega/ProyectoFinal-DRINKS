import { React, useState } from "react";
/* import { useDispatch, useSelector } from "react-redux"; */
import { useParams, useNavigate } from "react-router-dom";
import s from "./Details.module.css";
import { Rating } from "react-simple-star-rating";
import Amount from "../../components/Amount/Amount";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProductDetails, getProductDetails } from "../../redux/actions";

function Details() {
   const { id } = useParams();
   const dispatch = useDispatch()
   const product = useSelector(state => state.productDetails)
   console.log("id: ", id)
   console.log("product: ", product)

   const [rating, setRating] = useState(0);

   // Catch Rating value
   const handleRating = (rate) => {
      setRating(rate);

      // other logic
   };
   // Optinal callback functions
   const onPointerEnter = () => console.log("Enter");
   const onPointerLeave = () => console.log("Leave");
   const onPointerMove = (value, index) => console.log(value, index);

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
                     <div>
                        <h3 style={{ fontSize: "2em" }}>{product.name}</h3>
                     </div>
                     <div>
                        <p>{`$${product.price}`}</p>
                     </div>
                     <div>
                        <Rating
                           onClick={handleRating}
                           onPointerEnter={onPointerEnter}
                           onPointerLeave={onPointerLeave}
                           onPointerMove={onPointerMove}
                        /* Available Props */
                        />
                     </div>
                     <div className={s.description}>
                           <h2>Description:</h2>
                           {product.description? product.description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                           enim ad minim veniam, quis nostrud exercitation ullamco laboris
                           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                           reprehenderit in voluptate velit esse cillum dolore eu fugiat
                           nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                           sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                     </div>
                     <div>
                        <Amount />
                     </div>
                     <div >
                        <button className={s.addToCart}>Add to cart.</button>
                     </div>
                  </div>
               </div>
            </div>
            : <h1>Loading</h1>
         }
         <div className={s.reviews}>Reviews</div>
      </div>
   );
}

export default Details;

/*
    height: 3rem;
    width: 35rem;
    padding-bottom: 3.3rem;
    border-radius: 0.2vh;


   textDescription
   style={{height: "3rem", width: "35rem", paddingBottom: "3.3rem", borderRadius: "0.2vh"}}

*/