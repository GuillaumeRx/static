$(document).ready(function() {
	var about = $('#about');
    $('#show').click(() => about.css("display", "flex").hide().fadeIn(500));
	$('#hide').click(() => about.fadeOut(500));
});

var i=1;
function actualiserCompteur1(){
	i++;
	document.getElementById("compteur1").innerHTML = i;
}
setInterval("actualiserCompteur1()", 3000);
var j=1;
function actualiserCompteur2(){
	j++;
	document.getElementById("compteur2").innerHTML = j;
}
setInterval("actualiserCompteur2()", 400000);
var l=1;
function actualiserCompteur3(){
	l++;
	document.getElementById("compteur3").innerHTML = l;
}
setInterval("actualiserCompteur3()", 470000);
var m=1;
function actualiserCompteur4(){
	m++;
	document.getElementById("compteur4").innerHTML = m;
}
setInterval("actualiserCompteur4()", 600000);
var n=1;
function actualiserCompteur5(){
	n++;
	document.getElementById("compteur5").innerHTML = n;
}
setInterval("actualiserCompteur5()", 2500);
var o=1;
function actualiserCompteur6(){
	o++;
	document.getElementById("compteur6").innerHTML = o;
}
setInterval("actualiserCompteur6()", 1800000);
var p=1;
function actualiserCompteur7(){
	p++;
	document.getElementById("compteur7").innerHTML = p;
}
setInterval("actualiserCompteur7()", 900000);