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
import axios from 'axios'

const Home = () => {
    const dispatch = useDispatch()
    const { user, isAuthenticated} = useAuth0();
    const [loaded, setLoaded] = useState(false)
    const allProducts = useSelector(state => state.products)

    const [auth, setAuth ] = useState({
    })
    const [info, setInfo] = useState({})
    const [done, setDone] = useState(false)
 //---------------------------------------------------------------------------------------   


    const setInformation = async () => {
        setInfo({
                    name:user.fullName,
                    email:user.email,
                    userImage:user.picture
                })
            
    }


    const getToken = async (info) => {
        const { data } = await axios.post(`http://localhost:3001/api/users/auth`, info)
        localStorage.setItem('jwt', data.token)
        localStorage.setItem('userId',data._id)
        return window.localStorage.getItem('jwt')
       
    }

    useEffect(() => {
        if(isAuthenticated && (localStorage.getItem('jwt') == null)){
        setInformation();
        }
    }, [isAuthenticated])
    
    useEffect(() => {
        getToken()
    },[info])


/*     useEffect(()=> {

    },[localStorage]) */
 //---------------------------------------------------------------------------------------   

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