<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class adminloginmodel extends CI_Model
{
    /**
	 * This is the constructor of a Model
	 */
	function __construct() {
		// Call the Model constructor
		parent::__construct();
	}
	/**
	 * will check if userneme n pass match
	 *
	 * @param string $username
	 * @param string $password
	 * @return Boolean true in case of exists else return false
	 */
	public function veifyuser($username, $password){
		  $queryStr = "SELECT * from tbl_admin WHERE admin_username= '".$username."' AND admin_password='".$password."'";			             
		   $queryRS  = $this->db->query($queryStr); 
		   if($queryRS->num_rows() > 0){
			   return $queryRS->row();
		   }else{
		       return ''; 
		   }
	}
	/**
	 * will get all the admin info
	 *
	 */
	public function getAdminInfo(){
		   $queryStr = "SELECT * from tbl_admin WHERE pk_admin_id = 1";			             
		   $queryRS  = $this->db->query($queryStr); 
		   if($queryRS->num_rows() > 0){
			   return $queryRS->row();
		   }else{
		       return ''; 
		   }
	}

}
