<?php
	//connection variables
	$host = "localhost";
	$db = "myDB";
	$user = "kevkvn13";
	$pass = "pgt957";

	//connect to DB
	$connection = new mysqli($host,$user,$pass,$db);

	//check for errors
	if($connection->connect_error) die($connection->connect_error);

?>