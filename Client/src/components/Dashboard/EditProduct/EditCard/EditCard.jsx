import React from 'react'
import { priceWithCommas } from '../../../../assets/helpers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, getUser } from '../../../../redux/actions'
import useForm from "./useForm"
import s from "./EditCard.module.css"
import { useParams } from 'react-router-dom'
import placeholderimage from "../../../../assets/img/vodkaOneOne.jpeg"

const EditCard = () => {
    const initialState = {
        name: "",
        image: "",
        description: "",
        price: "",
        stock: "",
        category: ""
    }

    const categories = [
        "Cerveza",
        "Vino",
        "Vodka",
        "Whiskey"
    ]

    const productDetail = useSelector(state => state.productDetails)
    const dispatch = useDispatch()
    const token = window.localStorage.getItem("jwt")
    const { id } = useParams()


    const {
        errors,
        cloudinary,
        input,
        setInput,
        widgetDisplay,
        handleInput,
        handleSubmit
    } = useForm(initialState, token)

    const getDetail = (id) => {
        setInput({
            name: productDetail?.name ? productDetail.name : "",
            image: productDetail?.image ? productDetail.image : "",
            description: productDetail?.description ? productDetail.description : "",
            price: productDetail?.price ? productDetail.price : "",
            stock: productDetail?.stock ? productDetail.stock : "",
            category: productDetail?.category ? productDetail.category : "",
        });
    };

    useEffect(() => {
        dispatch(getUser(token))
    }, [dispatch])

    useEffect(() => {
        getDetail(id)
    }, [productDetail])

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.previewDivider}>
                    <div className={s.previewContainer}>
                        <div className={s.previewImageContainer}>
                            <img src={input.image? input.image : placeholderimage} alt="Product" />
                        </div>
                        <div className={s.previewData}>
                            <h2>{input.name ? input.name : "Nombre"}</h2>
                            <h3>{`$${priceWithCommas(Number(input.price))}`}</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ margin: "2rem" }}>
                        <form onSubmit={handleSubmit} style={{ padding: "1rem", color: "white" }}>
                            <div className={s.row}>
                                <div className={s.formInput}>
                                    <label>Nombre</label>
                                    <input name="name" value={input.name} type="text" onChange={e => handleInput(e)} />
                                    {errors.name && <span className={s.errors}>{errors.name}</span>}
                                </div>
                                <div className={s.formInput}>
                                    <label>Precio</label>
                                    <input name="price" value={input.price} type="number" onChange={e => handleInput(e)} />
                                    {errors.price && <span className={s.errors}>{errors.price}</span>}
                                </div>
                            </div>
                            <div className={s.onlyRow}>
                                <div className={s.formInput}>
                                    <label>Categoria</label>
                                    <div className={s.radioContainer}>
                                        {categories.length ? categories.map((e, i) =>
                                            <label key={i} className={e === input.category ? s.rangeOn : s.radioLabel}>
                                                <input name="category" value={e} type="radio" onClick={e => handleInput(e)} />
                                                {e}
                                            </label>) : "Cargando..."}
                                    </div>
                                    {errors.category && <span className={s.errors}>{errors.category}</span>}
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.formInput}>
                                    <label>Imagen</label>
                                    <button name="image" value={input.image} onClick={(e) => widgetDisplay(e)}>{input.image ? cloudinary ? input.image.slice((-1, input.image.lastIndexOf("/") + 1)) : "Imagen predeterminada" : `Seleccionar imagen`}</button>
                                    {errors.image && <span className={s.errors}>{errors.image}</span>}
                                </div>
                                <div className={s.formInput}>
                                    <label>Stock</label>
                                    <input name="stock" value={input.stock} type="number" onChange={e => handleInput(e)} />
                                    {errors.stock && <span className={s.errors}>{errors.stock}</span>}
                                </div>
                            </div>
                            <div className={s.onlyRow}>
                                <div className={s.formInput}>
                                    <label>Descripcion</label>
                                    <textarea name="description" value={input.description} cols="50" rows="7" onChange={e => handleInput(e)} />
                                    {errors.description && <span className={s.errors}>{errors.description}</span>}
                                </div>
                            </div>
                            <button className={s.submitButton}>Actualizar producto</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCard