(function(window, document, documentElement, body, style, cssText, display, onclick, onkeyup) {
	window[onclick] = function(e) {
		e = e || window.event;
		e = (e.target || e.srcElement).parentNode;

		if(e.rel == 0) {
			body[style][display] = 'none';
			documentElement[style][cssText] = 'background:url(' + e.href + ') center 0 no-repeat #000;';

			document[onclick] = function() {
				documentElement[style][cssText] = body[style][display] = '';
			};

			document[onkeyup] = function(e) {
				if(e.keyCode == 27) {
					document[onclick]();
				}
			};

			documentElement.focus();

			return false;
		}
	};
}(window, document, document.documentElement, document.body, 'style', 'cssText', 'display', 'onclick', 'onkeyup'));
