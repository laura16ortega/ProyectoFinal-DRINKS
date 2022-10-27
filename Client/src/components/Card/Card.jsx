import React from 'react'
import s from "./Card.module.css"

const Card = ({range}) => {

   return (
      <div className={s.container}>
         <div className={s.contents}>
               <div className={s.imgContainer}>
               </div>
            <div className={s.category}>category</div>
            <div className={s.data}>
               <h2>name</h2>
               <div className={s.reviews}>
      
                  <div className={s.stars}>
                     <h2> rating</h2>
                  </div>
                  <span className={s.reviewers}> reviews</span>
               </div>
               <h3>price</h3>
            </div>
         </div>

      </div>
   )
}

export default Card