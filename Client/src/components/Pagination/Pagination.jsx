import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
/* import ReactPaginate from 'react-paginate'; */
import s from "./Pagination.module.css"
/* import ReactPaginate from 'react-paginate';
 */
const Pagination = ({ allProducts, loaded }) => {
   const [currentItems, setCurrentItems] = useState([]); //displayed products
   const [pageCount, setPageCount] = useState(0); //number of pages
   const [itemOffset, setItemOffset] = useState(0); //first index
   const [productsPerPage] = useState(6)
   const [showNext, setShowNext] = useState(false)
   const [showPrev, setShowPrev] = useState(false)

   //slice array & set number of pages
   useEffect(() => {

      const endOffset = itemOffset + productsPerPage; //last index

      setCurrentItems(allProducts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(allProducts.length / productsPerPage));

   }, [itemOffset, productsPerPage, allProducts]);

   //Set page to 1, active className not showing
   useEffect(() => {
      if (pageCount === 1) {
         setItemOffset(0)
         setShowNext(true)
         setShowPrev(true)
      } else {
         setShowNext(false)
         setShowPrev(false)
      }
   }, [pageCount])

   //set page on click
   const handlePageClick = (e) => {

      const newOffset = (e.selected * productsPerPage) % allProducts.length;
      setItemOffset(newOffset);
      window.scrollTo({ behavior: "smooth", top: "0px" });
      
   };

   return (
      <div style={{ backgroundColor: "rgb(238, 238, 238)", width: "-webkit-fill-available" }}>
         <div className={s.productsContainer}>
            {loaded ?
               currentItems.length ? currentItems.map(e =>
                  <ProductCard
                     key={e.id}
                     id={e.id}
                     image={e.image}
                     name={e.name}
                     price={e.price}
                     category={e.category}
                     numReviews={e.numReviews}
                     rating={e.rating}
                  />
               ) : <h1 className={s.noResults}>No results</h1>
               : <h1>Loading</h1>}
         </div>
         <div>
            <ReactPaginate
               previousLabel={"Prev"}
               nextLabel={"Next"}
               breakLabel={"..."}
               pageCount={pageCount}
               marginPagesDisplayed={2} //pages shown at the end and start
               pageRangeDisplayed={5} //pages shown at the middle
               onPageChange={handlePageClick}
               renderOnZeroPageCount={null}
               containerClassName={s.paginator}
               pageClassName={s.page}
               previousClassName={showPrev ? s.disabled : s.page}
               nextClassName={showNext ? s.disabled : s.page}
               breakClassName={s.page}
               disabledClassName={s.disabled}
               activeClassName={s.active}
            />
         </div>
      </div>
   )
}

export default Pagination