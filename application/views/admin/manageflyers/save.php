<div id="page-wrapper" >
    <div id="page-inner">
        <div class="row">
            <div class="col-md-12">
                <h2>Add Flyers</h2>   
                <h5>Welcome <?php
                    if ($this->session->userdata('admin_data') != "") {
                        echo $this->session->userdata['admin_data']['username'];
                    }
                    ?> , Love to see you back. </h5>
            </div>
        </div>              
        <!-- /. ROW  -->
        <hr />  
        <div class="row">
            <div class="col-md-12">
                <!-- Form Elements -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Add Flyers
                    </div>

                    <!-- start: flyer-design-wrap -->
                    <div id="flyer-design-wrap" class="flyer-design-wrap">

                        <!-- tabs menu start -->
                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#tab-id-1">Flyer Design</a></li>
                            <li><a data-toggle="tab" href="#tab-id-2">Customer Database</a></li>
                            <li><a data-toggle="tab" href="#tab-id-3">Payment Processing</a></li>
                        </ul>
                        <!-- tabs menu end -->

                        <!-- tabs content start -->
                        <div class="tab-content">

                            <!-- start: tab 1 content -->
                            <div id="tab-id-1" class="tab-pane fade in active pt-30 pb-10">
                                <?php $this->load->view( 'admin/manageflyers/tabs/flyer-design' ); ?>
                            </div>
                            <!-- end: tab 1 content -->

                            <!-- start: tab 2 content -->
                            <div id="tab-id-2" class="tab-pane fade">
                                <?php $this->load->view( 'admin/manageflyers/tabs/customer-database' ); ?>
                            </div>
                            <!-- end: tab 2 content -->

                            <!-- start: tab 3 content -->
                            <div id="tab-id-3" class="tab-pane fade">
                                <?php $this->load->view( 'admin/manageflyers/tabs/payment-processing' ); ?>
                            </div>
                            <!-- end: tab 3 content -->

                        </div>
                        <!-- tabs content end -->
                    </div>
                    <!-- /flyer-design-wrap -->

                </div>
            </div>
        </div>