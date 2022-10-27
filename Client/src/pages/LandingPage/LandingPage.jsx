import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import s from './LandingPage.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions'
import Footer from '../../components/Footer/Footer'
import wine from "../../assets/img/WineOneOne.jpg"
import beer from "../../assets/img/beerOneOne.jpg"
import vodka from "../../assets/img/vodkaOneOne.jpeg"
import whiskey from "../../assets/img/whiskeyOneOne.jpg"


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom'

export default function LandingPage() {

   const products = useSelector(state => state.products)
   const ratingSort = products.sort((a, b) => {
      return b.rating - a.rating
   })
   const bestRated = ratingSort.slice(0, 4)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getProducts())
      AOS.init()
      return () => {
         AOS.refresh()
      }
   }, [])

   const categoeries = [
      { name: "Cerveza", image: beer },
      { name: "Vinos", image: wine },
      { name: "Vodka", image: vodka },
      { name: "Whiskey", image: whiskey }
   ]



   return (
      <div className={s.bodyContainer}>
         <div className={s.separator}>
            <div className={s.featuredContainer}>
               <div className={s.featuredWrapper}>
                  <div className={s.featuredLeft}>
                     <div className={s.leftContents}>
                        <div className={s.titleContainer}>
                           <h1>
                              LOREM. IPSUM. SOLOR SIT AMET.
                           </h1>
                        </div>
                        <div>
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae rerum cupiditate distinctio deserunt amet vel mollitia saepe quos dignissimos? Nihil labore repudiandae fugiat mollitia ut quidem. Aspernatur facere repellat dolor.</p>
                        </div>
                        <div className={s.buttonContainer}>
                           <Link to="/productos">
                              <div className={s.buttonDesc}>
                                 <div>VER PRODUCTOS</div>
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className={s.imgContainer}>
                     <img src="https://cdn.discordapp.com/attachments/783048528128770108/1032273194280828968/WallpaperDog-5514386.jpg" alt="dan"/>
                  </div>
               </div>
            </div>
         </div>
         <div className={s.downContent}>
            <div>
               <div>
                  <div className={s.bestRated}>
                     <div className={s.separatorTitle} data-aos="fade-left" data-aos-duration="3000">
                        <h1>MEJOR VALORADOS</h1>
                     </div>
                     <div className={s.bestRatedProducts}>
                        {bestRated.length ? bestRated.map((e, i) =>
                           <div key={e._id} data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-duration={500 + (500 * (i + 1))}>
                              <ProductCard
                                 id={e._id}
                                 image={e.image}
                                 name={e.name}
                                 price={e.price}
                                 numReviews={e.numReviews}
                                 rating={e.rating}
                              />
                           </div>) : ""}
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className={s.categories}>
                  <h1>NUESTRAS CATEGORIAS</h1>
                  <div className={s.categoriesLink}>
                        {categoeries.map(e => 
                           <div key={e.name} style={{padding: "0 15px"}}>
                              <div>
                                 <img src={e.image} alt={e.name}  style={{width: "277px", height: "auto"}}/>
                              </div>
                              <div>
                                 <h2>
                                    {e.name}
                                 </h2>
                              </div>
                           </div>
                        )}
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}


/*

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
   <div className="carousel-inner" style={{ height: "86vh" }}>
      <div className="carousel-item active">
         <img src="https://cdn.pixabay.com/photo/2017/01/07/20/41/alcohol-1961542_960_720.jpg" className="d-block vw-100" alt="..." />
      </div>
      <div className="carousel-item">
         <img src="https://previews.123rf.com/images/craft24/craft241802/craft24180200026/95611052-blur-alcohol-drink-bottle-on-bar-counter-in-the-dark-night-background-for-create-background-or-prese.jpg" className="d-block vw-100" alt="..." />
      </div>
      <div className="carousel-item">
         <img src="https://c4.wallpaperflare.com/wallpaper/675/929/250/whiskey-smoke-cigar-hd-wallpaper-thumb.jpg" className="d-block vw-100" alt="..." />
      </div>
   </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
   </button>
</div>



<div style={{zIndex: "5"}} className={s.contents}>
   <ImageSlider slides={slides}/>
</div>

*/