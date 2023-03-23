<template>
    <div>
        <div class="animated">
            <div class="row mb-5">
                <div class="col-md-12">
                    <div class="card mb-3">
                        <div class="card-header white">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link text-green" id="w1-tab1" data-toggle="tab" >MEMBERS INFORMATION</a>
                                        </li>	
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body ">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-hover data-tables" data-options='{ "paging": false; "searching":false}'>
                                <thead>
                                    <tr>
                                        <th scope="col">S/N</th>
                                        <th scope="col">Profile Image</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Package</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Date of Reg.</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><span class="text-center"><img class="w-40px" src="/assets/img/dummy/u2a.png" alt="User Image"></span></td>
                                            <td>Ayanleye Olumide Joseph</td>
                                            <td>olumide11</td>
                                            <td>VIP 1 - Basic</td>
                                            <td>Nigeria</td>
                                            <td>30 March,2022</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="caret"></i>
                                                    </button>
                                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                    <a href="" class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; Dashboard</a>
                                                    <a href="/admin/getProfile/1" class="dropdown-item text-green" ><i class="icon-drivers-license-o"></i>&nbsp;&nbsp; Profile</a>
                                                    <a href="/admin/geneology/1" class="dropdown-item text-green"><i class="icon-sitemap"></i>&nbsp;&nbsp;Geneology</a>
                                                    <a class="dropdown-item text-green" href=""><i class="icon-account_balance_wallet"></i>&nbsp;&nbsp;Wallet</a>
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-1"><i class="icon-bank"></i>&nbsp;&nbsp;Enable Bank Account Change</a>	
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-2"><i class="icon-lock"></i>&nbsp;&nbsp;Login Details Change</a>											
                                                    <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-3"><i class="icon-mail-envelope-open6"></i>&nbsp;&nbsp;Send Message</a>
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-4"><i class="icon-lock3"></i>&nbsp;&nbsp;Login 2FA</a> 
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><span class="text-center"><img class="w-40px" src="/assets/img/dummy/u2a.png" alt="User Image"></span></td>
                                            <td>Femi Akinsanmi</td>
                                            <td>Sanmi@007</td>
                                            <td>VIP 2 - Business</td>
                                            <td>Nigeria</td>
                                            <td>19 April,2022</td>
                                            <td>
                                            <div class="dropdown">
                                                <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="caret"></i>
                                                </button>
                                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                <a href="" class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; Dashboard</a>
                                                <a href="/admin/getProfile/1" class="dropdown-item text-green" ><i class="icon-drivers-license-o"></i>&nbsp;&nbsp; Profile</a>
                                                <a href="/admin/geneology/1" class="dropdown-item text-green" ><i class="icon-sitemap"></i>&nbsp;&nbsp;Geneology</a>
                                                <a class="dropdown-item text-green" href=""><i class="icon-account_balance_wallet"></i>&nbsp;&nbsp;Wallet</a>
                                                <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-1"><i class="icon-bank"></i>&nbsp;&nbsp;Enable Bank Account Change</a>	
                                                <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-2"><i class="icon-lock"></i>&nbsp;&nbsp;Login Details Change</a>											
                                                <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-3"><i class="icon-mail-envelope-open6"></i>&nbsp;&nbsp;Send Message</a>
                                                <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-4"><i class="icon-lock3"></i>&nbsp;&nbsp;Login 2FA</a>  
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><span class="text-center"><img class="w-40px" src="/assets/img/dummy/u2a.png" alt="User Image"></span></td>
                                            <td>Emeka Onuka</td>
                                            <td>Emekaking</td>
                                            <td>VIP 5 - Premium</td>
                                            <td>Nigeria</td>
                                            <td>28 March,2022</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="caret"></i>
                                                    </button>
                                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                    <a href="" class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; Dashboard</a>
                                                    <a href="/admin/getProfile/1" class="dropdown-item text-green" ><i class="icon-drivers-license-o"></i>&nbsp;&nbsp; Profile</a>
                                                    <a href="/admin/geneology/1" class="dropdown-item text-green" ><i class="icon-sitemap"></i>&nbsp;&nbsp;Geneology</a>
                                                    <a class="dropdown-item text-green" href=""><i class="icon-account_balance_wallet"></i>&nbsp;&nbsp;Wallet</a>
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-1"><i class="icon-bank"></i>&nbsp;&nbsp;Enable Bank Account Change</a>	
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-2"><i class="icon-lock"></i>&nbsp;&nbsp;Login Details Change</a>											
                                                    <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-3"><i class="icon-mail-envelope-open6"></i>&nbsp;&nbsp;Send Message</a>
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-4"><i class="icon-lock3"></i>&nbsp;&nbsp;Login 2FA</a> 
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><span class="text-center"><img class="w-40px" src="/assets/img/dummy/u2a.png" alt="User Image"></span></td>
                                            <td>Ajayi Ogunwale</td>
                                            <td>walewave</td>
                                            <td>VIP 3 - Executive</td>
                                            <td>Nigeria</td>
                                            <td>23 june,2022</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="caret"></i>
                                                    </button>
                                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                    <a href="" class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; Dashboard</a>
                                                    <a href="/admin/getProfile/1" class="dropdown-item text-green" ><i class="icon-drivers-license-o"></i>&nbsp;&nbsp; Profile</a>
                                                    <a href="/admin/geneology/1" class="dropdown-item text-green" ><i class="icon-sitemap"></i>&nbsp;&nbsp;Geneology</a>
                                                    <a class="dropdown-item text-green" href=""><i class="icon-account_balance_wallet"></i>&nbsp;&nbsp;Wallet</a>
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-1"><i class="icon-bank"></i>&nbsp;&nbsp;Enable Bank Account Change</a>	
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-2"><i class="icon-lock"></i>&nbsp;&nbsp;Login Details Change</a>											
                                                    <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-3"><i class="icon-mail-envelope-open6"></i>&nbsp;&nbsp;Send Message</a>
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-4"><i class="icon-lock3"></i>&nbsp;&nbsp;Login 2FA</a> 
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><span class="text-center"><img class="w-40px" src="/assets/img/dummy/u2a.png" alt="User Image"></span></td>
                                            <td>Felicia Andrew</td>
                                            <td>Felicia01</td>
                                            <td>VIP 1 - Basic</td>
                                            <td>Nigeria</td>
                                            <td>15 july,2022</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="caret"></i>
                                                    </button>
                                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                    <a href="" class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; Dashboard</a>
                                                    <a href="/admin/getProfile/1" class="dropdown-item text-green" ><i class="icon-drivers-license-o"></i>&nbsp;&nbsp; Profile</a>
                                                    <a href="/admin/geneology/1" class="dropdown-item text-green" ><i class="icon-sitemap"></i>&nbsp;&nbsp;Geneology</a>
                                                    <a class="dropdown-item text-green" href=""><i class="icon-account_balance_wallet"></i>&nbsp;&nbsp;Wallet</a>
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-1"><i class="icon-bank"></i>&nbsp;&nbsp;Enable Bank Account Change</a>	
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-2"><i class="icon-lock"></i>&nbsp;&nbsp;Login Details Change</a>											
                                                    <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-3"><i class="icon-mail-envelope-open6"></i>&nbsp;&nbsp;Send Message</a>
                                                    <a class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-4"><i class="icon-lock3"></i>&nbsp;&nbsp;Login 2FA</a> 
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
        name:"admin-users"
    }
</script>