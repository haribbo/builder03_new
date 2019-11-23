$(document).ready(function() {

const header = $('header');
  var nav_mobile_btn = $('.nav_mobile_btn');
  var nav = $('header nav > ul');

  const links = $('header>nav>ul>li>a');
  function init() {
    links.removeAttr('href');

  }

  nav_mobile_btn.click(function(event) {
    console.log("클릭");
    $(this).toggleClass('open');
    links.css('pointer-events','none');
    nav.toggleClass('view');
    console.log("클릭ㅇㅇㅇ");
  });


  $(window).scroll(function() {
    var top = this.scrollY;
    if (header.hasClass('fixed') == false) {
    header.addClass('fixed');
    } else if (top === 0) {
      console.log("작음");;
      header.removeClass('fixed');
    }
  });

  // 공통 tabs tabContent
  const tabs = $('[data-tabcontent]');
  const tabContent = $('.tabContent');
  const tab_drop = $('.tab_items_btn');
  const tab_item = $('.tab_item');

  tabs.click(function(event) {
    event.preventDefault();
    var idx = tabs.index(this);
    if (tab_drop.hasClass('view') == false) {
      // PC용 탭선택
      TabView(idx);
    } else if (tab_drop.hasClass('view') == true) {
      // 모바일용 탭선택
      TabView_mobile(idx);
    }
  });

  tab_drop.click(function(event) {
    var target = $(this).attr('data-view');
    $(this).toggleClass('view');
    $(`#${target}`).toggleClass('view');
  });

  function TabView(idx) {
    tabs.removeClass('active');
    tabs.eq(idx).addClass('active');
    // tab_content
    tabContent.removeClass('active');
    var tab_target = tabs.eq(idx).attr('data-tabcontent');
    $(`#${tab_target}`).addClass('active');
  }

  function setTabName(idx) {
    var name = tab_item.eq(idx).attr('data-name');
    tab_drop.find('.tab_name').text(`${name}`);
  }

  function TabView_mobile(idx) {
    var target = tab_drop.attr('data-view');
    tab_drop.toggleClass('view');
    TabView(idx);
    setTabName(idx);
    $(`#${target}`).toggleClass('view');
  }

  // $(".counter").counterUp({delay:10,time:500});

  // faq 드롭
  const drop_item = $('.drop_item');
  const drop_content = $('.drop_content');
  const drop_btn = $('.drop_btn');
  var drop_idx;

  drop_item.click(function(event) {
    event.preventDefault();
    var idx = drop_item.index(this);
    if (drop_idx == idx) {
      if (drop_content.hasClass('view') == true) {
        // console.log("같은거 꺼져야함");
        allDropClear();
      } else {
        // console.log("같은데 꺼져있음");
        viewDropContent(idx);
      }
    } else {
      viewDropContent(idx);
    }
  });

  function viewDropContent(idx) {
    // console.log("다른거 켜져야함");
    allDropClear();
    drop_item.eq(idx).addClass('view');
    drop_item.eq(idx).find('.drop_content').addClass('view');
    drop_btn.eq(idx).addClass('view');
    drop_idx = idx;
  }

  function allDropClear() {
    drop_item.removeClass('view');
    drop_content.removeClass('view');
    drop_btn.removeClass('view');
  }

  //페이지네이션 pagenation custom
  const prev_pager = $('.prev-page');
  const next_pager = $('.next-page');
  prev_pager.html("<li class='board_pager prev'></li>");
  next_pager.html("<li class='board_pager next'></li>");

});
