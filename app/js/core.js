  $('#layout-condensed-toggle').click(function(e){
        e.preventDefault();
    // $.sidr('close', 'sidr');
   if($('#main-menu').attr('data-inner-menu')=='1'){
    //Do nothing
    console.log("Menu is already condensed");
   }
   else{
    if($('#main-menu').hasClass('mini')){
    $('#main-menu').removeClass('mini');
    $('.page-content').removeClass('condensed');    
    $('.scrollup').removeClass('to-edge');  
    $('.header-seperation').show();
    //Bug fix - In high resolution screen it leaves a white margin
    $('.header-seperation').css('height','61px');
    $('.footer-widget').show();
    } 
    else{
    $('#main-menu').addClass('mini');
    $('.page-content').addClass('condensed');   
    $('.scrollup').addClass('to-edge'); 
    $('.header-seperation').hide();
    $('.footer-widget').hide();   
    }
   }
  });