<?php
 
	session_start();

	require_once 'php/PHPMailer/PHPMailerAutoload.php';

	$errors = [];

	if(isset($_POST['email'],$_POST['suggestion'])){
		
	}