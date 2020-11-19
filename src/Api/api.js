import { BASE_URL, METHOD, _promise } from "./config"

export default {
    signUp: function(payload) {
        return _promise(METHOD.POST, BASE_URL + `signup` , payload)
    },
    addCircle: function(payload) {
        return _promise(METHOD.POST_FILES, BASE_URL + `circles` , payload, true)
    },
    logIn: function(payload) {
        return _promise(METHOD.POST, BASE_URL + 'login' , payload)
    },
    getBoards: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circles/${payload.name}/boards`, {},true)
    },
    getNotices: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circles/${payload.name}/notices`, {}, true)
    },
    user : function() {
        return _promise(METHOD.GET,BASE_URL+`user`,{}, true)
    },
    circle: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circle/${payload}`)
    },
}