import { emailregex } from "../../assets/helpers"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { userLogin } from "../../redux/actions"
import Swal from 'sweetalert2'
import axios from "axios"

const loginValidation = (InitialState) => {
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState(InitialState)
    const dispatch = useDispatch()

    const handleInput = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const validation = (input) => {
        let errors = {}

        if (!input.email) errors.email = "Necesita un email"
        else if (!input.email.match(emailregex)) errors.email = "Email invalido"
        else if (input.email.length > 30) errors.email = "Email demasiado largo"


        if (!input.password) errors.password = "*Necesita una contraseña"
        else if (input.password.length > 20) errors.password = "*Contraseña demasiada larga"

        if (!input.password) errors.password = "Necesita una contraseña"
        else if (input.password.length > 255) errors.password = "Contraseña demasiada larga"


        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validated = validation(input)
        try {
            

        if (Object.keys(validated).length > 0) setErrors(validated)
        else {
        /*     dispatch(userLogin(input)) */
            const json = await axios.post("https://drinksshop.herokuapp.com/api/users/login", input)
            const token = json.data.token;
            localStorage.setItem('jwt',token);
            setInput(InitialState)
            alert("Logueado")
            document.location.href = '/';
        }

        /*
        export const userLogin = (payload) => {
   return async (dispatch) => {
      try {
         const json = await axios.post("", payload)
         return dispatch(
            {
               type: 'USER_LOGIN',
               payload: json
            }
         )
      } catch (e) {
         dispatch({
            type: ERROR,
            payload: e.response.data
         })

      }
   }
}
        
        
        */
        } catch (e) {
            alert('El usuario o la contraseña son incorrectos')
            console.log("log in error: ", e) //sweetalert algo salio mal

            if (Object.keys(validated).length > 0) setErrors(validated)
            else {
                /*     dispatch(userLogin(input)) */
                const json = await axios.post("http://localhost:3001/api/users/login", input)
                const token = json.data.token;
                console.log(json);
                localStorage.setItem('jwt', token);
                setInput(InitialState)
            }
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