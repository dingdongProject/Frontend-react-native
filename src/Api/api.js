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
    user : function() {
        return _promise(METHOD.GET,BASE_URL+`user`,{}, true)
    },
    getBoards: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circles/${payload.name}/boards`, {},true)
    },
    getNotices: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circles/${payload.name}/notices`, {}, true)
    },
    getPosts : function(payload) {
        return _promise(METHOD.GET,BASE_URL+`board/${payload.id}/post`,{}, true)
    },
    circle: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circle/${payload}`)
    },
    getMembers : function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circles/${payload}/members`,{},true)
    },
}