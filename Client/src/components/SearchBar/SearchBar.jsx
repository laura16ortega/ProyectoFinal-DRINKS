import React from 'react'
import { useState } from 'react'
import s from './SearchBar.module.css'

export default function SearchBar() {
    const [input, setInput] = useState('')
    console.log(input)

    function handleChange(e) {
        e.preventDefault()
        setInput(e.target.value)
   
    }

    const click = () => {
        /* aqui va el dispatch de la action */
        alert(`estas buscando ${input}`)
    }  

  return (
    <div className={s.container}>
        <input type="search" placeholder='Buscar' value={input} onChange={ e =>handleChange(e) } />
        <button onClick={click}>Buscar</button>
    </div>
  )

}
