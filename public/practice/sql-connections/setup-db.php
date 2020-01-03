<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SETUP DB</title>
</head>

<body bgcolor="#000000">

<div style=" margin-top:20px;color:#FFF; font-size:24px; text-align:center"> Welcome&nbsp;&nbsp;&nbsp;<font color="#FF0000"> Dhakkan </font><br></div>

<div style=" margin-top:10px;color:#FFF; font-size:23px; text-align:left">
<font size="3" color="#FFFF00">
SETTING UP THE DATABASE SCHEMA AND POPULATING DATA IN TABLES:
</br></br> 


<?php
//including the mysqlii connect parameters.
include(dirname(dirname(dirname(__DIR__))).'/public/practice/sql-connections/db-creds.inc');


$con = mysqli_connect($host,$dbuser,$dbpass);
if (!$con)
  {
  die('[*]...................Could not connect to DB, check the creds in db-creds.inc: ' . mysqli_error($con));
  }




//@mysqli_select_db('mysqlii',$con)
	
//purging Old Database	
	$sql="DROP DATABASE IF EXISTS security";
	if (mysqli_query($con,$sql))
		{echo "[*]...................Old database purged if exists"; echo "</br></br>";}
	else 
		{echo "[*]...................Error purging database: " . mysqli_error($con); echo "</br></br>";}


//Creating new database security
	$sql="CREATE database `security`";
	if (mysqli_query($con,$sql))
		{echo "[*]...................Creating New database successfully";echo "</br></br>";}
	else 
		{echo "[*]...................Error creating database: " . mysqli_error($con);echo "</br></br>";}

//creating table users
$sql="CREATE TABLE security.users (id int(3) NOT NULL AUTO_INCREMENT, username varchar(20) NOT NULL, password varchar(20) NOT NULL, PRIMARY KEY (id))";
	if (mysqli_query($con,$sql))
		{echo "[*]...................Creating New Table 'users' successfully";echo "</br></br>";}
	else 
		{echo "[*]...................Error creating Table: " . mysqli_error($con);echo "</br></br>";}


//creating table emails
$sql="CREATE TABLE security.emails
		(
		id int(3)NOT NULL AUTO_INCREMENT,
		email_id varchar(30) NOT NULL,
		PRIMARY KEY (id)
		)";
	if (mysqli_query($con,$sql))
		{echo "[*]...................Creating New Table 'emails' successfully"; echo "</br></br>";}
	else 
		{echo "[*]...................Error creating Table: " . mysqli_error($con);echo "</br></br>";}



//creating table uagents
$sql="CREATE TABLE security.uagents
		(
		id int(3)NOT NULL AUTO_INCREMENT,
		uagent varchar(256) NOT NULL,
		ip_address varchar(35) NOT NULL,
		username varchar(20) NOT NULL,
		PRIMARY KEY (id)
		)";
	if (mysqli_query($con,$sql))
		{echo "[*]...................Creating New Table 'uagents' successfully";echo "</br></br>";}
	else 
		{echo "[*]...................Error creating Table: " . mysqli_error($con);echo "</br></br>";}


//creating table referers
$sql="CREATE TABLE security.referers
		(
		id int(3)NOT NULL AUTO_INCREMENT,
		referer varchar(256) NOT NULL,
		ip_address varchar(35) NOT NULL,
		PRIMARY KEY (id)
		)";
	if (mysqli_query($con,$sql))
		{echo "[*]...................Creating New Table 'referers' successfully";echo "</br></br>";}
	else 
		{echo "[*]...................Error creating Table: " . mysqli_error($con);echo "</br></br>";}



//inserting data
$sql="INSERT INTO security.users (id, username, password) VALUES ('1', 'Dumb', 'Dumb'), ('2', 'Angelina', 'I-kill-you'), ('3', 'Dummy', 'p@ssword'), ('4', 'secure', 'crappy'), ('5', 'stupid', 'stupidity'), ('6', 'superman', 'genious'), ('7', 'batman', 'mob!le'), ('8', 'admin', 'admin'), ('9', 'admin1', 'admin1'), ('10', 'admin2', 'admin2'), ('11', 'admin3', 'admin3'), ('12', 'dhakkan', 'dumbo'), ('14', 'admin4', 'admin4')";
	if (mysqli_query($con,$sql))
		{echo "[*]...................Inserted data correctly into table 'users'";echo "</br></br>";}
	else 
		{echo "[*]...................Error inserting data: " . mysqli_error($con);echo "</br></br>";}



//inserting data
$sql="INSERT INTO `security`.`emails` (id, email_id) VALUES ('1', 'Dumb@dhakkan.com'), ('2', 'Angel@iloveu.com'), ('3', 'Dummy@dhakkan.local'), ('4', 'secure@dhakkan.local'), ('5', 'stupid@dhakkan.local'), ('6', 'superman@dhakkan.local'), ('7', 'batman@dhakkan.local'), ('8', 'admin@dhakkan.com')";
	if (mysqli_query($con,$sql))
		{echo "[*]...................Inserted data correctly  into table 'emails'";echo "</br></br>";}
	else 
		{echo "[*]...................Error inserting data: " . mysqli_error($con);echo "</br></br>";}

//CREATE TABLE security.search (id int(3) NOT NULL AUTO_INCREMENT, search varchar(20) NOT NULL, PRIMARY KEY (id));
//INSERT INTO `security`.`search` (search) VALUES ( 'Dumb@dhakkan.com'), ('Angel@iloveu.com'), ('Dummy@dhakkan.local'), ( 'secure@dhakkan.local'), ( 'stupid@dhakkan.local'), ( 'superman@dhakkan.local'), ( 'batman@dhakkan.local'), ( 'admin@dhakkan.com')"; 
?>


</font>
</div>
</body>
</html>
