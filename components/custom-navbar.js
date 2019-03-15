Vue.component('custom-navbar', {
  template: `
  <nav class="navbar navbar-expand-lg navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="/">PDFBox</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03" v-if="$parent.isLogin">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item" @click="homepage()">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item" @click="uploadpage()">
        <a class="nav-link" href="#">Upload</a>
      </li>
      <li class="nav-item" @click="logout()">
        <a class="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  `,
  methods: {
    homepage(){
      this.$parent.showHomepage = true;
      this.$parent.showUploadpage = false
    },
    uploadpage(){
      this.$parent.showHomepage = false;
      this.$parent.showUploadpage = true
    },
    logout() {
      this.$parent.isLogin = false;
      localStorage.clear();
    }
  }
});