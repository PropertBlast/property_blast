<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class manageflyers extends CI_Controller {

    /**
     * Constructor of a login 
     */
    function __construct() {
        parent::__construct(); //call to parent constructor

        if (!$this->session->userdata('admin_data')) {  //validate
            redirect(base_url('admin/login'));
            exit;
        }
        $this->load->model(array('admin/flyersmodel', 'frontend/commonmodel'));
        $this->load->library('form_validation');
        
    }

    /**
     * This is the default function of a controller 
     */
    public function index() {

        $data['sucess'] = $this->session->flashdata('sucess');
        $this->commonmodel->adminloadLayout($data, 'admin/manageflyers/content');
    }
    
    public function save() {

        $data  = '';
        $data['flyertags']         = $this->flyersmodel->getAllflyer_tags();
        $data['buttontags']        = $this->flyersmodel->getAllbutton_tags();
        if(isset($_POST['submit'])){
            
        }
        $this->commonmodel->adminloadLayout($data, 'admin/manageflyers/save');
    }
    public function add_flyer_tags() {

        $data  = '';
        if (isset($_POST['submit'])) {

            $this->form_validation->set_rules('flyer_tags_title', 'Tags Title', 'required');
            if ($this->form_validation->run() == FALSE) {
               
            } else { // no errors now to save the data
                $flyer_tags_title        = $this->input->post('flyer_tags_title');
                $datas = array(
                        'flyer_tags_title' => $flyer_tags_title,
                        'flyer_tags_date' => date('Y-m-d h:i:s')
                    );
                     $this->db->insert('tbl_flyer_tags', $datas);
                $data['sucess']  = 'Flyer Added successfully';
            }
        }
        $this->commonmodel->adminloadLayout($data, 'admin/manageflyers/add_flyer_tags');
    }
    public function add_button_tags() {

        $data  = '';
        if (isset($_POST['submit'])) {
            $this->form_validation->set_rules('button_tags_title', 'Button Title', 'required');
            if ($this->form_validation->run() == FALSE) {
            
                
            } else { // no errors now to save the data
                $button_tags_title        = $this->input->post('button_tags_title');
                $datas = array(
                        'button_tags_title' => $button_tags_title,
                        'button_tags_date' => date('Y-m-d h:i:s')
                    );
                     $this->db->insert('tbl_button_tags', $datas);
                
                $data['sucess']  = 'Button Added successfully';
            }
        }
        $this->commonmodel->adminloadLayout($data, 'admin/manageflyers/add_button_tags');
    }
   
    
}