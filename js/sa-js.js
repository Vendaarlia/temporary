

		

		$(document).ready(function(){

			$('html,body').animate({
			    scrollTop: $("body").offset().top
			},1000);
			$('#myModal').modal('toggle');
			




		});



			var wow = new WOW({
			    boxClass:     'wow',      // default
			    animateClass: 'animated', // default
			    offset:       0,          // default
			    mobile:       true,       // default
			    live:         true        // default
			});
			

			
			
			$(document).ready(function () {

			   

			    // is_page_loaded = true;
			    
			    // if(is_animation_loaded && is_page_loaded){
			    //     closeLoader();
			    // }
			   
			});

			window.addEventListener("load", function(){
			    setTimeout(function(){
			    	$(".ww-image").each(function() {  
			    		$(this).addClass('ww-animation').addClass('wow');
			    	}); 
			    	$(".ww-animation").each(function() {  
			    		$(this).addClass('ww-animation-text').addClass('wow');
			    	}); 
			    }, 300);

			});
			$(window).load(function() {
				
			});
			
			
