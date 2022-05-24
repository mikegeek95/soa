<?php
require_once("clases/conexcion.php");
require_once('clases/class.Funciones.php');


try
{
	$db= new MySQL();
	$f = new Funciones();	
	
	$db->begin();
	
	$id = (isset($_POST['id']))? $_POST['id'] : "";
	$v_estado = (isset($_POST['v_estado']))? $_POST['v_estado'] : "0";
	$v_pueblo = (isset($_POST['v_pueblo']))? $_POST['v_pueblo'] : "0";
	$v_tipo = (isset($_POST['v_tipo']))? $_POST['v_tipo'] : "0";
	$v_nombre = (isset($_POST['v_nombre']))? $_POST['v_nombre'] : "";
	
	$query ="select os.IdLugarOcio, os.nombre, os.direccion, os.Descripcion, os.precio, os.apertura, os.cierre, t.nombre as tipo, pm.estado, pm.nombre as pueblomagico from lugaresdeocio as os, tipo as t , pueblos_magicos as pm where t.idtipo=os.tipodelugar and pm.idPueblos_Magicos=os.IdPuebloMagico ";
	
	$query .= ($id != '') ? " and os.idpueblomagico=$id ":" ";
	$query .= ($v_estado != '0') ? " and pm.estado like '$v_estado' ":" ";
	$query .= ($v_pueblo != '0') ? " and pm.nombre like '$v_pueblo' ":" ";
	$query .= ($v_tipo != '0') ? " and t.idtipo=$v_tipo ":" ";
	$query .= ($v_nombre != '') ? " and os.nombre like '%$v_nombre%' ":" ";
	

	
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