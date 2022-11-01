import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCategories, getProducts, authenticationAuth0 } from '../../redux/actions'
import Filters from '../../components/Filters/Filters'
import Pagination from '../../components/Pagination/Pagination'
import fakeJSON from '../../assets/fakeJson'
import Sorting from '../../components/Sorting/Sorting'
import s from "./Home.module.css"
import Footer from '../../components/Footer/Footer'
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
    const dispatch = useDispatch()
    const { isAuthenticated, user } = useAuth0();
    const [loaded, setLoaded] = useState(false)
    const allProducts = useSelector(state => state.products)

    const [auth, setAuth ] = useState({
    })



/*     useEffect(()=> {
        if(isAuthenticated){
        setAuth({
            fullName:user.name,
            email:user.email,
            password:'Password12345',
            phone_number:'15908321441'
        })
        dispatch(authenticationAuth0(auth))
    }
    },[isAuthenticated]) */

    useEffect(() => {
        if(!window.localStorage.getItem('input')){
            dispatch(getProducts(fakeJSON))
            window.localStorage.setItem('input','')
        }
        dispatch(getAllCategories())
        setLoaded(true)
    }, [dispatch])

    return (
        <>
        <div className={s.container}>
            <div className={s.filtersBody}>
            <Filters />
            </div>
            <div>
            <Pagination allProducts={allProducts} loaded={loaded} />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Home