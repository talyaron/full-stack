

CREATE TABLE `chat_room`.`messages` (
  `author_id` INT NOT NULL,
  `message` VARCHAR(1020) NOT NULL,
  `date` DATETIME NOT NULL,
  `message_id` INT AUTO_INCREMENT,
  PRIMARY KEY (`message_id`));