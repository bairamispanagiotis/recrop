<?
include 'db.php';
session_start();
$username = $_POST['username'];
$password = $_POST['password'];
$handle = $con->prepare('SELECT * FROM users WHERE username = ? AND password = ? LIMIT 1');
 $handle->bindValue(1, $username);
 $handle->bindValue(2, $password);
 $handle->execute();
    $result = $handle->fetchAll(\PDO::FETCH_OBJ);
  //   echo $result[0]->id;
 	// print_r($result);
 	// exit;
 	if($result){
 		$_SESSION['username'] = $result[0]->username;
 		$_SESSION['userid'] = $result[0]->id;
 		header("Location: index.php");
		die();
 	}else{
 		header("Location: login.html");
 	}
?>