const menu_btn = $('.menu_btn')
const header = $('header');
const navlinks = $('header>nav>ul');
const links = $('header>nav>ul>li');
// left_menu
var left_menu = $('.fixed_menu');
var header = $('header.header');
var left_menu_height = $('.fixed_menu').innerHeight();

function init() {
  links.find('>a').removeAttr('href');

}

init();

menu_btn.click(function(event) {
  event.preventDefault();
  navlinks.toggleClass('open');
  links.each(function(index, el) {
    links.addClass('fade');
  });
});

//drop_menu
const sub_mneu = $('.sub-menu');

links.mouseover(function(event) {
  event.preventDefault();
  var idx = links.index(this);
  header.addClass('bg');
  sub_mneu.removeClass('sub_menu_view');
  sub_mneu.eq(idx).addClass('sub_menu_view');
});


$(window).scroll(function() {
  var top = this.scrollY;
  if (header < top && left_menu.hasClass('fixed') == false) {
    header.addClass('fixed');
  } else if (top === 0) {
    console.log("작음");;
    header.removeClass('fixed');
  }
});
