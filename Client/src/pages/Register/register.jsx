import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import s from "./Register.module.css"
import SearchBar from '../../components/SearchBar/SearchBar'


export default function Register() {

//   const dispatch = useDispatch()
    const navigate = useNavigate()

const [errors, setError] = useState({})

 const [input, setInput] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
 })

 console.log('estamos en los errores', errors)

 // function handleChange
  function handleChange(e){
    e.preventDefault()

    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  setError(
    validateInput({
        ...input,
        [e.target.name]: e.target.value
    })
  )
   
  }


  // function handleSubmit
  function handleSubmit(e){
    e.preventDefault()

   if(input.name !== '' && input.lastName && input.email !== '' && input.password !== ''){
   
      // dispatch(/* aqui va el nombre de la action */)

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registered Successfully',
        showConfirmButton: true,
        timer: 3000
      }).then(()=>{
        navigate("/details")
      })

   }
  
    else{
        return Swal.fire({
         icon: 'error',
         title: 'Error',
         text: 'Please complete the fields!',
         showConfirmButton: false,
         timer: 2000
       })
    }

  

  }

  // function validateInput

  function validateInput(input){
     
    let errors = {}

    if (!input.name) {
        errors.name = 'Nombre es requerido';
      } else if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)) {
        errors.name = "Primer Letra debe ser mayuscula"
      }
      if (!input.lastName) {
        errors.lastName = 'Apellido es requerido';
      } else if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.lastName)) {
        errors.lastName = "Primer Letra debe ser mayuscula"
      }
    
      if (!input.email) {
        errors.email = 'E-mail es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
        errors.email = 'Direccion de correo incorrecta';
    }
    
      if (!input.password) {
        errors.password = "ejemplo: usuario123";
      } else if (
        
         !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i.test(input.password)
      ) {
        errors.password =
    'debe contener almenos 8 caracteres,incluyendo algun numero'  }
     
    if (!input.password2) {
      errors.password2 = "Campo requerido";
    }
  
   else if (input.password !== input.password2) {
      errors.password2 = "Las Contraseñas No Coinciden"
  }
    
      return errors;
}

  return (
    <div className ={s.container} >
      <SearchBar/>
        <h3>RUTA DE REGISTRO</h3>
        <div className={s.contain}>
      <form  onSubmit={e => handleSubmit(e)}>
          <div className={s.inputs}>
       <input type="text" placeholder="Name" value={input.name} name='name' onChange={e => handleChange(e)} />
       {errors.name && <span>{errors.name}</span>}

       <input type="text" placeholder="lastName" value={input.lastName} name='lastName' onChange={e => handleChange(e)} />
       {errors.lastName && <span>{errors.lastName}</span>}

       <input type="email" placeholder="Email" value={input.email} name='email' onChange={e => handleChange(e)} />
       {errors.email && <span>{errors.email}</span>}

       <input type="password" placeholder="password" value={input.password} name='password' onChange={e => handleChange(e)} />
       {errors.password && <span>{errors.password}</span>}

       <input type="password" placeholder="repeat password" value={input.password2} name='password2' onChange={e => handleChange(e)} />
       {errors.password2 && <span>{errors.password2}</span>}

        </div>
      <button className={s.button}type="submit">Sign in</button>
      </form>
        </div>
    </div>
  )
}
