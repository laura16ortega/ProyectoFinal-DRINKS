import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fakeJSON from '../../assets/fakeJson'
import s from "./Filters.module.css"
import { categoryFilter, getProducts, priceFilter } from '../../redux/actions'
import { priceWithCommas } from '../../assets/helpers'

const Filters = () => {

   const dispatch = useDispatch()

   const [rangePrice, setRangePrice] = useState(625000)
   const categories = useSelector(state => state.categories)

   const handleRange = (e) => {
      setRangePrice(e.target.value)
   }

   useEffect(() => {
      dispatch(priceFilter(Number(rangePrice)))
   }, [rangePrice])

   const handleCategory = (e) => {
      e.preventDefault()
      dispatch(categoryFilter(e.target.value))
   }

   const handleReset = (e) => {
      e.preventDefault()
      dispatch(getProducts(fakeJSON))
      setRangePrice(625000)
      dispatch(categoryFilter("all"))
   }

   return (
      <div className={s.filterContainer}>
         <h1>FILTERS</h1>

         <div className={s.categoriesFilter}>
            <h4>Categories</h4>
            <select onChange={handleCategory}>
               <option value={"all"}>All</option>
               {categories.map(c =>
                  <option key={c} style={{ cursor: "pointer" }} value={c}>{c}</option>
               )}
            </select>
         </div>

         <div className={s.priceFilter}>
            <h4>Price</h4>
            <input type="range" value={rangePrice} onChange={e => handleRange(e)} min="0" max="625000" step="25000" />
            <h3>{`$${priceWithCommas(rangePrice)}`}</h3>
         </div>

         <div>
            <button onClick={e => handleReset(e)}>reset</button>
         </div>

      </div>
   )
}

export default Filters