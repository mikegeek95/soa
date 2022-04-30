<?php
require_once("clases/conexcion.php");
require_once('clases/class.Funciones.php');


try
{
	$db= new MySQL();
	$db->conectar();
	$f = new Funciones();	
	
	$db->begin();
	
	$id = $_GET['id'];
	
	$query =("select os.nombre, os.direccion, os.precio, os.horario_apertura, os.horario_cierre, t.nombre as tipo from lugaresocio as os, tipo as t where t.idtipo=os.tipo and os.pueblo=$id");
	
	//echo($query);
	
	$result=$db->consulta($query);
	echo ($result);
	$result_num=$db->num_rows($result);
	$result_row=$db->fetch_assoc($result);
	
	if( $result_num  != 0)
	{
		do{
			
			$data['LugaresOsico'][] = $result_row;
			

			
		}while($result_row=$db->fetch_assoc($result));
	}
	
	else {
		$data['LugaresOsio'][] = $result_row;
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