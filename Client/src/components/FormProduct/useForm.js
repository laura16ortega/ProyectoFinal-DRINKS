import { useState } from "react"
import { useDispatch } from "react-redux"

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
    
    const widgetConfig = {
        cloudName: 'dayt0wtlk',
        uploadPreset: 'gmykq3nv',
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
                    console.log(result)
                    setInput({
                        ...input,
                        [e.target.name]: result.info.url
                    })
                }
            }
        )
        myWidget.open()
    }

    const validation = (input) => {
        let errors = {}

        if (!input.name) errors.name = "Necesita un nombre"
        else if (input.name.length > 255) errors.name = "Nombre demasiado largo"

        if (!input.description) errors.description = "Falta una descripcion"
        else if (input.description.length > 255) errors.description = "Descripcion demasiado larga"

        if (!input.price) errors.price = "Necesita un precio"

        if (!input.stock) errors.stock = "Necesita un stock"

        if (!input.category) errors.category = "Necesita una categoria"

        if (!input.image) errors.image = "Necesita una imagen"

        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validated = validation(input)
        if (Object.keys(validated).length > 0) setErrors(validated)
        else {
        /*     dispatch(postProduct(input)) */
        console.log({
            name: input.name,
            image: input.image,
            description: input.description,
            price: Number(input.price),
            stock: Number(input.stock),
            category: input.category
        }, "input")
        setInput(InitialState)
        setErrors({})
        }
    }

    return {
        errors,
        input,
        widgetDisplay,
        handleInput,
        handleSubmit
    }
}

export default loginValidation

/*



import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { createPokemon } from "../../redux/actions"

const useForm = (InitialState, validation) => {
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState(InitialState)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSelector = (e) => {
        if (input[e.target.name].includes(e.target.value)) alert("Duplicate type")
        // > 1 pq llega un turno tarde el input por alguna razon
        //else if (input[e.target.name].length > 1) alert("Cannot have more than 2 types")
        else {
            setInput({
                ...input,
                [e.target.name]: [...input[e.target.name],
                e.target.value]
            })
        }
    }

    const handleDelete = (e) => {
        console.log(e.target)
        setInput({
            ...input,
            [e.target.name]: input[e.target.name].filter(t => t !== e.target.value)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validated = validation(input)
        if (Object.keys(validated).length > 0) setErrors(validated)
        else {
            dispatch(createPokemon(input))
            setInput(InitialState)
            history.push("/home")
            history.go(0) //sino no muestra el post
            alert("Processing your data...")
        }
    }

    return {
        errors,
        input,
        handleInput,
        handleSelector,
        handleDelete,
        handleSubmit
    }
}

export default useForm


*/