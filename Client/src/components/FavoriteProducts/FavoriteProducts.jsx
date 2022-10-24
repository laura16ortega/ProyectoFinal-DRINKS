import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './FavoriteProducts.module.css';
import Cookies from "universal-cookie";
import { deleteFavoriteProduct } from '../../redux/actions';

const FavoriteProducts = () => {

    const dispatch = useDispatch()
    let cookies = new Cookies();
    const favCookies = cookies.get("fav")
    const favProducts = Object.entries(favCookies)
    const favoriteProducts = useSelector(state => state.favoriteProducts) //Sin esto no actualiza, no tocar

    const handleDelete = (id) => {
        dispatch(deleteFavoriteProduct(id))
        cookies.remove(id)
    }

    return (
        <div className={s.container} >
            <div>
                {favProducts.length ? (
                    favProducts.map((e) =>
                        <div key={e[1]._id} >
                            <div>
                                <button className={s.delete} onClick={() => handleDelete(e[1]._id)}>
                                    X
                                </button>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between",marginBottom:'2rem' }}>
                                <div style={{ display: "flex"}}>
                                    <img src={e[1].image} alt="Imagen no encontrada" className={s.img} />
                                    <h1>{e[1].name}</h1>
                                </div>
                                <div>
                                    <h2>{e[1].price}</h2>
                                </div>
                            </div>
                        </div>
                    )
                ) : (
                    <h1 style={{paddingTop:'6rem'}}>Ooops, no hay productos en favoritos</h1>
                )}
            </div>
        </div>
    )
}

export default FavoriteProducts