Vue.component('file-upload', {
    template: `
  <div class="container">
    <div class="row justify-content-center">
      <form id="uploadForm" enctype="multipart/form-data" @submit.prevent="submitFile">
          <input type="file" accept="application/pdf" id="file" name="file" @change="previewImage">
          <div class="loader" v-if="isUploading"></div>
          <button v-else type="submit">Simpan</button><br>
          Preview:
          
          <div style="clear:both">
          <iframe id="viewer" frameborder="0" scrolling="no" width="400" height="600" class="mt-3"></iframe>
          </div>
          
      </form>
     </div> 
  </div>     
    `,
  data(){
    return{
      isUploading: false
    }
  },
    methods: {
      submitFile() {
        this.isUploading=true;
        var formData = new FormData();
        var dataFile = document.querySelector('#file');
        formData.append("file", dataFile.files[0]);
        axios
          .post(`${baseURL}/google-upload/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              access_token : localStorage.access_token
            }
          })
          .then(({data})=> {
            swal('upload success');
            // this.$parent.showHomepage = true;
            // this.$parent.showUploadpage = false;
            $('#viewer').attr('src',"");
            document.getElementById("file").value = null;
            this.$parent.listdata.unshift(data)
            this.$parent.userPdf.unshift(data)
          })
          .catch(function (err) {
            console.log(err);
          })
          .finally(()=>{
            this.isUploading=false;
          })

      },
      previewImage() {
        $('#viewer').attr('src',"");
        pdffile=document.getElementById("file").files[0];
        pdffile_url=URL.createObjectURL(pdffile);
        $('#viewer').attr('src',pdffile_url);
      }
    }
  });