$( document ).ready(function() {
    console.log( "ready!" );


    /*search form button*/

    $('#search_img').click(function(event) {
    	$(this).css({
    		"opacity" : "0"
    	});
    	$('.serch_input_container').css({
    		"opacity" : "1"
    	});
    	$('.search_input').css({
    		"width" : "170px"
    	});
    });

    $(document).click(function(event) {
    	var searchForm = $('#search_form');
    	if (!searchForm.is(event.target) && searchForm.has(event.target).length === 0 ) {
    		$('.search_img').css({
	    		"opacity" : "1"
	    	});
	    	$('.serch_input_container').css({
	    		"opacity" : "0"
	    	});
	    	$('.search_input').css({
	    		"width" : "0px"
	    	});
    	}
    });

});