'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {

	var traslation = str;

	/* Si la palabra termina en ar
 se le quitan esos 2 caracteres */
	if (str.toLowerCase().endsWith('ar')) {
		traslation = str.slice(0, -2);
	}

	/* Si la palabra inicia con Z,
 se le añae "pe" al final */
	if (str.toLowerCase().startsWith('z')) {
		//traslation = traslation + "pe"
		traslation += "pe";
	}
	/* Si la palabra tiene 10 o mas letras
 se debe partir a la mita y unir con un guion */
	var length = traslation.length;
	if (length >= 10) {
		var firsHalf = traslation.slice(0, Math.round(length / 2));
		var secondHalf = traslation.slice(Math.round(length / 2));
		traslation = firsHalf + '-' + secondHalf;
	}
	/*Si es un palindromo, 
 ninguna de las anteriores cuenta y se devuelve
 la misma palabra intercalano mayusculas y min */
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};
	function minMay(str) {
		var length = str.length;
		var traslation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			traslation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return traslation;
	}
	if (str == reverse(str)) {
		return minMay(str);
	}

	return traslation;
}