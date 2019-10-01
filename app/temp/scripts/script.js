// 메인페이지 카운트 업
$(".num").counterUp();


// 메인네비게이션메뉴 하버
$("#cclDropdown").click(function() {
  $("ul:first", this).slideToggle(100);
});

$(".posts__array-sort").click(function() {
  $("ul:first", this).slideToggle(0);
});

$(".posts__array-view").click(function() {
  $("ul:first", this).slideToggle(0);
});

$(".posts__array-count").click(function() {
  $("ul:first", this).slideToggle(0);
});


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
