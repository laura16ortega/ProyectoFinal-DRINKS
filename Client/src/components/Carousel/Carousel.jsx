import React from 'react';
import s from './Carousel.module.css';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';


function Carousel({products}) {
 
    return (
        <div className={s.content}>
            <div className={s.cardsPos}>
                {
                    products &&
                    products.map((e, i) => {
                        return(
                            <div key={i}>
                                <CarouselCard key={e.id} name={e.name} image={e.image} />
                            </div>
                        )
                    } )
                }
            </div>
        </div>
        );
}

export default Carousel;