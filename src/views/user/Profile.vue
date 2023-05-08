<template>
    <div>
        <div class="">
            <header class="blue accent-3 relative">
                <div class="container-fluid text-blue">
                    <div class="row justify-content-between">
                        <ul class="nav nav-material nav-material-white responsive-tab" id="v-pills-tab" role="tablist">
                            <li>
                                <a class="nav-link active border-right" id="v-pills-home-tab" data-toggle="pill"  href="#v-pills-home" role="tab" aria-controls="v-pills-home"><i class="icon icon-vcard" ></i>My Profile</a>
                            </li>
                            <li>
                                <a class="nav-link" id="v-pills-payments-tab" data-toggle="pill" href="#v-pills-payments" role="tab" aria-controls="v-pills-payments" aria-selected="false"><i class="icon icon-bank "></i>Bank Details</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="container-fluid animatedParent animateOnce my-3">
                <div class="animated">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class=" my-3" >
                                        <div class="card" >
                                            <div class="card-header bg-white">
                                                <h6 class="green-text"><strong class="font-weight-bold">Profile Details</strong></h6>
                                            </div>
                                            <div class="card-body text-center ">
                                                <template v-if="loading && profileLoading">
                                                    <b-card>
                                                        <b-skeleton width="85%"></b-skeleton>
                                                        <b-skeleton width="55%"></b-skeleton>
                                                        <b-skeleton width="70%"></b-skeleton>
                                                    </b-card>
                                                </template>
                                                <template v-else>
                                                    <div class="profile-pic-wrapper">
                                                        <div class="pic-holder">
                                                            <!-- uploaded pic shown here -->
                                                            <img id="profilePic" :style="{'width': '150px'}" class="pic user_avatar" :src="imageURL">

                                                            <!-- <Input class="uploadProfileInput" type="file" name="profile_pic" id="newProfilePhoto" accept="image/*" style="opacity: 0;" />
                                                            <label for="newProfilePhoto" class="upload-file-block">
                                                            <div class="text-center">
                                                                <div class="mb-2">
                                                                <i class="fa fa-camera fa-2x"></i>
                                                                </div>
                                                                <div class="text-uppercase">
                                                                Update <br /> Profile Photo
                                                                </div>
                                                            </div>
                                                            </label> -->
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item "><i class="icon icon-vcard float-left s-20 green-text border-right" ></i> <span class="float-right s-12 font-weight-medium green-text">{{ regPackage.name }}</span></li>
                                                            <li class="list-group-item "><i class="icon icon-person float-left s-20 green-text border-right" ></i> <span class="float-right s-12 font-weight-medium green-text">{{ authUser.first_name }} {{ authUser.last_name }}</span></li>
                                                            <li class="list-group-item"><i class="icon icon-phone2 float-left s-20 green-text border-right"></i> <span class="float-right s-12 font-weight-medium green-text">{{ authUser.phone }}</span></li>
                                                            <li class="list-group-item"><i class="icon icon-mail-envelope-closed4 float-left s-20 green-text border-right"></i> <span class="float-right s-12 font-weight-medium green-text">{{ authUser.email }}</span></li>
                                                            <li class="list-group-item"><i class="icon icon-account_box float-left s-20 green-text border-right"></i>  <span class="float-right s-12 font-weight-medium green-text">{{ authUser.username }}</span></li>
                                                            <li class="list-group-item"><i class="icon icon-home float-left s-20 green-text border-right"></i> <span class="float-right s-12 font-weight-medium green-text text-right" style="width:130px">{{ profile.address }}</span></li>
                                                        </ul>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>	
                                    </div>
                                    <br>

                                </div>
                                <div class="col-md-6">
                                    <div class="row my-3">
                                        <!-- bar charts group -->
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-header bg-white">
                                                    <h6 class="green-text"><strong class="font-weight-bold">Edit Profile</strong></h6>
                                                </div>
                                                <div class="card-body">
                                                    <template v-if="loading && profileLoading">
                                                        <b-card>
                                                            <b-skeleton width="85%"></b-skeleton>
                                                            <b-skeleton width="55%"></b-skeleton>
                                                            <b-skeleton width="70%"></b-skeleton>
                                                        </b-card>
                                                    </template>
                                                    <template v-else>
                                                        <form id="profile-form" @submit.prevent="profileUpdate()">
                                                            <div class="card no-b no-r">
                                                                <div class="card-body">
                                                                    <div class="form-row">
                                                                        <div class="col-md-12">
                                                                            <div class="form-row mb-2">
                                                                                <div class="form-group col-6 m-0">
                                                                                    <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                        <div class="input-group-prepend">
                                                                                            <div class="input-group-text"><i class="icon icon-person float-left s-20 green-text " ></i></div>
                                                                                        </div>
                                                                                        <input name="first_name" :value="form.first_name" type="text" class="form-control r-0 light s-12" placeholder="First Name">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group col-6 m-0">
                                                                                    <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                        <div class="input-group-prepend">
                                                                                            <div class="input-group-text"><i class="icon icon-person float-left s-20 green-text " ></i></div>
                                                                                        </div>
                                                                                        <input name="last_name" :value="form.last_name" type="text" class="form-control r-0 light s-12" placeholder="Last Name">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div class="form-row mb-2">
                                                                                <div class="form-group col-6 m-0">
                                                                                    <div class="input-group mb-2 mr-sm-2">
                                                                                        <div class="input-group-prepend">
                                                                                            <div class="input-group-text"><i class="icon icon-phone float-left s-20 green-text " ></i></div>
                                                                                        </div>
                                                                                        <input name="phone" :value="form.phone" type="text" class="form-control r-0 light s-12"
                                                                                            placeholder="Phone Number">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group col-6 m-0">
                                                                                    <div class="input-group mb-2 mr-sm-2">
                                                                                        <div class="input-group-prepend">
                                                                                            <div class="input-group-text"><i class="icon icon-mail-envelope-closed4 float-left s-20 green-text"></i></div>
                                                                                        </div>
                                                                                        <input type="text" name="email" readonly :value="form.email" class="form-control r-0 light s-12"
                                                                                            placeholder="Email Address">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div class="form-row mb-2">
                                                                                <div class="form-group col-12 m-0">
                                                                                    <div class="form-group m-0">
                                                                                        <div class="input-group  mr-sm-2 mb-3">
                                                                                            <div class="input-group-prepend">
                                                                                                <div class="input-group-text"><i class="icon icon-person float-left s-20 green-text " ></i></div>
                                                                                            </div>
                                                                                            <select name="gender" class="form-control r-0 light s-12">
                                                                                                <option value="" :selected="!profile.gender">Select gender</option>
                                                                                                <option value="male" :selected="profile.gender=='male'">Male</option>
                                                                                                <option value="female" :selected="profile.gender=='female'">Female</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group col-12 m-0">
                                                                                    <div class="form-group m-0">
                                                                                        <div class="dropbox">
                                                                                            <input v-b-popover.hover.top="'Drag your photo here or click to browse'" type="file" title="profile photo" name="image" @change="filesChange($event.target.files);" class="form-control form-control-line input-file">
                                                                                            <p id="img-preview" >
                                                                                                Drag your photo here<br> or click to browse<br>
                                                                                                <span style="font-size: 10px;">Image size should not exceed 500kB</span>
                                                                                            </p>
                                                                                            
                                                                                        </div>
                                                                                        
                                                                                        <!-- <input type="file" name="image" title="profile photo" class="form-control r-0 light s-12" placeholder="Profile photo"> -->
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group m-0">
                                                                                <textarea name="address" :value="profile.address" rows="5" type="text" class="form-control r-0 light s-12" id="address"
                                                                                placeholder="Residential Address"></textarea>
                                                                            </div>	
                                                                        </div>
                                                                    </div>
                                                                </div>	
                                                                <div class="card-body">
                                                                    <span class="btn btn-sm btn-success btn-lg" v-if="submitting">...</span>
                                                                    <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /bar charts group -->
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class=" my-3" >
                                        <div class="card" style="background-color:#2E671A;" >
                                            <div class="card-header">
                                                <h6 class="text-white"><strong class="font-weight-bold">Upline Details</strong></h6>
                                            </div>
                                            <div class="card-body text-center">
                                                <template v-if="loading && uplineLoading">
                                                    <b-card>
                                                        <b-skeleton width="85%"></b-skeleton>
                                                        <b-skeleton width="55%"></b-skeleton>
                                                        <b-skeleton width="70%"></b-skeleton>
                                                    </b-card>
                                                </template>
                                                <template v-else>
                                                    <div class="avatar avatar-xl mb-3">
                                                        <img class="user_avatar" :src="uplineImageURL" alt="User Image">
                                                    </div>
                                                    <div class="">
                                                        <ul class="list-group list-group-flush" >
                                                            <li class="list-group-item border-bottom"  style="background-color:#2E671A;"><i class="icon icon-vcard float-left s-20 text-white border-right" ></i> <span class="float-right s-12 font-weight-medium text-white">{{ uplineDetails.package }}</span></li>
                                                            <li class="list-group-item border-bottom"  style="background-color:#2E671A;"><i class="icon icon-person float-left s-20 text-white border-right" ></i> <span class="float-right s-22 font-weight-medium text-white ">{{ uplineDetails.first_name }} {{ uplineDetails.last_name }}</span></li>
                                                            <li class="list-group-item border-bottom"  style="background-color:#2E671A;"><i class="icon icon-mail-envelope-closed4 text-white float-left s-20  border-right"></i> <span class="float-right s-12 font-weight-medium text-white">{{ uplineDetails.email }}</span></li>
                                                            <li class="list-group-item"  style="background-color:#2E671A;"><i class="icon icon-account_box float-left s-20 text-white border-right"></i>  <span class="float-right s-12 font-weight-medium text-white">{{ uplineDetails.username }}</span></li>
                                                        </ul>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>	
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-payments" role="tabpanel" aria-labelledby="v-pills-payments-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card no-b">
                                        <div class="card-header bg-white text-green">
                                            <h4 class="card-title green-text"><strong class="font-weight-bold">Bank Account Details</strong></h4>
                                        </div>
                                        <div class="collapse show" id="invoiceCard">
                                            <div class="card-body p-0">
                                                <div class="card no-b  no-r">
                                                    <div class="card-body">
                                                        <div class="form-row">
                                                            <div class="col-md-4">
                                                                <div class="card mr-3 " style="background-color: #2E671A" >
                                                                    <div class="row column-row">
                                                                        <div class="mt-3 ml-5" >
                                                                            <img src="/assets/img/personal-banking.png" class="bg-transparent" style="max-width:80px;">	 
                                                                        </div>
                                                                        <div class="mt-4 ml-auto" style="padding-right:40px" >
                                                                            <span class="border-left mr-2"></span>
                                                                            <span class="text-white float-right" id="d1" style="font-size:10px" >Widthrawal Account Details</span>
                                                                        </div> 
                                                                    </div>
                                                                    <div class="card-body" >
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="avatar avatar-xl mr-4 ">
                                                                                <img class="user_avatar" :src="imageURL" alt="User Image">
                                                                            </div>
                                                                            <div>
                                                                                <span class="text-white" id="d1" style="font-size:10px" >Account Name</span>
                                                                                <h6 class="font-weight-bold text-white" id="d1">{{ bank.bank_account_name }}</h6>
                                                                                <span class="text-white" id="d1" style="font-size:10px" >Account Number</span>
                                                                                <h6 class="font-weight-bold text-white" id="d1">{{ bank.bank_account_number }}</h6>
                                                                                <span class="text-white" id="d1" style="font-size:10px" >Bank Name</span>
                                                                                <h6 class="font-weight-bold text-white" id="d1">{{ bank.bank_name }}</h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span class="border-right"></span>
                                                            <div class="col-md-4 mr-4 ml-4">
                                                                <div class="mt-4 ml-auto mb-3" style="padding-right:20px" >
                                                                    <span class="green-text float-right font-weight-bold" id="d1" style="font-size:12px">
                                                                        <i class="icon icon-edit"></i>&nbsp;&nbsp;Edit Account Details
                                                                    </span>
                                                                </div><br><br>
                                                                <form @submit.prevent="updateBank()"> 
                                                                    <div class="form-group m-0">
                                                                        <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                            <div class="input-group-prepend">
                                                                                <div class="input-group-text"><i class="icon icon-account_balance float-left s-20 green-text " ></i></div>
                                                                            </div>
                                                                            <input v-model="bank.bank_name" type="text" class="form-control r-0 light s-12"
                                                                                placeholder="Bank Name">
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-row">
                                                                        <div class="form-group col-6 m-0">
                                                                            <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                <div class="input-group-prepend">
                                                                                    <div class="input-group-text"><i class="icon icon-person float-left s-20 green-text " ></i></div>
                                                                                </div>
                                                                                <input v-model="bank.bank_account_name" type="text" class="form-control r-0 light s-12"
                                                                                    placeholder="Account Name">
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group col-6 m-0">
                                                                            <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                <div class="input-group-prepend">
                                                                                    <div class="input-group-text"><i class="icon icon-address-card-o float-left s-20 green-text " ></i></div>
                                                                                </div>
                                                                                <input v-model="bank.bank_account_number" type="text" class="form-control r-0 light s-12"
                                                                                    placeholder="Account Number">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="float-left mt-3">
                                                                        <span v-if="submitting" class="btn btn-sm btn-success">...</span>
                                                                        <button v-else type="submit" v-show="profile.bank_editable" class="btn btn-sm btn-success"><i class="icon-save mr-2"></i>Update Data</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <span class="border-right"></span>
                                                            <div class="col-md-3">
                                                                <div class="float-center">
                                                                    <img class="img-responsive" src="/assets/img/online-banking.png"> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <br>
                                                </div>        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
  .dropbox {
    outline: 2px dashed green; /* the dash box */
    background: white;
    color: dimgray;
    min-height: 100px !important; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 100px !important;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightgreen; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        name:"user-profile",

        data(){
            return {
                form:{
                    first_name:'',
                    last_name:'',
                    email:'',
                    phone:'',
                    address:'',
                    gender:''
                },
                bank:{
                    bank_account_name:'',
                    bank_account_number:'',
                    bank_name:''
                },

                profileLoading:false,
                uplineLoading:true
            }
        },

        computed:{
            ...mapState({
                submitting:state=>state.submitting,
                loading:state=>state.loading
            }),

            ...mapGetters('authStore',['authUser']),
            ...mapGetters('userStore',['profile','uplineDetails']),
            ...mapGetters('packageStore',['regPackage']),

            imageURL(){
                let img = this.profile?.photo_path
               return img ? process.env.VUE_APP_IMAGE_PATH+'/'+img : '/assets/img/mock-image.jpeg'
            },
            uplineImageURL(){
                let img = this.uplineDetails?.photo_path
               return img ? process.env.VUE_APP_IMAGE_PATH+'/'+img : '/assets/img/mock-image.jpeg'
            }
        },

        methods:{
            ...mapActions('userStore',['getProfileDetails','updateProfile','updateUser','getUplineDetails','updateBankDetails']),

            ...mapActions('authStore',['getUser']),
            ...mapActions('packageStore',['getPackage']),

            profileUpdate(){
                let ele = document.getElementById('profile-form')
                var form = new FormData(ele)
                let userData = {
                    first_name:form.get('first_name'),
                    last_name:form.get('last_name'),
                    phone:form.get('phone')
                }
                this.updateUser({uuid:this.authUser.uuid,data:userData})
                this.updateProfile({uuid:this.authUser.uuid,data:form}).then(res=>{
                    if(res.status == 200){
                        this.getProfileDetails(this.authUser.uuid)
                    }
                })
            },

            updateBank(){
                this.updateBankDetails({uuid:this.authUser.uuid, data:this.bank}).then(res=>{
                    if(res.status == 200){
                        this.getProfileDetails(this.authUser.uuid)
                    }
                })
            },

            profileData(res,reslt){
                this.form.first_name = res.data.first_name
                this.form.last_name = res.data.last_name
                this.form.phone = reslt.data.data.phone || res.data.phone
                this.form.email = res.data.email
                this.form.address = reslt.data.data.address
                this.bank.bank_account_name = reslt.data.data.bank_account_name
                this.bank.bank_account_number = reslt.data.data.bank_account_number
                this.bank.bank_name = reslt.data.data.bank_name
                this.form.gender = reslt.data.data.gender
            },

            filesChange(files){
                const file = files[0]
                const prev = document.getElementById('img-preview')
                if(file){
                    const fileReader = new FileReader()
                    fileReader.readAsDataURL(file)
                    fileReader.addEventListener("load",function(){
                        prev.innerHTML = '<img style="width: 100px !important; height:100px !important;" src="'+this.result+'"/>'
                    })
                }
            }
        },

       created(){
            //this.getUser()
            //return
            if(Object.entries(this.profile).length == 0 || this.authUser.uuid == undefined){
                //if(Object.entries(this.authUser).length == 0){
                this.getUser().then(res=>{
                    if(res.status == 200){
                        this.profileLoading = true
                        this.getProfileDetails(res.data.uuid).then(reslt=>{
                            this.profileData(res,reslt)
                            this.profileLoading = false
                        })
                        this.getPackage(res.data.package_id)
                        this.uplineLoading = true
                        this.getUplineDetails(res.data.uuid).then(()=>this.uplineLoading=false)
                    }
                })
                
            }else{
                this.form.first_name = this.authUser.first_name
                this.form.last_name = this.authUser.last_name
                this.form.phone = this.authUser.phone || this.profile.phone
                this.form.email = this.authUser.email 
                this.form.address = this.profile.address
                this.bank.bank_account_name = this.profile.bank_account_name
                this.bank.bank_account_number = this.profile.bank_account_number
                this.bank.bank_name = this.profile.bank_name
                this.form.gender = this.profile.gender
            }
            
        },

    }
</script>