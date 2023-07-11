$(function() {
    $(document).scroll(function() {
        let cutoff = $(window).scrollTop();
        $('section').each(function(){
            let currentSection = $(this).attr('id');
            if($(this).offset().top + $(this).height() > cutoff){
                $('.ooo-menu li').removeClass('active');
                $(`.ooo-menu li.${currentSection}`).addClass(' active');
                console.log($(window).scrollTop());
                
                return false;
            }
            if($(window).scrollTop() > 100){
                $('header').addClass(' small');
                return false;
            }else{
                $('.ooo-menu').removeClass(' small');
                return false;
            }
        });
    });


    $('.ooo-burger').click(function(){
        $('.ooo-menu').addClass('js-open');
    });
    
    $('.ooo-menu a').click(function(e){
        $('.ooo-menu').removeClass('js-open');
        let jump = $(this).attr('href');
        let new_position = $(jump).offset();
        if ($(window).width() > 768) {
            new_position.top -= 100;
        } else {
            new_position.top -= 50;
        }
        $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
        e.preventDefault();
    });
});