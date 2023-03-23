<template>
    <div>
        <div class="animated">
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL RANKS AND INCENTIVES</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Ranks/Levels</th>
                                    <th>Cumulated Point Value (CPV)</th>
                                    <th>Bonus(%)</th>
                                    <th>Incentive</th>
                                    <th>Cash Equivalent</th>
                                    <th>Display</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>PAND</td>
                                    <td>600</td>
                                    <td>5%</td>
                                    <td>Smart Phone</td>
                                    <td>₦126,000</td>
                                    <td><img class="gift" src="/assets/img/phone.png" style="width:100px" ></td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#ranksModal"><i class="icon-edit"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>ROOKIE</td>
                                    <td>1,200</td>
                                    <td>5%</td>
                                    <td></td>
                                    <td>₦252,000</td>
                                    <td></td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#ranksModal"><i class="icon-edit"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>BISHOP</td>
                                    <td>3600</td>
                                    <td>5%</td>
                                    <td></td>
                                    <td>₦756,000</td>
                                    <td></td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#ranksModal"><i class="icon-edit"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>LEADER</td>
                                    <td>14,400</td>
                                    <td>5%</td>
                                    <td>Dubai Trip</td>
                                    <td>₦3,024,000</td>
                                    <td><img class="gift rounded" src="/assets/img/dubai.png" style="width:100px" ></td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#ranksModal"><i class="icon-edit"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>MASTER</td>
                                    <td>32,400</td>
                                    <td>5%</td>
                                    <td>Car</td>
                                    <td>₦6,804,000</td>
                                    <td><img class="gift" src="/assets/img/car.png" style="width:100px" ></td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#ranksModal"><i class="icon-edit"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>GRAND MASTER</td>
                                    <td>97,200</td>
                                    <td>5%</td>
                                    <td>SUV</td>
                                    <td>₦20,412,000</td>
                                    <td><img class="gift" src="/assets/img/suv.png" style="width:100px" ></td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#ranksModal"><i class="icon-edit"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>ALPHA</td>
                                    <td>388,800</td>
                                    <td>5%</td>
                                    <td>Detached Duplex</td>
                                    <td>₦81,648,000</td>
                                    <td><img class="gift rounded" src="/assets/img/duplex.png" style="width:100px" ></td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#ranksModal"><i class="icon-edit"></i></a>
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
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL PROFIT POOL BONUS</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>Package</th>
                                    <th>Bonus(%)</th>
                                    <th>Eligible registrations</th>
                                    <th>Duration (Months)</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr>
                                    <td>Premium</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>6</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#poolModal"><i class="icon-edit"></i></a>
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
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL GLOBAL PROFIT SHARING</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <div class="card-body no-gutters" style="overflow-x:auto;">
                                <table class="table table-bordered table-hover">
                                    <tr>
                                        <th>1st percentage(%)</th>
                                        <th>2nd percentage(%)</th>
                                        <th>Edit Details</th>
                                    </tr>
                                    <tr>
                                        <td>12.5</td>
                                        <td>10</td>
                                        <td>
                                            <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#globalModal"><i class="icon-edit"></i></a>
                                        </td>
                                    </tr>
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
        name:"admin-incentives"
    }
</script>