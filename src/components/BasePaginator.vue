<template>

    <div class="flex justify-center">
      <ul class="pagination">
          <!-- <li v-if="(current_page-1 > 0)" class="page-item">
              <a class="page-link" rel="first" @click="firstPage">first</a>
          </li> -->
          <li v-if="(current_page-1 > 0)" class="page-item ">
              <a @click="prevPage" class="page-link">« previous</a>
          </li>

          <template v-if="total_pages > per_page">
            <li v-for="i of totalList" :key="i" :class="[i == current_page?'active':'','page-item']">
              <a @click="nextPage(i)" class="page-link" >{{i}}</a>
            </li>
          </template>

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
      },
      type:{
        type:String,
        defafult:'all',
      }
    },

    computed:{
      totalList(){
        let div = this.total_pages/this.per_page
        let rem = this.total_pages % this.per_page
        let list = rem == 0 ? div : div + 1
        return Math.floor(list) //Math.floor((this.total_pages*this.per_page)/this.per_page) 
      }
    },

    created(){
      //console.log('curr-page',this.current_page)
      //console.log('')
    },

    methods: {
      firstPage() {
        this.$store.dispatch(this.action, {page:this.setParameter(1),type:this.type}).then(() => {
          // this.$router.push({
          //   path: this.path,
          //   query: { page: 1 },
          // });
        });
      },
      prevPage() {
        this.$store.dispatch(this.action, {page:this.setParameter(this.current_page - 1),type:this.type}).then(() => {
          // this.$router.push({
          //   path: this.path,
          //   query: { page: this.current_page - 1 },
          // });
        });
      },
      nextPage(pageNum=null) {
        //if(pageNum==this.current_page){return}
        this.$store.dispatch(this.action, {page:this.setParameter(pageNum !== null ? pageNum : (this.current_page + 1)),type:this.type} ).then(() => {
          // this.$router.push({
          //   path: this.path,
          //   query: { page: this.current_page + 1 },
          // });
        });
      },
      lastPage() {
        this.$store.dispatch(this.action, {page:this.setParameter(this.last_page),type:this.type}).then(() => {
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