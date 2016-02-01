/*
SQLyog Ultimate v8.61 
MySQL - 5.6.26 : Database - property_blast
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`property_blast` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `property_blast`;

/*Table structure for table `ci_sessions` */

DROP TABLE IF EXISTS `ci_sessions`;

CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `last_activity_idx` (`last_activity`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Data for the table `ci_sessions` */

insert  into `ci_sessions`(`session_id`,`ip_address`,`user_agent`,`last_activity`,`user_data`) values ('5e307c12d75132d657f636e16d1b2f80','::1','Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36',1443727025,''),('3dce4b26f6eb9167150d574bf78d05f3','::1','Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36',1443714798,'a:2:{s:9:\"user_data\";s:0:\"\";s:10:\"admin_data\";a:3:{s:5:\"admin\";i:1;s:8:\"username\";s:5:\"usman\";s:11:\"pk_admin_id\";s:1:\"2\";}}'),('f0d6226e3eaf05ac808d09d4f7295099','::1','Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36',1443732677,'');

/*Table structure for table `tbl_admin` */

DROP TABLE IF EXISTS `tbl_admin`;

CREATE TABLE `tbl_admin` (
  `pk_admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_username` varchar(100) CHARACTER SET utf8 NOT NULL,
  `admin_password` varchar(250) CHARACTER SET utf8 NOT NULL,
  `admin_email` varchar(250) NOT NULL,
  PRIMARY KEY (`pk_admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;

/*Data for the table `tbl_admin` */

insert  into `tbl_admin`(`pk_admin_id`,`admin_username`,`admin_password`,`admin_email`) values (2,'usman','2f1fed5365c79d8fea7859dcc8788d77','usmanakram13@gmail.com');

/*Table structure for table `tbl_button_tags` */

DROP TABLE IF EXISTS `tbl_button_tags`;

CREATE TABLE `tbl_button_tags` (
  `pk_button_tags` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `button_tags_title` varchar(255) NOT NULL,
  `button_tags_status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `button_tags_date` datetime NOT NULL,
  PRIMARY KEY (`pk_button_tags`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_button_tags` */

insert  into `tbl_button_tags`(`pk_button_tags`,`button_tags_title`,`button_tags_status`,`button_tags_date`) values (1,'Open House Flyer','Active','2016-01-07 00:00:00'),(2,'Recruiting','Active','2016-01-07 00:00:00'),(3,'Newsletters','Active','2016-01-07 00:00:00'),(4,'Broker Tour Flyers','Active','2016-01-07 00:00:00');

/*Table structure for table `tbl_clients` */

DROP TABLE IF EXISTS `tbl_clients`;

CREATE TABLE `tbl_clients` (
  `pk_client_id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(255) DEFAULT NULL,
  `client_description` text,
  `client_logo` varchar(255) DEFAULT NULL,
  `client_status` tinyint(1) DEFAULT '1',
  `client_creation_date_time` datetime DEFAULT NULL,
  PRIMARY KEY (`pk_client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_clients` */

insert  into `tbl_clients`(`pk_client_id`,`client_name`,`client_description`,`client_logo`,`client_status`,`client_creation_date_time`) values (1,'Guess',NULL,'Client_1.gif',1,'2015-09-23 07:27:11'),(3,'Banks',NULL,'Client_3.gif',1,'2015-09-23 07:33:34'),(4,'Client frontier',NULL,'Client_4.gif',1,'2015-09-23 07:50:48'),(5,'Client Nestle',NULL,'Client_5.gif',1,'2015-09-23 07:51:07'),(6,'Nikon',NULL,'Client_6.gif',1,'2015-09-23 07:51:28');

/*Table structure for table `tbl_color_list` */

DROP TABLE IF EXISTS `tbl_color_list`;

CREATE TABLE `tbl_color_list` (
  `pk_color_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `color_title` varchar(100) DEFAULT NULL,
  `color_hex_code` varchar(7) NOT NULL,
  `color_status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  PRIMARY KEY (`pk_color_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_color_list` */

/*Table structure for table `tbl_flyer_color_set` */

DROP TABLE IF EXISTS `tbl_flyer_color_set`;

CREATE TABLE `tbl_flyer_color_set` (
  `pk_flyer_color_set` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `flyer_color_set_title` varchar(100) NOT NULL,
  `flyer_color_set_status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `flyer_color_set_date` datetime NOT NULL,
  PRIMARY KEY (`pk_flyer_color_set`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_flyer_color_set` */

/*Table structure for table `tbl_flyer_detail` */

DROP TABLE IF EXISTS `tbl_flyer_detail`;

CREATE TABLE `tbl_flyer_detail` (
  `pk_flyer_deatil_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `flyer_title` varchar(255) NOT NULL,
  `flyer_image` varchar(255) NOT NULL,
  `flyer_image_size` varchar(255) NOT NULL,
  `flyer_json_file` varchar(255) DEFAULT NULL,
  `flyer_creation_date` date NOT NULL,
  PRIMARY KEY (`pk_flyer_deatil_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_flyer_detail` */

insert  into `tbl_flyer_detail`(`pk_flyer_deatil_id`,`flyer_title`,`flyer_image`,`flyer_image_size`,`flyer_json_file`,`flyer_creation_date`) values (7,'flyer_title','banner.png','',NULL,'2016-01-07'),(8,'flyer_title','ad','1',NULL,'2016-01-30'),(9,'flyer_title','918f55197c11d33e94777e61c557567e.jpg','1',NULL,'2016-01-30'),(10,'flyer_title','7d567afba26db0db88179edbf97af947.jpg','1',NULL,'2016-01-31'),(11,'flyer_title','e0659fab7268df2ef4eb9044f34c324c.jpg','1',NULL,'2016-01-31'),(12,'flyer_title','0a2db3607a5f875df5ebead6ccc428aa.jpg','1',NULL,'2016-01-31'),(13,'flyer_title','c79c64f9b5c92d39be8b806bab476c76.jpg','1',NULL,'2016-01-31'),(14,'flyer_title','1d0527bb967a1a0000ec42b372bed9f2.jpg','1',NULL,'2016-01-31'),(15,'flyer_title','fa18cc2c5137b21d826a213eee84865c.jpg','1',NULL,'2016-01-31'),(16,'flyer_title','ce56dd44670c74687e652d1ad89ec905.jpg','1',NULL,'2016-01-31'),(17,'flyer_title','458c10ca20f47754fe8dbff824779e60.jpg','1',NULL,'2016-01-31'),(18,'flyer_title','da9885c355136b35d6dcfbd9834bc0f9.jpg','1',NULL,'2016-01-31'),(19,'flyer_title','b1d4a9b703215ff0df2b8552e4c3748e.jpg','1',NULL,'2016-01-31'),(20,'flyer_title','deb51e080906e5f0a9e763c644853a3b.jpg','1',NULL,'2016-01-31');

/*Table structure for table `tbl_flyer_size` */

DROP TABLE IF EXISTS `tbl_flyer_size`;

CREATE TABLE `tbl_flyer_size` (
  `pk_flyer_size` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `flyer_size_title` varchar(255) NOT NULL,
  `flyer_size_width` float NOT NULL,
  `flyer_size_height` float NOT NULL,
  `flyer_size_status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `flyer_size_date` datetime NOT NULL,
  PRIMARY KEY (`pk_flyer_size`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_flyer_size` */

insert  into `tbl_flyer_size`(`pk_flyer_size`,`flyer_size_title`,`flyer_size_width`,`flyer_size_height`,`flyer_size_status`,`flyer_size_date`) values (1,'Letter 8.5 x 11',8.5,11,'Active','2016-01-27 00:00:00');

/*Table structure for table `tbl_flyer_status` */

DROP TABLE IF EXISTS `tbl_flyer_status`;

CREATE TABLE `tbl_flyer_status` (
  `flyer_status_update_date` datetime NOT NULL,
  `fk_flyer_id` int(11) NOT NULL,
  `flyer_status` enum('Draft','Locked','Pending Review','Published') NOT NULL DEFAULT 'Draft',
  `fk_admin_id_flyer_lock` int(10) unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_flyer_status` */

/*Table structure for table `tbl_flyer_tags` */

DROP TABLE IF EXISTS `tbl_flyer_tags`;

CREATE TABLE `tbl_flyer_tags` (
  `pk_flyer_tags` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `flyer_tags_title` varchar(255) NOT NULL,
  `flyer_tags_status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `flyer_tags_date` datetime NOT NULL,
  PRIMARY KEY (`pk_flyer_tags`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_flyer_tags` */

insert  into `tbl_flyer_tags`(`pk_flyer_tags`,`flyer_tags_title`,`flyer_tags_status`,`flyer_tags_date`) values (1,'Open House Flyer','Active','2016-01-07 00:00:00'),(2,'Recruiting','Active','2016-01-07 00:00:00'),(3,'Newsletters','Active','2016-01-07 00:00:00'),(4,'Broker Tour Flyers','Active','2016-01-07 00:00:00');

/*Table structure for table `tbl_font` */

DROP TABLE IF EXISTS `tbl_font`;

CREATE TABLE `tbl_font` (
  `pk_font_id` int(10) unsigned NOT NULL,
  `font_title` varchar(100) NOT NULL,
  `font_name` varchar(100) DEFAULT NULL,
  `font_url` text,
  `font_status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `font_create_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_font` */

/*Table structure for table `tbl_page` */

DROP TABLE IF EXISTS `tbl_page`;

CREATE TABLE `tbl_page` (
  `pk_page_id` int(11) NOT NULL AUTO_INCREMENT,
  `page_delete_able` tinyint(1) DEFAULT '1',
  `page_title` varchar(250) NOT NULL,
  `page_alias` varchar(250) DEFAULT NULL,
  `page_description` longtext NOT NULL,
  `page_image` varchar(255) DEFAULT NULL,
  `page_status` tinyint(1) NOT NULL DEFAULT '1',
  `page_creation_date_time` datetime NOT NULL,
  `page_last_updated_date_time` datetime NOT NULL,
  PRIMARY KEY (`pk_page_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;

/*Data for the table `tbl_page` */

insert  into `tbl_page`(`pk_page_id`,`page_delete_able`,`page_title`,`page_alias`,`page_description`,`page_image`,`page_status`,`page_creation_date_time`,`page_last_updated_date_time`) values (1,1,'About us','aboutus','&lt;p&gt;Major Properties was founded in 1964 by Arnold Luster and Fred Mills. In the family tradition, sons Jeff Luster and Brad Luster became owners of the business in 1992. As a leader in the Downtown Los Angeles real estate market for over 50 years, Major Properties has brokered over $4 billion in transactions and has served thousands of property sellers, buyers, lessors and lessees.&lt;/p&gt;n&lt;p&gt;We specialize in industrial, commercial and residential real estate located in Downtown Los Angeles, Central, South and East Los Angeles, Hollywood, West Hollywood, Koreatown and Mid-City areas.&lt;/p&gt;n&lt;p&gt;Our residential division serves the needs of individuals or corporations looking to purchase, sell or lease Downtown condos, lofts and apartments. Single family residences and multi-family income properties are also included in the mix.&lt;/p&gt;','photo_8.png',1,'2014-03-05 07:47:06','2014-03-05 09:47:13'),(2,1,'Contact us','contactus','<p>\r\n                        Major Properties <br />\r\n                        1200 W. Olympic Boulevard <br />\r\n                        Los Angeles, CA 90015\r\n                        </p>\r\n\r\n                        <p>\r\n                        213-747-4151 <br />\r\n                        info@majorproperties.com\r\n                        </p>',NULL,0,'2014-03-06 05:34:58','2015-03-16 20:59:24'),(3,1,'Mission','mission','Our mission is to provide superior brokerage and management services, backed by the latest research, analytics and evaluation expertise. Our clients’ interests always come first, as our success depends on it. We are also owners of real estate, and treat every new listing like it is one of our own.\r\n\r\nMajor Properties is not bound by rigid policy guidelines like some national real estate firms headquartered in far-off cities. We provide a flexible marketing effort that rapidly adjusts to changing demands and fluctuating business conditions. We can provide you with up-to-the-minute sales and leasing information, as well as honest projections of future real estate value, based on our many years of experience.\r\n\r\nLos Angeles is truly multicultural, and the ability to communicate clearly is paramount in a city where people of all nationalities negotiate to sell, purchase and lease some of the choicest real estate in the world. Accordingly, our multi-lingual staff speaks English, Spanish, Korean, French, Farsi and Hebrew.','photo_11.png',1,'2014-03-06 06:08:38','2014-03-06 11:19:13'),(4,1,'Leader ship','leadership','Major Properties was founded in 1964 by Arnold Luster and Fred Mills. In the family tradition, sons Jeff Luster and Brad Luster became owners of the business in 1992. As a leader in the Downtown Los Angeles real estate market for over 50 years, Major Properties has brokered over $4 billion in transactions and has served thousands of property sellers, buyers, lessors and lessees.',NULL,1,'2014-03-06 06:38:35','2014-03-06 08:18:04'),(5,1,'Marketing','marketing','<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur  pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit  amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante  ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;  In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam  convallis, arcu vel pellentesque sodales, nisi est varius diam, ac  ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec  scelerisque ligula mollis lobortis.</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla  at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit  amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante  ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;  In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam  convallis, arcu vel pellentesque sodales, nisi est varius diam, ac  ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec  scelerisque ligula mollis lobortis.</p>',NULL,0,'2014-03-06 06:56:15','2015-03-16 20:50:33'),(20,1,'Agents','agents','<p>Coming from a diverse and vibrant background in mathematics, physical sciences, and the entertainment industry, Joe’s unique perspective and experiences gives him an edge not only in a technical sense but in the personal arena as well.</p>\r\n\r\n                        <p>Prior to joining the Major Properties team, Joe worked for William Morris Endeavor where he dealt with high-profile clients and worked alongside an international agent. This experience taught him the importance of correct client placement and the effectiveness of targeted marketing in order to ensure client success. In the commercial real estate sector, this knowledge has translated into a keen sense for value optimization through tenant placement as well as a strong marketing repertoire.</p>\r\n\r\n                        <p>Joe specializes in the leasing and sales of commercial, industrial, and multi-unit apartment properties. His energy and charisma has blessed him with a far-reaching network of people and friends, which he uses to his advantage in the marketing and disposition of property. Whether he represents owner/users, investors, or tenants, he is committed to the same principles of value maximization and client success.</p>\r\n\r\n                        <p>Joe is a graduate of USC where he obtained his B.A. in Economics. He is a licensed California Real Estate Agent and will be happy to provide references upon request. He may be reached by phone at (213) 747-0378 or by email joe@majorproperties.com.\r\n                        </p>',NULL,1,'2015-09-21 06:33:44','0000-00-00 00:00:00'),(21,1,'Clients','clients','Over the years, Major Properties has served thousands of clients. From individuals to small and large businesses, multi-national corporations, investment groups and major developers, we have strived to maintain high ethical and performance standards.\r\n\r\nWe offer personal \"on-the-street\" experience. Major Properties has been in business for over 50 years and understands the complexities of the Los Angeles marketplace. We have helped our clients to purchase or rent the \"right\" property at the “right” price or to sell, lease or trade their real estate.',NULL,1,'2015-09-23 07:35:40','0000-00-00 00:00:00'),(22,0,'Teams','teams','Coming from a diverse and vibrant background in mathematics, physical sciences, and the entertainment industry, Joe’s unique perspective and experiences gives him an edge not only in a technical sense but in the personal arena as well.\r\n\r\nPrior to joining the Major Properties team, Joe worked for William Morris Endeavor where he dealt with high-profile clients and worked alongside an international agent. This experience taught him the importance of correct client placement and the effectiveness of targeted marketing in order to ensure client success. In the commercial real estate sector, this knowledge has translated into a keen sense for value optimization through tenant placement as well as a strong marketing repertoire.\r\n\r\nJoe specializes in the leasing and sales of commercial, industrial, and multi-unit apartment properties. His energy and charisma has blessed him with a far-reaching network of people and friends, which he uses to his advantage in the marketing and disposition of property. Whether he represents owner/users, investors, or tenants, he is committed to the same principles of value maximization and client success.\r\n\r\nJoe is a graduate of USC where he obtained his B.A. in Economics. He is a licensed California Real Estate Agent and will be happy to provide references upon request. He may be reached by phone at (213) 747-0378 or by email joe@majorproperties.com.',NULL,1,'2015-09-28 07:38:37','0000-00-00 00:00:00'),(23,0,'Histroy','histroy','&lt;p&gt;Major Properties was founded in 1964 by Arnold Luster and Fred Mills. In the family tradition, sons Jeff Luster and Brad Luster became owners of the business in 1992. As a leader in the Downtown Los Angeles real estate market for over 50 years, Major Properties has brokered over $4 billion in transactions and has served thousands of property sellers, buyers, lessors and lessees.&lt;/p&gt;\\r\\n&lt;p&gt;We specialize in industrial, commercial and residential real estate located in Downtown Los Angeles, Central, South and East Los Angeles, Hollywood, West Hollywood, Koreatown and Mid-City areas.&lt;/p&gt;\\r\\n&lt;p&gt;Our residential division serves the needs of individuals or corporations looking to purchase, sell or lease Downtown condos, lofts and apartments. Single family residences and multi-family income properties are also included in the mix.&lt;/p&gt;','photo_23.png',1,'2015-10-15 06:18:00','0000-00-00 00:00:00'),(24,0,'Brokerage Service','brokerageservice','Major Properties was founded in 1964 by Arnold Luster and Fred Mills. In the family tradition, sons Jeff Luster and Brad Luster became owners of the business in 1992. As a leader in the Downtown Los Angeles real estate market for over 50 years, Major Properties has brokered over $4 billion in transactions and has served thousands of property sellers, buyers, lessors and lessees.\\r\\n\\r\\nWe specialize in industrial, commercial and residential real estate located in Downtown Los Angeles, Central, South and East Los Angeles, Hollywood, West Hollywood, Koreatown and Mid-City areas.\\r\\n\\r\\nOur residential division serves the needs of individuals or corporations looking to purchase, sell or lease Downtown condos, lofts and apartments. Single family residences and multi-family income properties are also included in the mix.',NULL,1,'2015-10-15 07:53:28','0000-00-00 00:00:00'),(25,0,'Property Management','propertymanagement','Major Properties was founded in 1964 by Arnold Luster and Fred Mills. In the family tradition, sons Jeff Luster and Brad Luster became owners of the business in 1992. As a leader in the Downtown Los Angeles real estate market for over 50 years, Major Properties has brokered over $4 billion in transactions and has served thousands of property sellers, buyers, lessors and lessees.\\r\\n\\r\\nWe specialize in industrial, commercial and residential real estate located in Downtown Los Angeles, Central, South and East Los Angeles, Hollywood, West Hollywood, Koreatown and Mid-City areas.\\r\\n\\r\\nOur residential division serves the needs of individuals or corporations looking to purchase, sell or lease Downtown condos, lofts and apartments. Single family residences and multi-family income properties are also included in the mix.',NULL,1,'2015-10-15 07:53:43','0000-00-00 00:00:00');

/*Table structure for table `tbl_r_flyer_btn_tag` */

DROP TABLE IF EXISTS `tbl_r_flyer_btn_tag`;

CREATE TABLE `tbl_r_flyer_btn_tag` (
  `fk_flyer_id` int(10) unsigned NOT NULL,
  `fk_btn_tag_id` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_r_flyer_btn_tag` */

insert  into `tbl_r_flyer_btn_tag`(`fk_flyer_id`,`fk_btn_tag_id`) values (16,2),(16,3),(17,2),(17,3),(18,2),(18,3),(19,2),(19,3),(20,2),(20,3);

/*Table structure for table `tbl_r_flyer_flyer_tag` */

DROP TABLE IF EXISTS `tbl_r_flyer_flyer_tag`;

CREATE TABLE `tbl_r_flyer_flyer_tag` (
  `fk_flyer_id` int(10) unsigned NOT NULL,
  `fk_flyer_tag_id` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_r_flyer_flyer_tag` */

insert  into `tbl_r_flyer_flyer_tag`(`fk_flyer_id`,`fk_flyer_tag_id`) values (16,1),(16,2),(16,4),(17,1),(17,2),(17,4),(18,1),(18,2),(18,4),(19,1),(19,2),(19,4),(20,1),(20,2),(20,4);

/*Table structure for table `tbl_r_flyer_set_to_color` */

DROP TABLE IF EXISTS `tbl_r_flyer_set_to_color`;

CREATE TABLE `tbl_r_flyer_set_to_color` (
  `fk_flyer_set_color` int(10) unsigned NOT NULL,
  `fk_color` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_r_flyer_set_to_color` */

/*Table structure for table `tbl_r_flyer_to_flyer_set` */

DROP TABLE IF EXISTS `tbl_r_flyer_to_flyer_set`;

CREATE TABLE `tbl_r_flyer_to_flyer_set` (
  `fk_flyer_id` int(10) unsigned NOT NULL,
  `fk_flyer_set` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_r_flyer_to_flyer_set` */

/*Table structure for table `tbl_r_flyer_to_font` */

DROP TABLE IF EXISTS `tbl_r_flyer_to_font`;

CREATE TABLE `tbl_r_flyer_to_font` (
  `fk_flyer_id` int(10) unsigned NOT NULL,
  `fk_font_id` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_r_flyer_to_font` */

/*Table structure for table `tbl_services` */

DROP TABLE IF EXISTS `tbl_services`;

CREATE TABLE `tbl_services` (
  `pk_services_id` int(11) NOT NULL AUTO_INCREMENT,
  `services_title` varchar(250) DEFAULT NULL,
  `services_description` text NOT NULL,
  `services_images` varchar(255) DEFAULT NULL,
  `services_creation_date_time` datetime DEFAULT NULL,
  PRIMARY KEY (`pk_services_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;

/*Data for the table `tbl_services` */

insert  into `tbl_services`(`pk_services_id`,`services_title`,`services_description`,`services_images`,`services_creation_date_time`) values (2,'RESIDENTIAL REAL ESTATE BROKERAGE','','photo_2.png','2015-10-15 07:26:48'),(3,'COMMERCIAL REAL ESTATE BROKERAGE','','photo_3.png','2015-10-15 07:28:20'),(4,'INDUSTRAIALS REAL ESTATE BROKERAGE','','photo_4.png','2015-10-15 07:43:25'),(5,'SPECIAL PURPOSE REAL ESTATE BROKERAGE','','photo_5.png','2015-10-15 07:43:45'),(6,'EXPERT MARKET ANALYSIS','','photo_6.jpg','2015-10-15 07:44:00');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
