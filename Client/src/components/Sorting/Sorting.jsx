import React from 'react'
import { useDispatch } from 'react-redux'
import { sorting } from '../../redux/actions'
import s from "./Sorting.module.css"

export const Sorting = () => {

    const dispatch = useDispatch()
 
    const handleSort = (e) => {
       e.preventDefault()
       dispatch(sorting(e.target.value))
    }
 
 
    return (
       <div className={s.priceSort}>
          <select onChange={e => handleSort(e)}>
             <option value="All">Filtros</option>
             <option value="OrderByPriceASC">Lower price</option>
             <option value="OrderByPriceDESC">Higher price</option>
             <option value="OrderByNameASC">A - Z</option>
             <option value="OrderByNameDESC">Z - A</option>
             <option value="OrderByReviewRateDESC">Best rated</option>
          </select>
       </div>
    )
 }

export default Sorting