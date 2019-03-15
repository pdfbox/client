// const baseURL =`http://pdfbox-server.cloudeyeglobal.com`;
const baseURL =`http://localhost:3000`;
let app = new Vue({
    el : `#app`,
    data : {
        isLogin : false,
        listData : [],
        userPdf : [],
        modalData: '',
        showHomepage: true,
        showUploadpage: false,
        isLoadingModal:false

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
            let myData = this.listData.filter(e => {
                return e.author == userId
            })
            this.userPdf = myData
        },
        getPdfList() {
            axios
            .get(`${baseURL}/google-upload/`, {headers : {access_token : localStorage.access_token}})
            .then(({ data }) => {
              console.log(data);
              this.listData = data
              this.getMyPdf()
            })
            .catch(function (err) {
    
              console.log(err);
            });
        
        },


        successLogin() {
            this.isLogin = true;
            this.getPdfList()
        },
        cekLoginUSer() {
            if(localStorage.getItem('access_token')) {
                this.isLogin = true
            }
        }
    }
});