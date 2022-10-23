import React from 'react'
import { useState } from 'react'
import loginValidation from './loginValidation'

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
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Email</label>
                    <input value={input.email} name="email" type="email" onChange={e => handleInput(e)}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Contraseña</label>
                    <input value={input.password} name="password" type="password" onChange={e => handleInput(e)}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <button type="submit">Iniciar sesion</button>
                </div>
            </form>
        </div>
    )
}

export default Login