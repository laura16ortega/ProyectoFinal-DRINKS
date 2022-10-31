import axios from "axios"

export const GET_PRODUCTS = "GET_PRODUCTS"
export const PRICE_FILTER = "PRICE_FILTER"
export const CATEGORY_FILTER = "CATEGORY_FILTER"
export const NAME_SORT = "NAME_SORT"
export const SORTING = "SORTING"
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS"
export const CLEAR_PRODUCT_DETAILS = 'CLEAR_PRODUCT_DETAILS';
export const GET_PRODUCT_CATEGORIES = "GET_PRODUCT_CATEGORIES"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const ADD_TO_CART = "ADD_TO_CART"
export const CHANGE_QTY_TO_ADD = "CHANGE_QTY_TO_ADD"
export const GET_FAVORITE_PRODUCTS = "GET_FAVORITE_PRODUCTS"
export const DELETE_FAVORITE_PRODUCT = "DELETE_FAVORITE_PRODUCT"
export const DELETE_CART_PRODUCT = "DELETE_CART_PRODUCT"
export const ADD_REVIEW = 'ADD_REVIEW'
export const ERROR = "ERROR"
export const CLEAR_ERROR = "CLEAR_ERROR"
export const GET_USER = "GET_USER"
export const REVIEWS_FILTER = "REVIEWS_FILTER"


//placeholder
//import fakeJSON from "../../assets/fakeJson"
//import { categories } from "../../assets/fakeJson"

//placeholder
//export const getProducts = (payload) => {
//    return {
//        type: GET_PRODUCTS,
//        payload
//    }
//}

/* export const loginAuth = (payload) => {
    return asyn
}
 */


export const authenticationAuth0 = (auth) => {
   return async (dispatch) => {
      try {
         const register = await axios.post(
            `https://drinksshop.herokuapp.com/`,
            email
         );
         const json = await axios.post(
            "https://drinksshop.herokuapp.com/api/users/auth0",
            auth
         );
         console.log("hier durchgekommen");
         return json;
      } catch (err) {
         console.error("auth0 api authtentication error", err);
      }
   };
};

/*export const addReview = (payload) => {
   return async (dispatch) => {
      try {
         return dispatch({
            type: ADD_REVIEW,
            payload: payload,
         });
      } catch (err) {
         console.error("review actions error", err);
      }
   };
};*/


export const addReview = (id, token, payload) => {
   return async (dispatch) => {
      try {
         const data = await axios.post(
            `http://localhost:3001/api/products/${id}/review`, 
            payload, 
            { headers: { Authorization: `Bearer ${token}` } })
         return data
         /*
         const json = await axios.put(
            "https://drinksshop.herokuapp.com/api/users/profile",
            payload,
            { headers: { Authorization: `Bearer ${token}` } }
         )
         return json

         */
      } catch (err) {
         console.log("Review actions error", err)
      }
   }
}

/*productRoute.post(
  "/:id/review", */

export const getProducts = () => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(
            "https://drinksshop.herokuapp.com/api/products"
         );
         console.log("estoy en data redux", data);
         return dispatch({ type: GET_PRODUCTS, payload: data });
      } catch (e) {
         console.log("Reducer products error", e);
      }
   };
};

export const getProductDetails = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(
            `https://drinksshop.herokuapp.com/api/products/${id}`
         );
         return dispatch({ type: GET_PRODUCT_DETAILS, payload: data });
      } catch (e) {
         console.log("Reducer products DETAIL error", e);

      }
   }
}

export const getAllCategories = () => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(
            "https://drinksshop.herokuapp.com/api/products"
         ); //Should be a route only with categories
         const datamap = data.map((e) => e.category);
         const categories = [...new Set(datamap)];
         return dispatch({ type: GET_PRODUCT_CATEGORIES, payload: categories });
      } catch (e) {
         console.log("Actions get categories error", e);
      }
   };
};

export const productSearch = (name) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(
            `https://drinksshop.herokuapp.com/api/products?keyword=${name}`
         );
         return dispatch({ type: SEARCH_PRODUCT, payload: data });
      } catch (e) {
         console.log("Actions search error", e);
      }
   };
};


export const priceFilter = (payload) => {
   return {
      type: PRICE_FILTER,
      payload,
   };
};

export const categoryFilter = (payload) => {
   return {
      type: CATEGORY_FILTER,
      payload,
   };
};

export const nameSort = (payload) => {
   return {
      type: NAME_SORT,
      payload,
   };
};

export const sorting = (payload) => {
   return {
      type: SORTING,
      payload,
   };
};

export const clearProductDetails = () => {
   return {
      type: CLEAR_PRODUCT_DETAILS,
   };
};

export const addProductToCart = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(
            `https://drinksshop.herokuapp.com/api/products/${id}`
         );
         return dispatch({ type: ADD_TO_CART, payload: data });
      } catch (e) {
         console.log("add cart products error", e);
      }
   };
};

export const changeQtyToAdd = (payload) => {
   return {
      type: CHANGE_QTY_TO_ADD,
      payload,
   };
};

export const deleteCartProduct = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(
            `https://drinksshop.herokuapp.com/api/products/${id}`
         );
         return dispatch({ type: DELETE_CART_PRODUCT, payload: data });
      } catch (e) {
         console.log("action delete cart product error", e);
      }
   };
};

export const getFavoriteProducts = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(
            `https://drinksshop.herokuapp.com/api/products/${id}`
         );
         return dispatch({ type: GET_FAVORITE_PRODUCTS, payload: data });
      } catch (e) {
         console.log("action fav products error", e);
      }
   };
};

export const deleteFavoriteProduct = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(
            `https://drinksshop.herokuapp.com/api/products/${id}`
         );
         return dispatch({ type: DELETE_FAVORITE_PRODUCT, payload: data });
      } catch (e) {
         console.log("action delete fav product error", e);
      }
   };
};


export const userRegister = (payload) => {
   return async () => {
      try {
         const json = await axios.post(
            "https://drinksshop.herokuapp.com/api/users/",
            payload
         );
         return json;
      } catch (e) {
         dispatch({
            type: ERROR,
            payload: e.response.data
         })
      }
   };
};

export const userLogin = (payload) => {
   return async (dispatch) => {
      try {
         const json = await axios.post("https://drinksshop.herokuapp.com/api/users/login", payload)
         return dispatch(
            {
               type: 'USER_LOGIN',
               payload: json
            }
         )
      } catch (e) {
         dispatch({
            type: ERROR,
            payload: e.response.data
         })

      }
   }
}

export const clearErrors = () => {
   return {
      type: CLEAR_ERROR
   }
}

export const editProfile = (payload, token) => {
   return async () => {
      try {
         const json = await axios.put(
            "https://drinksshop.herokuapp.com/api/users/profile",
            payload,
            { headers: { Authorization: `Bearer ${token}` } }
         )
         return json
      } catch (e) {
         console.log("edit profile action error: ", e)
      }
   }
}

export const getUser = (token) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get("https://drinksshop.herokuapp.com/api/users/profile", { headers: { Authorization: `Bearer ${token}` } })
         return dispatch({ type: GET_USER, payload: data })
      } catch (e) {
         console.log("get user action error", e)
      }
   }
}

export const addProduct = (payload, token) => {
   return async (dispatch) => {
      try {
         const data = await axios.post(
            "https://drinksshop.herokuapp.com/api/products/add", 
            payload, 
            { headers: { Authorization: `Bearer ${token}` } })
         return data
      } catch (err) {
         console.log("Add product error", err)
      }
   }
}

export const reviewsFilter = (payload) => {
  return {
     type: REVIEWS_FILTER,
     payload,
  };
};
