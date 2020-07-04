$(".dropdown-menu a").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    const seleccion = $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });

 
  
$("#submit").click(function () {
    alert("confirmas el envio del formulario?");
   
  window.location.href = "confirmacion.html";
    
    });
