<?php

	include '../../../db.php';
	session_start();
	$params = json_decode(file_get_contents('php://input'),true);

	// print_r($params);
	// exit;
	$handle = $con->prepare('INSERT INTO posts(userid, timestamp, pest_disease,description,date,image, area_affected,lat,lng,disease_type) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');

	if($handle->execute(array($_SESSION['userid'],date('ymdhis'), $params['diseaseSelected'],$params['desc'],$params['date'],$params['photo'],$params['affected_area'],$params['latlong']['k'],$params['latlong']['D'],$params['diseaseTypeSelected']))){
		echo "posted";
	};

	// print_r($handle);
?>