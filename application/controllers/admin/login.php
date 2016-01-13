<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class login extends CI_Controller {
    
   
    
    function __construct() {
        parent::__construct(); //call to parent constructor

        $this->load->model(array('admin/adminloginmodel', 'frontend/commonmodel'));
        
    }

    /**
     * This is the default function of a controller 
     */
    public function index() {
        ob_start();
       if ($this->session->userdata('admin_data')) {  //validate
            redirect(base_url('admin'));
            exit;
        }
        $data = '';
        if (isset($_POST['submit'])) {
            $username = $this->input->post('username');
            $password = $this->input->post('password');
            $username = preg_replace("/[^a-zA-Z0-9_\-]+/", "",$username);
            if ($username == '') {
                $data['username_error'] = 'Username is Required';
            }

            if ($password == '') {
                $data['password_error'] = 'Password is Required';
            }

            if ($username == '' && $password == '') {
                $data['password_error'] = '';
                $data['username_error'] = '';
                $data['general_error'] = 'Please enter Username and Password to proceed';
            }

            if ($username != '' && $password != '') {
                //varify username password
                $hpassword = md5($password);
                $row = $this->adminloginmodel->veifyuser($username, $hpassword);
                if (!empty($row)) {
                    $userSessionData = array(
                        'admin' => 1,
                        'username' => $username,
                        'pk_admin_id' => $row->pk_admin_id
                    );
                    $this->session->set_userdata('admin_data',$userSessionData);
                    redirect(base_url('admin'));
                    ob_flush();
                } else {
                    $data['general_error'] = 'Username and password do not match.';
                }
            }
        }
            $data['header'] = '';
            $data['footer'] = '';
            $data['content'] = $this->load->view('admin/login/login', $data, TRUE);
            $this->load->view('admin/layout/template', $data);
    }

    /**
     * will destroy session n logout user
     *
     */
    function logout() {
        $userSessionData = array(
            'username' => '',
            'admin' => '',
            'pk_admin_id' => ''
        );
        $this->session->unset_userdata($userSessionData);
        $this->session->sess_destroy();
        session_destroy();
        redirect(base_url('admin/login'));
        exit;
    }

}
