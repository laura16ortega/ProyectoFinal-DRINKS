import { emailregex, nameregex } from "../../assets/helpers"
import { useState } from "react"
import emailjs from '@emailjs/browser';


const useForm = (InitialState) => {
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState(InitialState)

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const validation = (input) => {
        let errors = {}
        
        if (!input.user_name) errors.user_name = "Debe tener nombre"
        else if (input.user_name.length < 4) errors.user_name = "El nombre no puede ser menor a 3 caracteres"
        else if (input.user_name.length > 30) errors.user_name = "El nombre no debe tener mas de 30 caracteres"
        else if (!input.user_name.match(nameregex)) errors.user_name = "Nombre debe tener solo letras"
        
        if (!input.user_email) errors.user_email = "Debe tener email"
        else if (!input.user_email.match(emailregex)) errors.user_email = "Email invalido"

        if (!input.message) errors.message = "Debe tener mensaje"
        if (input.message.length <= 5) errors.message = "El mensaje debe tener mas de 5 caracteres"
        if (input.message.length > 255) errors.message = "El mensaje es muy largo"

        return errors
    }

    const sendEmail = async (e) => {
        e.preventDefault()
        try {
            const validated = validation(input)
        if (Object.keys(validated).length > 0) setErrors(validated)
        else {
            await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            setInput(InitialState)
            alert("Mensaje enviado con exito") //sweetalert
        }
        } catch (e) {
            console.log("email send error: ", e) //sweetalert algo salio mal
        }
        
    }

    return {
        errors,
        input,
        handleInput,
        sendEmail
    }
}

export default useForm