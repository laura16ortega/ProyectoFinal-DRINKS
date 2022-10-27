import Cookies from "universal-cookie";
let cookies = new Cookies()
import {
   GET_PRODUCTS,
   PRICE_FILTER,
   CATEGORY_FILTER,
   SORTING,
   GET_PRODUCT_DETAILS,
   CLEAR_PRODUCT_DETAILS,
   SEARCH_PRODUCT,
   GET_PRODUCT_CATEGORIES,
   ADD_TO_CART,
   CHANGE_QTY_TO_ADD,
   DELETE_CART_PRODUCT,
   GET_FAVORITE_PRODUCTS,
   DELETE_FAVORITE_PRODUCT,
   ERROR
} from "../actions"

const initialState = {
   qtyToAdd: 0,
   cart: [],
   products: [],
   productsBackup: [],
   allProducts: [], //creado solo para filtro de categorias,
   categories: [],
   productDetails: {},
   favoriteProducts: [],
   errors: {}
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
      case GET_PRODUCT_DETAILS:
         return {
            ...state,
            productDetails: action.payload
         }
      case CLEAR_PRODUCT_DETAILS:
         return {
            ...state,
            productDetails: {}
         }
      case SEARCH_PRODUCT:
         
         return {
            ...state,
            products: action.payload
         }
      case GET_PRODUCT_CATEGORIES:
         return {
            ...state,
            categories: action.payload
         }
      case GET_FAVORITE_PRODUCTS:
         const findOnFav = state.favoriteProducts.find(e => e._id === action.payload._id) //Buscar si ya existe
         if (!findOnFav) { //Si no esta...
            const favArray = [...state.favoriteProducts, action.payload] //Creo un array de objetos, sin alterar el estado
            let expirationDate = new Date(Date.now() + 100 * 24 * 3600000) //Setteo una fecha de caducidad
            cookies.set("fav", JSON.stringify(favArray), { path: "/", expires: expirationDate }) //Setteo las cookies, stringify porque cookies aceptan solo strings (Segun alguien en StackOverflow)
            return {
               ...state,
               favoriteProducts: favArray //Array de productos pasa a ser el array, sin tener productos repetidos
            }
         }
      case DELETE_FAVORITE_PRODUCT:
         const cookieState = cookies.get("fav") //Agarro las cookies de fav
         if (!cookieState) { //Si no existen altero el estado normalmente
            const filteredFav = state.favoriteProducts.filter(e => e._id !== action.payload._id)
            return {
               ...state,
               favoriteProducts: filteredFav
            }
         } else { //Si existen...
            const filteredFavCookies = cookieState.filter(e => e._id !== action.payload._id) //Filtro por id
            let expirationDate = new Date(Date.now() + 100 * 24 * 3600000) //Misma fecha de caducidad
            cookies.set("fav", JSON.stringify(filteredFavCookies), { path: "/", expires: expirationDate }) //Actualizo las cookies de fav con las filtradas
            return {
               ...state,
               favoriteProducts: filteredFavCookies //Pasa a ser filtrado
            }
         }

      case ADD_TO_CART:
         /*return {
            ...state,
            cart: [...state.cart, { product: action.payload.product, qty: action.payload.qty }]
         }*/

         const findOnCart = state.cart.find(e => e._id === action.payload._id)
         if (!findOnCart) {
            const cartArray = [...state.cart, action.payload]
            let expirationDate = new Date(Date.now() + 100 * 24 * 3600000)
            cookies.set("cart", JSON.stringify(cartArray), { path: "/", expires: expirationDate })
            return {
               ...state,
               cart: cartArray 
            }
         }

      case DELETE_CART_PRODUCT:
         const cartCookies = cookies.get("cart")
         if (!cartCookies) { 
            const filteredCart = state.cart.filter(e => e._id !== action.payload._id)
            return {
               ...state,
               cart: filteredCart
            }
         } else { 
            const filteredCartCookies = cartCookies.filter(e => e._id !== action.payload._id)
            let expirationDate = new Date(Date.now() + 100 * 24 * 3600000)
            cookies.set("cart", JSON.stringify(filteredCartCookies), { path: "/", expires: expirationDate })
            return {
               ...state,
               cart: filteredCartCookies
            }
         }

      case CHANGE_QTY_TO_ADD:
         return {
            ...state,
            qtyToAdd: action.payload
         }
      case ERROR: 
         return {
            ...state,
            errors: action.payload
         }
      default:
         return initialState
   }
}
export default rootReducer;