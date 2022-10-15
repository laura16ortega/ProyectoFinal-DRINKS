import { React, useState } from "react";
/* import { useDispatch, useSelector } from "react-redux"; */
import { useParams, useNavigate } from "react-router-dom";
import s from "./styles/Details.module.css";
import { Rating } from "react-simple-star-rating";
import Amount from "../components/Amount";

function Details(props) {
  const { id } = useParams();

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
    const navigate = useNavigate(); */

  return (
    <>

        



      <div className={s.body}>
      <div className={s.name}>
        <h3>Liquor Exampler 1973</h3>
      </div>
        <div>
          <p>149,95 €</p>
        </div>
        <div className={s.rating}>
          <Rating
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            /* Available Props */
          />
        </div>
        <div className={s.description}>
          <p>
            <div className={s.descriptionText}>
              <h2>Description:</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </p>
        </div>
        <div className={s.addAmount}>
          <Amount />
        </div>
        <div className={s.addToCart}>
          <button className={s.add}>Add to cart.</button>
        </div>
        <div className={s.reviews}>Reviews</div>

      </div>
          <div className={s.container}>

              <div className={s.img}>
          <img
            className={s.imgSize}
            src="https://placeimg.com/500/600/tech"
            alt="placeholder"
          />
        </div>

        </div>
    
    </>
  );
}

export default Details;
