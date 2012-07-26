/*! https://github.com/Prinzhorn/0 | free to use under terms of MIT license */
(function(window, document, documentElement, body) {
	var addEvent = function(el, name, fn) {
		if(el.attachEvent) {
			el.attachEvent('on' + name, fn);
		} else {
			el.addEventListener(name, fn, false);
		}
	};

	var box = document.createElement('div');
	box.tabIndex = 100;

	var boxStyle = box.style;
	boxStyle.cssText = 'position:fixed;left:0;top:0;right:0;bottom:0;z-index:1000;background:rgba(0,0,0,0.7) center no-repeat;background-size:contain;text-align:right;font-size:20px;font-family:sans-serif;font-weight:bold;color:#fff;padding:1em;display:none;cursor:pointer;';
	box.innerHTML = 'X';
	body.appendChild(box);

	addEvent(window, 'click', function(e) {
		var el = (e.target || e.srcElement).parentNode;

		if(el.rel === '0') {
			boxStyle.display = 'block';
			boxStyle.backgroundImage = 'url(' + el.href + ')';
			box.focus();

			(e.preventDefault && e.preventDefault()) || (window.event.preventDefault && window.event.preventDefault()) || (window.event.returnValue = false);
		}
	});

	var closeBox = function(e) {
		if(e.type === 'click' || e.keyCode == 27) {
			box.style.display = 'none';
		}
	};

	addEvent(box, 'click', closeBox);
	addEvent(box, 'keyup', closeBox);

}(window, document, document.documentElement, document.body));
