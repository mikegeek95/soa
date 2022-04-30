<?php
 
    class MYSQL{
 
        //declaración de variables
        public $host; // para conectarnos a localhost o el ip del servidor de postgres
        public $db; // seleccionar la base de datos que vamos a utilizar
        public $user; // seleccionar el usuario con el que nos vamos a conectar
        public $pass; // la clave del usuario
        public $conexion;  //donde se guardara la conexión
        public $url; //dirección de la conexión que se usara para destruirla mas adelante
 
        //creación del constructor
        function __construct(){
            }
 
        //creación de la función para cargar los valores de la conexión.
        public function cargarValores(){
			
			 $this->host='ec2-52-71-69-66.compute-1.amazonaws.com';
            $this->db='d79jfb5dkcr3q8';
            $this->user='xbyvdleqybkrbe';
            $this->pass='ea076ba1e3974108109a108c6a3d315dd5b7a7b40001956e8210c9a98715be3f';
            $this->conexion="host='$this->host' dbname='$this->db' user='$this->user' password='$this->pass' ";
            }
 
            //función que se utilizara al momento de hacer la instancia de la clase
            function conectar(){
                $this->cargarValores();
                $this->url=pg_connect($this->conexion);
                return true;
            }
 
            //función para destruir la conexión.
            function destruir(){
                pg_close($this->url);
            }
		
			public function consulta($query)
			{
			   return pg_query($query);
			}
			
			public function num_rows($result){
				return pg_num_rows($result);
			}
		
			public function fetch_assoc ($result){
				return pg_fetch_object($result);
			}
		
			public function begin()
			{
			   pg_query("BEGIN;");
			}

			public function commit()
			{
				pg_query("COMMIT;");
			}

			public function rollback()
			{
				pg_query("ROLLBACK;");
			}
 
        }
 

 
?>