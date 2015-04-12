<?php

	include 'db.php';

	$handle = $con->prepare('SELECT * FROM diseases');
	$handle->execute();

  	$result = $handle->fetchAll(\PDO::FETCH_OBJ);

  	echo json_encode($result);

?>