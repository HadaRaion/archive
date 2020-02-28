// 메인페이지 슬라이더 
$('.hero-slider').slick({
    autoplay: false,
    arrows: true,
    dots: true
});


// 메인네비게이션 메뉴 
var mainNavList = $('.site-header__nav-content__menu-list');
var background = $('.site-header__backgoround__second-depth')

for (var i = 0; i < mainNavList.length; i++) {

    mainNavList[i].onmouseover = function() {
        mainNavList.removeClass("active");
        background.addClass("active")
        this.classList.add("active");
    };

    mainNavList[i].onmouseleave = function() {
        background.removeClass("active")
        this.classList.remove("active");
    };
}

// 탑메뉴 게시판
$('#boardDropdown').click(function() {
    $('ul:first',this).slideToggle(100);
})


// p04 슬라이더 
$('.doc-detail-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
  
$('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
});


// p04 다른기록 토글
 $('#toggleType').click(function() {
    $('.sourceSlider').removeClass("active");
    $('#toggleSource').removeClass("active");
    $('.topicSlider').removeClass("active");
    $('#toggleTopic').removeClass("active");
    $('.periodSlider').removeClass("active");
    $('#togglePeriod').removeClass("active")

    $('.typeSlider').toggleClass("active");
    $(this).toggleClass("active");
    $('.type-slider').get(0).slick.setPosition(); 
 })

 $('#toggleSource').click(function() {
    $('.typeSlider').removeClass("active");
    $('#toggleType').removeClass("active");
    $('.topicSlider').removeClass("active");
    $('#toggleTopic').removeClass("active");
    $('.periodSlider').removeClass("active");
    $('#togglePeriod').removeClass("active")

    $('.sourceSlider').toggleClass("active");
    $(this).toggleClass("active");
    $('.source-slider').get(0).slick.setPosition(); 
 })

 $('#toggleTopic').click(function() {
    $('.typeSlider').removeClass("active");
    $('#toggleType').removeClass("active");
    $('.sourceSlider').removeClass("active");
    $('#toggleSource').removeClass("active");
    $('.periodSlider').removeClass("active");
    $('#togglePeriod').removeClass("active");

    $('.topicSlider').toggleClass("active");
    $(this).toggleClass("active");
    $('.topic-slider').get(0).slick.setPosition(); 
 })

 $('#togglePeriod').click(function() {
    $('.typeSlider').removeClass("active");
    $('#toggleType').removeClass("active");
    $('.sourceSlider').removeClass("active");
    $('#toggleSource').removeClass("active");
    $('.topicSlider').removeClass("active");
    $('#toggleTopic').removeClass("active");

    $('.periodSlider').toggleClass("active");
    $(this).toggleClass("active");
    $('.period-slider').get(0).slick.setPosition(); 
 })


// to-top 버튼
var btnTop = $('#toTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    btnTop.addClass('show');
  } else {
    btnTop.removeClass('show');
  }
});

btnTop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// 소셜공유
$('.sns-share').click(function() {
    $('ul:first',this).slideToggle(0);
})


// 페이지 넘버
var pageNumber = $(".page-number");

for (var i = 0; i < pageNumber.length; i++) {

   pageNumber[i].onclick = function() {
      var el = pageNumber[0];
      while (el) {
         if (el.tagName === "A") {
         el.classList.remove("current-page");
         }

         el = el.nextSibling;
      }

      this.classList.add("current-page");
  };
}


// 셀렉트박스 
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


// 사이드 메뉴
var sideNavMenu = $(".nav-menu");

for (var i = 0; i < sideNavMenu.length; i++) {

  sideNavMenu[i].onclick = function() {

      sideNavMenu.removeClass("active");
      this.classList.add("active");
  };
  
}

// 용어 메뉴
var typeNavMenu = $(".type-of-term");

for (var i = 0; i < typeNavMenu.length; i++) {

    typeNavMenu[i].onclick = function() {

        typeNavMenu.removeClass("active");
        this.classList.add("active");
  };
  
}


// 출처 버튼
$(".btn-toggle-ref").on("click", function() {
    $(this).closest('tr').nextUntil(".toggle-ref").toggleClass("active")
    $(this).toggleClass("active")
})


// 게시판 메뉴
var boardMenu = $(".type-of-board");

for (var i = 0; i < boardMenu.length; i++) {

    boardMenu[i].onclick = function() {

        boardMenu.removeClass("active");
        this.classList.add("active");
  };
  
}


//첨부파일 추가
$(".btn-plus").click(function(){
    $(".board-box__attachments").prepend('<li><div class="board-box__th"></div><div class="board-box__th board-box__attachments__th"> <i class="xi-attachment"> </i> 첨부파일</div><div class="board-box__td board-box__attachments__td"><input type="file"><button class="btn btn-minus" title="추가"><i class="xi-minus-min"></i></button></div></li>');
    return false;
})


//첨부파일 취소
$(".btn-del").click(function(){
    $(".board-box__attachments input").value = "";
})


//첨부파일 추가취소
$(".board-box__attachments").on("click", ".btn-minus", function(){
    $(this).closest("li").remove()
})


//전페이지로 돌아가기
$(".btn.cancel").click(function() {
    window.history.back();
});


//counter 
$( document ).ready( function() {
	
	jQuery(function ($) {
    	"use strict";
    
    	var counterUp = window.counterUp["default"]; 
    	var $counters = $(".num");
    
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint( {
				element: $(this),
				handler: function() { 
					counterUp(counter, {
						duration: 800,
						delay: 16
					}); 
					this.destroy();
				},
				offset: 'bottom-in-view',
			} );
		});

	});
 });

 $.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}

$(".num").digits();



// line-clamp

// var clamp2 = $(".series-posts__post__textbox > h2");
var clamp2 = $(".series-posts__post__textbox > p.text");

clamp2.each(function () {
   $clamp(this, {clamp: 2});
});



//URL 복사
function CopyURL() {
    var str = window.document.location.href;
    var el = document.createElement("textarea");
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute("readonly", "");
    el.style = {position: "absolute", left: "-9999px"};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand("copy");
    // Remove temporary element
    document.body.removeChild(el);
    alert("링크가 클립보드에 복사되었습니다.");
}
