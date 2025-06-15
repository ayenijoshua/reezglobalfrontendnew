<template>
    <div>
        <div class="">
            <header class="blue accent-3 relative">
                <div class="container-fluid text-green">
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
                    <div v-if="!userHasProfile" class="card-body" style="background-color:#ded8c7">
                        <div class="alert alert-info text-center">User has not submitted profile details</div>
                    </div>
                    <div v-else class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class=" my-3" >
                                        <div class="card shadow1" style="background-color:#ded8c7" >
                                            <div class="card-header" style="background-color:#ded8c7">
                                                <h6 class="green-text"><strong class="font-weight-bold">Profile Details</strong></h6>
                                            </div>
                                            <div class="card-body text-center ">
                                                <div class="profile-pic-wrapper">
                                                    <div class="pic-holder">
                                                        <!-- uploaded pic shown here -->
                                                        <img id="profilePic" class="pic user_avatar" :style="{'width': '150px'}" :src="imageURL">

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
                                                <div class="mt-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item "><i class="icon icon-vcard float-left s-20 green-text border-right" ></i> <span class="float-right s-12 font-weight-bold green-text"> {{ regPackage.name }}</span></li>
                                                        <li class="list-group-item "><i class="icon icon-person float-left s-20 green-text border-right" ></i> <span class="float-right s-12 font-weight-bold green-text">{{ form.first_name }} {{ form.last_name }}</span></li>
                                                        <li class="list-group-item"><i class="icon icon-phone2 float-left s-20 green-text border-right"></i> <span class="float-right s-12 font-weight-bold green-text">{{ form.phone }}</span></li>
                                                        <li class="list-group-item"><i class="icon icon-mail-envelope-closed4 float-left s-20 green-text border-right"></i> <span class="float-right s-12 font-weight-bold green-text">{{ form.email }}</span></li>
                                                        <li class="list-group-item"><i class="icon icon-account_box float-left s-20 green-text border-right"></i>  <span class="float-right s-12 font-weight-bold green-text">{{ user.username }}</span></li>
                                                        <li class="list-group-item"><i class="icon icon-home float-left s-20 green-text border-right"></i> <span class="float-right s-12 font-weight-bold green-text text-right" style="width:130px">{{ form.address }}</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>	
                                    </div>
                                    <br>
                                </div>
                                <div class="col-md-6">
                                    <div class="row my-3">
                                        <!-- bar charts group -->
                                        <div class="col-md-12">
                                            <div class="card shadow1" style="background-color:#ded8c7">
                                                <div class="card-header" style="background-color:#ded8c7">
                                                    <h6 class="green-text"><strong class="font-weight-bold">Edit Profile</strong></h6>
                                                </div>
                                                <div class="card-body">
                                                    <form id="profile-form">
                                                        <div class="card no-b no-r" style="background-color:#ded8c7">
                                                            <div class="card-body" style="background-color:#ded8c7">
                                                                <div class="form-row">
                                                                    <div class="col-md-12">
                                                                        <div class="form-row mb-2">
                                                                            <div class="form-group col-6 m-0">
                                                                                <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                    <div class="input-group-prepend">
                                                                                        <div class="input-group-text"><i class="icon icon-person float-left s-20 text-white " ></i></div>
                                                                                    </div>
                                                                                    <input name="first_name" :value="form.first_name" type="text" class="form-control r-0 light s-12 shadow 1 b-1"  placeholder="First Name" style="background-color:#ded8c7" >
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group col-6 m-0">
                                                                                <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                    <div class="input-group-prepend">
                                                                                        <div class="input-group-text"><i class="icon icon-person float-left s-20 text-white " ></i></div>
                                                                                    </div>
                                                                                    <input name="last_name" :value="form.last_name" type="text" class="form-control r-0 light s-12 shadow1 b-1" placeholder="Last Name" style="background-color:#ded8c7">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div class="form-row mb-2">
                                                                            <div class="form-group col-6 m-0">
                                                                                <div class="input-group mb-2 mr-sm-2">
                                                                                    <div class="input-group-prepend">
                                                                                        <div class="input-group-text"><i class="icon icon-phone float-left s-20 text-white " ></i></div>
                                                                                    </div>
                                                                                    <input name="phone" :value="form.phone" type="text" class="form-control r-0 light s-12 b-1 shadow1"
                                                                                        placeholder="Phone Number" style="background-color:#ded8c7">
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group col-6 m-0">
                                                                                <div class="input-group mb-2 mr-sm-2">
                                                                                    <div class="input-group-prepend">
                                                                                        <div class="input-group-text"><i class="icon icon-mail-envelope-closed4 float-left s-20 text-white"></i></div>
                                                                                    </div>
                                                                                    <input type="text" name="email" readonly :value="form.email" class="form-control r-0 light s-12 shadow1 b-1"
                                                                                        placeholder="Email Address" style="background-color:#ded8c7">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div class="form-row mb-2">
                                                                            <div class="form-group col-12 m-0">
                                                                                <div class="form-group m-0">
                                                                                    <div class="input-group  mr-sm-2 mb-3">
                                                                                        <div class="input-group-prepend">
                                                                                            <div class="input-group-text"><i class="icon icon-person float-left s-20 shadow1 text-white " ></i></div>
                                                                                        </div>
                                                                                        <select name="gender" class="form-control r-0 light s-12 shadow1 b-1" style="background-color:#ded8c7">
                                                                                            <option value="" :selected="!profile?.gender" style="background-color:#ded8c7">Select gender</option>
                                                                                            <option value="male" :selected="profile?.gender=='male'" style="background-color:#ded8c7">Male</option>
                                                                                            <option value="female" :selected="profile?.gender=='female'" style="background-color:#ded8c7">Female</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <!-- <div class="form-group col-6 m-0">
                                                                                <div class="form-group m-0">
                                                                                    <div class="input-group mr-sm-2 mb-3">
                                                                                    <div class="input-group-prepend">
                                                                                        <div class="input-group-text"><i class="icon icon-person float-left s-20 green-text " ></i></div>
                                                                                    </div>
                                                                                    <input type="file" name="image" title="profile photo" class="form-control r-0 light s-12"
                                                                                        placeholder="Profile photo">
                                                                                    </div>
                                                                                </div>
                                                                            </div> -->
                                                                        </div>
                                                                        <div class="form-group m-0">
                                                                            <textarea name="address" :value="profile?.address" rows="5" type="text" class="form-control r-0 light s-12 shadow1 b-1" id="address"
                                                                            placeholder="Residential Address" style="background-color:#ded8c7"></textarea>
                                                                        </div>	
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /bar charts group -->
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class=" my-3" >
                                        <div class="card shadow1" style="background-color:#ded8c7">
                                            <div class="card-header" style="background-color:#ded8c7">
                                                <h6 class="text-green"><strong class="font-weight-bold">Upline Details</strong></h6>
                                            </div>
                                            <div class="card-body text-center" style="background-color:#ded8c7">
                                                <div class="avatar avatar-xl mb-3 ">
                                                    <img class="user_avatar" :src="uplineImageURL" alt="User Image">
                                                </div>
                                                <div class="">
                                                    <ul class="list-group list-group-flush" >
                                                        <li class="list-group-item"  ><i class="icon icon-vcard float-left s-20 text-white border-right" ></i> <span class="float-right s-22 font-weight-bold text-green">{{ uplineDetails.package }}</span></li>
                                                        <li class="list-group-item "  ><i class="icon icon-person float-left s-20 text-white border-right" ></i> <span class="float-right s-22 font-weight-bold text-green ">{{ uplineDetails.first_name }} {{ uplineDetails.last_name }}</span></li>
                                                        <li class="list-group-item"  ><i class="icon icon-mail-envelope-closed4 text-white float-left s-20  border-right"></i> <span class="float-right s-12 font-weight-bold text-green">{{ uplineDetails.email }}</span></li>
                                                        <li class="list-group-item"  ><i class="icon icon-account_box float-left s-20 text-white border-right"></i>  <span class="float-right s-12 font-weight-bold text-green">{{ uplineDetails.username }}</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>	
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-payments" role="tabpanel" aria-labelledby="v-pills-payments-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card no-b shadow1" style="background-color:#ded8c7">
                                        <div class="card-header  text-green" style="background-color:#ded8c7">
                                            <h4 class="card-title green-text"><strong class="font-weight-bold">Bank Account Details</strong></h4>
                                        </div>
                                        <div class="collapse show" id="invoiceCard">
                                            <div class="card-body p-0" style="background-color:#ded8c7">
                                                <div class="card no-b  no-r" style="background-color:#ded8c7">
                                                    <div class="card-body" style="background-color:#ded8c7">
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
                                                                                <span class="text-white" id="d1" style="font-size:10px;" >Account Name</span>
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
                                                                        <i class="icon icon-edit"></i>&nbsp;&nbsp;Edith Account Details
                                                                    </span>
                                                                </div><br><br>
                                                                <form> 
                                                                    <div class="form-group m-0">
                                                                        <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                            <div class="input-group-prepend">
                                                                                <div class="input-group-text"><i class="icon icon-account_balance float-left s-20 text-white " ></i></div>
                                                                            </div>
                                                                            <input v-model="bank.bank_name" type="text" class="form-control r-0 light s-12 shadow1 b-1"
                                                                                placeholder="Bank Name" style="background-color:#ded8c7" >
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-row">
                                                                        <div class="form-group col-6 m-0">
                                                                            <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                <div class="input-group-prepend">
                                                                                    <div class="input-group-text"><i class="icon icon-person float-left s-20 text-white " ></i></div>
                                                                                </div>
                                                                                <input v-model="bank.bank_account_name" type="text" class="form-control r-0 light s-12 shadow1"
                                                                                    placeholder="Account Name" style="background-color:#ded8c7" >
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group col-6 m-0">
                                                                            <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                <div class="input-group-prepend">
                                                                                    <div class="input-group-text"><i class="icon icon-address-card-o float-left s-20 text-white " ></i></div>
                                                                                </div>
                                                                                <input v-model="bank.bank_account_number" type="text" class="form-control r-0 light s-12 shadow1"
                                                                                    placeholder="Account Number" style="background-color:#ded8c7" >
                                                                            </div>
                                                                        </div>
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

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

export default {
    name:"user-profile",

    props:{
        user:{
            type:Object,
            required:true
        }
    },

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

            userHasProfile:true
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
            let img = this.profile.photo_path
            return img ? process.env.VUE_APP_IMAGE_PATH+'/'+img : '/assets/img/mock-image.jpeg'
        },
        uplineImageURL(){
            let img = this.uplineDetails.photo_path
            return img ? process.env.VUE_APP_IMAGE_PATH+'/'+img : '/assets/img/mock-image.jpeg'
        }
    },

    methods:{
        ...mapActions('userStore',['getProfileDetails','updateProfile','updateUser','getUplineDetails']),

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
            this.updateProfile({uuid:this.authUser.uuid,data:form})
        }
    },

   created(){
        this.getProfileDetails(this.user.uuid).then(reslt=>{
            if(reslt.status == 200){
                if(!reslt.data.data){
                    this.userHasProfile = false
                }else{
                    this.form.first_name = this.user.first_name
                    this.form.last_name = this.user.last_name
                    this.form.phone = this.user.phone
                    this.form.email = this.user.email
                    this.form.address = reslt.data.data.address
                    this.bank.bank_account_name = reslt.data.data.bank_account_name
                    this.bank.bank_account_number = reslt.data.data.bank_account_number
                    this.bank.bank_name = reslt.data.data.bank_name
                    this.form.gender = reslt.data.data.gender
                }
            }
            
        })
        this.getPackage(this.user.package_id)
        this.getUplineDetails(this.user.uuid)
    },

}
</script>