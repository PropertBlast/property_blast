<?php
     $action = $this->router->fetch_class(); 
?>
<nav class="navbar-default navbar-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav" id="main-menu">
            <li class="text-center">
                <img src="<?php echo base_url() ?>public/admin/img/find_user.png" class="user-image img-responsive"/>
            </li>
            
            <li>
                <a <?php if ($action == 'admin') { ?> class="active-menu" <?php } ?>  href="<?php echo base_url('admin'); ?>">Dashboard</a>
            </li>
            <li>
                <a <?php if ($action == 'page') { ?> class="active-menu" <?php } ?>  href="<?php echo base_url('admin/managepages'); ?>">Pages</a>
            </li>
            <li>
                <a <?php if ($action == 'manageflyers') { ?> class="active-menu" <?php } ?>  href="<?php echo base_url('admin/manageflyers'); ?>">Flyers</a>
                <a href="<?php echo base_url('admin/manageflyers/add_flyer_tags'); ?>">Add Flyers Tags</a>
                <a href="<?php echo base_url('admin/manageflyers/add_button_tags'); ?>">Add Button Tags</a>
                
            </li>
<!--         <li>
                <a <?php if ($action == 'admin_team') { ?> class="active-menu" <?php } ?>  href="<?php echo base_url('admin/manageteams'); ?>">Teams</a>
            </li>
           
                <a <?php if ($action == 'admin_clients') { ?> class="active-menu" <?php } ?>  href="<?php echo base_url('admin/manageclients'); ?>">Clients</a>
            </li>
            <li>
                <a <?php if ($action == 'manageservices') { ?> class="active-menu" <?php } ?>  href="<?php echo base_url('admin/manageservices'); ?>">Services</a>
            </li>-->
           
        </ul>
           

    </div>

</nav>   


