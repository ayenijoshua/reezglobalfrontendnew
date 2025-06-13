<template>
    <div class="card border-0 justify-content-center" style="background-color: #ded8c7">
        <div class="card-body rounded" style="background-color: #ded8c7"> 
            <div class="text-center"><img  src="/assets/img/wallet1.png" width="80px"  height="80px" style=" opacity: 0.5;">
            <h6 class="mt-1 s-8 font-weight-bold text-green">PRODUCT<br><small> Edit product</small></h6></div>
            <form @submit.prevent="update()" id="update-product-form">
                <div class="card no-b  no-r">
                    <div class="card-body no-gutters" style="background-color: #ded8c7">
                        <div class="form-row mb-3">
                            <div class="col-md-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-card_membership float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input name="name" :value="form.name" type="text" class="form-control r-0 light s-12"  placeholder="Product name" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                                <div class="input-group mr-sm-2 mt-3 mb-3">
                                    <!-- <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white" ></i></div>
                                    </div> -->
                                    <input name="points" type="hidden" class="form-control r-0 light s-12"
                                            value="5" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-credit-card float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input name="worth" :value="form.worth" type="text" class="form-control r-0 light s-12"
                                            placeholder="Product worth" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>


                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-file float-left s-20 text-white"></i></div>
                                    </div>
                                         <input type="file" id="image"  style="border: 1px solid #2E671A; background-color: #ded8c7;" name="image"/>
                                </div>
                             
                            </div>
                        </div>
                        <span class="btn btn-sm btn-success btn-lg" v-if="submitting">...</span>
                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                    </div>	
                </div>
            </form>
        </div>
    </div> 
</template>

<style>


.input-group-prepend .input-group-text {
    background-color: #2E671A;
    color: #fff;
    border: 2px solid #2E671A;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.input-group-prepend .input-group-text:hover {
    background-color: #238012;
    border-color: #238012;
}

.file-input {
    display: none; /* Hide the default file input */
}

.input-group-prepend label {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 5px;
}

.file-input + .input-group-prepend label:hover {
    background-color: #238012;
}

/* Optional: Add focus styling when the input is focused or clicked */
.file-input:focus + .input-group-prepend label {
    box-shadow: 0 0 5px rgba(46, 103, 26, 0.5);
    border-color: #238012;
}

</style>

<script>
import { mapActions, mapState } from 'vuex'
import { notification } from '@/util/notification';
 export default{
    name:"edit-product",

    props:{
        product:{
            type:Object,
            required:true
        }
    },

    data(){
        return{
            form:{
                points:null,
                worth:null,
                name:null,
            },
            hasFile:false
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },

    created(){
        this.form.worth = this.product.worth
        this.form.points = this.product.points
        this.form.name = this.product.name
    },

    methods:{
        ...mapActions('productStore',['updateProduct']),

        update(){
            if(!this.checkFileZize()){
                notification.warning('Image size should not exceed 500kB')
                return
            }
            let ele = document.getElementById("update-product-form")
            let form = new FormData(ele)
            if(this.hasFile==false){
                form.delete("image")
            }
            this.updateProduct({id:this.product.id,data:form}).then(res=>{
                if(res.status == 200){
                    this.$emit('updated')
                }
            })
        },

        checkFileZize(){
            let ele = document.getElementById('image');
            if(ele.files[0] !== undefined){
                let fileSize = ele.files[0].size/1000
                this.hasFile = true;
                return fileSize > 500 ? false : true
            }
            return true
        },
    }
 }
</script>