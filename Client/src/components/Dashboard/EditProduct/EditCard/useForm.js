import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
//import { editProduct } from "../../../../redux/actions"


const loginValidation = (InitialState, token) => {
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState(InitialState)
    const [cloudinary, setCloudinary] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
                    setCloudinary(true)
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
            /*dispatch(editProduct({
                name: input.name,
                image: input.image,
                description: input.description,
                price: Number(input.price),
                stock: Number(input.stock),
                category: input.category
            }, token))*/
            setInput(InitialState)
            setErrors({})
            navigate("/dashboard/products")
        }
    }

    return {
        errors,
        cloudinary,
        input,
        setInput,
        widgetDisplay,
        handleInput,
        handleSubmit
    }
}

export default loginValidation