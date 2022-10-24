import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { productSearch } from '../../redux/actions'
import s from './SearchBar.module.css'
import { useLocation, useNavigate } from 'react-router-dom';


export default function SearchBar() {

   const [input, setInput] = useState('')
   const currentURL = window.location.href;
   const params = new URLSearchParams(window.location.pathname);
   const location = useLocation();
   const navigate = useNavigate();

   const dispatch = useDispatch()



   useEffect(() => {
      window.localStorage.setItem('input',input)
      dispatch(productSearch(input))
   },[input])

   function handleChange(e) {
      e.preventDefault()
      setInput(e.target.value)
   }

   const handleSubmit = (e) => {

      if(location.pathname !== '/productos'){    
      const persistedInput = window.localStorage.getItem('input');
      dispatch(productSearch(persistedInput))
      navigate('/productos');
      return
      }else{
         e.preventDefault()
         setInput("") 
         dispatch(productSearch(input))
      }


   }

   const handleKeyDown = (e) => {
      if (e.key === "Enter") {
         handleSubmit(e)
      }
   }

   return (
      <div className={s.container}>
         <input type="text" placeholder='Buscar...' value={input} onChange={e => handleChange(e)} onKeyDown={(e) => handleKeyDown(e)} />
         <button onClick={e => handleSubmit(e)}>🔍</button>
      </div>
   )
}
