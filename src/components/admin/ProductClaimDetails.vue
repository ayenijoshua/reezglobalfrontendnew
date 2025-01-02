<template>
    <div class="card border-0 justify-content-center" style="background-color: #ecf0f1">
        <div class="card-body rounded" style="background-color: #ecf0f1"> 
            <div class="float-center">
                <div v-for="userClaim,i in userProductClaims" :key="i" class="row column-row border-bottom">
                    <div class="mt-2 ml-3" style="padding-right:15px">
                        <img src="/assets/img/shop1.png" width="30px" height="30px">
                    </div>  
                    <div class="mb-2 mt-2">
                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ userClaim.name }} <br><small class="font-weight-bold"> ₦{{ userClaim.worth?.toLocaleString('en-US') }} | {{userClaim.points?.toFixed(2)}}PV | Qty:{{userClaim.product_qty}}</small></h6>	
                    </div>	
                </div>

                <div class="row column-row border-bottom">
                    <div class="mb-2 mt-2 ml-3">
                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Point Value </h6>											
                    </div>	
                    <div class="mb-2 mt-2 ml-auto mr-3">
                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ totalPv?.toFixed(2)}} PV</h6>											
                    </div>
                </div> 	
                <div class="row column-row border-bottom">
                    <div class="mb-2 mt-5 ml-3">
                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Product Cost </h6>											
                    </div>	
                    <div class="mb-2 mt-5 ml-auto mr-3">
                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">₦{{ totalWorth?.toLocaleString('en-US') }} </h6>											
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<style scoped>
.border-bottom {
    border-bottom: 1px solid #2E671A !important;
}
</style>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:'product-claim-details',
        props:{
            uuid:{
                type:String,
                required:true
            },

        },
        data(){
            return {
                totalPv:null,
                totalWorth:null,
                status:null
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading
            }),

            ...mapGetters('productClaimStore',['userProductClaims'])
        },

        created(){
            this.getProductClaims({uuid:this.uuid,processing:true}).then(res=>{
                if( res.status == 200){
                    this.userProductClaims.forEach(ele=>{
                        //console.log(ele.worth)
                        this.totalWorth = this.totalWorth + (ele.worth * ele.product_qty)
                        this.totalPv = this.totalPv + (ele.points * ele.product_qty)
                        this.status = ele.status
                    })
                }
            })
        },

        methods:{
            ...mapActions('productClaimStore',['getProductClaims'])
        }
    }
</script>