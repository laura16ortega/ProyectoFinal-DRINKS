import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
        <div style={{ paddingTop: "6rem", backgroundColor: "black" }}>
            <div>
                {favProducts.length ? (
                    favProducts.map((e) =>
                        <div key={e[1]._id} >
                            <div>
                                <button onClick={() => handleDelete(e[1]._id)}>
                                    X
                                </button>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ display: "flex" }}>
                                    <img src={e[1].image} alt="Imagen no encontrada" style={{ height: "255px" }} />
                                    <h1>{e[1].name}</h1>
                                </div>
                                <div>
                                    <h2>{e[1].price}</h2>
                                </div>
                            </div>
                        </div>
                    )
                ) : (
                    <h1>No agregaste productos a favoritos</h1>
                )}
            </div>
        </div>
    )
}

export default FavoriteProducts