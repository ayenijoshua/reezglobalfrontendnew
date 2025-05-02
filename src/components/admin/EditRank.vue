<template>
    <div class="card border-0 justify-content-center" style="background-color: #ecf0f1">
        <div class="card-body rounded" style="background-color: #ecf0f1"> 
            <div class="text-center"><img  src="/assets/img/registration.png" width="80px"  height="80px" style=" opacity: 0.5;">
            <h6 class="mt-1 s-8 font-weight-bold text-green">OFFICIAL RANK<br><small> Edit Rank</small></h6></div>
            <form @submit.prevent="updateRank()">
                <div class="card no-b  no-r">
                    <div class="card-body no-gutters" style="background-color: #ecf0f1">
                        <div class="form-row mb-3">
                            <div class="col-md-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-card_membership float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.name" type="text" required class="form-control r-0 light s-12"
                                            placeholder="Rank name" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>
                                <div class="input-group mr-sm-2 mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white" ></i></div>
                                    </div>
                                    <input v-model="form.points" required type="text" class="form-control r-0 light s-12"
                                            placeholder="Rank points" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>

                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-credit-card float-left s-20 text-white " ></i></div>
                                    </div>
                                    <select required v-model="form.is_global_profit_eligible" class="form-control r-0 light s-12" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                        <option :value="1" :selected="rank.is_global_profit_eligible==1">True</option>
                                        <option :value="0" :selected="rank.is_global_profit_eligible==0">False</option>
                                    </select>
                                </div>

                                <div class="input-group mr-sm-2 mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 green-text" ></i></div>
                                    </div>
                                    <select required v-model="form.package_id" class="form-control r-0 light s-12" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                        <template v-if="form.package_id==undefined">
                                            <option :value="undefined" selected>Select Package</option>
                                        </template>
                                        <option v-for="pack,i in regPackages" :value="pack.id" :key="i">{{ pack.name }}</option>
                                    </select>
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

<script>
import { notification } from '@/util/notification'
import { mapActions, mapGetters, mapState } from 'vuex'

 export default{
    name:"edit-rank",

    props:{
        rank:{
            type:Object,
            required:true
        }
    },

    data(){
        return{
            form:{
                name:null,
                points:null,
                is_global_profit_eligible:0,
                description:null,
                package_id:null
            }
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        }),

        ...mapGetters("packageStore",["regPackages"])
    },

    created(){
        this.form.name = this.rank.name
        this.form.points = this.rank.points
        this.form.is_global_profit_eligible = this.rank.is_global_profit_eligible
        this.form.description = this.rank.description
        this.form.package_id = this.rank.package
        alert(this.form.package_id)

        this.all();
    },

    methods:{
        ...mapActions('rankStore',['update']),
        ...mapActions('packageStore',['all']),

        updateRank(){
            if(this.form.package_id == undefined){
                return notification.warning("Package required")
            }
            this.update({id:this.rank.id,data:this.form}).then(res=>{
                if(res.status == 200){
                    this.$emit('updated')
                }
            })
        },

    }
 }
</script>