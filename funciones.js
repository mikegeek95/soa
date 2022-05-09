function ObtenerDatosFormulario(id)
{
	var  form = document.getElementById(id);
    var length = form.elements.length;
	var  cadena = "";
	
    for( var i = 0; i < length; i++ )
    {
        element = form.elements[i];
		 
        if(element.tagName.toLowerCase() == 'textarea' )
        {
               cadena +=element.name+"="+element.value+"&";
        }
		else if(element.tagName.toLowerCase() =='select')
		{
			cadena +=element.name+"="+element.value+"&";
		}
        else if( element.tagName.toLowerCase() == 'input' )
        {
                if( element.type == 'text' || element.type == 'hidden' || element.type == 'password' || element.type == 'date' || element.type == 'time')
                {
					cadena +=element.name+"="+element.value+"&";
                }
                else if( element.type == 'radio' && element.checked )
                {
                        if( !element.value )
                                params[element.name] = "on";
                        else
                               cadena +=element.name+"="+element.value+"&";
 
                }
                else if( element.type == 'checkbox' && element.checked )
                {
                        if( !element.value )
                                params[element.name] = "on";
                        else
                                cadena +=element.name+"="+element.value+"&";
                }
        }
    }
	cadena = cadena.substring(0,cadena.length-1);
    return cadena;
}


function buscar(formulario)
{
	//alert ("entro a buscarPedido");
	
	var cadena = ObtenerDatosFormulario(formulario);
	var resultado ="";

	$("#portfolio-container").html('<div align="center" class="mostrar"><img src="assets/img/loader.gif" alt="" /><br />Cargando...</div>');	
	
	$.ajax({
			  type: 'POST',
			  url: 'servicio.php',
			  dataType: "json",
			  data: cadena,
			  cache:false,
			  success:function(msj){
				  console.log(msj);

				  if(msj.length>0){

				   for (var i in msj) {

						resultado += ("<div class='col-lg-4 col-md-6 portfolio-item filter-app'>");
						resultado += ('<div class="border">');
						resultado += ('      <img src="assets/img/lo/'+msj[i].IdLugarOcio+'.jpg" class="img-fluid" alt="">');
						resultado += ('     <div class="caption">');
						resultado += ('       <h3>'+msj[i].nombre+'</h3>');
						resultado += ('       <p><b>Estado:</b> '+msj[i].estado+'</p>');
						resultado += ('       <p><b>Tipo:</b> '+msj[i].tipo+'</p>');
						resultado += ('       <p><b>Direccion:</b> '+msj[i].direccion+'</p>');
						resultado += ('       <p><b>Costo:</b> '+msj[i].precio+'</p>');
						resultado += ('       <p><b>Apertura: </b>'+msj[i].apertura+'</p>');
						resultado += ('       <p><b>Cierre:</b> '+msj[i].cierre+'</p>');
						resultado += ('       <p><b>Descripcion:</b> '+msj[i].Descripcion+'</p>');
						resultado += ('      </div>');
						resultado += ('    </div>');
						resultado += ('</div>');
					}
				}else{
					resultado ="<div align='center' class='mostrar portfolio-container'>No hay resultados</div>";
				}

					$('#portfolio-container').html(resultado);
				  
			  },
			  error:function(XMLHttpRequest, textStatus, errorThrown){
				  console.log(arguments);
				  var error;
				  if (XMLHttpRequest.status === 404) error="Pagina no existe"+XMLHttpRequest.status;// display some page not found error 
				  if (XMLHttpRequest.status === 500) error="Error del Servidor"+XMLHttpRequest.status; // display some server error 
				  $("#contenedor-clientes").html('<div class="alert_error"></div>');
				  $('.alert_error').hide(0).html('Ha ocurrido un error durante la ejecución'+error);
				
				  //OcultarDiv('mensajes');							  
			  }
		  });
}



function comboestados()
{

	var resultado ="";

	$.ajax({
			  type: 'POST',
			  url: 'estados.php',
			  dataType: "json",
			  cache:false,
			  success:function(msj){
				  console.log(msj);

				  if(msj.length>0){

					resultado += ('<label>ESTADO:</label>');
					resultado += ('	<select name="v_estado" id="v_estado" class="form-control">');
					resultado += ('	<option value="0">Seleccione un estado</option>');

				   for (var i in msj) {
						resultado += ('	<option value="'+msj[i].estado+' "> '+msj[i].estado+' </option>');
					}
				}else{
				
						resultado += ('	<option value="null "> ESTADOS NO ENCONTRADOS </option>');
						
				}
				resultado += ('	</select>');

					$('#combpestado').html(resultado);
				  
			  },
			  error:function(XMLHttpRequest, textStatus, errorThrown){
				  console.log(arguments);
				  var error;
				  if (XMLHttpRequest.status === 404) error="Pagina no existe"+XMLHttpRequest.status;// display some page not found error 
				  if (XMLHttpRequest.status === 500) error="Error del Servidor"+XMLHttpRequest.status; // display some server error 
				  $("#contenedor-clientes").html('<div class="alert_error"></div>');
				  $('.alert_error').hide(0).html('Ha ocurrido un error durante la ejecución'+error);
				
				  //OcultarDiv('mensajes');							  
			  }
		  });
		}

function combotipo()
{

	var resultado ="";

	$.ajax({
			  type: 'POST',
			  url: 'tipo.php',
			  dataType: "json",
			  cache:false,
			  success:function(msj){
				  console.log(msj);

				  if(msj.length>0){

					resultado += ('<label>TIPO:</label>');
					resultado += ('	<select name="v_tipo" id="v_tipo" class="form-control">');
					resultado += ('	<option value="0">Seleccione un tipo</option>');
				   for (var i in msj) {

						
						resultado += ('	<option value="'+msj[i].idtipo+' "> '+msj[i].nombre+' </option>');
					}
				}else{
				
						resultado += ('	<option value="null "> TIPOS NO ENCONTRADOS </option>');
						
				}
				resultado += ('	</select>');

					$('#combotipo').html(resultado);
				  
			  },
			  error:function(XMLHttpRequest, textStatus, errorThrown){
				  console.log(arguments);
				  var error;
				  if (XMLHttpRequest.status === 404) error="Pagina no existe"+XMLHttpRequest.status;// display some page not found error 
				  if (XMLHttpRequest.status === 500) error="Error del Servidor"+XMLHttpRequest.status; // display some server error 
				  $("#contenedor-clientes").html('<div class="alert_error"></div>');
				  $('.alert_error').hide(0).html('Ha ocurrido un error durante la ejecución'+error);
				
				  //OcultarDiv('mensajes');							  
			  }
		  });
}