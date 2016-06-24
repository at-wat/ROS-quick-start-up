$().ready( function(){
	$("footer").append("<div id=\"next\">Next Step</div>");
	$("footer").append("<div id=\"slidelike\">Slide</div>");
	$(window).keyup(function(e){
		if(e.keyCode == 13 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 32)
		{
			$('#next').click();
		}
	});
	
	var slide = false;
	$('#slidelike').click(function (){
		if(slide == false){
			$("h2, h3").css("margin-top", "20em");
			$("body").css("overflow", "hidden");
			slide = true;
		}else{
			$("h2").css("margin-top", "40px");
			$("h3").css("margin-top", "20px");
			$("body").css("overflow", "auto");
			slide = false;
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
				if($(this).next().length)
				{
					var h = $(this).offset().top + $(this).outerHeight() + 1;
					if(h > scroll_h - 100) return false;
					if(h > top + 64)
					{
						scroll_h = h;
						return false;
					}
				}
			});
		}

		if(scroll_h != 0)
		{
		    $("body, html").stop().animate({
				scrollTop: scroll_h
		    },
		    {
				duration : 50
		    });
	    }
	});
} );
