$(document).ready(function(){
	
	
	var elem_agregados = 0;
  elem_agregados = 0;

  // botones
  var $enviar = $('#enviar');
  var $verCarro = $('#ver-carro');
  var $borrar = $('#borrar');


  //$('#ver-carro').find('span').text('#'+elem_agregados);
  $verCarro.find('span').text('#'+elem_agregados);
  $enviar.addClass('disabled');
  $verCarro.addClass('disabled');

  console.log('Listo para funcionar :D');      

	// elemento al que agregar el evento
	boton_agregar = $('.thumbnail').find('button');      
  $(boton_agregar).on('click',function(){
 
  	// recuperar datos desde data-id
  	 _id = $(this).closest('.thumbnail').data('id');

    $.get("index.php",{producto : _id},
     function(){
     	elem_agregados++;
     	$('#ver-carro').find('span').text('#'+elem_agregados);
      $('#enviar').removeClass('disabled');
      $('#ver-carro').removeClass('disabled');
        console.log('agregado '+ _id);
      });
  });

  // boton para enviar correo
  $enviar.on('click', function(){

  	$.get("verlista.php",{correo : 1}, function(datos){

      //$('#contenedor').html(datos);
      // alert('Su pedido\n'+ datos);
      //console.log(datos);
      alert('Abrir un modal con formulario que permita enviar correo');
  		//console.log('Correo enviado');
  		// TODO
  		// recuperar lo que nos devuelve el servidor e imprimirlo en pantalla con js
  		// o probar alterativa de que usuario llene un formulario con datos para enviar
  		// enviar con phpmailer smtp de gmail

  	});

  });

  $verCarro.on('click', function() {

      $.get("verlista.php",{correo : 1}, function(datos){

      $('#contenedor').html(datos);
      
      // alert('Su pedido\n'+ datos);
      //console.log(datos);
      console.log('Mostrando datos');
      

    });

  })

  // boton para eliminar los datos de sesion
  $borrar.on('click', function(){

  		$.get("index.php", {eliminar : 1}, function(){
  			elem_agregados = 0;
  			$('#ver-carro').find('span').text('#'+elem_agregados);
        $('#ver-carro').addClass('disabled');
        $('#enviar').addClass('disabled');
  			console.log('Todos los elementos eliminados');
  		});

  });



});