import React from 'react'
import s from './LandingPage.module.css'

export default function LandingPage() {

  const handleRedirect = () => {
    window.location.replace("/home")
  }

  return (
    <div className={s.container}>
      <div className={s.contents}>
         <img src='https://cdn.pixabay.com/photo/2017/01/07/20/41/alcohol-1961542_960_720.jpg' alt='imagen'/>
        <div className={s.data}>
          <h1>drinks.</h1>
          <button onClick={handleRedirect}>Ir a Inicio</button>
        </div>
      </div>
    </div>
  )
}
