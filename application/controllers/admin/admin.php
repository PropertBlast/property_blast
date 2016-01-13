<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class admin extends CI_Controller {
    
        public function __construct() {
        parent::__construct();
        $this->load->helper('url');
        $this->load->model('frontend/commonmodel');
    }

    public function index() {
         if (!$this->session->userdata('admin_data')) {  //validate
            redirect(base_url('admin/login'));
            exit;
        }
        $data = '';
        $this->commonmodel->adminloadLayout($data,'admin/home/index');
        
    }

}
