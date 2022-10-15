import {
   GET_PRODUCTS,
   PRICE_FILTER,
   CATEGORY_FILTER,
   SORTING,
} from "../actions"

const initialState = {
   products: [],
   productsBackup: [],
   allProducts: [] //creado solo para filtro de categorias
};

const rootReducer = (state = initialState, action) => {
   switch (action.type) {


      case GET_PRODUCTS:
         return {
            ...state,
            products: action.payload,
            productsBackup: action.payload,
            allProducts: action.payload
         }

      
      case PRICE_FILTER:
         //const filteredPrices = state.products.filter(e => e.price >= action.minPrice && e.price <= action.maxPrice)
         return {
            ...state,
            products: state.productsBackup.filter(e => e.price <= action.payload)
         }
      
      case SORTING:
         const allProducts = state.products.filter(e => e.price)
         const sortedPrice = allProducts.sort((a, b) => {
            if (action.payload === "OrderByPriceASC") {
               return a.price - b.price
            }
            if (action.payload === "OrderByPriceDESC") {
               return b.price - a.price
            }
            if (action.payload === "OrderByNameASC") {
               if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
               if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
               return 0
            }
            if (action.payload === "OrderByNameDESC") {
               if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
               if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
               return 0
            }
            if (action.payload === "OrderByReviewRateDESC") {
               return b.rating - a.rating
            }
            return true
         })
         return {
            ...state,
            products: sortedPrice,
            productsBackup: sortedPrice
         }

      
      case CATEGORY_FILTER:
         if (action.payload === "all") {
            return {
               ...state,
               products: state.allProducts
            }
         }
         const filteredCategory = state.allProducts.filter(e => e.category.includes(action.payload))
         return {
            ...state,
            products: filteredCategory,
            productsBackup: filteredCategory
         }
      default:
         return initialState
   }
}
export default rootReducer;