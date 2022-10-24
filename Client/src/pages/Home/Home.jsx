import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCategories, getProducts } from '../../redux/actions'
import Filters from '../../components/Filters/Filters'
import Pagination from '../../components/Pagination/Pagination'
import fakeJSON from '../../assets/fakeJson'
import Sorting from '../../components/Sorting/Sorting'
import s from "./Home.module.css"
import Footer from '../../components/Footer/Footer'
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
    const dispatch = useDispatch()
    const { isAuthenticated } = useAuth0();
    const [loaded, setLoaded] = useState(false)
    const allProducts = useSelector(state => state.products)

    useEffect(() => {


        if(!window.localStorage.getItem('input')){
            dispatch(getProducts(fakeJSON))
            window.localStorage.setItem('input','')
        }else if(isAuthenticated){
            
        }
        dispatch(getAllCategories())
        setLoaded(true)
    }, [dispatch])

    return (
        <div>
            <div style={{ display: "flex", margin: "1rem", marginTop: "7em", justifyContent: "center"}}>
                <Filters />
                <div className={s.rightContainer}>
                    <Sorting/>
                    <Pagination allProducts={allProducts} loaded={loaded} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home