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

            
        </div>
    </div>
</template>

<script>
    export default{
        name:"admin-packages"
    }
</script>