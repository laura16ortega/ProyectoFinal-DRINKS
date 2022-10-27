import Cookies from "universal-cookie";
const cookies = new Cookies()

export const priceWithCommas = (n) => {
    let parts = n.toString().split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

export const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const nameregex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g

export const validateCart = (id) => {
    const cartCookies = cookies.get("cart")
    if (!cartCookies) return false
    const wasFound = cartCookies.find(e => e._id === id)

    if (wasFound) return true
    return false
}