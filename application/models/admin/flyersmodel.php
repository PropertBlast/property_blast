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

    public function getFlyer($id) {

        $query = "SELECT  pk_flyer_deatil_id AS 'template_id', flyer_title AS 'title', flyer_image AS 'image_name', flyer_json_file AS 'json_filename'
            FROM tbl_flyer_detail
            WHERE pk_flyer_deatil_id = :flyerid
            LIMIT 1";

        $statment = $this->db->conn_id->prepare($query);

        $statment->bindParam(':flyerid', $id, PDO::PARAM_INT);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        return count($result) > 0 ? reset($result) : FALSE;
    }

    public function getAllFonts() {
        $query = "SELECT pk_font_id AS 'font_id', font_title AS 'name', font_name AS 'displayName' FROM tbl_font WHERE font_status = 'Active'";
        $statment = $this->db->conn_id->prepare($query);
        $statment->execute();

        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        return count($result) > 0 ? $result : FALSE;
    }

    public function getFlyerColorSet($flyerId) {
        $query = "SELECT pk_flyer_color_set AS 'set_id', flyer_color_set_title AS 'name'
            FROM tbl_flyer_color_set AS fcs
            LEFT JOIN tbl_r_flyer_to_flyer_set AS ffs ON fcs.pk_flyer_color_set = ffs.fk_flyer_set
            WHERE ffs.fk_flyer_id = :flyerid";
        $statment = $this->db->conn_id->prepare($query);
        $statment->bingParam(':flyerid', $flyerId, PDO::PARAM_INT);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        return count($result) > 0 ? $result : FALSE;
    }

    public function getColorListWithSetid($setId) {
        $query = "SELECT cl.pk_color_id AS 'color_id', cl.color_title AS 'color', cl.color_hex_code AS 'color_code'
            FROM tbl_r_flyer_set_to_color AS fsc
            LEFT JOIN tbl_color_list AS cl ON fsc.fk_color = cl.pk_color_id
            WHERE fsc.fk_flyer_set_color = :setid";

        $statment = $this->db->conn_id->prepare($query);
        $statment->bingParam(':setid', $setId, PDO::PARAM_INT);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        return count($result) > 0 ? $result : FALSE;
    }

}

//end of class