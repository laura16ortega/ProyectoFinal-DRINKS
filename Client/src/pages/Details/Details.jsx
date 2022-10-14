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
          <div className={s.rating}>x x x x x</div>
        </div>
      
    </div>
  );
}

export default Details;
