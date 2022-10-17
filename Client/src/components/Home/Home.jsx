import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions'
import Filters from '../Filters/Filters'
import Pagination from '../Pagination/Pagination'
import fakeJSON from '../../assets/fakeJson'
import Sorting from '../Sorting/Sorting'
import s from "./Home.module.css"

const Home = () => {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    const allProducts = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts(fakeJSON))
        setLoaded(true)
    }, [dispatch])

    return (
        <div>
            <div style={{ display: "flex" }}>
                <Filters />
                <div className={s.rightContainer}>
                    <Sorting/>
                    <Pagination allProducts={allProducts} loaded={loaded} />
                </div>
            </div>
        </div>
    )
}

export default Home