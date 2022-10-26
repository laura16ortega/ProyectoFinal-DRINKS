import React from 'react'
import { useState, useSelector, useEffect } from 'react'
import loginValidation from './loginValidation'
import s from './Login.module.css';

const Login = () => {


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




    return (
        <div className={s.container}>
            <form className={s.formBody} onSubmit={e => handleSubmit(e)}>
                <div>
                    {/* <label>Email</label> */}
                    <input placeholder='E-mail' className={s.input} value={input.email} name="email" type="email" onChange={e => handleInput(e)}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    {/* <label>Contraseña</label> */}
                    <input placeholder='Contraseña' className={s.input} value={input.password} name="password" type="password" onChange={e => handleInput(e)}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <button className={s.btn} type="submit">Iniciar sesion</button>
                </div>
            </form>
        </div>
    )
}

export default Login