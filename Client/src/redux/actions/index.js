export const GET_PRODUCTS = "GET_PRODUCTS"
export const PRICE_FILTER = "PRICE_FILTER"
export const CATEGORY_FILTER = "CATEGORY_FILTER"
export const NAME_SORT = "NAME_SORT"
export const SORTING = "SORTING"
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS"
export const CLEAR_PRODUCT_DETAILS = 'CLEAR_PRODUCT_DETAILS';
export const GET_PRODUCT_CATEGORIES = "GET_PRODUCT_CATEGORIES"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"

//placeholder
import fakeJSON from "../../assets/fakeJson"
import { categories } from "../../assets/fakeJson"

//placeholder
export const getProducts = (payload) => {
    return {
        type: GET_PRODUCTS,
        payload
    }
}

/*
export const getProducts = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/RutaDeProductos")
            return dispatch({type: GET_PRODUCTS, payload: data})
        } catch (e) {
            console.log("Reducer products error", e)
        }
    }
}
*/

//placeholder
export const getProductDetails = (id) => {
    const productDetail = fakeJSON.find(e => e.id === Number(id))
    console.log(productDetail)
    return {
        type: GET_PRODUCT_DETAILS,
        payload: productDetail
    }
}

/*
export const getProductDetails = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/RutaDeDetalles/id")
            return dispatch({type: GET_PRODUCT_DETAILS, payload: data})
        } catch (e) {
            console.log("Reducer products DETAIL error", e)
        }
    }
}
*/

//placeholder
export const getAllCategories = () => {
    return {
        type: GET_PRODUCT_CATEGORIES,
        payload: categories
    }
}


/*
export const getAllCategories = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/RutaDeCategorias")
            return dispatch({type: GET_PRODUCT_CATEGORIES, payload: data})
        } catch (e) {
            console.log("Actions get categories error", e)
        }
    }
}
*/

//placeholder 
export const productSearch = (payload) => {
    const searchFilter = fakeJSON.filter(e => e.name.toLowerCase().includes(payload.toLowerCase()))
    return {
        type: SEARCH_PRODUCT,
        payload: searchFilter
    }
}

/*
export const productSearch = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/RutaDelSearch")
            return dispatch({type: SEARCH_PRODUCT, payload: data})
        } catch (e) {
            console.log("Actions search error", e)
        }
    }
}
*/

export const priceFilter = (payload) => {
    return {
        type: PRICE_FILTER,
        payload
    }
}

export const categoryFilter = (payload) => {
    return {
        type: CATEGORY_FILTER,
        payload
    }
}

export const nameSort = (payload) => {
    return {
        type: NAME_SORT,
        payload
    }
}

export const sorting = (payload) => {
    return {
        type: SORTING,
        payload
    }
}

export const clearProductDetails = () => {
    return {
        type: CLEAR_PRODUCT_DETAILS
    }
}