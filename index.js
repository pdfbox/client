
let app = new Vue({
    el : `#app`,
    data : {
        isLogin : false,
        listdata : [],
        userPdf : []

    },
    created () {
        this.cekLoginUSer()
        // this.getPdfList()

    },
    mounted () {
        this.getPdfList()
        
    },
    methods : {
        getMyPdf() {
            let userId = localStorage.getItem('id')
            let myData = this.listdata.filter(e => {
                return e.author == userId
            })
            this.userPdf = myData
        },
        getPdfList() {
            axios
            .get('http://localhost:3000/google-upload/', {headers : {access_token : localStorage.access_token}})
            .then(({ data }) => {
              console.log(data);
              this.listdata = data
              this.getMyPdf()
              // this.listdata.push(data)
            })
            .catch(function (err) {
    
              console.log(err);
            });
        
        },


        successLogin() {
            this.isLogin = true
            this.getPdfList()
        },
        cekLoginUSer() {
            if(localStorage.getItem('access_token')) {
                this.isLogin = true
            }
        }
    }
})