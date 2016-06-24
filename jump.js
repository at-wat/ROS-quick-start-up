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
			$("h2").css("margin-top", "1024px");
			$("h3").each(function(){
				if($(this).prev()[0]){
					$(this).css("margin-top", "1024px");
				}
			});
			//$("h2, h3").css("margin-top", "1024px");
			$("body").css("overflow", "hidden");
			$(".width100").css("max-width", "80%");
			$(".width75").css("max-width", "60%");
			$(".width50").css("max-width", "40%");
			slide = true;
		}else{
			$("h2").css("margin-top", "40px");
			$("h3").css("margin-top", "20px");
			$("body").css("overflow", "auto");
			$(".width100").css("max-width", "100%");
			$(".width75").css("max-width", "75%");
			$(".width50").css("max-width", "50%");
			slide = false;
		}
	});
	$('#next').click(function (){
		var top = $("body, html").scrollTop();
		var scroll_h = 0;
		var topoff = 0;
		$("h2, h3, article>ul>li, article>ol>li").each(function(){
			var h = $(this).offset().top;
			if(h > top + 5)
			{
				scroll_h = h;
				topoff = h;
				if($(this).is("h2, h3")){
					if(slide == true){
						topoff -= 1024;
					}else{
						topoff -= 40;
					}
				}
				return false;
			}
		});
		if(topoff > top + $(window).height())
		{
			$("img, div.source_code, dl").each(function(){
				if($(this).next().length && !$(this).next().is("h2, h3"))
				{
					var h = $(this).offset().top + $(this).outerHeight() + 1;
					if(h > scroll_h - 64) return false;
					if(h > top + 64)
					{
						scroll_h = h;
						topoff = h;
						return false;
					}
				}
			});
			if(topoff > top + $(window).height())
			{
				scroll_h = top + $(window).height() - 100;
			}
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
