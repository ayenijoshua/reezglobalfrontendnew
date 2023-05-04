<template>

    <div class="flex justify-center">
      <ul class="pagination">
          <!-- <li v-if="(current_page-1 > 0)" class="page-item">
              <a class="page-link" rel="first" @click="firstPage">first</a>
          </li> -->
          <li v-if="(current_page-1 > 0)" class="page-item ">
              <a @click="prevPage" class="page-link">« previous</a>
          </li>

          <li v-if="(last_page !== current_page)" class="page-item">
              <a @click="nextPage" class="page-link" >next »</a>
          </li>
          <!-- <li v-if="(last_page == current_page)" class="page-item">
              <a @click="lastPage" class="page-link" >last</a>
          </li> -->
        </ul>
    </div>
  </template>
  
  <script>
  export default {
    name:"base-paginator",
    props: {
      action: {
        type: String,
        required: true,
      },
      current_page:{
        type:Number,
        required:true
      },
      last_page:{
        type:Number,
        required:true
      },
      total_pages:{
        type:Number,
        required:true
      },
      per_page:{
        type:Number,
        required:true
      },
      query_data:{
        type:Object,
        required:false
      }
    },

    computed:{
      totalList(){
        return Math.floor((this.total_pages*this.per_page)/this.per_page) 
      }
    },

    methods: {
      firstPage() {
        this.$store.dispatch(this.action, this.setParameter(1)).then(() => {
          // this.$router.push({
          //   path: this.path,
          //   query: { page: 1 },
          // });
        });
      },
      prevPage() {
        this.$store.dispatch(this.action, this.setParameter(this.current_page - 1)).then(() => {
          // this.$router.push({
          //   path: this.path,
          //   query: { page: this.current_page - 1 },
          // });
        });
      },
      nextPage() {
        this.$store.dispatch(this.action, this.setParameter(this.current_page + 1) ).then(() => {
          // this.$router.push({
          //   path: this.path,
          //   query: { page: this.current_page + 1 },
          // });
        });
      },
      lastPage() {
        this.$store.dispatch(this.action, this.setParameter(this.last_page)).then(() => {
          // this.$router.push({
          //   path: this.path,
          //   query: { page: this.last_page },
          // });
        });
      },

      setParameter(param){
        if(this.query_data){
          return Object.assign(this.query_data,{page:param}) 
        }
       return param
      },

      

    },
  };
  </script>