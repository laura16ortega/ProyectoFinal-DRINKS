import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import fakeJSON from '../../assets/fakeJson'
import s from "./Filters.module.css"
import { categoryFilter, getProducts, priceFilter, priceSort } from '../../redux/actions'

export const PriceOrder = () => {

   const dispatch = useDispatch()

   //sort de precio
   const handlePriceSort = (e) => {
      e.preventDefault()
      dispatch(priceSort(e.target.value))
      //set page 1
   }


   return (
      <div className={s.priceSort}>
         <label>Price order: </label>
         <select onChange={e => handlePriceSort(e)}>
            <option disabled>Price</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
         </select>
      </div>
   )
}

const Filters = () => {

   const dispatch = useDispatch()

   const [rangePrice, setRangePrice] = useState(10000)

   const handleRange = (e) => {
      setRangePrice(e.target.value)
   }

   useEffect(() => {
      dispatch(priceFilter(Number(rangePrice)))
   }, [rangePrice])




   //filter by categories ---> categories useSelector
   const categories = [
      "Ordinary Drink",
      "Cocktail",
      "Shake",
      "Other/Unknown",
      "Cocoa",
      "Shot",
      "Coffee/Tea",
      "Homemade Liqueur",
      "Punch/Party Drink",
      "Beer",
   ]

   const handleCategory = (e) => {
      e.preventDefault()
      dispatch(categoryFilter(e.target.value))
   }

   const handleReset = (e) => {
      e.preventDefault()
      dispatch(getProducts(fakeJSON))
      setRangePrice(10000)
      dispatch(categoryFilter("all"))
   }

   return (
      <div className={s.filterContainer}>

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
            <input type="range" value={rangePrice} onChange={e => handleRange(e)} min="0" max="10000" step="500" />
            <h3>${rangePrice}</h3>
         </div>

         <div>
            <button onClick={e => handleReset(e)}>reset</button>
         </div>

      </div>
   )
}

export default Filters


/*

   //precio con inputs
   const [price, setPrice] = useState({
      minPrice: "",
      maxPrice: ""
   })

   const handlePrice = (e) => {
      setPrice({
         ...price,
         [e.target.name]: e.target.value
      })
   }

   const searchPrice = (e) => {
      e.preventDefault()
      dispatch(priceFilter(Number(price.minPrice), Number(price.maxPrice)))
      setPrice({
         minPrice: "",
         maxPrice: ""
      })
      //setPage to 1
   }

   <div className='price range'>
      <div className='field'>
         <span>Min</span>
         <input name="minPrice" type="number" value={price.minPrice} onChange={e => handlePrice(e)} />
      </div>
      <div>-</div>
      <div>
         <span>Max</span>
         <input name="maxPrice" type="number" value={price.maxPrice} onChange={e => handlePrice(e)} />
      </div>
      <button onClick={e => searchPrice(e)}>{">"}</button>
   </div>

*/