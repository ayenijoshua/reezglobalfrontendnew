<template>
    <div>
        <div class="animated">
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL POINT VALUE RATE</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>Point Value</th>
                                    <th>Amount Equivalence</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr>
                                    <td>1 PV</td>
                                    <td>₦ 3,500</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#pvModal"><i class="icon-edit"></i></a>													
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL REGISTRATION PACKAGE RATES</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Registration Package</th>
                                    <th>Point Value</th>
                                    <th>Registration Amount</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>VIP 1 - Basic</td>
                                    <td>5PV</td>
                                    <td>₦ 20,200</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#packageModal"><i class="icon-edit"></i></a>
                                        </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>VIP 2 - Business</td>
                                    <td>10PV</td>
                                    <td>₦ 50,600</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#packageModal"><i class="icon-edit"></i></a>
                                        </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>VIP 3 - Executive</td>
                                    <td>20PV</td>
                                    <td>₦ 120,000</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#packageModal"><i class="icon-edit"></i></a>
                                        </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>VIP 4 - Professional</td>
                                    <td>45PV</td>
                                    <td>₦ 222,000</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#packageModal"><i class="icon-edit"></i></a>
                                        </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>VIP 5 - Premium</td>
                                    <td>70PV</td>
                                    <td>₦ 342,000</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#packageModal"><i class="icon-edit"></i></a>
                                        </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" style="overflow-x:auto;">
                        <form action="" method="POST">
                            <input type="hidden" name="_token" value="6BwLvKulnhkAcUn3BgPaQHev2ZNKme6XDhncAZzL">									
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/hand-shake.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">2%</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL WELCOME BONUS PERCENTAGE<br><small> Edit preferred welcome bonus percentage</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-handshake-o float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input type="number" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                                        placeholder="Welcome Bonus Percentage">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <input type="hidden" name="id" value="960">
                                        <button type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
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
                        <form action="" method="POST">
                            <input type="hidden" name="_token" value="6BwLvKulnhkAcUn3BgPaQHev2ZNKme6XDhncAZzL">									
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">₦ 1,000</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL MINIMUM WITHDRAWAL LIMIT<br><small> Edit preferred withdrawal limit</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input type="number" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                                        placeholder="Minimum Withdrawal Limit">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <input type="hidden" name="id" value="960">
                                        <button type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
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
    export default{
        name:"admin-packages"
    }
</script>