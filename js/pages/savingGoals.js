function createStepsSavingGoals(el){
	var bblock = $(el).find(".bb-bookblock");
	bblock.find(".bb-item").each(function (index, bbItemElement) {
        var header =  document.createElement('div');
        $(header).addClass('saveGoal_step_header');
        $(header).addClass('widget-label');
		var content =  $('.bb_block_header').html();
		$(header).html(content);
		$(this).find('.flex-wrapper').before(header);

	});
	bblock.bookblock({
		speed : 500,
		shadowSides : 0.8,
		shadowFlip : 0.7,
        circular : true,
		onEndFlip : function( old, page, isLimit ) {
		}
	});
	bblock.find("input.nav").click( function(event) {
		var direction = $(this).attr("data-nav-dir");
        bblock.bookblock(direction);

        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 4){
            	currentStep = 0;
			} else {
                currentStep++;
			}
        }

        $(el).attr('data-current-step', currentStep);
	});
}
function nextGoalStep(){

}