import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, reviewsFilter } from '../../../redux/actions'
import ProductCard from './ProductCard/ProductCard'
import { Link } from 'react-router-dom'

const Products = () => {
  const allProducts = useSelector(state => state.products)
  const dispatch = useDispatch()
  const token = window.localStorage.getItem("jwt")

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleSelect = (e) => {
    dispatch(reviewsFilter(e.target.value))
  }

  return (
    <div style={{ margin: "2rem", display: "flex", flexDirection: "column"}}>
      <div style={{display: "flex", margin: "1rem", alignItems: "center", justifyContent: "space-around"}}>
        <select onChange={(e) => handleSelect(e)}>
          <option value="All">All</option>
          <option value="With comments">With comments</option>
        </select>
        <Link to="/dashboard/createProduct">Create product</Link>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {allProducts.length ? allProducts.map(e =>
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
            token={token}
          />) : <h1>asddafadfaf</h1>}
      </div>
    </div>
  )
}

export default Products