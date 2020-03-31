DROP TABLE IF EXISTS `website_badge_requests`;
CREATE TABLE `website_badge_requests`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `badge_imaging` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `status` enum('open','accept','decline') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'open',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

INSERT INTO `website_settings` VALUES ('draw_badge_imaging', NULL);
INSERT INTO `website_settings` VALUES ('draw_badge_currency', NULL);
INSERT INTO `website_settings` VALUES ('draw_badge_price', NULL);
