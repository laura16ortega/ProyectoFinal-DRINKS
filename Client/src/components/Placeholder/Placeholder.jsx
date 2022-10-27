
import Card from '../Card/Card.jsx'
import s from "./Placeholder.module.css"


const Placeholder = () => {
    const range = [1,2,3,4,5,6,7,8,9]
   return (
      <div className={s.container}>

         {range ? (
            <div className={s.productsContainer}>
               {
                  range.map(e => (
                     <Card
                        range={range}
                     />
                  ))}
            </div>
         ) : (
            <div>
               <h1>Loading</h1>
            </div>

         )}

         <div className={s.pagination}>
         </div>
      </div>
   )
}

export default Placeholder