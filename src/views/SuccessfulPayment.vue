<template>
    <div>
        <div class="">	
            <div class="navbar navbar-expand d-flex navbar-dark justify-content-between bd-navbar blue accent-3 shadow">
                <div class="relative">
                    <img src="/assets/img/logo1.png" alt="" style="width: 200px;">
                </div>
                <!--Top Menu Start -->
                
            </div>

            <div class="container-fluid animatedParent animateOnce my-3">
                <div class="animated">
                    <div class="row mb-3">
                        <div class="col-md-12">
                            <div class="text-center mt-3">
                                <img src="/assets/img/success.png" alt="" width="100px" height="100px">
                                <h6 class="font-weight-bold mt-2" style="color:#2E671A;">Your Payment was successful!<br><small>We're thrilled to have you as a partner.</small></h6>
                            </div>
                        </div>
                    </div>	
                <br>
                </div>	
            </div>
        </div>
    </div>
</template>

<style>
/* Override the modal's background colors */
.modal-dialog {
    background-color: #ded8c7 !important;
}

.modal-content {
    background-color: #ded8c7 !important;
    border: none; /* Remove borders if any */
}

.modal-body,
.modal-footer {
    background-color: #ded8c7 !important;
    color: #333; /* Adjust text color if necessary */
}

.modal-footer {
    border-top: none;
    padding-bottom: 20px; /* Additional spacing if needed */
}

/* Optional: Adjust button color for consistency */
.modal-footer .btn {
    background-color: #2E671A; /* Button color */
    color: white;
}


</style>

<style scoped>

	/* Desktop: Keep layout intact */
	.countdown-wrapper {
	  gap: 15px;
	}

	/* Mobile: Make countdown stack */
	@media screen and (max-width: 768px) {
	  .countdown-wrapper {
		flex-direction: column !important;
		align-items: center !important;
	  }

	  .countdown-wrapper > div {
		width: 90% !important;
		margin-bottom: 10px;
		font-size: 18px;
	  }
	}

	/* Default wrapper */
	.responsive-iframe-wrapper {
	  position: relative;
	  width: 100%;
	  max-width: 400px;
	  height: 500px;
	  margin: 0 auto;
	}

	/* Default iframe */
	.responsive-iframe-wrapper iframe {
	  width: 100%;
	  height: 100%;
	  border: none;
	}

	/* Responsive mobile override */
	@media screen and (max-width: 768px) {
	  .responsive-iframe-wrapper {
		max-width: 100%;
		height: 600px; /* You can increase this if content is being cut off */
		padding: 0 10px;
	  }
	}
</style>

<style>	

    .timer div {
        background-color: #000000;
        color: #ffffff;
        width: 150px !important;
        height: 150px !important;
        border-radius: 5px;
        font-size: 25px;
        font-weight: 700;
        margin-left: 10px;
        margin-right: 10px;
    }
    .timer div {
        display: inline !important;
        margin-top: -2px;
        font-size: 15px;
        font-weight: 500;
    }

    @media only screen and (max-width: 767px) {
        .timer {
            margin-top: -20px;
        }
        .timer div {
            width: 95px;
            height: 100px;
            font-size: 32px;
            margin-top: 20px;
        }
        .timer div span {
            font-size: 14px;
        }
    }

/*-=-=-=-=-=-=-=-=-=-=-=- */
/* Column Grids */
/*-=-=-=-=-=-=-=-=-=-=-=- */

.col_half { width: 49%; }
.col_third { width: 32%; }
.col_fourth { width: 23.5%; }
.col_fifth { width: 18.4%; }
.col_sixth { width: 15%; }
.col_three_fourth { width: 74.5%;}
.col_twothird{ width: 66%;}
.col_half,
.col_third,
.col_twothird,
.col_fourth,
.col_three_fourth,
.col_fifth{
  position: relative;
  display:inline;
  display: inline-block;
  float: left;
  margin-right: 2%;
  margin-bottom: 20px;
}
.end { margin-right: 0 !important; }
/* Column Grids End */

.wrapper { width: 980px; margin: 30px auto; position: relative;}
.counter { background-color: #ffffff; padding: 20px 0; border-radius: 5px;}
.count-title { font-size: 40px; font-weight: normal;  margin-top: 10px; margin-bottom: 0; text-align: center; }
.count-text { font-size: 13px; font-weight: normal;  margin-top: 10px; margin-bottom: 0; text-align: center; }
.fa-2x { margin: 0 auto; float: none; display: table; color: #4ad1e5; }

#pay .close{
    display: none !important;
}


</style>

<script>
   
    export default{
        name:"user-successful-payment",

        data(){
            
        },

    }
</script>