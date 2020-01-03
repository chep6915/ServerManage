<?php

//including the mysqlii connect parameters.
include(dirname(dirname(dirname(__DIR__))).'/public/practice/sql-connections/db-creds.inc');
error_reporting(0);
$con = mysqli_connect($host,$dbuser,$dbpass);

//mysqli_select_db($con,$dbname);
@mysqli_select_db($con,$dbname) or die( "Unable to connect to the database: $dbname");


if (!$con)
  {
  die('Could not connect: ' . mysqli_error($con));
  }
############################################
# For Less-24
$form_title_in="Please Login to Continue";
$form_title_ns="New User";
$feedback_title_ns="New User";
$form_title_ns= "Less-24";
?>




 
