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
		
		$('.hideme3').each(function(i) {
			var bottom_of_object = 0.97 * ($(this).offset().top + $(this).outerHeight());
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window and hasn't been animated yet */
			if (bottom_of_window > bottom_of_object && !$(this).hasClass('animated')) {
				$(this).addClass('animated'); 

				if (i == 0) {
					
					$(this).delay(i * 400 - 100).animate({
						'opacity': '1'
					}, 1200);
				} else if (i == 10) {
					
					 $(this).css({
						'transform-origin': 'top', // 确保缩放是从顶部开始的
						'transform': 'scaleY(0)',
						'opacity': '0'
					}).delay(i * 400 + 300).animate({
						'opacity': '1'
					}, {
						duration: 800,
						step: function(now, fx) {
							if (fx.prop === 'opacity') {
								var scaleYValue = now; // 使用opacity的变化来设置scaleY
								$(this).css('transform', 'scaleY(' + scaleYValue + ')');
							}
						}
					});
				} else if (i >= 5 && i <= 9) {
					
					$(this).delay(i * 350+700).animate({
						'opacity': '1'
					}, 900);
				} else {
					
					$(this).css('transform', 'scale(1.3)'); 
					$(this).delay(i * 430 + 300).animate({
						'opacity': '1'
					}, {
						duration: 1000,
						step: function(now, fx) {
							if (fx.prop === 'opacity') {
								var scaleValue = 1.3 - (now * (1.3 - 1)); 
								$(this).css('transform', 'scale(' + scaleValue + ')');
							}
						}
					});
				}
			}
		});

			
    
    });
    
});