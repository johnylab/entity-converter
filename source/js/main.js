var ins = document.querySelector('.input'),
	out = document.querySelector('.output'),
	sample = out.querySelector('.sample'),
	codes = out.querySelector('.codes');

ins.addEventListener('change', function () {
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
	if (!isNaN(dec)) {
		ins.value = '&#' + dec + ';';
		sample.innerHTML = unescape('&#' + dec + ';');
		codes.innerHTML = 
			'<p>HTML (Decimal): &amp;#' + dec + ';</p>' +
			'<p>CSS (Hex): \\' + hex + '</p>' +
			'<p>JS (Hex): \\u' + hex + '</p>' +
			'<p><a href="http://unicode-table.com/en/' + hex + '" target="_blank">Mais detalhes...</a></p>';
	} else {
		sample.innerHTML = '';
		codes.innerHTML = '';
	}
});