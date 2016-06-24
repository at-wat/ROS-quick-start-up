$().ready( function(){
	$("footer").append("<div id=\"next\">Next Step</div>");
	$(window).keyup(function(e){
		if(e.keyCode == 13 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 32)
		{
			$('#next').click();
		}
	});
	
	$('#next').click(function (){
		var top = $("body, html").scrollTop();
		var scroll_h = 0;
		$("h2, h3, article>ul>li, article>ol>li").each(function(){
			var h = $(this).offset().top;
			if(h > top + 5)
			{
				scroll_h = h;
				return false;
			}
		});
		if(scroll_h > top + $(window).height())
		{
			$("img, div.source_code").each(function(){
			var h = $(this).next().offset().top;
			if(h > scroll_h - 100) return false;
			if(h > top + 64)
			{
				scroll_h = h;
				return false;
			}
		});

		}

	    $("body, html").stop().animate({
			scrollTop: scroll_h
	    },
	    {
			duration : 100
	    });
	});
} );
