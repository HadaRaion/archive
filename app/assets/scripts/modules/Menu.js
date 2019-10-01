import $ from 'jquery';

class Menu {
   constructor() {
      this.boardDropdown = $('#boardDropdown')
      this.boardDropdownContents = $('.dropdown-content')
      this.navList = $('.site-header__nav-content__menu-list.notfirst')
      this.navListFirst = $('.site-header__nav-content__menu-list.first')
      
      this.events()
   }

   events() {
      this.boardDropdownContents.hide();
      this.boardDropdown.click(function(){
         $('ul:first',this).slideToggle(100);
       });
      
       this.navList.hover(function() {
         $('.site-header__nav-content__menu-list.first > ul').removeClass("active");
         $('ul',this).addClass("active");
         $('.site-header__nav-content__menu-list.first > i').removeClass("active");
         $('i',this).addClass("active");
       }, function(){
         $('ul',this).removeClass("active");
         $('.site-header__nav-content__menu-list.first > ul').addClass("active");
         $('i',this).removeClass("active");
         $('.site-header__nav-content__menu-list.first > i').addClass("active");
       });
   }
}

export default Menu;
