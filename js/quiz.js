 
 var score = 0; // Set score to 0
 var total = 45; // Set questions no
 var point = 1; // Point for correct answer
 var highest = total * point;

 // Initializer
 function init() {
 	// set correct answers
 	sessionStorage.setItem('a1','b');
 	sessionStorage.setItem('a2','a');
 	sessionStorage.setItem('a3','d');
 	sessionStorage.setItem('a4','a');
 	sessionStorage.setItem('a5','d');
 	sessionStorage.setItem('a6','d');
	sessionStorage.setItem('a7','d');
	sessionStorage.setItem('a8','b');
	sessionStorage.setItem('a9','d');
	sessionStorage.setItem('a10','c');
	sessionStorage.setItem('a11','c');
	sessionStorage.setItem('a12','d');
	sessionStorage.setItem('a13','b');
	sessionStorage.setItem('a14','b');
	sessionStorage.setItem('a15','a');
	sessionStorage.setItem('a16','a');
	sessionStorage.setItem('a17','d');
	sessionStorage.setItem('a18','b');
	sessionStorage.setItem('a19','c');
	sessionStorage.setItem('a20','d');
	sessionStorage.setItem('a21','c');
	sessionStorage.setItem('a22','b');
	sessionStorage.setItem('a23','d');
	sessionStorage.setItem('a24','a');
	sessionStorage.setItem('a25','d');
	sessionStorage.setItem('a26','d');
	sessionStorage.setItem('a27','d');
	sessionStorage.setItem('a28','d');
	sessionStorage.setItem('a29','b');
	sessionStorage.setItem('a30','d');
	sessionStorage.setItem('a31','d');
	sessionStorage.setItem('a32','b');
	sessionStorage.setItem('a33','a');
	sessionStorage.setItem('a34','b');
	sessionStorage.setItem('a35','a');
	sessionStorage.setItem('a36','d');
	sessionStorage.setItem('a37','d');
	sessionStorage.setItem('a38','c');
	sessionStorage.setItem('a39','a');
	sessionStorage.setItem('a40','a');
	sessionStorage.setItem('a41','b');
	sessionStorage.setItem('a42','b');
	sessionStorage.setItem('a43','a');
	sessionStorage.setItem('a44','c');
	sessionStorage.setItem('a45','d');
 }

 $(document).ready(function() {
 	// Hide Question Holder
 	$('article:last').hide();

 	// Hide all questions
 	$('.questionForm').hide();
 	
 	// Show first question
 	$('#q1').show();

 	$('.contactForm #submit').click(function() {
 		var x = document.forms["contact"]["fullname"].value;
 		var y = document.forms["contact"]["evbroj"].value;
		var z = document.forms["contact"]["address"].value;

 		if (x == null || x == "") {
 			return true;
	    } else if(y == null || y == "") {
		 	return true;
	    } else {
	    	sessionStorage.setItem('name',x);
	    	sessionStorage.setItem('evbroj',y);
			sessionStorage.setItem('address',z)

	    	$('article:first').hide();
		 	$('article:last').show(300);
	    	return false;
	    } 		
 	});

 	$('.questionForm #submit').click(function() {
 		// Get data attributes
 		current = $(this).parents('form:first').data('question');
 		next = $(this).parents('form:first').data('question')+1;
 		// Hide all questions
 		$('.questionForm').hide();

 		// Show next question
 		$('#q'+next+'').fadeIn(500);
 		process(''+current+'');
 		return false;
 	})
 });

 // Process the answers
 function process(n) {
 	// Get input value
 	var submitted = $('input[name=q'+n+']:checked').val();
 	//console.log('input[name=q'+n+']:checked');
 	if(submitted == sessionStorage.getItem('a'+n+'')) {
		score++;
	}
 	if(n  == total) {
 		$('#results').html('<h2>Ime i prezime: ' + sessionStorage.getItem('name') + '<br>Evidencijski broj: ' + sessionStorage.getItem('evbroj') + '<br>E-mail: ' + sessionStorage.getItem('address') + '<h3>Vaš rezultat: ' + score + ' od '+ total + '</h2><br><a href="kviz.html">Ponovite kviz</a>');
 		$('#results').html('<p style="text-align: center">Ime i prezime: ' + sessionStorage.getItem('name') + '<br>Evidencijski broj: ' + sessionStorage.getItem('evbroj') + '<br>Email adresa: ' + sessionStorage.getItem('address') +'<br>Vaš rezultat: <strong class="blink"> ' + score + '</strong> od ' + total + ' što je ' + ((score/total)*100).toFixed(2) + '%.<br><a href="kviz.html">Ponovite kviz</a>');
 /*		if(score == highest) {
 			$('#results').append('<p>You are the HTML5 master!');
 		}*/
		$.ajax({
		url: "https://formspree.io/siladjin.ivan@gmail.com", 
		method: "POST",
		data: {message: "hello!"},
		dataType: "json"
});
 	}
 	return false;
 }

 // Add event listener
 window.addEventListener('load', init, false);