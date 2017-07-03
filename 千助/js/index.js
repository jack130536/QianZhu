$(document).ready(function() {

	var x = 0;
	var a = 0;
	var onOff = true;
	$("b.swich").on("click", function() {
		if(onOff == true) {
			$("ul.right-mem-list").animate({ right: '-52px' }, 50);
			$(this).css("background-position", "-32px -640px");
			onOff = !onOff;
		} else {
			$("ul.right-mem-list").animate({ right: '0px' }, 50);
			$(this).css("background-position", "0px -640px");
			onOff = !onOff;
		}

	});
	//第一次加载页面
	$(".welcome").animate({
		opacity: 0,
		zIndex: -1
	}, 800)
	// 第二屏
	$("ul.set-type-list").on("mouseover", "li", function() {
		$(this).children(".do-bk").show().css({ bottom: 0, transition: "all .3s ease-in-out .3s" });
		$(this).children("p").css({ bottom: 30, transition: "all .5s ease .3s" });
		$(this).children("span").css({ color: "white", transition: "all .2s ease .3s" });
		$(this).children("i.web").css({ backgroundPosition: "-169px -357px" });
		$(this).children("i.mobi1").css({ backgroundPosition: '-336px -291px' });
		$(this).children("i.sys1").css({ backgroundPosition: "-329px -362px" });
		$(this).children("i.app1").css({ backgroundPosition: "-165px -439px" });
		$(this).children("i.host1").css({ backgroundPosition: "-335px -439px" });
		$(this).children("i").css({ transition: "all .3s ease .2s" });
		$(this).children("u.cl").css({ clip: "rect(0px,156px,-10px,78px)" });
		$(this).children("u.cr").css({ clip: "rect(156px,78px,156px,0px)" });

	});
	$("ul.set-type-list").on("mouseleave", "li", function() {
		$(this).children(".do-bk").css({ bottom: -300, transition: "all 0s" });
		$(this).children("p").css({ bottom: -80, transition: "all 0s" });
		$(this).children("span").css({ color: "#333", transition: "all 0s" });
		$(this).children("i.web").css({ backgroundPosition: "-245px -357px" });
		$(this).children("i.mobi1").css({ backgroundPosition: "-416px -291px" });
		$(this).children("i.sys1").css({ backgroundPosition: "-415px -362px" });
		$(this).children("i.app1").css({ backgroundPosition: "-244px -439px" });
		$(this).children("i.host1").css({ backgroundPosition: "-420px -439px" });
		$(this).children("i").css({ transition: "all 0s" });
		$(this).children("u.cl").css({ clip: "rect(0px,156px,156px,78px)" });
		$(this).children("u.cr").css({ clip: "rect(0px,78px,156px,0px)" });
	});

	//第6屏幕
	$("ul.product").on("mouseover", "li", function() {
		$(this).children("b.cl").css({ clip: "rect(0px,128px,128px,64px)" });
		$(this).children("b.cr").css({ clip: "rect(0px,64px,128px,0px)" });

	});
	$("ul.product").on("mouseout", "li", function() {
		$(this).children("b.cl").css({ clip: "rect(0px,128px,-10px,64px)" });
		$(this).children("b.cr").css({ clip: "rect(128px,64px,128px,0px)" });

	});

	//第7屏幕轮播图	

	console.log($(".article li").eq(0));
	$(".article").outerWidth($(".article li").eq(0).outerWidth() * $(".article li").size());
	// console.log($(".article").outerWidth());
	// console.log($(".article li").eq(0).outerWidth()*3);
	var w = $(".article li").eq(0).outerWidth();
	var timer = 0;
	// console.log(typeof w+"px");

	function showTime() {
		timer = setInterval(function() {
			a++;
			if(a == $(".article li").size()) {
				a = 0;
				$(".article").css("left", 0);

			}
			if(a >= 3) {
				$(".about li").removeClass("active");
				$(".about li").eq(0).addClass("active");
			} else {
				$(".about li").removeClass("active");
				$(".about li").eq(a).addClass("active");
			}

			$(".article").animate({ left: -w * a }, function() {
				if(a == 4) {
					a = 1;
					$(".article").css({ left: -w * a })
				}
			})
		}, 1500);
	}
	showTime();

	$(".article").on("mouseover", "li", function() {
		clearInterval(timer);
	});

	$(".article").on("mouseout", "li", function() {
		showTime();

	});

	$(".about").on("mouseover", "li", function() {
		clearInterval(timer);
		$(".about li").removeClass("active");
		$(this).addClass("active");
		console.log($(this).index());
		if(onOff == true) {
			$(".article").animate({ left: -w * $(this).index() });
			// onOff=!onOff;
		}
		// console.log($(".about li").index());

	});
	$(".about").on("mouseout", "li", function() {
		showTime();
	})

	//导航条

	$(".list-inline").on("mouseover", "li", function() {
		$("nav.menu .line").css({ left: 400 + 80 * $(this).index() });

	});

	$(".list-inline").on("mouseout", "li", function() {
		$("nav.menu .line").css({ left: 400 + 80 * $(".list-inline li.active").index() });
	});

	//第4屏幕背景移动
	$(".partner-list").on("mouseover", "li", function() {

		if($(this).index() <= 5 && $(this).index() > 0) {
			$(".p-bk").css({ left: 231 * ($(this).index() - 1), top: 0 })
			// console.log(
			// $(".p-bk").css({left:231*($(this).index()-1),top:0})
			// 	)
		}
		if($(this).index() > 5) {

			$(".p-bk").css({ left: 231 * (($(this).index() - 1) % 5), top: 151 })
		}
		$(".p-bk").show();

	});

	$(".partner-list").on("mouseleave", function() {

		$(".p-bk").hide();

	})
	//窗口大小改变事件,刷新页面	
	$(window).resize(function() {
		window.location.reload();
	});

});