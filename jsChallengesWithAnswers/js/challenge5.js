console.log("here");

var imgs = $('img');
var msg = 'Hover over an image below';

imgs.each(function(){
	imgs.mouseover(function() {
		$('#image').css('background-image', "url('"+this.src+"')");
		$('#image').html(this.alt);
	});
	imgs.focus(function() {
		$('#image').css('background-image', "url('"+this.src+"')");
		$('#image').html(this.alt);
	});

	imgs.mouseleave(function() {
		$('#image').css('background-image', "url('')");
		$('#image').html(msg);

	});
	imgs.blur(function() {
		$('#image').css('background-image', "url('')");
		$("#image").html(msg);
	});
});




// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }

// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }
