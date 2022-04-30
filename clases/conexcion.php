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
			
			 $this->host='ec2-34-194-73-236.compute-1.amazonaws.com';
            $this->db='d5b9ruct8slt0f';
            $this->user='hpnxskrqgkmifn';
            $this->pass='45b3ca0d827e9532658dfb172e7eac60e79df2ba87d259da54481ca27244baec';
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