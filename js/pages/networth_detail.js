function networthDetailProcess(){
	$('.net_dismiss_icon').hide();
	$('.net_edit_icon').hide();
	$('.networth_accordions tbody tr').mouseover(function(){
		$(this).find('.net_edit_icon').show();
		$(this).find('.net_dismiss_icon').show();
	});
	$('.networth_accordions tbody tr').mouseout(function(){
		$(this).find('.net_edit_icon').hide();
		$(this).find('.net_dismiss_icon').hide();
	});
	$('.networth-list .tab-networth-header').click(function(){
		$('.networth-list .tab-networth-header').removeClass('active');
		$(this).addClass('active');
	})
	$('.networth_accordions .panel-heading a').click(function(){
		if($(this).hasClass('collapsed')){
			$(this).siblings('img').attr('src', 'images/arrow-down1.png');
			$(this).siblings('img').addClass('arrow_down');
		}else{
			$(this).siblings('img').attr('src', 'images/arrow-right1.png');
			$(this).siblings('img').removeClass('arrow_down');
		}
	});

}