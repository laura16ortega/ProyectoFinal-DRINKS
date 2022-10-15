import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import s from "./Details.module.css";

function Details(props) {
  const { id } = useParams();

  /*     const product = useSelector((state) => state.productDetails);
    const {} = product;

    const dispatch = useDispatch();
    const navigate = useNavigate(); */

  return (
    <div className={s.container}>
      <div className={s.body}>
        <div className={s.img}>
          <img
            className={s.imgSize}
            src="https://placeimg.com/500/600/tech"
            alt="placeholder"
          />
        </div>
        <div className={s.name}>
          <h1>Liquor Exampler 1973</h1>
        </div>
        </div>
        
        <div className={s.options}>
          <div>
            <p>149,95 €</p>
          </div>
          <div className={s.rating}>
          ★★★★☆ 4/5
          </div>
          <div className={s.addAmount}>
            <button className={s.btnPlusMinus}>+</button>
            <input className={s.amountInput} type='number'/>
            <button className={s.btnPlusMinus}>-</button>
          </div>
          <div className={s.addToCart}>
            <button className={s.add}>Add to cart.</button>
          </div>
          <div className={s.reviews}>
            Reviews
          </div>
        </div>
      
    </div>
  );
}

export default Details;
