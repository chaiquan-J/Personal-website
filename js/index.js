// 轮播
var mySwiper = new Swiper('.mast_swiper', {
    // autoplay: true,//可选选项，自动滑动
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 500,
    freeMode: true,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
    freeModeMomentumBounce: false,
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
