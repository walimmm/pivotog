$(function(){

  
        var content = $('.content');
       
        $('.more').click(function () {

            $(this).parent().prev().find(".content").toggleClass('show')

            if (content.hasClass('show')) {

               $(this).closest('.more').html('- Hide package benefits')
                $('.card-heading').css('display', 'block')
                $('.package-info').addClass('fit');
            } else {
                $(this).closest('.more').html('+ See package benefits')
                $('.card-heading').css('display', 'none')
                $('.package-info').removeClass('fit');
            }

        });
    
//     maxwidth = $('html').css('max-width');
    
//     if(maxwidth == '480px'){
//        $('.sidebar__list-item:not(.active)').addClass('hide-menu');
//        $('.sidebar__list-drop svg').css("color" , "white");
//        $('#categorymobile-menu').on('click', () => {
//             $('.sidebar__list-item:not(.active)').toggleClass('hide-menu');
//             // $('.sidebar__list-item').toggleClass('active');
//             degree = 180;
//             $('.sidebar__list-drop svg').toggleClass('svg-color');
          
//             //  $('.sidebar__list-item').addClass('show-menu');
            
//        });
        
//     }else{
//          $('.sidebar__list-item:not(.active)').show();
//     }
});