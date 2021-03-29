<?php

include ('connect.php');
include('./log4php/Logger.php');


// log4php configuration file
Logger::configure('log4php.config.xml');
// get Logger
$log = Logger::getLogger('test.data');

// Connect to the database
$mysqli = new mysqli($hostname, $username, $password, $database);

// check connection
if (mysqli_connect_errno())	{
  $log->error("Connect failed: ". mysqli_connect_error()); 
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
}


$log->debug("START -----------------------");
		
$sql = "SELECT * FROM tb_v_ziel";  
$log->debug($sql);       
$q = $mysqli->query($sql);

for ($result = array (); $row = $q->fetch_assoc(); $result[] = $row) {
	$x = date_create_from_format('Y-m-d H:i:s',$row['cre_dat']);
	$row['cre_dat'] = date_format($x,'d.m.Y H:i');
	if ($row['chg_dat']!=null) {
		$x = date_create_from_format('Y-m-d H:i:s',$row['chg_dat']);
		$row['chg_dat'] = date_format($x,'d.m.Y H:i');
	}
	
	//---- add count of plans to the overview result ---
	$insql = "SELECT count(*) as anz FROM tb_plan where zid=" . $row['zid'];
	$iq = $mysqli->query($insql);
	$irow = $iq->fetch_assoc(); 
	$row['anzahl'] = $irow['anz'];
	$iq->close();
}
		
echo json_encode($result);

$mysqli->close();

$log->debug("END -----------------------");
?>