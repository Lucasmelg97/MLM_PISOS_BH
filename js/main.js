(function($){
	"use strict";
	/*Inicializar nosso contador*/
	$('.contar').counterUp({
		time:1000,
		delay:10
	});


	var $doc =$('html, body');
	$('.scroll-page').click(function(){
		$doc.animate({
			scrollTop: $($.attr(this,'href')).offset().top
		},500);
		 return false;
	
	});
	$("#campoData").mask("99/99/9999");
	$("#campoTelefone").mask("(999) 999-9999");
	$("#campoSenha").mask("***-****");


})(jQuery);