CREATE TABLE `chat_room`.`authors` (
  `author_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `surename` VARCHAR(50),
  `password` VARCHAR(50) NOT NULL,
  `age` INT NULL,
 
  PRIMARY KEY (`author_id`));