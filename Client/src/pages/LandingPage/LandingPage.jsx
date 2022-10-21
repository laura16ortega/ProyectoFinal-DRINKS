import {React, useEffect} from 'react'
import s from './LandingPage.module.css'
import { useDispatch, useSelector  } from "react-redux";
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import { getProducts } from '../../redux/actions';
import LoginButton from '../../components/LogginButton/LoginButton';
import LogoutButton from '../../components/LogoutButton/LogoutButton';


export default function LandingPage() {

  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products)
  const products = allProducts.slice(6);
 
    useEffect(() => {
        dispatch(getProducts());

    },[])


  const handleRedirect = () => {
    window.location.replace("/home")
  }

  return (
    <>

    <div className={s.container}>
 

      <div className={s.container2}>
      <div className={s.logo}>
        <h1>Bienvenido</h1>
      </div>



      </div>
      <div className={s.buttons}>
      <div className={s.loginOut}>
        <LoginButton />
        <LogoutButton />
      </div>
      

      <div>
        <Link to='/productos'>
        <button className={s.btn}>
          Explorar
        </button>
        </Link>
      </div>
      </div>
      <div className={s.carousel}>
      <Carousel products={products}/>
      </div>

      </div>
    </>
  )
}
