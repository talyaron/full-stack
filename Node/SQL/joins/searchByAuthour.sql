CREATE DEFINER=`root`@`localhost` PROCEDURE `getMessagesByAuthor`(
	IN author_id_param INT
)
BEGIN
	SELECT * 
	FROM messages
	WHERE author_id = author_id_param;
END