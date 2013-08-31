/*! https://github.com/Prinzhorn/0 | free to use under terms of MIT license */
(function(window, document) {
	var click = 'click';
	var addEvent = function(el, name, fn) {
		el.ae = el.addEventListener;
		if(el.ae) {
			el.ae(name, fn, false);
		} else {
			el.attachEvent('on' + name, fn);
		}
	};

	var box = document.createElement('div');
	box.tabIndex = 100;

	var boxStyle = box.style;
	boxStyle.cssText = 'position:fixed;left:0;top:0;right:0;bottom:0;z-index:1000;background:#000 center no-repeat;background-color:rgba(0,0,0,0.7);background-size:contain;text-align:right;font-size:20px;font-family:sans-serif;font-weight:bold;color:#fff;padding:1em;display:none;cursor:pointer;';
	box.innerHTML = 'X';
	document.body.appendChild(box);

	var callback = function(e) {
		e = e || window.event;

		var el = (e.target || e.srcElement).parentNode;

		boxStyle.display = 'block';
		boxStyle.backgroundImage = 'url(' + el.href + ')';
		box.focus();

		e.p = e.preventDefault;
		e.p ? e.p() : e.returnValue = false;

		return false;

	};

	var elems = document.getElementsByTagName('a');
	for (var i in elems) {
		if (elems[i].rel === '0') addEvent(elems[i], click, callback);
	}

	var closeBox = function(e) {
		if(e.type === click || e.keyCode == 27) {
			boxStyle.display = 'none';
		}
	};

	addEvent(box, click, closeBox);
	addEvent(box, 'keyup', closeBox);

}(window, document));
