import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import loginValidation from './loginValidation'
import s from "./Login.module.css"

const Login = () => {
    const error = useSelector(state => state.errors)
    console.log(error)

    const InitialState = {
        email: "",
        password: ""
    }

    const {
        errors,
        input,
        handleInput,
        handleSubmit
    } = loginValidation(InitialState)


    if (Object.keys(error).length) {
        Swal.fire({
           icon: "error",
           text: `${error.message}`
        })
    }

    return (
<div className={s.container}>
            <form className={s.formBody} onSubmit={e => handleSubmit(e)}>
                <div>
                    {/* <label>Email</label> */}
                    <input placeholder='E-mail' className={s.input} value={input.email} name="email" type="email" onChange={e => handleInput(e)}/>
                    {errors.email && <p className={s.emailAlert}>{errors.email}</p>}
                </div>
                <div>
                    {/* <label>Contraseña</label> */}
                    <input placeholder='Contraseña' className={s.input} value={input.password} name="password" type="password" onChange={e => handleInput(e)}/>
                    {errors.password && <p className={s.passwordAlert}>{errors.password}</p>}
                </div>
                <button type="submit" className={s.btn}>Iniciar sesion</button>
            </form>
        </div>
    )
}

export default Login