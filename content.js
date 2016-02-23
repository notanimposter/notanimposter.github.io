if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}

var scrollTimer;
var scrollElem = null;
$("*").on("scroll", function (event) {
	clearTimeout(scrollTimer);
	if (scrollElem === null) scrollElem = event.target;
	scrollTimer = setTimeout(function() {
		scrollElem = null;
		console.log("done scrolling");
	}, 200);
	console.log(event);
	event.preventDefault();
	event.stopPropagation();
	
	return false;
});
/*$(document).ready(function() {
	
	var old = 0;
	$(".mainScrollbar").scroll(function (e) {
		var boopPos = $(".mainScrollbar")[0].scrollTop;
		var bodyPos = document.body.scrollTop;
		if (e.timeStamp - old < 4) return;
		old = e.timeStamp;
		window.scrollTo(0, boopPos);
		showScrollbar();
	});
	$(document).scroll(function (e) {
		old = e.timeStamp;
		$(".mainScrollbar").children().css("height", document.body.scrollHeight);
		var bodyPos = window.scrollY;
		$(".mainScrollbar")[0].scrollTop = bodyPos;
		showScrollbar();
	});
	$(".mainScrollbar").children().css("height", document.body.scrollHeight);
	
	
	
});*/
(function($){
	var hv = [
		"hidden",
		"visible",
		"auto"
	];
	function boop(elems, axes) {
		elems.mCustomScrollbar({
			axis: axes,
			theme:"minimal",
			scrollButtons: {
				enable: false
			},
			autoHideScrollbar: true,
			scrollInertia: 100
		});
	}
	$(window).load(function(){
		boop($('*').filter(function() {
			var ox = $(this).css("overflow-x");
			var oy = $(this).css("overflow-y");
			
			return !hv.includes(ox) && hv.includes(ox);
		}), "x");
		boop($('*').filter(function() {
			var ox = $(this).css("overflow-x");
			var oy = $(this).css("overflow-y");
			
			return hv.includes(ox) && !hv.includes(oy);
		}), "y");
		boop($('*').filter(function() {
			var ox = $(this).css("overflow-x");
			var oy = $(this).css("overflow-y");
			
			return !hv.includes(ox) && !hv.includes(oy);
		}), "xy");
	});
})(jQuery);
