<template>
    <div class="col-md-12">
        <div class="">
            <div class="row column-row">
                <div class="mt-4 ml-auto" style="padding-right:40px">
                    
                    <img  src="/assets/img/preview.png"  width="auto" height="20px">&nbsp;&nbsp;
                    <span class=" float-right font-weight-bold" id="d1" style="font-size:17px">Preview Details</span>
                </div> 
            </div>
            <div class="">
                <div class="d-flex align-items-center">
                    <div>
                        <span id="d1" style="font-size:10px">Stockist Name</span>
                        <h6 class="font-weight-bold " id="d1">{{ stockist.store_name }}</h6>
                        <span  id="d1" style="font-size:10px">Stockist Address <Area></Area></span>
                        <h6 class="font-weight-bold " id="d1">{{ stockist.store_address }}</h6>
                        <span  id="d1" style="font-size:10px">State</span>
                        <h6 class="font-weight-bold " id="d1">{{ stockist.store_state }}</h6>
                        <span  id="d1" style="font-size:10px">Stockist Package</span>
                        <h6 class="font-weight-bold " id="d1">{{stockist.name}}</h6>
                        <span  id="d1" style="font-size:10px">Contact</span>
                        <h6 class="font-weight-bold " id="d1">{{ stockist.store_phone }}</h6>
                        <span  id="d1" style="font-size:10px">Signee</span>
                        <h6 class="font-weight-bold" id="d1">{{ stockist.referrer }}</h6>
                    </div>
                    <div class="mr-4 ml-auto">
                        <img  src="/assets/img/shop-local.png"  width="auto" height="100px">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {  mapActions, mapGetters} from 'vuex';
    export default{
        name:"admin-stockist-profile",

        props:{
            user:{
                type:Object,
                required:true
            }
        },

        data(){
            return {
                stockistLoading:false
            }
        },

        computed:{
            ...mapGetters("stockistStore",["stockist"])
        },


        created(){
            this.stockistLoading = true
            this.fetchStockistByUuid(this.user.uuid).then(()=>{
                this.stockistLoading=false
            })
        },

        methods:{
            ...mapActions("stockistStore",["fetchStockistByUuid"])
        }
    }
</script>