Vue.component('file-upload-google-page', {
  template: `
<div class="container">
  <div class="row justify-content-center">
    <form id="uploadForm" enctype="multipart/form-data" @submit.prevent="submitFile">
        <input type="file" id="file" name="file">
        <button type="submit">Simpan</button>
    </form>
   </div> 
   <div v-if="listdata && listdata.length">
      <div class="row mt-3" v-for="item in listdata">
        <div class="col-10 pl-1 py-1 border" style="color: #000;">
          <a :href="item.url" target="_blank">{{getFilename(item.url)}}</a>     
          <div>
          <small class="text-muted">share :</small>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//storage.googleapis.com/pdfbox.cloudeyeglobal.com/1552620972312Test.pdf">Facebook</a>
          <a href="https://twitter.com/home?status=https%3A//storage.googleapis.com/pdfbox.cloudeyeglobal.com/1552620972312Test.pdf">Twitter</a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//storage.googleapis.com/pdfbox.cloudeyeglobal.com/1552620972312Test.pdf&title=Title&summary=Summary&source=Sorce">LinkedIn</a>
          <a href="https://plus.google.com/share?url=https%3A//storage.googleapis.com/pdfbox.cloudeyeglobal.com/1552620972312Test.pdf">Google+</a>
          </div>    
        </div>
        <a href="#" class="col-2 py-3 btn btn-primary text-light" @click.prevent="translateFile(item.url)">
          Translate     
        </a>
      </div>
   </div>
</div>
</div>
  `,
  mounted() {
    axios
      .get('http://localhost:3000/google-upload/')
      .then(({ data }) => {
        this.listdata = data;
      })
      .catch((err) => {
        console.log(err)
      })
  },
  data: function () {
    return {
      listdata: [],
      translated: ''
    }
  },

  methods: {
    getFilename(url) {
      url = url.split('/');
      return url[url.length - 1]
    },
    submitFile() {

      console.log('masuk sini');

      var formData = new FormData();
      var dataFile = document.querySelector('#file');
      formData.append("file", dataFile.files[0]);
      axios
        .post('http://localhost:3000/google-upload/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(({ data }) => {
          console.log(data);
          this.translated = data.data
          // this.listdata.push(data)
        })
        .catch(function (err) {

          console.log(err);
        });
    },

    translateFile(url) {
      console.log(url,"===");
      
      axios
        .post('http://localhost:3000/google-upload/translate', { url
        })
        .then(({ data }) => {
          console.log(data);
          this.translated = data.data
        })
        .catch(function (err) {
          swal('we are so sorry our server is busy')
          console.log(err);
        });
    }
  }
});