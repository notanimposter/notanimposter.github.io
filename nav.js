$(".navButton").first().addClass("open");
	
$('.navBar').children('li:not(:last-of-type)').after($("<li>").addClass("spacer"))
$(".navButton").click(function(e) {
	$(".navButton").removeClass("open");
	$(this).addClass("open");
	var text = $(this).text().trim();
	var hash1 = window.location.hash.substr(1).split(/[\.\/\\\:]/, 1)[0];
	if (text !== "home" && hash1 !== text) {
		history.pushState(null, null, window.location.pathname+"#"+$(this).text().trim());
		$("title").text(text+" - website");
	} else if (text === "home" && hash1 !== "home") {
		history.pushState(null, null, window.location.pathname);
		$("title").text("website");
	}
	$(".contentArea").css("transform", "translate(-"+$(this).index()/2+"00vw,0)");
});
if (window.location.hash !== "") {
	$(".navButton:contains("+window.location.hash.substr(1).split(/[\.\/\\\:]/, 1)[0]+")").click();
}
$(window).on('hashchange', function() {
	$(".navButton:contains("+window.location.hash.substr(1).split(/[\.\/\\\:]/, 1)[0]+")").click();
});
//make the thing work later //past self wtf did you mean by this why are you so fucking cryptic in comments