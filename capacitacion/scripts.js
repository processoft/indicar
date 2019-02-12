//Function JS

$(document).ready(function() {
	


var c1        = $('iframe#cuestionario1');
var c1css = '<style> .freebirdLightBackground {background-color: rgb(255, 255, 255);}</style>';

c1.load(function() {

    c1.contents().find("head").append(c1css);


});

	//Button Effect
    $("body").on("mousedown", ".btn-material", function(e){
	    var target = e.target;
	    var rect = target.getBoundingClientRect();
	    var ripple = target.querySelector('.ripple');
	    $(ripple).remove();
	    ripple = document.createElement('span');
	    ripple.className = 'ripple';
	    ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
	    target.appendChild(ripple);
	    var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
	    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
	    ripple.style.top = top + 'px';
	    ripple.style.left = left + 'px';
	    return false;
	});


	// STEP #1 Capacitación ¿Qué es Indicar

	var s1 = $("#section1");

	$("#btn1").click(function(){

		s1.addClass('mostrar');
		$(".logo-box").show();
	});

	// STEP #2 Pregunta ¿Qué es Indicar?



	$("#btn2next").click(function(){
		s1.removeClass('mostrar');
		$("#section2").addClass('mostrar');

	});


	$("#btn3prev").click(function(){
		$("#section2").removeClass('mostrar');
		$("#section1").addClass('mostrar');

	});

	$("#btn3next").click(function(){
		$("#section2").removeClass('mostrar');
		$("#section3").addClass('mostrar');
	});

	$("#btn4prev").click(function(){
		$("#section3").removeClass('mostrar');
		$("#section2").addClass('mostrar');



	});

	$("#btn4next").click(function(){
		$("#section3").removeClass('mostrar');
		$("#section4").addClass('mostrar');

	});


	$("#btn5prev").click(function(){
		$("#section4").removeClass('mostrar');
		$("#section3").addClass('mostrar');

	});

	$("#btn5next").click(function(){
		$("#section4").removeClass('mostrar');
		$("#section5").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );

	});


	$("#btn6prev").click(function(){
		$("#section5").removeClass('mostrar');
		$("#section4").addClass('mostrar');

	});

	$("#btn6next").click(function(){
		$("#section5").removeClass('mostrar');
		$("#section6").addClass('mostrar');
		$("#portada").css( "background-color", "#C52A26" );
	});

	$("#btn7prev").click(function(){
		$("#section6").removeClass('mostrar');
		$("#section5").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn7next").click(function(){
		$("#section6").removeClass('mostrar');
		$("#section7").addClass('mostrar');

	});

	$("#btn8prev").click(function(){
		$("#section7").removeClass('mostrar');
		$("#section6").addClass('mostrar');

	});

	$("#btn8next").click(function(){
		$("#section7").removeClass('mostrar');
		$("#section8").addClass('mostrar');

	});

	$("#btn9prev").click(function(){
		$("#section8").removeClass('mostrar');
		$("#section7").addClass('mostrar');

	});


	$("#btn9next").click(function(){
		$("#section8").removeClass('mostrar');
		$("#section9").addClass('mostrar');

	});



	$("#btn10prev").click(function(){
		$("#section9").removeClass('mostrar');
		$("#section8").addClass('mostrar');

	});

	$("#btn10next").click(function(){
		$("#section9").removeClass('mostrar');
		$("#section10").addClass('mostrar');

	});

	$("#btn11prev").click(function(){
		$("#section10").removeClass('mostrar');
		$("#section9").addClass('mostrar');

	});

	$("#btn11next").click(function(){
		$("#section10").removeClass('mostrar');
		$("#section11").addClass('mostrar');

	});



	$("#btn12prev").click(function(){
		$("#section11").removeClass('mostrar');
		$("#section10").addClass('mostrar');

	});

	$("#btn12next").click(function(){
		$("#section11").removeClass('mostrar');
		$("#section12").addClass('mostrar');

	});


	$("#btn13prev").click(function(){
		$("#section12").removeClass('mostrar');
		$("#section11").addClass('mostrar');

	});

	$("#btn13next").click(function(){
		$("#section12").removeClass('mostrar');
		$("#section13").addClass('mostrar');

	});

	$("#btn14prev").click(function(){
		$("#section13").removeClass('mostrar');
		$("#section12").addClass('mostrar');

	});

	$("#btn14next").click(function(){
		$("#section13").removeClass('mostrar');
		$("#section14").addClass('mostrar');

	});

	$("#btn15prev").click(function(){
		$("#section14").removeClass('mostrar');
		$("#section13").addClass('mostrar');

	});

	$("#btn15next").click(function(){
		$("#section14").removeClass('mostrar');
		$("#section15").addClass('mostrar');

	});

	$("#btn16prev").click(function(){
		$("#section15").removeClass('mostrar');
		$("#section14").addClass('mostrar');

	});

	$("#btn16next").click(function(){
		$("#section15").removeClass('mostrar');
		$("#section16").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn17prev").click(function(){
		$("#section16").removeClass('mostrar');
		$("#section15").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn17next").click(function(){
		$("#section16").removeClass('mostrar');
		$("#section17").addClass('mostrar');
		$("#portada").css( "background-color", "#C52A26" );
	});


	$("#btn18prev").click(function(){
		$("#section17").removeClass('mostrar');
		$("#section16").addClass('mostrar');

	});

	$("#btn18next").click(function(){
		$("#section17").removeClass('mostrar');
		$("#section18").addClass('mostrar');

	});


	$("#btn19prev").click(function(){
		$("#section18").removeClass('mostrar');
		$("#section17").addClass('mostrar');

	});

	$("#btn19next").click(function(){
		$("#section18").removeClass('mostrar');
		$("#section19").addClass('mostrar');

	});


	$("#btn20prev").click(function(){
		$("#section19").removeClass('mostrar');
		$("#section18").addClass('mostrar');

	});

	$("#btn20next").click(function(){
		$("#section19").removeClass('mostrar');
		$("#section20").addClass('mostrar');
		
	});

	$("#btn21prev").click(function(){
		$("#section20").removeClass('mostrar');
		$("#section19").addClass('mostrar');

	});

	$("#btn21next").click(function(){
		$("#section20").removeClass('mostrar');
		$("#section21").addClass('mostrar');
$("#portada").css( "background-color", "#0067bf" );
		
	});



	$("#btn22next").add("#btn22direct").click(function(){
		$("#section21").removeClass('mostrar');
		$("#section22").addClass('mostrar');
$("#portada").css( "background-color", "#C52A26" );
	});

	$("#btn23prev").click(function(){
		$("#section22").removeClass('mostrar');
		$("#section21").addClass('mostrar');

	});

	$("#btn23next").click(function(){
		$("#section22").removeClass('mostrar');
		$("#section23").addClass('mostrar');

	});



	$("#btn24prev").click(function(){
		$("#section23").removeClass('mostrar');
		$("#section22").addClass('mostrar');

	});

	$("#btn24next").click(function(){
		$("#section23").removeClass('mostrar');
		$("#section24").addClass('mostrar');

	});


	$("#btn25prev").click(function(){
		$("#section24").removeClass('mostrar');
		$("#section23").addClass('mostrar');

	});

	$("#btn25next").click(function(){
		$("#section24").removeClass('mostrar');
		$("#section25").addClass('mostrar');

	});



	$("#btn26prev").click(function(){
		$("#section25").removeClass('mostrar');
		$("#section24").addClass('mostrar');

	});

	$("#btn26next").click(function(){
		$("#section25").removeClass('mostrar');
		$("#section26").addClass('mostrar');

	});


	$("#btn27prev").click(function(){
		$("#section26").removeClass('mostrar');
		$("#section25").addClass('mostrar');

	});

	$("#btn27next").click(function(){
		$("#section26").removeClass('mostrar');
		$("#section27").addClass('mostrar');

	});


	$("#btn28prev").click(function(){
		$("#section27").removeClass('mostrar');
		$("#section26").addClass('mostrar');

	});

	$("#btn28next").click(function(){
		$("#section27").removeClass('mostrar');
		$("#section28").addClass('mostrar');

	});


	$("#btn29prev").click(function(){
		$("#section28").removeClass('mostrar');
		$("#section27").addClass('mostrar');

	});

	$("#btn29next").click(function(){
		$("#section28").removeClass('mostrar');
		$("#section29").addClass('mostrar');

	});


	$("#btn30prev").click(function(){
		$("#section29").removeClass('mostrar');
		$("#section28").addClass('mostrar');

	});

	$("#btn30next").click(function(){
		$("#section29").removeClass('mostrar');
		$("#section30").addClass('mostrar');

	});


	$("#btn31prev").click(function(){
		$("#section30").removeClass('mostrar');
		$("#section29").addClass('mostrar');

	});

	$("#btn31next").click(function(){
		$("#section30").removeClass('mostrar');
		$("#section31").addClass('mostrar');

	});


	$("#btn32prev").click(function(){
		$("#section31").removeClass('mostrar');
		$("#section30").addClass('mostrar');

	});

	$("#btn32next").click(function(){
		$("#section31").removeClass('mostrar');
		$("#section32").addClass('mostrar');

	});


	$("#btn33prev").click(function(){
		$("#section32").removeClass('mostrar');
		$("#section31").addClass('mostrar');

	});

	$("#btn33next").click(function(){
		$("#section32").removeClass('mostrar');
		$("#section33").addClass('mostrar');

	});


	$("#btn34prev").click(function(){
		$("#section33").removeClass('mostrar');
		$("#section32").addClass('mostrar');

	});

	$("#btn34next").click(function(){
		$("#section33").removeClass('mostrar');
		$("#section34").addClass('mostrar');

	});


	$("#btn35prev").click(function(){
		$("#section34").removeClass('mostrar');
		$("#section33").addClass('mostrar');

	});

	$("#btn35next").click(function(){
		$("#section34").removeClass('mostrar');
		$("#section35").addClass('mostrar');

	});

	$("#btn36prev").click(function(){
		$("#section35").removeClass('mostrar');
		$("#section34").addClass('mostrar');

	});

	$("#btn36next").click(function(){
		$("#section35").removeClass('mostrar');
		$("#section36").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn37prev").click(function(){
		$("#section36").removeClass('mostrar');
		$("#section35").addClass('mostrar');

	});

	$("#btn37next").add('#btn37direct').click(function(){
		$("#section36").removeClass('mostrar');
		$("#section37").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn38prev").click(function(){
		$("#section37").removeClass('mostrar');
		$("#section36").addClass('mostrar');

	});

	$("#btn38next").click(function(){
		$("#section37").removeClass('mostrar');
		$("#section38").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn39prev").click(function(){
		$("#section38").removeClass('mostrar');
		$("#section37").addClass('mostrar');

	});

	$("#btn39next").click(function(){
		$("#section38").removeClass('mostrar');
		$("#section39").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn40prev").click(function(){
		$("#section39").removeClass('mostrar');
		$("#section38").addClass('mostrar');

	});

	$("#btn40next").click(function(){
		$("#section39").removeClass('mostrar');
		$("#section40").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn41prev").click(function(){
		$("#section40").removeClass('mostrar');
		$("#section39").addClass('mostrar');

	});

	$("#btn41next").click(function(){
		$("#section40").removeClass('mostrar');
		$("#section41").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn42prev").click(function(){
		$("#section41").removeClass('mostrar');
		$("#section40").addClass('mostrar');

	});

	$("#btn42next").click(function(){
		$("#section41").removeClass('mostrar');
		$("#section42").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn43prev").click(function(){
		$("#section42").removeClass('mostrar');
		$("#section41").addClass('mostrar');

	});

	$("#btn43next").click(function(){
		$("#section42").removeClass('mostrar');
		$("#section43").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn44prev").click(function(){
		$("#section43").removeClass('mostrar');
		$("#section42").addClass('mostrar');

	});

	$("#btn44next").click(function(){
		$("#section43").removeClass('mostrar');
		$("#section44").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn45prev").click(function(){
		$("#section44").removeClass('mostrar');
		$("#section43").addClass('mostrar');

	});

	$("#btn45next").click(function(){
		$("#section44").removeClass('mostrar');
		$("#section45").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn46prev").click(function(){
		$("#section45").removeClass('mostrar');
		$("#section44").addClass('mostrar');

	});

	$("#btn46next").click(function(){
		$("#section45").removeClass('mostrar');
		$("#section46").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn47prev").click(function(){
		$("#section46").removeClass('mostrar');
		$("#section45").addClass('mostrar');

	});

	$("#btn47next").add('#btn47direct').click(function(){
		$("#section46").removeClass('mostrar');
		$("#section47").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn48prev").click(function(){
		$("#section47").removeClass('mostrar');
		$("#section46").addClass('mostrar');

	});

	$("#btn48next").click(function(){
		$("#section47").removeClass('mostrar');
		$("#section48").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn49prev").click(function(){
		$("#section48").removeClass('mostrar');
		$("#section47").addClass('mostrar');

	});

	$("#btn49next").click(function(){
		$("#section48").removeClass('mostrar');
		$("#section49").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn50prev").click(function(){
		$("#section49").removeClass('mostrar');
		$("#section48").addClass('mostrar');

	});

	$("#btn50next").click(function(){
		$("#section49").removeClass('mostrar');
		$("#section50").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn51prev").click(function(){
		$("#section50").removeClass('mostrar');
		$("#section49").addClass('mostrar');

	});

	$("#btn51next").click(function(){
		$("#section50").removeClass('mostrar');
		$("#section51").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn52prev").click(function(){
		$("#section51").removeClass('mostrar');
		$("#section50").addClass('mostrar');

	});

	$("#btn52next").click(function(){
		$("#section51").removeClass('mostrar');
		$("#section52").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn53prev").click(function(){
		$("#section52").removeClass('mostrar');
		$("#section51").addClass('mostrar');

	});

	$("#btn53next").click(function(){
		$("#section52").removeClass('mostrar');
		$("#section53").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn54prev").click(function(){
		$("#section53").removeClass('mostrar');
		$("#section52").addClass('mostrar');

	});

	$("#btn54next").click(function(){
		$("#section53").removeClass('mostrar');
		$("#section54").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn55prev").click(function(){
		$("#section54").removeClass('mostrar');
		$("#section53").addClass('mostrar');

	});

	$("#btn55next").click(function(){
		$("#section54").removeClass('mostrar');
		$("#section55").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn56prev").click(function(){
		$("#section55").removeClass('mostrar');
		$("#section54").addClass('mostrar');

	});
	$("#btn56next").click(function(){
		$("#section55").removeClass('mostrar');
		$("#section56").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});
	$("#btn57prev").click(function(){
		$("#section56").removeClass('mostrar');
		$("#section55").addClass('mostrar');

	});

	$("#btn57next").click(function(){
		$("#section56").removeClass('mostrar');
		$("#section57").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn58prev").click(function(){
		$("#section57").removeClass('mostrar');
		$("#section56").addClass('mostrar');

	});

	$("#btn58next").click(function(){
		$("#section57").removeClass('mostrar');
		$("#section58").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn59prev").click(function(){
		$("#section58").removeClass('mostrar');
		$("#section57").addClass('mostrar');

	});

	$("#btn59next").click(function(){
		$("#section58").removeClass('mostrar');
		$("#section59").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn60prev").click(function(){
		$("#section59").removeClass('mostrar');
		$("#section58").addClass('mostrar');

	});
	
	$("#btn60next").click(function(){
		$("#section59").removeClass('mostrar');
		$("#section60").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});



	$("#btn61prev").click(function(){
		$("#section60").removeClass('mostrar');
		$("#section59").addClass('mostrar');

	});

	$("#btn61next").click(function(){
		$("#section60").removeClass('mostrar');
		$("#section61").addClass('mostrar');
	});


	$("#btn62prev").click(function(){
		$("#section61").removeClass('mostrar');
		$("#section60").addClass('mostrar');

	});

	$("#btn62next").click(function(){
		$("#section61").removeClass('mostrar');
		$("#section62").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


	$("#btn63prev").click(function(){
		$("#section62").removeClass('mostrar');
		$("#section61").addClass('mostrar');

	});

	$("#btn63next").click(function(){
		$("#section62").removeClass('mostrar');
		$("#section63").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn64prev").click(function(){
		$("#section63").removeClass('mostrar');
		$("#section62").addClass('mostrar');

	});

	$("#btn64next").click(function(){
		$("#section63").removeClass('mostrar');
		$("#section64").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn65prev").click(function(){
		$("#section64").removeClass('mostrar');
		$("#section63").addClass('mostrar');

	});

	$("#btn65next").click(function(){
		$("#section64").removeClass('mostrar');
		$("#section65").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn66prev").click(function(){
		$("#section65").removeClass('mostrar');
		$("#section64").addClass('mostrar');

	});

	$("#btn66next").click(function(){
		$("#section65").removeClass('mostrar');
		$("#section66").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn67prev").click(function(){
		$("#section66").removeClass('mostrar');
		$("#section65").addClass('mostrar');

	});

	$("#btn67next").click(function(){
		$("#section66").removeClass('mostrar');
		$("#section67").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn68prev").click(function(){
		$("#section67").removeClass('mostrar');
		$("#section66").addClass('mostrar');

	});

	$("#btn68next").click(function(){
		$("#section67").removeClass('mostrar');
		$("#section68").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});

	$("#btn69prev").click(function(){
		$("#section68").removeClass('mostrar');
		$("#section67").addClass('mostrar');

	});

	$("#btn69next").click(function(){
		$("#section68").removeClass('mostrar');
		$("#section69").addClass('mostrar');
		$("#portada").css( "background-color", "#0067bf" );
	});


}); 