import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { editProfile, getUser } from '../../redux/actions'
import s from "./ProfileEdit.module.css"

const ProfileEdit = ({ token, forceUpdate }) => {

    const dispatch = useDispatch()
    const loggedUser = useSelector(state => state.localUser)

    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        fullName: loggedUser.fullName || "",
        image: loggedUser.image || "",
        password: "",
        passwordConfirm: ""
    })


    const widgetConfig = {
        cloudName: 'dayt0wtlk',
        uploadPreset: 'ouspesfa',
        sources: [
            "local",
            "camera",
            "url",
            "facebook",
            "instagram",
            "google_drive",
            "image_search",
            "dropbox"
        ],
        showAdvancedOptions: false,
        cropping: true,
        multiple: false,
    }

    const widgetDisplay = (e) => {
        e.preventDefault()
        let myWidget = window.cloudinary.createUploadWidget(
            widgetConfig,
            (error, result) => {
                if (!error && result && result.event === "success") {
                    setInput({
                        ...input,
                        [e.target.name]: result.info.url
                    })
                }
            }
        )
        myWidget.open()
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const validation = (input) => {

        let errors = {}

        if (!input.fullName) errors.fullName = 'El Nombre completo es requerido';
        else if (input.fullName.length < 6) errors.fullName = "Nombre demasiado corto"
        else if (!/^[a-z ,.'-]+$/i.test(input.fullName)) errors.fullName = "Nombre invalido"
        else if (input.fullName.length > 255) errors.fullName = "El Nombre es demasiado largo"


        /*if (!input.email) errors.email = 'El E-mail es requerido';
        else if (input.email.length < 6) errors.email = "El Email es demasiado corto"
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) errors.email = 'Direccion de correo incorrecta';
        else if (input.email.length > 255) errors.email = "El Email demasiado es largo"*/


        if (!input.password) errors.password = "La contraseña es requerida";
        else if (input.password.length > 255) errors.password = "La contraseña es demasiado larga"
        else if (input.password.length < 3) errors.password = "La contraseña es demasiado corta"
        else if (input.password !== input.passwordConfirm) errors.passwordConfirm = "Las contraseñas no coinciden"

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validator = validation(input)
        if (Object.keys(validator).length) setErrors(validator)
        else {
            dispatch(editProfile(input, token))
            setInput({
                fullName: "",
                image: "",
                password: "",
                passwordConfirm: ""
            })
            setErrors({})
            setTimeout(() => {
                forceUpdate()
            }, 500);
        }
    }

    return (
        <div>
            <div className={s.container}>
                <form className={s.form}>
                    <div className={s.inputs}>
                        <div className={s.rows}>
                            <div className={s.inputContainer}>
                                <label>Nombre</label>
                                <input name='fullName' value={input.fullName} type="text" onChange={e => handleChange(e)} />
                                {errors.fullName && <span className={s.errors}>{errors.fullName}</span>}
                            </div>
                            <div className={s.inputContainer}>
                                <label>Imagen de perfil</label>
                                <button name="image" onClick={(e) => widgetDisplay(e)}>{input.image? input.image.slice((-1, input.image.lastIndexOf("/") + 1)) : `Seleccionar imagen`}</button>
                            </div>
                        </div>
                        <div className={s.rows}>
                            <div className={s.inputContainer}>
                                <label>Contraseña</label>
                                <input name='password' value={input.password} type="password" onChange={e => handleChange(e)} />
                                {errors.password && <span className={s.errors}>{errors.password}</span>}
                            </div>
                            <div className={s.inputContainer}>
                                <label>Confirmar contraseña</label>
                                <input name='passwordConfirm' value={input.passwordConfirm} type="password" onChange={e => handleChange(e)} />
                                {errors.passwordConfirm && <span className={s.errors}>{errors.passwordConfirm}</span>}
                            </div>
                        </div>
                    </div>
                    <div className={s.buttonContainer}>
                        <button onClick={e => handleSubmit(e)}>Actualizar perfil</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileEdit
