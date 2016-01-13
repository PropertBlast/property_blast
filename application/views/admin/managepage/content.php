
<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>public/frontend/css/datatables.min.css" />
<script type="text/javascript" language="javascript" class="init">


    $(document).ready(function () {
           var oTable = $('#example').dataTable();
           oTable.fnSort( [ [5,'desc'] ] );
    });
</script>

<div id="page-wrapper" >
    <div id="page-inner">
        <div class="row">
            <div class="col-md-12">
                <h2>Admin Pages</h2>   
                <h5>Welcome <?php if ($this->session->userdata('admin_data') != "") {
                            echo $this->session->userdata['admin_data']['username'];
                        } ?> , Love to see you back. </h5>
            </div>
        </div>              
        <!-- /. ROW  -->
        <hr />  
        <div class="row">
            <div class="col-md-12">
                <!-- Advanced Tables -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <a  href="<?php echo base_url() . 'admin/managepages/savePage'; ?>" class="btn btn-primary">Add Page</a>
                    </div>
                    <?php if(isset($Parent_error) &&  $Parent_error!=''){ ?>
                        <div class="alert alert-danger" role="alert">
                            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span class="sr-only">Error:</span>
                                <?php echo $Parent_error; ?>
                        </div>
                        <?php } ?>
                    <?php if(isset($sucess) &&  $sucess!=''){ ?>
                        <div class="alert alert-success" role="alert">
                            <?php echo $sucess; ?>
                        </div>
                        <?php } ?>
                    <div class="panel-body" id="page_option">
                        <div class="table-responsive">
                            <?php    if (!empty($pages)) { ?>
                            <table class="table table-striped table-bordered table-hover" id="example">
                                <thead>
                                    <tr>
                                        <th>Page Title</th>
                                        <th>Page Status</th>
                                        <th>Page Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($pages as $cat) { ?>
                                        <tr>
                                            <td> <?php echo $cat['page_title']; ?> </td>
                                             <?php if($cat['page_status']==1){ ?>
                                                <td class="hidden-phone" align="center">
                                                  <div style="margin-left:17px;" class="label label label-success">
                                                   <a  href="<?php echo base_url('admin/managepages/status/'.$cat["pk_page_id"].'/0');  ?>">Enable</a>
                                                  </div>
                                                </td>
                                        <?php }else{ ?>
                                          <td class="hidden-phone" align="center">
                                            <div style="margin-left:17px;" class="label label label-danger">
                                             <a href="<?php echo base_url('admin/managepages/status/'.$cat["pk_page_id"].'/1');  ?>">Disable</a>
                                            </div>
                                          </td>
                              		<?php }?>
                                            <td> <?php echo $cat['page_creation_date_time'] ?></td>
                                            <td>
                                              <a href="<?php echo base_url('admin/managepages/savePage/'.$cat['pk_page_id']); ?>"> Edit </a>
                                            <?php if($cat['page_delete_able']!=1){ ?>
                                                ||
                                                <a onclick="return confirm('Are you sure you want to delete this record?');" href="<?php echo base_url('admin/managepages/delete/'.$cat["pk_page_id"]);  ?>">Delete </a>
                                            <?php } ?>
                                           </td>
                                        </tr>
                                        <?php
                                    }
                                
                                ?>
                                </tbody>
                            </table>
                            <?php } ?>   
                        </div>

                    </div>
                </div>
                <!--End Advanced Tables -->
            </div>
        </div>