
let app = new Vue({
    el : `#app`,
    data : {
        isLogin : false
    },
    methods : {
        successLogin() {
            this.isLogin = true
        }
    }
})