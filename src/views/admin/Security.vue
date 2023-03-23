<template>
    <div>
        <div class="animated">
            <div class="row my-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card border justify-content-center">
                            <div class="card-body"> 
                                <div class="text-center mt-2 mb-4"><img  src="/assets/img/private-account.png" width="80px" height="80px" alt=""></div>
                                <div class="text-center mb-4">
                                    <h6 class="font-weight-bold text-green"><i class="icon-lock mr-2"></i>Login 2Factor Authentication</h6>
                                    <small>Disable or Enable Login 2FA Authentication</small>
                                    <div class="form-row mt-2">
                                    <div style="padding-left:200px"><input type="checkbox"  data-toggle="switchbutton"  checked data-width="100"  data-onstyle="success" /></div>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        
                        <div class="card-body b-b bg-white">
                            <div class="stepper sw-main sw-theme-circles"
                                data-options='{
                                        "useURLhash":true,
                                        "theme":"sw-theme-circles",
                                        "transitionEffect":"fade",
                                        "toolbarSettings":{
                                            "showNextButton":false,
                                            "showPreviousButton":false
                                            }
                                        }' >
                                <ul class="nav step-anchor" style="margin-bottom:10px; padding-left:100px;">
                                    <li><a  class="circle" href="#step-1x">1</a></li>
                                    <li><a  class="circle"  href="#step-2x">2</a></li>
                                    <li><a  class="circle" href="#step-3x">3</a></li>
                                </ul>
                                <div >
                                    <div id="step-1x" class="text-center">
                                        <div class="text-center mb-3"><img  src="/assets/img/password.png" width="60px"  height="60px">
                                        <h6 class="mt-1 s-8 font-weight-bold text-green"><i class="icon-lock3 mr-2"></i>Change Password</h6></div>
                                        <div class="form-row mb-3">
                                            <div class="col-md-10">
                                                <div class="input-group mb-2" style="padding-left: 100px">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-unlock float-left s-20 green-text " ></i></div>
                                                    </div>
                                                    <input type="text" class="form-control r-1 light s-12" id="inlineFormInputGroupUsername2"
                                                        placeholder="Old Password"> 
                                                </div>
                                                <div class="input-group  mb-2" style="padding-left: 100px">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-lock3 float-left s-20 green-text " ></i></div>
                                                    </div>
                                                    <input type="text" class="form-control r-1 light s-12" id="inlineFormInputGroupUsername2"
                                                        placeholder="New Password">
                                                </div>
                                                <div class="input-group" style="padding-left: 100px">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-lock3 float-left s-20 green-text " ></i></div>
                                                    </div>
                                                    <input type="text" class="form-control r-1 light s-12" id="inlineFormInputGroupUsername2"
                                                        placeholder="Confirm Password">
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#step-2x" class="btn btn-sm btn-success mb-3 btn-lg"><i class="icon icon-arrow-right"></i>Proceed</a>
                                    </div>
                                    <div id="step-2x" class="card-body text-center">
                                        <div class="text-center mb-3"><img  src="/assets/img/password2.png" width="60px"  height="60px">
                                        <h6 class="mt-1 s-8 font-weight-bold text-green"><i class="icon-contact_mail mr-2"></i>Confirm OTP</h6></div>
                                        <div class="form-row mb-3">
                                            <div class="col-md-10">
                                                <div class="input-group mb-2" style="padding-left: 100px">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-lock float-left s-20 green-text " ></i></div>
                                                    </div>
                                                    <input type="text" class="form-control r-1 light s-12" id="inlineFormInputGroupUsername2"
                                                        placeholder="Confirm Code"> 
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#step-1x" class="btn btn-sm btn-success mb-3 btn-lg"><i class="icon icon-arrow-left"></i>Previous</a>
                                        <a href="#step-3x" class="btn btn-sm btn-success mb-3 btn-lg"><i class="icon icon-check-square-o"></i>Confirm</a>
                                    </div>
                                    <div id="step-3x" class="card-body text-center ">
                                        <div class="text-center mb-3"><img  src="/assets/img/checked.png" width="100px"  height="100px">
                                        <h6 class="mt-1 s-8 font-weight-bold text-green">Successful!<br><small>Your Password has been changed successfully.</small></h6></div>
                                        <a href="#step-1x" class="btn btn-sm btn-success mb-3 btn-lg"><i class="icon icon-arrow-left"></i>Return</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
    export default{
        name:"admin-security"
    }
</script>