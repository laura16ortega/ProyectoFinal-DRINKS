import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, reviewsFilter } from '../../../redux/actions'
import ProductCard from './ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import s from "../ReusableStyles.module.css"
import { useState } from 'react'
import { useEffect } from 'react'

const Products = () => {
  const allProducts = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
  const token = window.localStorage.getItem("jwt")

  useEffect(() => {
    if (!allProducts) {
      dispatch(getProducts()).then(
        (res) => typeof res === "object" && setLoaded(true))
    }
  }, [dispatch])

  const handleSelect = (e) => {
    dispatch(reviewsFilter(e.target.value))
  }

  return (
    <div style={{ margin: "2rem", display: "flex", flexDirection: "column" }}>
      <div className={s.filtersContainer}>
        <select onChange={(e) => handleSelect(e)}>
          <option value="All">Todos los productos</option>
          <option value="With comments">Con comentarios</option>
        </select>
        <Link to="/dashboard/createProduct" style={{ textDecoration: "none" }}>
          <button style={{ border: "none", outline: "none" }}>
            Crear producto
          </button>
        </Link>
      </div>
      <div className={s.renderContainer}>
        {allProducts ? allProducts.map(e =>
          <ProductCard
            key={e._id}
            id={e._id}
            image={e.image}
            name={e.name}
            price={e.price}
            category={e.category}
            numComments={e.reviews.length}
            rating={e.rating}
            stock={e.stock}
            token={token} />
        ) : <div className={s.loader}></div>
        }
      </div>
    </div>
  )
}

export default Products