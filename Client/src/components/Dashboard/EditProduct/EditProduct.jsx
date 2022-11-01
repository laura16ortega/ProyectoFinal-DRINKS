import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearProductDetails, getProductDetails } from '../../../redux/actions'
import EditCard from "./EditCard/EditCard"

const EditProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductDetails(id))
        return () => {
            dispatch(clearProductDetails())
        }
    }, [dispatch, id])

    return (
        <EditCard />
    )
}

export default EditProduct

/*
category: "Vino"
createdAt: "2022-10-18T22:50:08.787Z"
description: "Vinito para cocinar"
image: "https://exitocol.vtexassets.com/arquivos/ids/2037679/VINO-MAESTRO-1570207_a.jpg?v=637268915226570000"
isDeleted: false
name: "Vino Sansón"
numReviews: 2
price: 25000
rating: 4.5
reviews: (2) [{…}, {…}]
stock: 30
updatedAt: "2022-10-29T21:49:05.248Z"
_id: "634f2da08ab16e096890cf2a"

*/

