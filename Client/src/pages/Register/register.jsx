import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import s from "./Register.module.css"
import SearchBar from '../../components/SearchBar/SearchBar'
import { userRegister } from '../../redux/actions'


export default function Register() {

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [errors, setError] = useState({})

   const [input, setInput] = useState({
      fullName: '',
      email: '',
      password: '',
      phone_number: '',
   })

   // function handleChange
   function handleChange(e) {
      e.preventDefault()
      setInput({
         ...input,
         [e.target.name]: e.target.value
      })
   }

   // function validateInput

   function validateInput(input) {

      let errors = {}

      if (!input.fullName) errors.fullName = 'Nombre completo requerido';
      else if (input.fullName.length < 6) errors.fullName = "Nombre demasiado corto"
      else if (!/^[a-z ,.'-]+$/i.test(input.fullName)) errors.fullName = "Nombre invalido"
      else if (input.fullName.length > 255) errors.fullName = "Nombre demasiado largo"


      if (!input.email) errors.email = 'E-mail es requerido';
      else if (input.email.length < 6) errors.email = "Email demasiado corto"
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) errors.email = 'Direccion de correo incorrecta';
      else if (input.email.length > 255) errors.email = "Email demasiado largo"


      if (!input.password) errors.password = "ejemplo: usuario123";
      else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i.test(input.password)) errors.password = 'debe contener almenos 8 caracteres,incluyendo algun numero'

      if (!input.phone_number) errors.phone_number = "Debes colocar un numero de telefono"
      else if (input.phone_number.length < 10) errors.phone_number = "El numero de telefono debe tener minimo 10 caracteres"
      else if (!/^[0-9]*$/.test(input.phone_number)) errors.phone_number = "El numero de telefono solo debe contener numeros"

      return errors;
   }

   // function handleSubmit
   async function handleSubmit(e) {
      e.preventDefault()

      try {
         const validated = validateInput(input)
         if (Object.keys(validated).length > 0) setError(validated)
         else {
            dispatch(userRegister(input))
            setInput({
               fullName: '',
               email: '',
               password: '',
               phone_number: ''
            })
         }
      } catch (e) {
         console.log("register error: ", e) //sweetalert algo salio mal
      }
   }

   return (
      <div className={s.container} >
         <SearchBar />
         <h3>RUTA DE REGISTRO</h3>
         <div className={s.contain}>
            <form onSubmit={e => handleSubmit(e)}>
               <div className={s.inputs}>
                  <input type="text" placeholder="Nombre completo" value={input.fullName} name='fullName' onChange={e => handleChange(e)} />
                  {errors.fullName && <span>{errors.fullName}</span>}

                  <input type="email" placeholder="Email" value={input.email} name='email' onChange={e => handleChange(e)} />
                  {errors.email && <span>{errors.email}</span>}

                  <input type="password" placeholder="Contraseña" value={input.password} name='password' onChange={e => handleChange(e)} />
                  {errors.password && <span>{errors.password}</span>}

                  <input type="text" placeholder="Telefono" value={input.phone_number} name='phone_number' onChange={e => handleChange(e)} />
                  {errors.phone_number && <span>{errors.phone_number}</span>}

               </div>
               <button className={s.button} type="submit">Registrarse</button>
            </form>
         </div>
      </div>
   )
}
