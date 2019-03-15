Vue.component('login-page', ({
    template: `
    <div class="container">
        <div class="row align-items-center" style="height:100vh">
            
                
            
            <div class="col-sm-6">
                <h1> wellcome to PdfBox</h1>
                <p> where you can find any free pdf books here</p>
                
            </div>
            <div class="col-sm-6">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#login" role="tab" aria-controls="home" aria-selected="true">sign in</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="profile" aria-selected="false">sign up</a>
                    </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="home-tab">
                        <form @submit.prevent="loginForm">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"
                                v-model="email">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" placeholder="Password"
                                v-model="password">
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>    
                    </div>
                    <div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="profile-tab">
                        <form @submit.prevent="register">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"
                                v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Name</label>
                                <input type="text" class="form-control"  placeholder="Name"
                                v-model="name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                                v-model="password">
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    `
    ,
    data (){
        return {
            name : '',
            email :'',
            password : ''
        }
    },
    methods : {
        register() {
            axios
                .post(`${baseURL}/register`, {email : this.email, password : this.password, name : this.name})
                .then(({data})=> {
                    swal('register success')
                })
                .catch(({response})=> {
                    swal('opp, our server is busy, try again')
                })
        },
        loginForm() {
            axios
                .post(`${baseURL}/login`, {email : this.email, password : this.password})
                .then(({data})=> {
                    console.log(data);
                    
                    localStorage.setItem('access_token', data.access_token)
                    localStorage.setItem('id', data.id)
                    
                    this.$emit('success-login')
                })
                .catch(({response})=> {

                })
        }
    }
}))