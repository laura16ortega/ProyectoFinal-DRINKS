import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "universal-cookie";
import { addProductToCart, deleteFavoriteProduct } from '../../redux/actions';
import { priceWithCommas, validateCart } from '../../assets/helpers';
import s from './FavoriteProducts.module.css' 


const FavoriteProducts = () => {

    const dispatch = useDispatch()
    let cookies = new Cookies();
    const favCookies = cookies.get("fav")
    const favProducts = Object.entries(favCookies)
    const favoriteProducts = useSelector(state => state.favoriteProducts) //Sin esto no actualiza, no tocar
    const cartProducts = useSelector(state => state.cart)

    const handleDelete = (id) => {
        dispatch(deleteFavoriteProduct(id))
        cookies.remove(id)
    }

    const handleCart = (id) => {
        dispatch(addProductToCart(id))
     }

    return (
        <div className={s.cartContainer}>
            <div className={s.cartWrapper}>
                {favProducts.length ? (
                    favProducts.map((e) =>
                        <div key={e[1]._id} className={s.productsContainer}>
                            <div className={s.productsWrapper}>
                                <div className={s.deleteButton}>
                                    <button onClick={() => handleDelete(e[1]._id)}>
                                        X
                                    </button>
                                </div>
                                <div className={s.imgContainer}>
                                    <img src={e[1].image} alt="Imagen no encontrada" />
                                </div>
                                <div className={s.nameContainer}>
                                    <h2>{e[1].name}</h2>
                                </div>
                                <div className={s.priceContainer}>
                                    <h2>{`$${priceWithCommas(e[1].price)}`}</h2>
                                </div>
                                <div>
                                    {validateCart(e[1]._id) ? 
                                    <button>Ya añadido</button> 
                                    :
                                    <button onClick={() => handleCart(e[1]._id)}>Añadir al carrito</button>
                                    }
                                </div> {/* Disable */}
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
