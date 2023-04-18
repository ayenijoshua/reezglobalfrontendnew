<template>
    <div class="card border-0 justify-content-center">
        <div class="card-body rounded"> 
            <div class="text-center"><img  src="/assets/img/pv1.png" width="80px"  height="80px" style=" opacity: 0.5;">
                <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL RANKS AND INCENTIVES<br><small> Edit preferred Ranks and incentives packages</small></h6>
            </div>
            <form id="incentive-form" @submit.prevent="updateIncentive()">
                <div class="card no-b no-r">
                    <div class="card-body no-gutters">
                        <div class="form-row">
                            <div class="col-md-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-medal4 float-left s-20 green-text " ></i></div>
                                    </div>
                                    <select name="rank_id" class="form-control r-0 light s-12">
                                        <option v-if="incentive.rank_id == undefined">Select rank</option>
                                        <option v-for="rank,i in ranks" :selected="rank.id==incentive.rank_id" :value="rank.id" :key="i">{{ rank.name }}</option>
                                    </select>
                                </div>
                                <!-- <div class="input-group mr-sm-2 mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 green-text" ></i></div>
                                    </div>
                                    <input name="" type="text" class="form-control r-0 light s-12"
                                            placeholder="Cumulative Point Value">
                                </div> -->
                                <!-- <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-calculator float-left s-20 green-text " ></i></div>
                                    </div>
                                    <input type="text" class="form-control r-0 light s-12"
                                            placeholder="Bonus">
                                </div> -->
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-gift float-left s-20 green-text " ></i></div>
                                    </div>
                                    <input name="incentive" :value="incentive.incentive" type="text" class="form-control r-0 light s-12"
                                            placeholder="Incentive">
                                </div>
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-money-bag float-left s-20 green-text " ></i></div>
                                    </div>
                                    <input name="worth" :value="incentive.worth" type="text" class="form-control r-0 light s-12"
                                            placeholder="Cash Equivalent">
                                </div>
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-file float-left s-20 green-text " ></i></div>
                                    </div>
                                        <input type="file" id="file" name="file_path"/>
                                </div>
                                <!-- <div class="dropzone dropzone-file-area p-3 m-3 bg-light" id="fileUpload">
                                    <div class="dz-default dz-message">
                                        <span>Drop or Click to add Attachments </span>
                                        <div>You can also click to open file browser</div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <span v-if="submitting" class="btn btn-sm btn-success btn-lg">...</span>
                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                    </div>	
                </div>
            </form>

        </div>
    </div>  
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default{
    name:'edit-incentive-details',
    props:{
        incentive:{
            type:Object,
            required:true
        },
    },

    data(){
        return{
        }
    },

    computed:{
        ...mapState({
            loading:state=>state.loading,
            submitting:state=>state.submitting
        }),
        ...mapGetters('rankStore',['ranks']),
    },

    created(){
        console.log('inc',this.incentive)
        this.allRanks()
    },

    methods:{
        ...mapActions('rankStore',['allRanks']),
        ...mapActions('incentiveStore',['update']),

        updateIncentive(){
            let ele = document.getElementById('incentive-form')
            let form = new FormData(ele)
            this.update({id:this.incentive.id,data:form}).then(res=>{
                if(res.status==200){
                    this.$emit('updated')
                }
            })
        }
    }
    
}
</script>