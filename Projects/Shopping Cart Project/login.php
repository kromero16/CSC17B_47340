<?php
	$loggedin = false;
	$error = false;

	if($SERVER['REQUEST_METHOD'] == 'POST'){
		if(!empty($_POST['email']) $$
			!empty($_POST['password'])){
			if((strtolower($_POST['email'])=='me@example.com') && ($_POST['password'] == 'testpass')){
				setcookie('Samuel', 'Clements',time()+3600);
				$loggedin = true;
			}else{
				$error = 'The submitted email address and password do not match those on file!';
			}
		}else{
			$error = 'Please make sure you enter both an email address and a password!';
		}
	}

	define('TITLE','Login');
	include('header.html');

	if($error){
		print '<p class="error">' . $error . '</p>';
	}

	if($loggedin){
		print '<p>You are now logged in!</p>';
	}else{
		print '<h2>Login Form</h2>
		<form action="login.php" method="post">
		<p><label>Email Address <input type="email" name="email"></label></p>
		<p><label>Password <input type="password" name="password"></label></p>
		<p><input type="submit" name="submit" value="Log In!"></p>
		</form>';
	}

	include('footer.html');


?>