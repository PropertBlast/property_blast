-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jan 12, 2016 at 12:12 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `property_blast`
--
CREATE DATABASE IF NOT EXISTS `property_blast` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `property_blast`;

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

DROP TABLE IF EXISTS `ci_sessions`;
CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ci_sessions`
--

INSERT INTO `ci_sessions` (`session_id`, `ip_address`, `user_agent`, `last_activity`, `user_data`) VALUES
('5e307c12d75132d657f636e16d1b2f80', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1443727025, ''),
('3dce4b26f6eb9167150d574bf78d05f3', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1443714798, 'a:2:{s:9:"user_data";s:0:"";s:10:"admin_data";a:3:{s:5:"admin";i:1;s:8:"username";s:5:"usman";s:11:"pk_admin_id";s:1:"2";}}'),
('f0d6226e3eaf05ac808d09d4f7295099', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1443732677, '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

DROP TABLE IF EXISTS `tbl_admin`;
CREATE TABLE `tbl_admin` (
  `pk_admin_id` int(11) NOT NULL,
  `admin_username` varchar(100) CHARACTER SET utf8 NOT NULL,
  `admin_password` varchar(250) CHARACTER SET utf8 NOT NULL,
  `admin_email` varchar(250) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`pk_admin_id`, `admin_username`, `admin_password`, `admin_email`) VALUES
(2, 'usman', '2f1fed5365c79d8fea7859dcc8788d77', 'usmanakram13@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_button_tags`
--

DROP TABLE IF EXISTS `tbl_button_tags`;
CREATE TABLE `tbl_button_tags` (
  `pk_button_tags` int(11) NOT NULL,
  `button_tags_title` varchar(255) NOT NULL,
  `button_tags_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_button_tags`
--

INSERT INTO `tbl_button_tags` (`pk_button_tags`, `button_tags_title`, `button_tags_date`) VALUES
(1, 'Open House Flyer', '2016-01-07'),
(2, 'Recruiting', '2016-01-07'),
(3, 'Newsletters', '2016-01-07'),
(4, 'Broker Tour Flyers', '2016-01-07');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_clients`
--

DROP TABLE IF EXISTS `tbl_clients`;
CREATE TABLE `tbl_clients` (
  `pk_client_id` int(11) NOT NULL,
  `client_name` varchar(255) DEFAULT NULL,
  `client_description` text,
  `client_logo` varchar(255) DEFAULT NULL,
  `client_status` tinyint(1) DEFAULT '1',
  `client_creation_date_time` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_clients`
--

INSERT INTO `tbl_clients` (`pk_client_id`, `client_name`, `client_description`, `client_logo`, `client_status`, `client_creation_date_time`) VALUES
(1, 'Guess', NULL, 'Client_1.gif', 1, '2015-09-23 07:27:11'),
(3, 'Banks', NULL, 'Client_3.gif', 1, '2015-09-23 07:33:34'),
(4, 'Client frontier', NULL, 'Client_4.gif', 1, '2015-09-23 07:50:48'),
(5, 'Client Nestle', NULL, 'Client_5.gif', 1, '2015-09-23 07:51:07'),
(6, 'Nikon', NULL, 'Client_6.gif', 1, '2015-09-23 07:51:28');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_flyer_detail`
--

DROP TABLE IF EXISTS `tbl_flyer_detail`;
CREATE TABLE `tbl_flyer_detail` (
  `pk_flyer_deatil_id` int(11) NOT NULL,
  `flyer_image` varchar(255) NOT NULL,
  `flyer_image_size` varchar(255) NOT NULL,
  `flyer_creation_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_flyer_detail`
--

INSERT INTO `tbl_flyer_detail` (`pk_flyer_deatil_id`, `flyer_image`, `flyer_image_size`, `flyer_creation_date`) VALUES
(7, 'banner.png', '', '2016-01-07');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_flyer_tags`
--

DROP TABLE IF EXISTS `tbl_flyer_tags`;
CREATE TABLE `tbl_flyer_tags` (
  `pk_flyer_tags` int(11) NOT NULL,
  `flyer_tags_title` varchar(255) NOT NULL,
  `flyer_tags_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_flyer_tags`
--

INSERT INTO `tbl_flyer_tags` (`pk_flyer_tags`, `flyer_tags_title`, `flyer_tags_date`) VALUES
(1, 'Open House Flyer', '2016-01-07'),
(2, 'Recruiting', '2016-01-07'),
(3, 'Newsletters', '2016-01-07'),
(4, 'Broker Tour Flyers', '2016-01-07');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_page`
--

DROP TABLE IF EXISTS `tbl_page`;
CREATE TABLE `tbl_page` (
  `pk_page_id` int(11) NOT NULL,
  `page_delete_able` tinyint(1) DEFAULT '1',
  `page_title` varchar(250) NOT NULL,
  `page_alias` varchar(250) DEFAULT NULL,
  `page_description` longtext NOT NULL,
  `page_image` varchar(255) DEFAULT NULL,
  `page_status` tinyint(1) NOT NULL DEFAULT '1',
  `page_creation_date_time` datetime NOT NULL,
  `page_last_updated_date_time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `tbl_page`
--

INSERT INTO `tbl_page` (`pk_page_id`, `page_delete_able`, `page_title`, `page_alias`, `page_description`, `page_image`, `page_status`, `page_creation_date_time`, `page_last_updated_date_time`) VALUES
(1, 1, 'About us', 'aboutus', '&lt;p&gt;Major Properties was founded in 1964 by Arnold Luster and Fred Mills. In the family tradition, sons Jeff Luster and Brad Luster became owners of the business in 1992. As a leader in the Downtown Los Angeles real estate market for over 50 years, Major Properties has brokered over $4 billion in transactions and has served thousands of property sellers, buyers, lessors and lessees.&lt;/p&gt;n&lt;p&gt;We specialize in industrial, commercial and residential real estate located in Downtown Los Angeles, Central, South and East Los Angeles, Hollywood, West Hollywood, Koreatown and Mid-City areas.&lt;/p&gt;n&lt;p&gt;Our residential division serves the needs of individuals or corporations looking to purchase, sell or lease Downtown condos, lofts and apartments. Single family residences and multi-family income properties are also included in the mix.&lt;/p&gt;', 'photo_8.png', 1, '2014-03-05 07:47:06', '2014-03-05 09:47:13'),
(2, 1, 'Contact us', 'contactus', '<p>\r\n                        Major Properties <br />\r\n                        1200 W. Olympic Boulevard <br />\r\n                        Los Angeles, CA 90015\r\n                        </p>\r\n\r\n                        <p>\r\n                        213-747-4151 <br />\r\n                        info@majorproperties.com\r\n                        </p>', NULL, 0, '2014-03-06 05:34:58', '2015-03-16 20:59:24'),
(3, 1, 'Mission', 'mission', 'Our mission is to provide superior brokerage and management services, backed by the latest research, analytics and evaluation expertise. Our clients’ interests always come first, as our success depends on it. We are also owners of real estate, and treat every new listing like it is one of our own.\r\n\r\nMajor Properties is not bound by rigid policy guidelines like some national real estate firms headquartered in far-off cities. We provide a flexible marketing effort that rapidly adjusts to changing demands and fluctuating business conditions. We can provide you with up-to-the-minute sales and leasing information, as well as honest projections of future real estate value, based on our many years of experience.\r\n\r\nLos Angeles is truly multicultural, and the ability to communicate clearly is paramount in a city where people of all nationalities negotiate to sell, purchase and lease some of the choicest real estate in the world. Accordingly, our multi-lingual staff speaks English, Spanish, Korean, French, Farsi and Hebrew.', 'photo_11.png', 1, '2014-03-06 06:08:38', '2014-03-06 11:19:13'),
(4, 1, 'Leader ship', 'leadership', 'Major Properties was founded in 1964 by Arnold Luster and Fred Mills. In the family tradition, sons Jeff Luster and Brad Luster became owners of the business in 1992. As a leader in the Downtown Los Angeles real estate market for over 50 years, Major Properties has brokered over $4 billion in transactions and has served thousands of property sellers, buyers, lessors and lessees.', NULL, 1, '2014-03-06 06:38:35', '2014-03-06 08:18:04'),
(5, 1, 'Marketing', 'marketing', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur  pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit  amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante  ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;  In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam  convallis, arcu vel pellentesque sodales, nisi est varius diam, ac  ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec  scelerisque ligula mollis lobortis.</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla  at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit  amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante  ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;  In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam  convallis, arcu vel pellentesque sodales, nisi est varius diam, ac  ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec  scelerisque ligula mollis lobortis.</p>', NULL, 0, '2014-03-06 06:56:15', '2015-03-16 20:50:33'),
(20, 1, 'Agents', 'agents', '<p>Coming from a diverse and vibrant background in mathematics, physical sciences, and the entertainment industry, Joe’s unique perspective and experiences gives him an edge not only in a technical sense but in the personal arena as well.</p>\r\n\r\n                        <p>Prior to joining the Major Properties team, Joe worked for William Morris Endeavor where he dealt with high-profile clients and worked alongside an international agent. This experience taught him the importance of correct client placement and the effectiveness of targeted marketing in order to ensure client success. In the commercial real estate sector, this knowledge has translated into a keen sense for value optimization through tenant placement as well as a strong marketing repertoire.</p>\r\n\r\n                        <p>Joe specializes in the leasing and sales of commercial, industrial, and multi-unit apartment properties. His energy and charisma has blessed him with a far-reaching network of people and friends, which he uses to his advantage in the marketing and disposition of property. Whether he represents owner/users, investors, or tenants, he is committed to the same principles of value maximization and client success.</p>\r\n\r\n                        <p>Joe is a graduate of USC where he obtained his B.A. in Economics. He is a licensed California Real Estate Agent and will be happy to provide references upon request. He may be reached by phone at (213) 747-0378 or by email joe@majorproperties.com.\r\n                        </p>', NULL, 1, '2015-09-21 06:33:44', '0000-00-00 00:00:00'),
(21, 1, 'Clients', 'clients', 'Over the years, Major Properties has served thousands of clients. From individuals to small and large businesses, multi-national corporations, investment groups and major developers, we have strived to maintain high ethical and performance standards.\r\n\r\nWe offer personal "on-the-street" experience. Major Properties has been in business for over 50 years and understands the complexities of the Los Angeles marketplace. We have helped our clients to purchase or rent the "right" property at the “right” price or to sell, lease or trade their real estate.', NULL, 1, '2015-09-23 07:35:40', '0000-00-00 00:00:00'),
(22, 0, 'Teams', 'teams', 'Coming from a diverse and vibrant background in mathematics, physical sciences, and the entertainment industry, Joe’s unique perspective and experiences gives him an edge not only in a technical sense but in the personal arena as well.\r\n\r\nPrior to joining the Major Properties team, Joe worked for William Morris Endeavor where he dealt with high-profile clients and worked alongside an international agent. This experience taught him the importance of correct client placement and the effectiveness of targeted marketing in order to ensure client success. In the commercial real estate sector, this knowledge has translated into a keen sense for value optimization through tenant placement as well as a strong marketing repertoire.\r\n\r\nJoe specializes in the leasing and sales of commercial, industrial, and multi-unit apartment properties. His energy and charisma has blessed him with a far-reaching network of people and friends, which he uses to his advantage in the marketing and disposition of property. Whether he represents owner/users, investors, or tenants, he is committed to the same principles of value maximization and client success.\r\n\r\nJoe is a graduate of USC where he obtained his B.A. in Economics. He is a licensed California Real Estate Agent and will be happy to provide references upon request. He may be reached by phone at (213) 747-0378 or by email joe@majorproperties.com.', NULL, 1, '2015-09-28 07:38:37', '0000-00-00 00:00:00'),
(23, 0, 'Histroy', 'histroy', '&lt;p&gt;Major Properties was founded in 1964 by Arnold Luster and Fred Mills. In the family tradition, sons Jeff Luster and Brad Luster became owners of the business in 1992. As a leader in the Downtown Los Angeles real estate market for over 50 years, Major Properties has brokered over $4 billion in transactions and has served thousands of property sellers, buyers, lessors and lessees.&lt;/p&gt;\\r\\n&lt;p&gt;We specialize in industrial, commercial and residential real estate located in Downtown Los Angeles, Central, South and East Los Angeles, Hollywood, West Hollywood, Koreatown and Mid-City areas.&lt;/p&gt;\\r\\n&lt;p&gt;Our residential division serves the needs of individuals or corporations looking to purchase, sell or lease Downtown condos, lofts and apartments. Single family residences and multi-family income properties are also included in the mix.&lt;/p&gt;', 'photo_23.png', 1, '2015-10-15 06:18:00', '0000-00-00 00:00:00'),
(24, 0, 'Brokerage Service', 'brokerageservice', 'Major Properties was founded in 1964 by Arnold Luster and Fred Mills. In the family tradition, sons Jeff Luster and Brad Luster became owners of the business in 1992. As a leader in the Downtown Los Angeles real estate market for over 50 years, Major Properties has brokered over $4 billion in transactions and has served thousands of property sellers, buyers, lessors and lessees.\\r\\n\\r\\nWe specialize in industrial, commercial and residential real estate located in Downtown Los Angeles, Central, South and East Los Angeles, Hollywood, West Hollywood, Koreatown and Mid-City areas.\\r\\n\\r\\nOur residential division serves the needs of individuals or corporations looking to purchase, sell or lease Downtown condos, lofts and apartments. Single family residences and multi-family income properties are also included in the mix.', NULL, 1, '2015-10-15 07:53:28', '0000-00-00 00:00:00'),
(25, 0, 'Property Management', 'propertymanagement', 'Major Properties was founded in 1964 by Arnold Luster and Fred Mills. In the family tradition, sons Jeff Luster and Brad Luster became owners of the business in 1992. As a leader in the Downtown Los Angeles real estate market for over 50 years, Major Properties has brokered over $4 billion in transactions and has served thousands of property sellers, buyers, lessors and lessees.\\r\\n\\r\\nWe specialize in industrial, commercial and residential real estate located in Downtown Los Angeles, Central, South and East Los Angeles, Hollywood, West Hollywood, Koreatown and Mid-City areas.\\r\\n\\r\\nOur residential division serves the needs of individuals or corporations looking to purchase, sell or lease Downtown condos, lofts and apartments. Single family residences and multi-family income properties are also included in the mix.', NULL, 1, '2015-10-15 07:53:43', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_services`
--

DROP TABLE IF EXISTS `tbl_services`;
CREATE TABLE `tbl_services` (
  `pk_services_id` int(11) NOT NULL,
  `services_title` varchar(250) DEFAULT NULL,
  `services_description` text NOT NULL,
  `services_images` varchar(255) DEFAULT NULL,
  `services_creation_date_time` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `tbl_services`
--

INSERT INTO `tbl_services` (`pk_services_id`, `services_title`, `services_description`, `services_images`, `services_creation_date_time`) VALUES
(2, 'RESIDENTIAL REAL ESTATE BROKERAGE', '', 'photo_2.png', '2015-10-15 07:26:48'),
(3, 'COMMERCIAL REAL ESTATE BROKERAGE', '', 'photo_3.png', '2015-10-15 07:28:20'),
(4, 'INDUSTRAIALS REAL ESTATE BROKERAGE', '', 'photo_4.png', '2015-10-15 07:43:25'),
(5, 'SPECIAL PURPOSE REAL ESTATE BROKERAGE', '', 'photo_5.png', '2015-10-15 07:43:45'),
(6, 'EXPERT MARKET ANALYSIS', '', 'photo_6.jpg', '2015-10-15 07:44:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ci_sessions`
--
ALTER TABLE `ci_sessions`
  ADD PRIMARY KEY (`session_id`),
  ADD KEY `last_activity_idx` (`last_activity`);

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`pk_admin_id`);

--
-- Indexes for table `tbl_button_tags`
--
ALTER TABLE `tbl_button_tags`
  ADD PRIMARY KEY (`pk_button_tags`);

--
-- Indexes for table `tbl_clients`
--
ALTER TABLE `tbl_clients`
  ADD PRIMARY KEY (`pk_client_id`);

--
-- Indexes for table `tbl_flyer_detail`
--
ALTER TABLE `tbl_flyer_detail`
  ADD PRIMARY KEY (`pk_flyer_deatil_id`);

--
-- Indexes for table `tbl_flyer_tags`
--
ALTER TABLE `tbl_flyer_tags`
  ADD PRIMARY KEY (`pk_flyer_tags`);

--
-- Indexes for table `tbl_page`
--
ALTER TABLE `tbl_page`
  ADD PRIMARY KEY (`pk_page_id`);

--
-- Indexes for table `tbl_services`
--
ALTER TABLE `tbl_services`
  ADD PRIMARY KEY (`pk_services_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `pk_admin_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_button_tags`
--
ALTER TABLE `tbl_button_tags`
  MODIFY `pk_button_tags` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_clients`
--
ALTER TABLE `tbl_clients`
  MODIFY `pk_client_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `tbl_flyer_detail`
--
ALTER TABLE `tbl_flyer_detail`
  MODIFY `pk_flyer_deatil_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `tbl_flyer_tags`
--
ALTER TABLE `tbl_flyer_tags`
  MODIFY `pk_flyer_tags` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_page`
--
ALTER TABLE `tbl_page`
  MODIFY `pk_page_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `tbl_services`
--
ALTER TABLE `tbl_services`
  MODIFY `pk_services_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;