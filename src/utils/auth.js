import Cookies from "js-cookie"


const token = 'token'
export function setToken(Token) {
    return Cookies.set(token, Token)
}
export function getToken() {
    return Cookies.get(token)
}
export function removeToken() {
    return Cookies.remove(token)
}