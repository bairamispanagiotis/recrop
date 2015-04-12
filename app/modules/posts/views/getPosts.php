<?php

	include '../../../db.php';
	session_start();

	$handle = $con->prepare('SELECT * FROM posts  INNER JOIN users ON posts.userid=users.id');
	$handle->execute();
  	$result = $handle->fetchAll(\PDO::FETCH_OBJ);
  	echo json_encode($result);
?>