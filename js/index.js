$(function () {
  // 当前点击的图片弹出模态框
  $(".bs-example-modal-lg").on("shown.bs.modal", function (e) {
    // console.log(e.relatedTarget.src);
    var thisSrc = e.relatedTarget.src;
    $(".modo_img").attr("src", thisSrc);
  });

  $("#myTabs a").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });

  $('#myTabs a[href="#Wx_applet"]').tab("show"); // Select tab by name
  $("#myTabs a:first").tab("show"); // Select first tab
  $("#myTabs a:last").tab("show"); // Select last tab
  $("#myTabs li:eq(2) a").tab("show"); // Select third tab (0-indexed)

  window.onload = function () {
    $(".Pers_one").fadeIn(1000);
    $(".Pers_two").fadeIn(1500);
    $(".Pers_three").fadeIn(2000);
    $(".Mast_fade").fadeIn(2500);
    // 轮播
    var mySwiper = new Swiper(".mast_swiper", {
      // autoplay: true,//可选选项，自动滑动
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      // 监听页面缩放 改变显示个数
      on: {
        resize: function () {
          let width = document.documentElement.clientWidth;
          if (width > 1200) {
            mySwiper.params.slidesPerView = 4;
          } else if (width > 992) {
            mySwiper.params.slidesPerView = 3;
          } else {
            mySwiper.params.slidesPerView = 2;
          }
        },
      },
      loop: true,
      speed: 1000,
      freeMode: true,
      slidesPerView: 4,
      centeredSlides: true,
      slideToClickedSlide: true,
      freeModeMomentumBounce: false,
    });
    $(".Proj_fade").fadeIn(3000);
    $(".foot_fade").fadeIn(3500);
  }
});