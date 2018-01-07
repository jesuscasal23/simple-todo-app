// gives the elments the class of completed 
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
})

// lets you delete list elment if you click on the x 
$("ul").on("click", "span", function(e){
	e.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$("this").remove();
	});
})

$("input[type ='text']").keypress(function(e){
		if(e.which === 13){
			var text = $(this).val();
			$(this).val("");
			$('ul').append("<li><span><i class='fa fa-trash'></i></span>" + text + "</li>")
		}
});

$(".fa-plus").click(function () {
	$("input[type ='text']").fadeToggle();
})