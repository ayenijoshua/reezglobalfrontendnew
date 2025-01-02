<template>
    <div>
        <header class="blue accent-3 relative">
            <div class="container-fluid text-blue">
                <div class="row justify-content-between">
                    <ul class="nav nav-material nav-material-white responsive-tab" id="v-pills-tab" role="tablist">
                        <li>
                            <a class="nav-link active text-green font-weight-bold" id="v-pills-Wallet-Detailed-Calculation-tab" data-toggle="pill" href="#v-pills-Wallet-Detailed-Calculation" role="tab" aria-controls="v-pills-Wallet-Detailed-Calculation" aria-selected="false"><i class="icon  icon-key6 "></i>Enable/Disable 2FA</a>
                        </li>
                        <li>
                            <a class="nav-link text-green font-weight-bold" id="v-pills-Withdrawal-History-tab" data-toggle="pill" href="#v-pills-Withdrawal-History" role="tab" aria-controls="v-pills-Withdrawal-History" aria-selected="false"><i class="icon icon-lock3 "></i>Change Password</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <div class="animated">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-Wallet-Detailed-Calculation" role="tabpanel" aria-labelledby="v-pills-Wallet-Detailed-Calculation-tab">
                    <div class="row my-3 d-flex justify-content-center">
                        <div class="col-md-8">
                            <div class="card shadow1">
                                <div class="card border justify-content-center">
                                    <div class="card-body center-align-container"> 
                                        <div class="text-center mt-2 mb-4"><img  src="/assets/img/security1.png" width="auto" height="200px" alt=""></div>
                                        <div class="text-center mb-4">
                                            <h6 class="font-weight-bold text-green"><i class="icon-lock mr-2"></i>Login 2Factor Authentication</h6>
                                            <small>Disable or Enable Login 2FA Authentication</small>
                                            <div class="form-row mt-2">
                                                <div class="center-content">
                                                    <h6 class="mt-2 mb-1 text-green">  
                                                            <span v-if="authUser.enable_2fa"><b>Enabled</b></span><span v-else><b>Disabled</b></span> &nbsp;
                                                            <input class="custom-checkbox" type="checkbox" title="Toggle 2FA" v-b-popover.hover.top="'Click to enable/disable 2FA'" @click="toggle2fa()"  data-toggle="switchbutton"  :checked="authUser.enable_2fa" data-width="100"  data-onstyle="success" :style="{'accent-color': '#2E671A'}" />
                                                            Check to Enable | Uncheck to disable
                                                    </h6>
                                                </div>    
                                            </div>
                                        </div>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div class="tab-pane fade" id="v-pills-Withdrawal-History" role="tabpanel" aria-labelledby="v-pills-Withdrawal-History-tab">
                    <div class="row my-3">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center align-items-center" > <!-- Added styling and classes -->
                                        <img  src="/assets/img/security1.png" width="auto" height="150px"><br>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center mb-3" > <!-- Added styling and classes -->
                                        <small class="font-weight-bold green-text">Send Confirmation code</small>
                                    </div>
                                    <form @submit.prevent="sendCode()">
                                        <div class="form-row mb-3 d-flex justify-content-center">
                                            <div class="col-md-8">
                                                <div class="input-group mb-2" >
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text" ><i class="icon icon-email float-left s-20 text-white " ></i></div>
                                                    </div>
                                                    <input type="email" required v-model="form.email" readonly class="form-control r-1 light s-12" placeholder="Email" style="background-color:transparent; border: 2px solid #2E671A;"> 
                                                </div>
                                                <div class="input-group mb-2" >
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-lock3 float-left s-20 text-white "  ></i></div>
                                                    </div>
                                                    <input type="password" required v-model="form.old_password" class="form-control r-1 light s-12" placeholder="Old Password" style="background-color:transparent !important; border: 2px solid #2E671A"> 
                                                </div>
                                            
                                                <span class="btn btn-success btn-sm" v-if="submitting && codeSubmitting">...</span>
                                                <button v-else type="submit" class="btn btn-success btn-sm btn-block">
                                                    <i class="icon-check-square-o mr-2"></i>Send Confirmation code
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center align-items-center" > <!-- Added styling and classes -->
                                        <img  src="/assets/img/security2.png" width="auto" height="150px"><br>
                                    </div>
                                    <div class="text-center mb-2">
                                        <small class="mt-2 font-weight-bold green-text">Enter confirmation code sent to your email.</small>
                                    </div>
                                    
                                    <form @submit.prevent="change()">
                                        <div class="form-row mb-3 d-flex justify-content-center">
                                            <div class="col-md-8">
                                                <div class="input-group mb-2" >
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-lock3 float-left s-20 text-white" ></i></div>
                                                    </div>
                                                    <input type="password" required v-model="changeForm.code" class="form-control r-1 light s-12" placeholder="Confirmation code" style="background-color:transparent; border: 2px solid #2E671A;"> 
                                                </div>

                                                <div class="text-center mt-4 ">
                                                    <small class="mt-2 font-weight-bold green-text">Create new password</small>
                                                </div>                                               
                                                <div class="input-group mb-2" >
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-lock3 float-left s-20 text-white" ></i></div>
                                                    </div>
                                                    <input type="password" required v-model="changeForm.password" class="form-control r-1 light s-12" placeholder="New Password" style="background-color:transparent; border: 2px solid #2E671A;"> 
                                                </div>

                                                <span class="btn btn-success btn-sm" v-if="submitting && changePassSumitting">...</span>
                                                <button v-else type="submit" class="btn btn-success btn-sm btn-block" value="Change">
                                                    <i class="icon-check-square-o mr-2"></i>Change Password
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
/* Center alignment for the content container */
/* Force full centering for the main card body */
.center-align-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%; /* Ensures it fills the height of the card */
    text-align: center;
}

/* Ensure the checkbox and labels align horizontally centered */
.center-align-container .center-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* Adjusts spacing between label and checkbox */
    width: 100%;
}

/* Makes the checkbox more visible and centered */
.center-align-container input[type="checkbox"] {
    transform: scale(1.2); /* Slightly increases the checkbox size */
    accent-color: #2E671A; /* Sets the checkbox color */
}


/* Hide default checkbox */
.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #2E671A;
  border-radius: 4px;
  background-color: #ecf0f1;
  cursor: pointer;
}

/* Checkbox checked state */
.custom-checkbox:checked {
  background-color: #ecf0f1;
  border-color: #2E671A;
}

/* Inner tick mark for checked checkbox */
.custom-checkbox:checked::after {
  content: "✔";
  display: block;
  color: #2E671A;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
}
</style>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:"admin-security",

        data(){
            return{
                form2Fa:{
                    enable_2fa:null
                },
                form:{
                    code:null,
                    email: null,
                    old_password:null,
                    user_type:'admin'
                },
                changeForm:{
                    code:null,
                    password:null,
                    email: null,
                    user_type:'admin'
                },

                codeSubmitting:false,
                changePassSumitting:false
            }
        },

        computed:{
            ...mapState({
                submitting:state=>state.submitting,
                loading:state=>state.loading
            }),

            ...mapGetters('authStore',['authUser'])
        },

        created(){
            if(this.authUser.id == undefined){
                this.getAdmin().then(res=>{
                    if(res.status == 200){
                        this.form.email = res.data.email
                        this.changeForm.email = res.data.email
                    }
                })
            }else{
                this.form.email = this.authUser.email
                this.changeForm.email = this.authUser.email
            }
            
        },

        methods:{
            ...mapActions('authStore',['getAdmin','toggleAdmin2fa','changePasswordLink','changePassword']),

            toggle2fa(){
                this.form2Fa.enable_2fa = ! this.authUser.enable_2fa
                this.toggleAdmin2fa(this.form2Fa).then(()=>this.getAdmin())
            },
            sendCode(){
                this.codeSubmitting = true
                this.changePasswordLink(this.form).then(()=>this.codeSubmitting = false)
            },

            change(){
                this.changePassSumitting = true
                this.changePassword(this.changeForm).then(()=>this.changePassSumitting=false)
            }
        }
    }
</script>