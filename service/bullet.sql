# Host: localhost  (Version: 5.7.26)
# Date: 2021-11-14 03:18:35
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "bullet"
#

DROP TABLE IF EXISTS `bullet`;
CREATE TABLE `bullet` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `is_custom` int(11) DEFAULT '0',
  `ctime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `ani_type` varchar(2) NOT NULL DEFAULT '1' COMMENT '弹幕动画类型',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='弹幕';
