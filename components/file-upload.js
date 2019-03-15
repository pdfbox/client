Vue.component('file-upload', {
    template: `
  <div class="container">
    <div class="row justify-content-center">
      <form id="uploadForm" enctype="multipart/form-data" @submit.prevent="submitFile">
          <input type="file" accept="application/pdf" id="file" name="file" @change="previewImage"><button type="submit">Simpan</button><br>
          Preview:
          
          <div style="clear:both">
          <iframe id="viewer" frameborder="0" scrolling="no" width="400" height="600"></iframe>
          </div>
          
      </form>
     </div> 
  </div>     
    `,
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
          .then(({data})=> {
            swal('upload success');
            $('#viewer').attr('src',"");
            document.getElementById("file").value = null;
            this.$parent.listdata.push(data)
          })
          .catch(function (err) {
            console.log(err);
          });
      },
      previewImage() {
        pdffile=document.getElementById("file").files[0];
        pdffile_url=URL.createObjectURL(pdffile);
        $('#viewer').attr('src',pdffile_url);
      }
    }
  });