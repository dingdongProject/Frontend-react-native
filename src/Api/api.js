import { BASE_URL, METHOD, _promise } from "./config"

export default {
    signUp: function(payload) {
        return _promise(METHOD.POST, BASE_URL + `signup` , payload)
    },
    logIn: function(payload) {
        return _promise(METHOD.POST, BASE_URL + 'login' , payload)
    },
    withDraw: function(payload) {
        return _promise(METHOD.DELETE, BASE_URL + 'withdraw',payload)
    },
    user : function() {
        return _promise(METHOD.GET,BASE_URL+`user`)
    },
    circle: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circle/${payload}`)
    }
    
}