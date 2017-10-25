<?php
	//user libraries
	require_once 'connect.php';

	//create table
	function createTable($name,$query){
		queryMysql("CREATE TABLE IF NOT EXISTS $name($query)");
		echo "Table '$name' created or already exists.<br>";
	}

	//query functions
	function queryMysql($query){
		global $connection;
		$result = $connection->query($query);
		if(!$result) die($connection->error);
		return $result;
	}

	//sanitize string
	function sanitizeString($var){
		$var = stripslashes($var);
		$var = htmlentities($var);
		$var = stripslashes($var);
		return $connection->real_escape_string($var);
	}
	
?>