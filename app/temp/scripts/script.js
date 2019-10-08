// 메인페이지 카운트 업 $(".num").counterUp();

// 메인페이지 슬라이더 
$('.hero-slider').slick({
    autoplay: false,
    arrows: true,
    dots: true
});



// 메인네비게이션 메뉴 
var mainNavList = $('.site-header__nav-content__menu-list');

for (var i = 0; i < mainNavList.length; i++) {

    mainNavList[i].onclick = function() {
        mainNavList.removeClass("active");
        this.classList.add("active");
    };
    
}



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
$('#toggleBtnOfSource').click(function() {
         
    $('.source-slider').slideToggle('5000', function(){
    
       if ($('.source-slider').is(':visible')) {
          $('#toggleBtnOfSource').addClass("btn-small-blue")
          $('#toggleBtnOfSource').removeClass("btn-small-gray")
       } else {
          $('#toggleBtnOfSource').addClass("btn-small-gray")
          $('#toggleBtnOfSource').removeClass("btn-small-blue")
       }

    });
    $('.source-slider').get(0).slick.setPosition(); 
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

