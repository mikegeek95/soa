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
	console.log(cadena);

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



						//resultado += ('       <p><b>Apertura: </b>'+msj[i].apertura+'</p>');
						//resultado += ('       <p><b>Cierre:</b> '+msj[i].cierre+'</p>');


						resultado += (' <div class="col-12 ">');
						resultado += ('       <div class="card border-0 padding-5" style="border: 5px solid red;" >');
						resultado += ('         <div class="row g-0">');
						resultado += ('           <div class="col-md-4">');
						resultado += ('             <img src="assets/img/lo/'+msj[i].IdLugarOcio+'.jpg" class="img-fluid img-thumbnail" alt="...">');
						resultado += ('          </div>');
						resultado += ('         <div class="col-md-8">');
						resultado += ('           <div class="card-body b-0">');
						resultado += ('               <h2 class="card-title"><strong>'+msj[i].nombre+'</strong></h5>');
						resultado += ('               <ol class="list-group border-0 padding-0">');
						resultado += ('                 <li class="list-group-item border-0  padding-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">');
						resultado += ('                 <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>');
						resultado += ('                 </svg><strong > Estado:  </strong>'+msj[i].estado+'</li>');
						resultado += ('                 <li class="list-group-item border-0  padding-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">');
						resultado += ('                 <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>');
						resultado += ('                 </svg><strong > Pueblo:  </strong>'+msj[i].pueblomagico+'</li>');
						resultado += ('                 <li class="list-group-item border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">');
						resultado += ('                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>');
						resultado += ('                </svg> <strong > Direccion:  </strong>'+msj[i].direccion+'</li>');
						resultado += ('                 <li class="list-group-item border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">');
						resultado += ('                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>');
						resultado += ('                </svg> <strong > Tipo:  </strong>'+msj[i].tipo+'</li>');

						resultado += ('                 <li class="list-group-item border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">');
						resultado += ('                 <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>');
						resultado += ('                 </svg><strong > Costo entrada:  </strong>'+msj[i].precio+'</li>');
						resultado += ('                 <li class="list-group-item border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">');
						resultado += ('                 <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>');
						resultado += ('                 </svg><strong > H. Apertura:  </strong>'+msj[i].apertura+' Hrs.</li>');
						resultado += ('                 <li class="list-group-item border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">');
						resultado += ('                 <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>');
						resultado += ('                 </svg><strong > H. Cierre:  </strong>'+msj[i].cierre+' Hrs.</li>');
						resultado += ('               </ol>');
						resultado += ('           </div>');
						resultado += ('          <div class="card-footer bg-transparent border-0 ">');
						resultado += ('            <p class="card-text"><strong>Descripcion: </strong>'+msj[i].Descripcion+'</p>');
						resultado += ('          </div>');
						resultado += ('           </div> ');  
						resultado += ('          </div>');
						resultado += ('      </div>');
						resultado += ('   <hr class="mt-5">');
						resultado += ('  </div>');
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
						resultado += ('	<option value="'+msj[i].estado+'"> '+msj[i].estado+' </option>');
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

function combopueblo()
{

	var resultado ="";

	$.ajax({
			  type: 'POST',
			  url: 'pueblos.php',
			  dataType: "json",
			  cache:false,
			  success:function(msj){
				  console.log(msj);

				  if(msj.length>0){

					resultado += ('<label>PUEBLO MAGICO:</label>');
					resultado += ('	<select name="v_pueblo" id="v_pueblo" class="form-control">');
					resultado += ('	<option value="0">Seleccione un pueblo magico</option>');

				   for (var i in msj) {
						resultado += ('	<option value="'+msj[i].nombre+'"> '+msj[i].nombre+' </option>');
					}
				}else{
				
						resultado += ('	<option value="null "> PUEBLOS MAGICOS NO ENCONTRADOS </option>');
						
				}
				resultado += ('	</select>');

					$('#combopueblo').html(resultado);
				  
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