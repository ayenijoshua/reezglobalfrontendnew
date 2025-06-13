<template>
    <div>
        <div class="">
            <header class="blue accent-3 relative">
                <div class="container-fluid text-blue">
                    <div class="row justify-content-between">
                        <ul class="nav nav-material nav-material-white responsive-tab" id="v-pills-tab" role="tablist">
                            <li>
                                <a class="nav-link active border-right" id="v-pills-home-tab" data-toggle="pill"  href="#v-pills-home" role="tab" aria-controls="v-pills-home"><i class="icon icon-vcard text-green" ></i><span class="font-weight-bold text-green">My Profile</span></a>
                            </li>
                            <li>
                                <a class="nav-link" id="v-pills-payments-tab" data-toggle="pill" href="#v-pills-payments" role="tab" aria-controls="v-pills-payments" aria-selected="false"><i class="icon icon-bank text-green"></i><span class="font-weight-bold text-green">Bank Details</span></a>
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
                                        <div class="card shadow" style="background-color: transparent" >
                                            <div class="card-header" >
                                                <h6 class="text-green"><strong class="font-weight-bold">Profile Details</strong></h6>
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
                                                    <br>
                                                    <div class="" style="background-color:#ecf0f1" >
                                                        <ul class="list-group list-group-flush" style="background-color:#ecf0f1">
                                                            <li class="list-group-item border-bottom"><i class="icon icon-vcard float-left s-20 text-blue border-right" ></i> <span class="float-right s-12 font-weight-bold text-green">{{ regPackage.name }}</span></li>
                                                            <li class="list-group-item border-bottom"><i class="icon icon-person float-left s-20 text-blue border-right" ></i> <span class="float-right s-12 font-weight-bold text-green">{{ authUser.first_name }} {{ authUser.last_name }}</span></li>
                                                            <li class="list-group-item border-bottom"><i class="icon icon-phone2 float-left s-20 text-blue border-right"></i> <span class="float-right s-12 font-weight-bold text-green">{{ authUser.phone }}</span></li>
                                                            <li class="list-group-item border-bottom"><i class="icon icon-mail-envelope-closed4 float-left s-20 text-blue border-right"></i> <span class="float-right s-12 font-weight-bold text-green">{{ authUser.email }}</span></li>
                                                            <li class="list-group-item border-bottom"><i class="icon icon-account_box float-left s-20 text-blue border-right"></i>  <span class="float-right s-12 font-weight-bold text-green">{{ authUser.username }}</span></li>
                                                            <li class="list-group-item"><i class="icon icon-home float-left s-20 text-blue border-right"></i> <span class="float-right s-12 font-weight-bold text-green text-right" style="width:130px">{{ profile.address }}</span></li>
                                                        </ul>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>	
                                    </div>
                                    <br/>
                                </div>
                                <div class="col-md-6">
                                    <div class="row my-3">
                                        <!-- bar charts group -->
                                        <div class="col-md-12">
                                            <div class="card shadow" style="background-color: transparent">
                                                <div class="card-header" >
                                                    <h6 class="text-green"><strong class="font-weight-bold">Edit Profile</strong></h6>
                                                </div>
                                                <div class="card-body" >
                                                    <template v-if="loading && profileLoading">
                                                        <b-card>
                                                            <b-skeleton width="85%"></b-skeleton>
                                                            <b-skeleton width="55%"></b-skeleton>
                                                            <b-skeleton width="70%"></b-skeleton>
                                                        </b-card>
                                                    </template>
                                                    <template v-else>
                                                        <form id="profile-form" @submit.prevent="profileUpdate()">
                                                            <div class="card no-b no-r" style="background-color: transparent">
                                                                <div class="card-body">
                                                                    <div class="form-row">
                                                                        <div class="col-md-12">
                                                                            <div class="form-row mb-2">
                                                                                <div class="form-group col-6 m-0">
                                                                                    <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                        <div class="input-group-prepend">
                                                                                            <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-person float-left s-20 text-white " ></i></div>
                                                                                        </div>
                                                                                        <input name="first_name" :value="form.first_name" type="text" class="form-control r-0 light s-12" placeholder="First Name" style="background-color: transparent; border: 2px solid #2E671A;">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group col-6 m-0">
                                                                                    <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                        <div class="input-group-prepend">
                                                                                            <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-person float-left s-20 text-white " ></i></div>
                                                                                        </div>
                                                                                        <input name="last_name" :value="form.last_name" type="text" class="form-control r-0 light s-12" placeholder="Last Name" style="background-color: transparent; border: 2px solid #2E671A;">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div class="form-row mb-2">
                                                                                <div class="form-group col-6 m-0">
                                                                                    <div class="input-group mb-2 mr-sm-2">
                                                                                        <div class="input-group-prepend">
                                                                                            <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-phone float-left s-20 text-white" ></i></div>
                                                                                        </div>
                                                                                        <input name="phone" :value="form.phone" type="text" class="form-control r-0 light s-12"
                                                                                            placeholder="Phone Number" style="background-color: transparent; border: 2px solid #2E671A;">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group col-6 m-0">
                                                                                    <div class="input-group mb-2 mr-sm-2">
                                                                                        <div class="input-group-prepend">
                                                                                            <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-mail-envelope-closed4 float-left s-20 text-white"></i></div>
                                                                                        </div>
                                                                                        <input type="text" name="email" readonly :value="form.email" class="form-control r-0 light s-12"
                                                                                            placeholder="Email Address" style="background-color: transparent; border: 2px solid #2E671A;">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div class="form-row mb-2">
                                                                                <div class="form-group col-12 m-0">
                                                                                    <div class="form-group m-0">
                                                                                        <div class="input-group  mr-sm-2 mb-3">
                                                                                            <div class="input-group-prepend">
                                                                                                <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-person float-left s-20 text-white" ></i></div>
                                                                                            </div>
                                                                                            <select name="gender" class="form-control r-0 light s-12" style="background-color: transparent; border: 2px solid #2E671A;">
                                                                                                <option value="" :selected="!profile.gender" style="background-color: #ded8c7">Select gender</option>
                                                                                                <option value="male" :selected="profile.gender=='male'" style="background-color: #ded8c7">Male</option>
                                                                                                <option value="female" :selected="profile.gender=='female'" style="background-color: #ded8c7">Female</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group col-12 m-0">
                                                                                    <div class="form-group m-0">
                                                                                        <div class="dropbox" style="background-color: transparent; border: 2px solid #2E671A;">
                                                                                            <input v-b-popover.hover.top="'Drag your photo here or click to browse'" type="file" id="profile-img" title="profile photo" name="image" @change="filesChange($event.target.files);" class="form-control form-control-line input-file" style="background-color: transparent; border: 2px solid #2E671A;">
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
                                                                                placeholder="Residential Address" style="background-color: transparent; border: 2px solid #2E671A;"></textarea>
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
                                        <div class="card shadow" style="background-color: transparent" >
                                            <div class="card-header" >
                                                <h6 class="text-green"><strong class="font-weight-bold">Upline Details</strong></h6>
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
                                                            <li class="list-group-item border-bottom" style="background-color:#1b4f72;" ><i class="icon icon-vcard float-left s-20 text-white border-right" ></i> <span class="float-right s-12 font-weight-bold text-green">{{ uplineDetails.package }}</span></li>
                                                            <li class="list-group-item border-bottom" style="background-color:#1b4f72;" ><i class="icon icon-person float-left s-20 text-white border-right" ></i> <span class="float-right s-22 font-weight-bold text-green ">{{ uplineDetails.first_name }} {{ uplineDetails.last_name }}</span></li>
                                                            <li class="list-group-item border-bottom" style="background-color:#1b4f72;" ><i class="icon icon-mail-envelope-closed4 text-white float-left s-20  border-right"></i> <span class="float-right s-12 font-weight-bold text-green">{{ uplineDetails.email }}</span></li>
                                                            <li class="list-group-item" style="background-color:#1b4f72;" ><i class="icon icon-account_box float-left s-20 text-white border-right"></i>  <span class="float-right s-12 font-weight-bold text-green">{{ uplineDetails.username }}</span></li>
                                                        </ul>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>	
                                    </div>
                                </div>
                            </div>
                            <div class="row row-eq-height my-3" style="padding-top:40px">
                                <div class="col-md-8 col-sm-8">
                                    <div class="card mb-3 shadow1" style="background-color:transparent;">
                                        <div class="card-body">
                                            <p class="font-weight-bold">Select the Registration Package you would like to upgrade to. You pay the difference.</p>
                                            <div class="form"> 
                                                <template v-if="regPackages.length==0">
                                                    <b-card>
                                                        <b-skeleton width="85%"></b-skeleton>
                                                        <b-skeleton width="55%"></b-skeleton>
                                                        <b-skeleton width="70%"></b-skeleton>
                                                    </b-card>
                                                </template>           
                                                <div v-else class="form-group m-0">
                                                    <div class="input-group mb-2 mr-sm-2 mb-3">              
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-user-plus float-left s-20 text-white" ></i></div>
                                                        </div>
                                                        <select id="select" v-model="upgradeForm.package_id" @change="getPackageDifference" class="form-control r-0 light s-12 shadow1" style="background-color: #ded8c7" readonly>
                                                            <option style="background-color: #ded8c7" value="">Select Registration Package</option>
                                                            <option v-for="reg,i in regPackages.filter((ele) => ele.id > regPackage.id)" :key="i" :value="reg.id">{{ reg.name }}</option>											   
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-sm btn-success btn-lg mr-3"><i class="icon-save mr-2"></i>Confirm Selection</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="card mb-3 shadow1" style="background-color:transparent;" >
                                        <template v-if="upgradeData.package_difference == undefined">
                                            <b-card>
                                                <b-skeleton width="85%"></b-skeleton>
                                                <b-skeleton width="55%"></b-skeleton>
                                                <b-skeleton width="70%"></b-skeleton>
                                            </b-card>
                                            <h6 class="text-center">Select a package to view upgrade data.</h6>
                                        </template>  
                                        <div v-else class="card-body" style="background-color:#2E671A;">
                                            <div class="d-flex justify-content-center">
                                                <div class="text-center">  <img  src="/assets/img/upgrade_member.png" width="auto" height="130px"></div>
                                                <div class="card-body text-center">
                                                    <span class="text-white" id="d1" style="font-size:10px">Registration Package</span>
                                                    <h6 class="font-weight-bold text-white" id="d1">{{ upgradeData.package_name }}</h6>
                                                    <span class="text-white" id="d1" style="font-size:10px">Package Price</span>
                                                    <h6 class="font-weight-bold text-white" id="d1">₦{{ upgradeData.package_difference.toLocaleString('en-US') }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row mt-5 mb-5">
                                <div class="col-md-6">
                                    <div class="card  mb-3 shadow1" style="background-color: transparent">                       
                                        <div class="d-flex flex-wrap justify-content-center">
                                            <div class="text-center mt-5 mb-5" style="padding-bottom:10px; padding-top: 20px">
                                                <img  src="/assets/img/pay_options.png" width="300px">
                                                <h6 class="font-weight-bold" style="color:#2E671A;" >Proceed To Payment<br><small>Kindly complete your  Product Purchase by clicking the button Below</small></h6>
                                                <a v-if="paySubmitting==true" @click="makePayment" class="btn btn-sm btn-success mb-3 mt-2 btn-lg"><i class="icon icon-credit-card"></i>...Processing</a>
                                                <a v-else @click="makePayment" class="btn btn-sm btn-success mb-3 mt-2 btn-lg"><i class="icon icon-credit-card"></i>Pay Now</a>
                                            </div>
                                        </div>	   
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <b-card v-if="walletBalanceLoading==true || walletBalance == null" >
                                        <b-skeleton width="85%"></b-skeleton>
                                        <b-skeleton width="55%"></b-skeleton>
                                        <b-skeleton width="70%"></b-skeleton>
                                    </b-card>
                                    <div v-else class="card mr-3 shadow1 " style="background-color: #ded8c7">
                                        <div class="d-flex flex-wrap justify-content-center">
                                            <div class="text-center">
                                                <img class=" mt-3" src="/assets/img/wallet4.png" width="auto" height="150px">
                                                <h1 class="font-weight-bold text-green" style="margin: 0em; padding: 0em;">₦{{ walletBalance.toLocaleString('en-US') }}</h1>
                                                <small class=" font-weight-bold s-10 text-green" style="margin: 0em; padding: 0em;" >Current Wallet Available Balance</small><br>
                                                <a v-if="payingWithWallet==true" class="btn btn-sm btn-success mb-3 mt-2 btn-lg"><i class="icon icon-credit-card"></i>...Processing</a>
                                                <a v-else class="btn btn-sm btn-success mb-3 mt-2 btn-lg" @click="payManually"><i class="icon icon-credit-card"></i>Pay with Wallet</a>
                                            </div>    
                                        </div>    
                                    </div>
                                </div>              
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-payments" role="tabpanel" aria-labelledby="v-pills-payments-tab">
						
						    <div class="row mb-4">
                                <div class="col-md-12">
                                    <div class="card  shadow" style="background-color: transparent">
                                        <div class="collapse show" id="invoiceCard">
                                            <div class="card-body p-0" >
                                                <div class="card no-b  no-r" style="background-color: transparent">
                                                    <div class="card-body">
                                                        <div class="form-row">
                                                            <div class="col-md-4">
                                                                <div class="card no-b mr-3 " style="background-color: transparent" >
                                                                    <div class="row column-row">

                                                                        <div class="mt-4 ml-3" style="padding-right:40px" >   
                                                                            <span class="green-text float-left font-weight-bold mr-3" id="d1" style="font-size:12px" >Widthrawal Account Details</span>
                                                                            <span class="border-right mr-2" style="border-right: 1px solid #2E671A !important;"></span>
                                                                        </div> 
                                                                        <div class="mt-3 mr-2 ml-auto" >
                                                                            <img src="/assets/img/personal-banking3.png" class="bg-transparent" style="max-width:100px;">	 
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body" >
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="avatar avatar-xl mr-4 ">
                                                                                <img class="user_avatar" :src="imageURL" alt="User Image">
                                                                            </div>
                                                                            <div>
                                                                                <span class="green-text font-weight-bold" id="d1" style="font-size:10px" >Account Name</span>
                                                                                <h6 class="font-weight-bold text-green" id="d1">{{ this.bank.bank_account_name }}</h6>
                                                                                <span class="green-text font-weight-bold" id="d1" style="font-size:10px" >Account Number</span>
                                                                                <h6 class="font-weight-bold text-green" id="d1">{{ this.bank.bank_account_number }}</h6>
                                                                                <span class="green-text font-weight-bold" id="d1" style="font-size:10px" >Bank Name</span>
                                                                                <h6 class="font-weight-bold text-green" id="d1">{{ this.bank.bank_name }}</h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span class="border-right" style="border-right: 1px solid #2E671A !important;"></span>
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
                                                                                <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-account_balance float-left s-20 text-white" ></i></div>
                                                                            </div>
                                                                            <select id="bank-select" v-model="bank.bank_name" required class="form-control r-0 light s-12" style="background-color: #ded8c7; border: 2px solid #2E671A;">
                                                                                <option :value="null">Select Bank</option>
                                                                                <option v-for="bank,i in banks" :value="bank.bank" :key="i" :selected="profile.bank_name == bank.bank">{{ bank.bank }}</option>														   
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-row">
                                                                        <div class="form-group col-6 m-0">
                                                                            <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                <div class="input-group-prepend">
                                                                                    <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-person float-left s-20 text-white " ></i></div>
                                                                                </div>
                                                                                <input v-model="bank.bank_account_name" type="text" readonly class="form-control r-0 light s-12"
                                                                                    placeholder="Account Name" style="background-color: #ded8c7; border: 2px solid #2E671A;">
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group col-6 m-0">
                                                                            <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                                <div class="input-group-prepend">
                                                                                    <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-address-card-o float-left s-20 text-white " ></i></div>
                                                                                </div>
                                                                                <input v-model="bank.bank_account_number" required type="text" class="form-control r-0 light s-12"
                                                                                    placeholder="Account Number" style="background-color: #ded8c7; border: 2px solid #2E671A;">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="float-left mt-3">
                                                                        <span v-if="submitting" class="btn btn-sm btn-success">...</span>
                                                                        <button v-else type="submit" v-show="profile.bank_editable" class="btn btn-sm btn-success"><i class="icon-save mr-2"></i>Update Data</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <span class="border-right" style="border-right: 1px solid #2E671A !important;"></span>
                                                            <div class="col-md-3 mr-4 ml-4">
                                                                <div class="d-flex justify-content-center">
                                                                    <img class="img-responsive ml-5" src="/assets/img/bankinghall.png" style="width:200px; height:auto;"> <br>
                                                                   
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

        <modal modalId="pay"  modalTitle="Make Payment" modalSize="md" :link="payLink">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="timer flex-wrap d-flex justify-content-center"  style="padding-top: 30px;">
                        <p class="text-center font-weight-bold">Please, Ensure you complete your transaction within 2 minutes.</p>
                        <VueCountdown :time="((gatewayTimeout))">
                            <template slot-scope="props">
                                <div style="width: 200px !important; padding-right:20px; padding-left:20px; padding-top:20px; padding-bottom:20px;" id="minutes" class="align-items-center flex-column d-flex justify-content-center">{{ props.minutes }}&nbsp;&nbsp;MINUTES</div>
                                <div style="width: 200px !important; padding-right:20px; padding-left:20px; padding-top:20px; padding-bottom:20px;" id="seconds" class="align-items-center flex-column d-flex justify-content-center">{{ props.seconds }}&nbsp;&nbsp;SECONDS</div>
                            </template>
                        </VueCountdown>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 offset-md-1 mt-5">
                    <iframe id='ifr' frameborder="0" :src="payLink" scrolling="no" width="400" height="500"></iframe>
                </div>
            </div>
        </modal>
    </div>
</template>

<style scoped>
.nav-material>li>a::after {
    content: "";
    background: #f6f6f2;
    height: 3px;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    transition: all 250ms ease 0s;
    transform: scale(0);
}

.nav-material.nav-material-white>li .nav-link.active[data-v-c8765c42] {
    border-color: #2E671A;
}

.btn-custom {
    background-color: #ffffff !important; /* White background */
    color: #2E671A !important; /* Text and icon color */
    border: 2px solid #2E671A; /* Border matching the text color */
    font-weight: bold; /* Optional: Make the text bold */
    padding: 10px 20px; /* Adjust padding for better spacing */
    border-radius: 5px; /* Optional: Add slight rounding to the corners */
    text-align: center; /* Center text */
    text-decoration: none; /* Remove underline */
    transition: all 0.3s ease; /* Smooth hover effect */
}

.btn-custom:hover {
    background-color: transparent !important; /* Transparent background */
    color: #ffffff !important; /* White text and icon */
    border: 2px solid #ffffff !important; /* White outline */
}

.btn-custom i {
    transition: all 0.3s ease; /* Smooth transition for the icon */
}

.btn-custom:hover i {
    color: #ffffff !important; /* White icon on hover */
}


.nav-material.nav-material-white>li .nav-link.active {
    border-color: #2E671A;
}
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
  .user_avatar {
    width: 80px;
    border: 1px solid #eee;
    background: #2E671A;
    padding: 5px;
    border-radius: 50%;
}

li > a:hover .icon {
    color: #2E671A !important;
}
</style>

<script>
    import { notification } from '@/util/notification';
    import { mapActions, mapGetters, mapState } from 'vuex';
    import modal from '@/components/Modal.vue'
    import VueCountdown from '@chenfengyuan/vue-countdown';

    export default {
        name:"user-profile",
        components:{
        modal,
        VueCountdown
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
                    bank_account_name:null,
                    bank_account_number:null,
                    bank_name:null,
                    bank_code:null
                },

                profileLoading:false,
                uplineLoading:true,

                banks:[],
                upgradeForm:{
                    package_id:''
                },
                upgradeData:{},
                paySubmitting:false,
                gatewayTimeout:1000*60*0.5,
                payLink:null,
                walletBalanceLoading:false,
                payingWithWallet:false,
                payAmount:0
            }
        },

        computed:{
            ...mapState({
                submitting:state=>state.submitting,
                loading:state=>state.loading
            }),

            ...mapGetters('authStore',['authUser']),
            ...mapGetters('userStore',['profile','uplineDetails']),
            ...mapGetters('packageStore',['regPackage','regPackages']),
            ...mapGetters('bonusStore',['walletBalance']),

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
            ...mapActions('userStore',['getProfileDetails','updateProfile','updateUser','getUplineDetails','updateBankDetails','fetchUpgradeData']),

            ...mapActions('authStore',['getUser']),
            ...mapActions('packageStore',['getPackage','all']),
            ...mapActions('paymentStore',['verifyBankDetails','fetchBanks','verify','initiatePayment']),
            ...mapActions('bonusStore',['getWalletBalance']),
            ...mapActions("withdrawalStore",["payWithWallet"]),

            profileUpdate(){
                let ele = document.getElementById('profile-form')
                var form = new FormData(ele)
                let userData = {
                    first_name:form.get('first_name'),
                    last_name:form.get('last_name'),
                    phone:form.get('phone')
                }

                if(this.checkFileZize() == false){
                    notification.warning('Image size should not exceed 500kB')
                    return
                }
                
                this.updateUser({uuid:this.authUser.uuid,data:userData})
                this.updateProfile({uuid:this.authUser.uuid,data:form}).then(res=>{
                    if(res.status == 200){
                        this.getProfileDetails(this.authUser.uuid)
                    }
                })
            },

            checkFileZize(){
                let ele = document.getElementById('profile-img');
                if(ele.files !== 'array'){
                    return null
                }
                let fileSize = ele.files[0].size/1000
                return fileSize > 500 ? false : true
            },

            updateBank(){
                let verifyData = {bank_name:this.bank.bank_name,account_number:this.bank.bank_account_number}
                this.verifyBankDetails(verifyData).then(verRes=>{
                    if(verRes.status==200){
                        this.bank.bank_code = verRes.data.data.bank_code
                        this.bank.bank_account_name = verRes.data.data.accountName
                        this.updateBankDetails({uuid:this.authUser.uuid, data:this.bank}).then(res=>{
                            if(res.status == 200){
                                this.getProfileDetails(this.authUser.uuid)
                            }
                        })
                    }
                });
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
            },

            getPackageDifference(){
                this.fetchUpgradeData({packageId:this.upgradeForm.package_id,isUpgradePickup:false}).then((res)=>{
                    //console.log('pac-diff',res.data.data)
                    this.upgradeData = res.data.data
                })
            },

            makePayment(){
                if(this.upgradeData.package_difference == undefined){
                    notification.warning("Select a package for upgrade")
                    return
                }
                this.paySubmitting = true
                let data = {
                    amount:this.upgradeData.package_difference,
                    description:"Package Upgrade",
                    txn_source:"package_payment",
                    is_upgrade:1,
                    meta_data:this.upgradeForm.package_id
                    //stockist_id:this.stockist.id,
                    //total_price:this.cartTotalPrice,
                    //total_quantity:this.cartTotalQty,
                    //total_points:this.cartTotalPoints,
                    //products:this.cartProducts
                    }

                this.initiatePay(data)
            },

            initiatePay(data){
                var that = this
                this.initiatePayment(data).then(res=>{
                    console.log(res)
                    var result = res
                    if(res.status == 200){
                        //if(that.productService.name == 'paystack'){
                            that.payLink = res.data.data.data.authorization_url
                            that.$bvModal.show('pay')
                            
                            setTimeout(() => {
                                that.verify({reference:result.data.data.data.reference}).then(resp=>{
                                    if(resp.status == 200 && (resp.data.success == true || resp.data.success == 'true')){
                                        //vm.$router.push({name:'user-dashboard'})
                                        notification.success("Payment Verified successfully")
                                        that.$bvModal.hide('pay')
                                        this.paySubmitting = false
                                    }else{
                                        notification.info("Unable to verify payment")
                                        that.$bvModal.hide('pay')
                                        this.paySubmitting = false
                                    }
                                }).catch(function(err) {
                                    console.log("Some specific work failed", err);
                                    that.$bvModal.hide('pay')
                                    this.paySubmitting = false
                                });
                            }, this.gatewayTimeout);
                        //}
                    }
                    this.paySubmitting = false
                }).catch(function(err) {
                    //notification
                    console.log("Error initating payment", err);
                    that.$bvModal.hide('pay')
                    this.paySubmitting = false
                });
            },

            payManually(){
                if(this.upgradeData.package_difference == undefined){
                    notification.warning("Select a package for upgrade")
                    return
                }
                this.payingWithWallet = true;
                let data = {
                    amount:this.upgradeData.package_difference,
                    description:"Package Upgrade",
                    txn_source:"package_payment",
                    is_upgrade:1,
                    meta_data:this.upgradeForm.package_id
                }
                this.payWithWallet(data).then(()=>this.payingWithWallet = false)
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

                        //if(this.walletBalance==null){
                            this.walletBalanceLoading = true
                            this.getWalletBalance(res.data.uuid).then(()=>this.walletBalanceLoading = false)
                        //}
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

                this.uplineLoading = true
                this.getUplineDetails(this.authUser.uuid).then(()=>this.uplineLoading=false) 

                //if(this.walletBalance==null){
                    this.walletBalanceLoading = true
                    this.getWalletBalance(this.authUser.uuid).then(()=>this.walletBalanceLoading = false)
                //}
            }

            this.fetchBanks().then(res=>{
                if(res.status == 200){
                    this.banks = res.data
                }
            })

            this.all()
            
        },

    }
</script>