<template>
    <div class="card border-0 justify-content-center" style="background-color: #ecf0f1">
        <div class="card-body rounded" style="background-color: #ecf0f1"> 
            <div class="text-center"><img  src="/assets/img/shop1.png" width="80px"  height="80px" style=" opacity: 0.5;">
            <h6 class="mt-1 s-8 font-weight-bold text-green">PRODUCT<br><small> Edit product</small></h6></div>
            <form @submit.prevent="update()">
                <div class="card no-b  no-r">
                    <div class="card-body no-gutters" style="background-color: #ecf0f1">
                        <div class="form-row mb-3">
                            <div class="col-md-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-card_membership float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.name" type="text" class="form-control r-0 light s-12"  placeholder="Product name" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                                <div class="input-group mr-sm-2 mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white" ></i></div>
                                    </div>
                                    <input v-model="form.points" type="text" class="form-control r-0 light s-12"
                                            placeholder="Point Value" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-credit-card float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.worth" type="text" class="form-control r-0 light s-12"
                                            placeholder="Product worth" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>


                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-file float-left s-20 text-white " ></i></div>
                                    </div>
                                         <input type="file" id="file"  style="border: 1px solid #2E671A; background-color: #ded8c7;" name="file_path"/>
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
            }
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
            this.updateProduct({id:this.product.id,data:this.form}).then(res=>{
                if(res.status == 200){
                    this.$emit('updated')
                }
            })
        }
    }
 }
</script>