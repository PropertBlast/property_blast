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

    public function getAllFlyerSize($status) {
        $query = $this->db->get_where('tbl_flyer_size', array('flyer_size_status' => $status));

        $flyerSize = $query->result_array();

        return count($flyerSize) > 0 ? $flyerSize : FALSE;
    }

    public function saveFlyer($data) {
        $query = "INSERT INTO tbl_flyer_detail (flyer_image, flyer_image_size, flyer_creation_date)  VALUES (:image, :sizeid, NOW())";

        $statment = $this->db->conn_id->prepare($query);
        $statment->bindParam(':image', $data['image'], PDO::PARAM_STR);
        $statment->bindParam(':sizeid', $data['sizeid'], PDO::PARAM_INT);

        return $statment->execute() ? $this->db->conn_id->lastInsertId() : FALSE;
    }

    public function saveFlyerBtnRelation($data) {
        foreach ($data['btn'] as $key => $value) {
            $query = "INSERT INTO tbl_r_flyer_btn_tag (fk_flyer_id, fk_btn_tag_id) VALUES (:flyerid, :btnid)";

            $statment = $this->db->conn_id->prepare($query);
            $statment->bindParam(':flyerid', $data['flyerid'], PDO::PARAM_INT);
            $statment->bindParam(':btnid', $value, PDO::PARAM_INT);
            $statment->execute();
        }
        return;
    }

    public function saveFlyerFlyertagsRelation($data) {
        foreach ($data['flyer'] as $key => $value) {
            $query = "INSERT INTO tbl_r_flyer_flyer_tag (fk_flyer_id, fk_flyer_tag_id) VALUES (:flyerid, :flyertagid);";

            $statment = $this->db->conn_id->prepare($query);
            $statment->bindParam(':flyerid', $data['flyerid'], PDO::PARAM_INT);
            $statment->bindParam(':flyertagid', $value, PDO::PARAM_INT);
            $statment->execute();
        }
        return;
    }

}

//end of class