import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import s from "./register.module.css"
import SearchBar from '../../components/SearchBar/SearchBar'
import { clearErrors, userRegister } from '../../redux/actions'
import axios from 'axios'
import emailjs from "@emailjs/browser"


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

   async function validateInput(input) {

      let errors = {}

      const { data } = await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=c9ab08d7f7454894a79375736420bc4a&email=${input.email}`)
      console.log("data; ", data)

      if (!input.fullName) errors.fullName = 'El Nombre completo es requerido';
      else if (input.fullName.length < 6) errors.fullName = "Nombre demasiado corto"
      else if (!/^[a-z ,.'-]+$/i.test(input.fullName)) errors.fullName = "Nombre invalido"

      else if (input.fullName.length > 255) errors.fullName = "Nombre muy largo"


      if (!input.email) errors.email = 'E-mail es requerido';
      else if (input.email.length < 6) errors.email = "Email demasiado corto"
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) errors.email = 'Direccion de email incorrecta';
      else if (input.email.length > 255) errors.email = "Email demasiado largo"
      else if (data.deliverability !== "DELIVERABLE") errors.email = "Email invalido"


      if (!input.password) errors.password = "ejemplo: usuario123";
      else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i.test(input.password)) errors.password = '8 caracteres minimo (8,A,a)'

      if (!input.phone_number) errors.phone_number = "Debes colocar un numero de telefono"
      else if (input.phone_number.length < 10) errors.phone_number = "Minimo 10 caracteres"
      else if (!/^[0-9]*$/.test(input.phone_number)) errors.phone_number = "El numero de telefono solo debe contener numeros"

      return errors;
   }

   // function handleSubmit
   async function handleSubmit(e) {
      e.preventDefault()


      try {
         const validated = await validateInput(input)
         if (Object.keys(validated).length > 0) setError(validated)
         else {
            dispatch(userRegister(input))
            setInput({
               fullName: '',
               email: '',
               password: '',
               phone_number: ''
            })
            await emailjs.sendForm("service_5tiq3vl","template_v0jyxss", e.target, "vnap6grHJcb-IalvP");
            setError({})
            alert('Registrado con exito!')
            document.location.href = '/login'
         }
      } catch (e) {
         console.log("register error: ", e) //sweetalert algo salio mal
         alert('Error en el registro, corrige los campos marcados en rojo')
      }
   }

   if (Object.keys(registerErrors).length) {
      Swal.fire({
         icon: "error",
         text: `${registerErrors.message}`
      })
      dispatch(clearErrors())
   }

   return (

         <div className={s.container}>
            <form className={s.form} onSubmit={e => handleSubmit(e)}>
  
                  <input className={s.input} type="text" placeholder="Nombre completo" value={input.fullName} name='fullName' onChange={e => handleChange(e)} />
                  {errors.fullName && <p className={s.alert}>{errors.fullName}</p>}

                  <input className={s.input} type="email" placeholder="Email" value={input.email} name='email' onChange={e => handleChange(e)} />
                  {errors.email && <p className={s.alert} >{errors.email}</p>}

                  <input className={s.input} type="password" placeholder="Contraseña" value={input.password} name='password' onChange={e => handleChange(e)} />
                  {errors.password && <p className={s.alert} >{errors.password}</p>}

                  <input className={s.input} type="text" placeholder="Telefono" value={input.phone_number} name='phone_number' onChange={e => handleChange(e)} />
                  {errors.phone_number && <p className={s.alert} >{errors.phone_number}</p>}

               <button className={s.btn} type="submit">Registrarse</button>
            </form>

         </div>
   )
}
