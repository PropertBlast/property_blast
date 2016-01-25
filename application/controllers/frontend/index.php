<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class index extends CI_Controller {

   

    public function __construct() {
        
        parent::__construct();
        $this->load->helper('url');
        $this->load->model(array('frontend/commonmodel'));
    }

    /**
     * Will get home page content
     */
    public function index() {
        echo 123; die;
        $data = '';
        $this->commonmodel->frontloadLayout($data,'frontend/home/index');
       
    }

    /**
     * Will get design page content
     */
    public function design() {
        $data = '';
        $this->commonmodel->frontloadLayout($data,'frontend/design');
       
    }
  
}
