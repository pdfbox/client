Vue.component('file-upload-google-page', {
  template: `
<div class="container">
  <div class="row justify-content-center">
    <form id="uploadForm" enctype="multipart/form-data" @submit.prevent="submitFile">
        <input type="file" id="file" name="file">
        <button type="submit">Simpan</button>
    </form>
   </div> 
</div>
  `,
  data: function () {
    return {
      listdata: []
    }
  },
  methods: {
    submitFile() {
      var formData = new FormData();
      var dataFile = document.querySelector('#file');
      formData.append("file", dataFile.files[0]);
      axios
        .post('http://localhost:3000/google-upload/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(function ({data}) {
          this.listdata.push(data)
        })
        .catch(function (err) {
          console.log(err.response.data.message);
        });
    },
  }
});