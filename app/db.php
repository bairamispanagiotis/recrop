<?php
//Connection Properties
try{
$con = new \PDO(   'mysql:host=localhost;dbname=savecrop_org;charset=utf8', 
                        'savecrop_org', 
                        'qwaszx12', 
                        array(
                            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION, 
                            \PDO::ATTR_PERSISTENT => false
                        )
                    );
}catch(PDOException $e){
	echo $e->getMessage();
	die();
}
?>
