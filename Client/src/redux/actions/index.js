export const GET_PRODUCTS = "GET_PRODUCTS"
export const PRICE_FILTER = "PRICE_FILTER"
export const CATEGORY_FILTER = "CATEGORY_FILTER"
export const NAME_SORT = "NAME_SORT"
export const SORTING = "SORTING"
//stock posiblemente no deberia ser sorteado ni filtrado, solo es una muestra

//placeholder
export const getProducts = (payload) => {
    return {
        type: GET_PRODUCTS,
        payload
    }
}

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