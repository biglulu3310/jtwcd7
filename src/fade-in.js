$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme1').each( function(i){
            
            var bottom_of_object = 1*($(this).offset().top + $(this).outerHeight());
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){ 		
					$(this).delay(20).animate({'opacity':'1', 'margin-left':'0'},850);
				
            }
            
        }); 
		
		$('.hideme2').each( function(i){
            
            var bottom_of_object = 1*($(this).offset().top + $(this).outerHeight());
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){ 		
					$(this).delay(20).animate({'opacity':'1', 'margin-left':'0'},850);
				
            }
            
        }); 
    
    });
    
});