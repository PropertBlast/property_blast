<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class commonmodel extends CI_Model
{
    /**
	 * This is the constructor of a Model
	 */
	function __construct() {
		// Call the Model constructor
		parent::__construct();
	}
	
	public function isRecordAlreadyExist($record_field, $record, $record_id_field, $record_id, $table){
		$query   = 'SELECT * from '.$table.' WHERE '.$record_field.'="'.$record.'" AND '.$record_id_field.' != '.$record_id;
		$queryRS = $this->db->query($query);
		if($queryRS->num_rows()>0){
		   return 1;
		}else{
		   return 0;
		}
	}
	
	public function getSingleRecord($query){
		$queryRS = $this->db->query($query);
		if($queryRS->num_rows()>0){
		   return $queryRS->row();
		}else{
		   return '';
		}
	
	}
	
	public function getMultipleRecords($query){
		$queryRS = $this->db->query($query);
		if($queryRS->num_rows()>0){
		   return $queryRS->result_array();
		}else{
		   return '';
		}
	
	}
	
	public function getAdminDetails(){
		$queryRS = $this->db->query('SELECT * FROM users WHERE user_id=1');
		if($queryRS->num_rows()>0){
		   return $queryRS->row();
		}else{
		   return '';
		}
	
	}
	
	public function validateURL($string){
		$lowerCase = strtolower($string);
		if((substr($lowerCase,0,7) != 'http://' || substr($lowerCase,0,7) != 'https://') && substr($lowerCase,0,3) == 'www'){
		    $string = 'http://'.$lowerCase;
		}
		
		if(!preg_match('/^(http|https|ftp):\/\/([A-Z0-9][A-Z0-9_-]*(?:\.[A-Z0-9][A-Z0-9_-]*)+):?(\d+)?\/?/i',$string)){
			return 0;
		} else {
			return 1;
		}
	}
        /* ------------Load Layout Functions------------------ */

        public function frontloadLayout($data,$content_path) {
            $data['header'] = $this->load->view('frontend/layout/dheader', $data, TRUE);
            $data['content'] = $this->load->view($content_path, $data, TRUE);
            $data['footer'] = $this->load->view('frontend/layout/dfooter', $data, TRUE);
            $this->load->view('frontend/layout/template', $data);
        }
        
        public function adminloadLayout($data,$content_path) {

            $data['header'] = $this->load->view('admin/layout/header', $data, TRUE);
            $data['footer'] = $this->load->view('admin/layout/footer', $data, TRUE);
            $data['content'] = $this->load->view($content_path, $data, TRUE);
            $this->load->view('admin/layout/template', $data);

        }
        
}
