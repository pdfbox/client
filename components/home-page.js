Vue.component('home-page', {
  template: `
<div class="container">
   <div v-if="$parent.listdata && $parent.listdata.length">
      <div class="row mt-3" v-for="item in $parent.listdata">
        <div class="col-12 px-3 py-1 border" style="color: #000;">
          <a :href="item.url" target="_blank"><div class="py-3" style="color: #000;">{{getFilename(item.url}}</div></a>     
          <div class="mb-3">
          <small class="text-muted">share :</small>

          <div class="float-right">
          <a class="btn btn-small" style="background-color:#1a73e8;color: white;padding-top:1px;padding-bottom: 1px;" @click.prevent="deletePost">Delete</a>
            <a class="btn btn-small" style="background-color:#1a73e8;color: white;padding-top:1px;padding-bottom: 1px;">Translate</a>
          </div>
          <a :href="shareFacebookUrl(item)" class="btn btn-small" target="_blank" style="background-color:#2274b9;color: white;padding-top:1px;padding-bottom: 1px;">Facebook</a>
          <a :href="shareTwitterUrl(item)" class="btn btn-small" target="_blank" style="background-color:#4AB3F4;color: white;padding-top:1px;padding-bottom: 1px;">Twitter</a>
          <a :href="shareLinkedInUrl(item)" class="btn btn-small" target="_blank" style="background-color:#2274b9;color: white;padding-top:1px;padding-bottom: 1px;">LinkedIn</a>
          <a :href="shareGoogleUrl(item)" class="btn btn-small" target="_blank" style="background-color:red;color: white;padding-top:1px;padding-bottom: 1px;">Google+</a>
          </div>    
        </div>
      </div>
   </div>
</div>
</div>
  `,
  methods: {
    shareFacebookUrl(item) {
      return `https://www.facebook.com/sharer/sharer.php?u=${item.url}`
    },
    shareTwitterUrl(item) {
      return `https://twitter.com/home?status=${item.url}`
    },
    shareLinkedInUrl(item) {
      return `https://www.linkedin.com/shareArticle?mini=true&url=${item.url}&title=Title&summary=Summary&source=Sorce`
    },
    shareGoogleUrl(item){
      return `https://plus.google.com/share?url=${item.url}`
    },
    getFilename(url) {
      url = url.split('/');
      return url[url.length - 1]
    },

  }
});