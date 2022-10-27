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
            <form onSubmit={e => handleSubmit(e)} className={s.loginForm}>
                <h1 className={s.titleh1}>Inicio de sesion</h1>
                <div style={{width: "100%"}}>
                <div className={s.formInputMaterial}>
                    <label>Email</label>
                    <input value={input.email} name="email" type="text" onChange={e => handleInput(e)}/>
                    {errors.email && <span className={s.errors}>{errors.email}</span>}
                </div>
                <div className={s.formInputMaterial}>
                    <label>Contraseña</label>
                    <input value={input.password} name="password" type="password" onChange={e => handleInput(e)}/>
                    {errors.password && <span className={s.errors}>{errors.password}</span>}
                </div>
                </div>
                <button type="submit" className={s.btn}>Iniciar sesion</button>
            </form>
        </div>
    )
}

export default Login