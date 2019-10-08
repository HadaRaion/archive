// 메인페이지 카운트 업 $(".num").counterUp();


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
