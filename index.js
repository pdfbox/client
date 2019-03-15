
let app = new Vue({
    el : `#app`,
    data : {
        isLogin : false
    },
    created () {
        this.cekLoginUSer()
    },
    methods : {
        successLogin() {
            this.isLogin = true
        },
        cekLoginUSer() {
            if(localStorage.getItem('access_token')) {
                this.isLogin = true
            }
        }
    }
})