document.addEventListener('DOMContentLoaded', function() {

	var ins = document.getElementsByClassName('input')[0],
		out = document.getElementsByClassName('output')[0];

	ins.addEventListener('change', function() {
		var val = ins.value;
		if (val.length === 1) {
			val = val.charCodeAt().toString(10);
		}
		var dec = val.replace(/\D/g, '') || unescape(val).charCodeAt().toString(10),
			hex = Number(dec).toString(16);
		while (hex.length < 4) {
			hex = "0" + hex;
			//alert('\u' + hex);
		}
		if(!isNaN(dec)){
			ins.value = '&#' + dec + ';';
			out.innerHTML = '<div class="inline-control sample">'
				+ unescape('&#' + dec + ';') + '</div>'
				+ '<div class="inline-control">'
				+ '<p>HTML (Decimal): &amp;#' + dec + ';</p>'
				+ '<p>CSS (Hex): \\' + hex + '</p>'
				+ '<p>JS (Hex): \\u' + hex + '</p>'
				+ '<p><a href="http://unicode-table.com/en/' + hex + '" target="_blank">More info...</a></p>'
				+ '</div>';
		}
		else{
			out.innerHTML = '';
		}
	});
});