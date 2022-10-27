import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import s from "./register.module.css"
import SearchBar from '../../components/SearchBar/SearchBar'
import { userRegister } from '../../redux/actions'


export default function Register() {

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const registerErrors = useSelector(state => state.errors)

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

      if (!input.fullName) errors.fullName = 'El Nombre completo es requerido';
      else if (input.fullName.length < 6) errors.fullName = "Nombre demasiado corto"
      else if (!/^[a-z ,.'-]+$/i.test(input.fullName)) errors.fullName = "Nombre invalido"
      else if (input.fullName.length > 255) errors.fullName = "El Nombre demasiado largo"


      if (!input.email) errors.email = 'El E-mail es requerido';
      else if (input.email.length < 6) errors.email = "El Email demasiado corto"
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) errors.email = 'Direccion de correo incorrecta';
      else if (input.email.length > 255) errors.email = "El Email demasiado largo"


      if (!input.password) errors.password = "La contraseña es requerida";
      else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i.test(input.password)) errors.password = 'Debe contener almenos 8 caracteres, incluyendo algun numero'

      if (!input.phone_number) errors.phone_number = "Debes colocar un numero de telefono"
      else if (input.phone_number.length < 10) errors.phone_number = "El numero de telefono debe tener minimo 10 caracteres"
      else if (!/^[0-9]*$/.test(input.phone_number)) errors.phone_number = "El numero de telefono solo debe contener numeros"

      return errors;
   }

   // function handleSubmit
   function handleSubmit(e) {
      e.preventDefault()

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
   }

   if (Object.keys(registerErrors).length) {
      Swal.fire({
         icon: "error",
         text: `${registerErrors.message}`
      })
   }

   return (
      <div className={s.container} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "7rem", marginBottom: "1rem" }}>
         <div className={s.containerner}>
            <h3 className={s.title43232}>RUTA DE REGISTRO</h3>
            <div>
               <form onSubmit={e => handleSubmit(e)} className={s.contain}>
                  <div className={s.containerForm}>
                     <label>Nombre</label>
                     <input
                        type="text"
                        placeholder="Nombre completo"
                        value={input.fullName}
                        name='fullName'
                        onChange={e => handleChange(e)}
                        className={s.inputsdsadas} />
                     {errors.fullName && <span className={s.errors}>{errors.fullName}</span>}

                     <label>Email</label>
                     <input
                        type="email"
                        placeholder="Email"
                        value={input.email}
                        name='email'
                        onChange={e => handleChange(e)}
                        className={s.inputsdsadas} />
                     {errors.email && <span className={s.errors}>{errors.email}</span>}

                     <label>Contraseña</label>
                     <input
                        type="password"
                        placeholder="Contraseña"
                        value={input.password}
                        name='password'
                        onChange={e => handleChange(e)}
                        className={s.inputsdsadas} />
                     {errors.password && <span className={s.errors}>{errors.password}</span>}

                     <label>Telefono</label>
                     <input
                        type="text"
                        placeholder="Telefono"
                        value={input.phone_number}
                        name='phone_number'
                        onChange={e => handleChange(e)}
                        className={s.inputsdsadas} />
                     {errors.phone_number && <span className={s.errors}>{errors.phone_number}</span>}

                  </div>
                  <button className={s.button} type="submit">Registrarse</button>
               </form>
            </div>
         </div>
      </div>
   )
}
