import React from 'react'
import { priceWithCommas } from '../../assets/helpers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../redux/actions'
import useForm from "./useForm"
import s from "./FormProduct.module.css"
import vodka from "../../assets/img/vodkaOneOne.jpeg"

const FormProduct = () => {
   const initialState = {
      name: "",
      image: "",
      description: "",
      price: "",
      stock: "",
      category: ""
   }

   const categories = useSelector(state => state.categories)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllCategories())
   }, [dispatch])

   const {
      errors,
      input,
      widgetDisplay,
      handleInput,
      handleSubmit
   } = useForm(initialState)

   return (
      <div className={s.container}>
         <div className={s.wrapper}>
            <div className={s.previewDivider}>
               <div className={s.previewContainer}>
                  <div className={s.previewImageContainer}>
                     <img src={input.image ? input.image : vodka} alt="Product" />
                  </div>
                  <div className={s.previewData}>
                     <h2>{input.name ? input.name : "Nombre"}</h2>
                     <h3>{input.price ? `$${priceWithCommas(input.price)}` : "$0"}</h3>
                  </div>
               </div>
            </div>
            <div>
               <div style={{ margin: "2rem" }}>
                  <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
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
                           <button name="image" value={input.image} onClick={(e) => widgetDisplay(e)}>{input.image ? input.image.slice((-1, input.image.lastIndexOf("/") + 1)) : `Seleccionar imagen`}</button>
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
                           <textarea name="description" value={input.description} cols="50" rows="10" onChange={e => handleInput(e)} />
                           {errors.description && <span className={s.errors}>{errors.description}</span>}
                        </div>
                     </div>
                     <button className={s.submitButton}>Subir producto</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FormProduct

/*
const productSchema = mongoose.Schema(
  {
   reviews: [reviewSchema], 
   rating: type: Number, default: 0 required
   numReviews: type: Number, default: 0 required
  },
);
*/