import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import s from './Details.module.css';


function Details(props) {

    const {id} = useParams();

/*     const product = useSelector((state) => state.productDetails);
    const {} = product;

    const dispatch = useDispatch();
    const navigate = useNavigate(); */


    return (
        <div className={s.body} >
            <h1>Details here</h1>
        </div>
    );
}

export default Details;