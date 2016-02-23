var MDProto = Object.create(HTMLElement.prototype);
MDProto.createdCallback = function() {
	var shadow = this.createShadowRoot();
	shadow.innerHTML = marked(this.innerHTML);
	
	$(shadow).find("code").each(function() {
		var uid = Math.random().toString(36).substr(2, 9);
		var n = $(this).clone();
		
		if (this.parentNode.nodeName === "PRE") {
			n.addClass("linenums");
		}
		n.addClass("prettyprint code_"+uid);
		//$(this).replaceWith("<div class='temp_"+uid+"'>");
		$(document.body).append(n);
		prettyPrint();
		n.detach();
		$(this).replaceWith(n.removeClass("code_"+uid));
	});
};

var Markdown = document.registerElement('m-d', {
	prototype: MDProto
});