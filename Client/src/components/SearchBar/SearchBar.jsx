import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { productSearch } from '../../redux/actions'
import s from './SearchBar.module.css'

export default function SearchBar() {

   const [input, setInput] = useState('')

   const dispatch = useDispatch()


   function handleChange(e) {
      e.preventDefault()
      setInput(e.target.value)
   }

   const handleSubmit = (e) => {
      /*if (window.location.pathname !== "/products") {
         window.location.replace("/products")
         //some alert 
      }*/
      e.preventDefault()
      setInput("")
      dispatch(productSearch(input))
   }

   const handleKeyDown = (e) => {
      if (e.key === "Enter") {
         handleSubmit(e)
      }
   }

   return (
      <div className={s.container}>
         <input type="text" placeholder='Search...' value={input} onChange={e => handleChange(e)} onKeyDown={(e) => handleKeyDown(e)} />
         <button onClick={e => handleSubmit(e)}>🔍</button>
      </div>
   )
}
