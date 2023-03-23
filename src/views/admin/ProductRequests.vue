<template>
    <div>
        <div class="animated">
            <div class="row my-5">
                <div class="col-lg-12">
                    <div class="counter-box p-40 text-white shadow2 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img class="mr-3  r-3" src="assets/img/shopping-cart.png"  width="70px" height="70px">
                        </div>
                        <small class="mt-0text-white" >Registration Products Requests</small>
                        <p class="text-dark-heading font-weight-bold text-white"><span style="font-size:32px">127</span></p>
                    </div>
                </div>
            </div>

            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL PRODUCTS REQUESTS</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Full Name</th>
                                    <th>Username</th>
                                    <th>Registration Package</th>
                                    <th>Request Status</th>
                                    <th>View Request</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Innocent Aluu</td>
                                    <td>Innocent@99</td>
                                    <td>VIP 1 - Basic</td>
                                    <td><span class="badge badge-warning">Pending Request</span></td>
                                    <td>
                                        <a class="btn-fab btn-fab-sm btn-success text-white" href="#" data-toggle="modal" data-target="#viewproductModal"><i class="icon-eye"></i></a>													
                                    </td>
                                    <td>
                                        <div class="dropdown"> 
                                            <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="caret"></i>
                                            </button>
                                            <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                <a  class="dropdown-item text-green" href="#"  ><i class="icon-check-circle"></i>&nbsp;&nbsp; Approve</a>
                                                <a  class="dropdown-item text-green" href="#" ><i class="icon-times-circle"></i>&nbsp;&nbsp; Decline</a>	
                                            </div>
                                        </div>													
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Felix Abraham</td>
                                    <td>felix@09</td>
                                    <td>VIP 2 - Business</td>
                                    <td><span class="badge badge-success">Approved Request</span></td>
                                    <td>
                                        <a class="btn-fab btn-fab-sm btn-success text-white" href="#" data-toggle="modal" data-target="#viewproductModal"><i class="icon-eye"></i></a>													
                                    </td>
                                    <td>
                                        <div class="dropdown"> 
                                            <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="caret"></i>
                                            </button>
                                            <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                <a  class="dropdown-item text-green" href="#"  ><i class="icon-check-circle"></i>&nbsp;&nbsp; Approve</a>
                                                <a  class="dropdown-item text-green" href="#" ><i class="icon-times-circle"></i>&nbsp;&nbsp; Decline</a>	
                                            </div>
                                        </div>													
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"product-requests"
    }
</script>