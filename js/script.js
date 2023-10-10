$(document).ready(function(){

    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    });

    media();
    function media(){
        const ww = $(window).width();
        if(ww >= 1550){
             new fullpage('#wrap',{
                 scrollBar : true,
                 normalScrollElements: '.box-b',
                 fitToSection: false,
                 scrollingSpeed: 500,
             })
            $(window).scroll(function(){
                  const sct = $(window).scrollTop();
                  console.log(sct);

                  // 섹션별로 상단 위치값 변수에 저장
                  const banner = $('.banner').offset().top;
                  const sec1 = $('.sec-1').offset().top;
                  const sec2 = $('.sec2-1').offset().top;


                  if(sct >= banner && sct < sec1){
                      // banner
                      $('.header-area, .icon-box').removeClass('on');
                  }else{
                      // sec1
                      $('.header-area, .icon-box').addClass('on');
                  }
            });
        }else{
            
        }
    }
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        speed: 500,
    });

    $('.main-menu li').click(function(){
        let result = $(this).attr('data-tab')
        console.log(result);

        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active')
        $('.header-area, .icon-box').addClass('on');
        // 서브메뉴박스 보이기
        $('.sub-menu-box').addClass('active');
    });
    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.header-area, .icon-box').removeClass('on');
    });
    $('.btn2').click(function(){
        const boxB = $('.box-b').offset().top;

        let rclick = $(this).attr('data-click')
        console.log(rclick)
        $(`#${rclick}`).addClass('on')
        $(`.swiper`).addClass('on')
        $('html,body').animate({
            scrollTop : boxB
        });
    });

    $('.S-btn li').click(function(){
        let info = $(this).attr('data-info')
        console.log(info)
        $(`#${info}`).addClass('on');
        $(`#${info}`).siblings().removeClass('on');
    });
});