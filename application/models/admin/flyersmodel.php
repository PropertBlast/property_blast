<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class flyersmodel extends CI_Model {

    /**
     * This is the constructor of a Model
     */
    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    /**
     * will get all the records
     *
     * @param integer $page [optional]
     * @param integer $limit [optional]
     * @return array of records
     */
    public function getAllflyers() {
        $queryStr = " SELECT * 
							FROM tbl ";
        $queryRS = $this->db->query($queryStr);
        if ($queryRS->num_rows() > 0) {
            return $queryRS->result_array();
        } else {
            return '';
        }
    }
    public function getAllflyer_tags() {
        $queryStr = " SELECT * FROM tbl_flyer_tags order by flyer_tags_date DESC";
        $queryRS = $this->db->query($queryStr);
        if ($queryRS->num_rows() > 0) {
            return $queryRS->result_array();
        } else {
            return '';
        }
    }
    public function getAllbutton_tags() {
        $queryStr = " SELECT * FROM tbl_button_tags order by button_tags_date DESC ";
        $queryRS = $this->db->query($queryStr);
        if ($queryRS->num_rows() > 0) {
            return $queryRS->result_array();
        } else {
            return '';
        }
    }

  
}//end of class