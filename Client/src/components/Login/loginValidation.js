import { emailregex } from "../../assets/helpers"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { userLogin } from "../../redux/actions"


const loginValidation = (InitialState) => {
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState(InitialState)
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const validation = (input) => {
        let errors = {}

        if (!input.email) errors.email = "Necesita un email"
        else if (!input.email.match(emailregex)) errors.email = "Email invalido"
        else if (input.email.length > 255) errors.email = "Email demasiado largo"

        if (!input.password) errors.password = "Necesita una contraseña"
        else if (input.password.length > 255) errors.password = "Contraseña demasiada larga"

        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const validated = validation(input)
            if (Object.keys(validated).length > 0) setErrors(validated)
            else {
                dispatch(userLogin(input))
                setInput(InitialState)
            }
        } catch (e) {
            console.log("log in error: ", e) //sweetalert algo salio mal
        }
    }

    return {
        errors,
        input,
        handleInput,
        handleSubmit
    }
}

export default loginValidation