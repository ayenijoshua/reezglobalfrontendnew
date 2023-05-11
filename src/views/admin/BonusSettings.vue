<template>
    <div>
        <div class="animated">				
            <div class="row my-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateEquilibrumBonus()">
                            <input type="hidden" name="_token" value="6BwLvKulnhkAcUn3BgPaQHev2ZNKme6XDhncAZzL">									
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/equil.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">₦ {{ settings.equillibrum_bonus?.toLocaleString('en-US') }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL EQUILIBRIUM BONUS<br><small> Edit preferred equilibrium bonus</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input v-model="equilibrumBonus.equillibrum_bonus" type="number" min="1" class="form-control r-0 light s-12" required placeholder="Equilibrium Bonus">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="submitting && equilibrumBonusSubmitting" class="btn btn-sm btn-success btn-lg">...</span>
                                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                    </div>
                                </div>	
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateLoyaltyBonus()">
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/bonus.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">{{ settings.loyalty_bonus_percentage }}%</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL LOYALTY BONUS<br><small> Edit preferred loyalty bonus</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input v-model="loyaltyBonus.loyalty_bonus_percentage" required type="" class="form-control r-0 light s-12" placeholder="Loyalty Bonus">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="submitting && loyaltyBonusSubmitting" class="btn btn-sm btn-success btn-lg">...</span>
                                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                    </div>
                                </div>	
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateWelcomeBonus()">									
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/hand-shake.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">{{ settings.welcome_bonus_percentage }}%</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL WELCOME BONUS PERCENTAGE<br><small> Edit preferred welcome bonus percentage</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-handshake-o float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input v-model="welcomeBonus.welcome_bonus_percentage" required type="" class="form-control r-0 light s-12" placeholder="Welcome Bonus Percentage">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="submitting && welcomeBonusSubmitting" class="btn btn-sm btn-success btn-lg">...</span>
                                        <button  v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                    </div>
                                </div>	
                            </div>
                        </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updatePlacementBonus()">
                            <input type="hidden" name="_token" value="6BwLvKulnhkAcUn3BgPaQHev2ZNKme6XDhncAZzL">									
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/referral.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">{{ settings.placement_bonus_percentage }} %</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL PLACEMENT BONUS PERCENTAGE<br><small> Edit preferred placement bonus percentage</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-handshake-o float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input v-model="placementBonus.placement_bonus_percentage" required  type="" class="form-control r-0 light s-12" placeholder="Placement Bonus Percentage">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="submitting && placementBonusSubmitting" class="btn btn-sm btn-success btn-lg">...</span>
                                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                    </div>
                                </div>	
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
    </div>
</template>

<script>
import { notification } from '@/util/notification';
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:"bonus-settings",

        data(){
            return{
                equilibrumBonus:{
                    equillibrum_bonus:null,
                },
                loyaltyBonus:{
                    loyalty_bonus_percentage:null,
                },
                welcomeBonus:{
                    welcome_bonus_percentage:null,
                },
                placementBonus:{
                    placement_bonus_percentage:null
                },

                welcomeBonusSubmitting:false,
                loyaltyBonusSubmitting:false,
                equilibrumBonusSubmitting:false,
                placementBonusSubmitting:false
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading,
                submitting:state=>state.submitting
            }),

            ...mapGetters('settingStore',['settings'])
        },

        created(){
            if(this.settings.id == undefined){
                this.all().then(res=>{
                    if(res.status == 200){
                        this.equilibrumBonus.equillibrum_bonus = this.settings.equillibrum_bonus
                        this.welcomeBonus.welcome_bonus_percentage = this.settings.welcome_bonus_percentage
                        this.loyaltyBonus.loyalty_bonus_percentage = this.settings.loyalty_bonus_percentage
                        this.placementBonus.placement_bonus_percentage = this.settings.placement_bonus_percentage
                    }
                })
            }else{
                this.equilibrumBonus.equillibrum_bonus = this.settings.equillibrum_bonus
                this.welcomeBonus.welcome_bonus_percentage = this.settings.welcome_bonus_percentage
                this.loyaltyBonus.loyalty_bonus_percentage = this.settings.loyalty_bonus_percentage
                this.placementBonus.placement_bonus_percentage = this.settings.placement_bonus_percentage
            }
        },

        methods:{
            ...mapActions('settingStore',['all','update']),

            updateWelcomeBonus(){
                if(!this.isNumeric(this.welcomeBonus.welcome_bonus_percentage)){
                    notification.warning("please enter a valid number")
                    return
                }
                this.welcomeBonusSubmitting = true
                this.update(this.welcomeBonus).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.welcomeBonusSubmitting = false
                })
            },

            updateEquilibrumBonus(){
                this.equilibrumBonusSubmitting = true
                this.update(this.equilibrumBonus).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.equilibrumBonusSubmitting = false
                })
            },

            updateLoyaltyBonus(){
                if(!this.isNumeric(this.loyaltyBonus.loyalty_bonus_percentage)){
                    notification.warning("please enter a valid number")
                    return
                }
                this.loyaltyBonusSubmitting = true
                this.update(this.loyaltyBonus).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.loyaltyBonusSubmitting = false
                })
            },

            updatePlacementBonus(){
                if(!this.isNumeric(this.placementBonus.placement_bonus_percentage)){
                    notification.warning("please enter a valid number")
                    return
                }
                this.placementBonusSubmitting = true
                this.update(this.placementBonus).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.placementBonusSubmitting = false
                })
            },

            isNumeric(n){
                return !isNaN(parseFloat(n)) && isFinite(n)
            }
        }
    }
</script>