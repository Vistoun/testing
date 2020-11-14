/*!
 * jQuery  plugin
 * Original author: Vasil Khachidze
 * Further changes, comments: vasil.khachidze@mail.com
 * Licensed under the MIT license
 */
(function($){
	$.fn.linkUnderlineAnim = function(options) {
		
		var defaults = $.extend({
			"speed" 			: 300,
			"color" 			: "#DB3340",
			"thickness"			: 2,
			"distance"			: 0
		}, options);
			
		return this.each(function() {
		
			var items = $("li a");
			var o = defaults;

			items.css("position", "relative")
				 .css("text-decoration", "none")
				 .css("padding-bottom", o.distance);
			
			
			var id = this.id;
			if (id !="") {
				// it has id, so we will use it to customize the style sheet
			}
			else {
				// it does not have id, so we generate a unique one to customize the style sheet
				this.id = '_' + new Date().getTime(); // it is important to prefix the id with any character, because only numbers not working in CSS selection
				id = this.id;
			}
			//it is not possible to access :before in JavaScript/jQuery, so we add a stylesheet instead. But we used/generated the id to avoid styling non selected (ul) elements
			var css = '#' + id + ' li a {position: relative; text-decoration: none;}' +
				'#' + id +' li a:before {content: "";position: absolute; width: 100%; height: ' + o.thickness + 'px; bottom: 0; left: 0;'+
				'background-color: ' + o.color + ';' +
				'visibility: hidden; -webkit-transform: scaleX(0); transform: scaleX(0);' +
				'-webkit-transition: all ' + o.speed/1000 +'s ease-in-out 0s; transition: all ' + o.speed/1000 + 's ease-in-out 0s;}' +
				'#' + id +' li a:hover:before {visibility: visible; -webkit-transform: scaleX(1); transform: scaleX(1);}',
				
				head = document.head || document.getElementsByTagName('head')[0],
				
				style = document.createElement('style');

			style.type = 'text/css';
			if (style.styleSheet){
			  style.styleSheet.cssText = css;
			} else {
			  style.appendChild(document.createTextNode(css));
			}

			head.appendChild(style);
		});
		
	}
})(jQuery);