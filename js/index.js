// 轮播
var mySwiper = new Swiper('.mast_swiper', {
    // autoplay: true,//可选选项，自动滑动
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    freeMode: true,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
    freeModeMomentumBounce: false,
})

$(function () {
    // 当前点击的图片弹出模态框
    $('.bs-example-modal-lg').on('shown.bs.modal', function (e) {
        // console.log(e.relatedTarget.src);
        var thisSrc = e.relatedTarget.src;
        $('.modo_img').attr('src', thisSrc);
    })

    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    $('#myTabs a[href="#Wx_applet"]').tab('show') // Select tab by name
    $('#myTabs a:first').tab('show') // Select first tab
    $('#myTabs a:last').tab('show') // Select last tab
    $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
})

// 监听页面缩放改变swiper显示个数 未完成
// function changeWidth() {
//     let width = document.documentElement.clientWidth;
//     if (width > 1200) {
//         mySwiper.params.slidesPerView(4);
//     } else if (width < 992) {
//         mySwiper.params.slidesPerView = 4;
//     } else if (width < 592) {
//         mySwiper.params.slidesPerView = 2;
//     }
//     console.log(mySwiper.params);
// }

// window.onload = function () {
//     changeWidth();
// }

// window.onresize = function () {
//     changeWidth();
// }

// $(function () {
//     $(window).resize(function () {
//         var width = $(this).width();

//         if (width > 1200) {
//             mySwiper.slidesPerView == 4;
//         } else if (width < 992) {
//             mySwiper.slidesPerView == 4;
//         } else if (width < 592) {
//             mySwiper.slidesPerView == 2;
//         }
//     });
// })
