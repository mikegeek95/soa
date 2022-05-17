<?php
require_once("clases/conexcion.php");
require_once('clases/class.Funciones.php');


try
{
	$db= new MySQL();
	$f = new Funciones();	
	
	$db->begin();
	

	
	$query ="select nombre from pueblos_magicos GROUP BY nombre";
	

	//echo($query);
	
	$result=$db->consulta($query);
	
	$result_num=$db->num_rows($result);
	$result_row=$db->fetch_assoc($result);
	
	if( $result_num  != 0)
	{
		do{
			
			$data[] = $result_row;
			

			
		}while($result_row=$db->fetch_assoc($result));
	}
	
	else {
		$data['LugaresOsio'][] ="";
	}
	
	echo (json_encode($data));


	$db->commit();
	
	
	
}
catch(Exception $e)
{
	$db->rollback();
	
	echo $e ;
}
?>