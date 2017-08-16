$(function(){
	var cardDetailsBlock = {
		_init: function(){
			var that = this;
			window.template = $.Deferred();
			$.when(window.template).then(function(){
				that.element = $(that.options.selectors.main);
				that._createCardDetailsBlockModal();
				that._bindEvents();
			});
		},

		_createCardDetailsBlockModal: function(){
			that = this;
			that.modal = $('<div id="widget-bank-card-modal" class="widget-bank-card-modal modal">\
								<div class="modal-header">\
							    	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
							    	<h4 class="pull-left">Change card status</h4>\
							  	</div>\
							  	<div class="modal-body">\
							  		<img class="pull-left" width="150" src="./images/gold-card.png" alt="credit-card">\
							  		<div class="clearfix"></div>\
				                    <h5 class="my-credit-card">My Credit Card</h5>\
				                    <p class="card_status"><span>CARD STATUS</span> Active</p>\
				                    <div class="navbar">\
									  <div class="container-fluid">\
									    <div class="navbar-header">\
									      <a class="navbar-brand" href="#"><span>NEW CARD STATUS</span></a>\
									    </div>\
				                    	<ul class="nav navbar-nav new_card_status">\
									      <li><a href="#">TEMPORARY BLOCKED</a></li>\
									      <li><a href="#">BLOCKED</a></li>\
									    </ul>\
								    </div>\
				                    <nav class="navbar navbar-default">\
									  <div class="container-fluid text-center">\
									    <div class="navbar-header">\
									      <a class="navbar-brand" href="#">REASON</a>\
									    </div>\
									    <ul class="nav navbar-nav lose-reason">\
									      <li><a href="#">LOST</a></li>\
									      <li><a href="#">STOLEN</a></li>\
									      <li><a href="#">DAMAGED</a></li>\
									    </ul>\
									  </div>\
									</nav>\
							  	</div>\
							  	<div class="modal-footer">\
							  		<div class="btn-container">\
								    	<a href="#" class="confirm_bank_card btn">CONFIRM</a>\
								    	<a href="#" class="cancel_bank_card btn">CANCEL</a>\
							    	</div>\
								</div>\
							</div>');
			that.modal.appendTo(document.body);
		},

		_bindEvents: function(){
			var that = this;
			that.element.on('click', '.widget-details-button a.btn', that.handlers.openBlockPopup.bind(that));
			that.modal.on('click', '.navbar-nav > li > a', that.handlers.blocksSelections.bind(that));
			that.modal.on('click', 'button[data-dismiss="modal"], .confirm_bank_card, .cancel_bank_card', that.handlers.closeModal.bind(that));
		},

		handlers: {
			openBlockPopup: function(event){
				var currentElement = $(event.currentTarget);
				that.modal.modal('show');
				that.modal.find('[href="#close-modal"]').hide();
			},

			blocksSelections: function(event){
				var currentElement = $(event.currentTarget);
				currentElement.closest('.navbar-nav').find('a.active').removeClass('active');
				currentElement.addClass('active');
			},

			closeModal: function(event){
				that.modal.find('[href="#close-modal"]').trigger('click');
			}
		},

		options: {
			selectors: {
				main: '.widget-bank-card'
			}
		}
	};

	cardDetailsBlock._init();

	cardDetailsChangeLimits = {
		_init: function(){
			var that = this;
			window.template = $.Deferred();
			$.when(window.template).then(function(){
				that.element = $(that.options.selectors.main);
				that._createCardDetailsBlockModal();
			})
		},

		_createCardDetailsBlockModal: function(){
			that = this;
			that.modal = $('<div id="widget-bank-card-modal" class="widget-bank-card-modal modal">\
								<div class="modal-header">\
							    	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
							    	<h4 class="pull-left">Change card status</h4>\
							  	</div>\
							  	<div class="modal-body">\
							  		<img class="pull-left" width="150" src="./images/gold-card.png" alt="credit-card">\
							  		<div class="clearfix"></div>\
				                    <h5 class="my-credit-card">My Credit Card</h5>\
				                    <p class="card_status"><span>CARD STATUS</span> Active</p>\
				                    <div class="navbar">\
									  <div class="container-fluid">\
									    <div class="navbar-header">\
									      <a class="navbar-brand" href="#"><span>NEW CARD STATUS</span></a>\
									    </div>\
				                    	<ul class="nav navbar-nav new_card_status">\
									      <li><a href="#">TEMPORARY BLOCKED</a></li>\
									      <li><a href="#">BLOCKED</a></li>\
									    </ul>\
								    </div>\
				                    <nav class="navbar navbar-default">\
									  <div class="container-fluid text-center">\
									    <div class="navbar-header">\
									      <a class="navbar-brand" href="#">REASON</a>\
									    </div>\
									    <ul class="nav navbar-nav lose-reason">\
									      <li><a href="#">LOST</a></li>\
									      <li><a href="#">STOLEN</a></li>\
									      <li><a href="#">DAMAGED</a></li>\
									    </ul>\
									  </div>\
									</nav>\
							  	</div>\
							  	<div class="modal-footer">\
							  		<div class="btn-container">\
								    	<a href="#" class="confirm_bank_card btn">CONFIRM</a>\
								    	<a href="#" class="cancel_bank_card btn">CANCEL</a>\
							    	</div>\
								</div>\
							</div>');
		},

		options: {
			selectors: {
				main: '.widget-details-button button.btn-modify'
			}
		}
		
	};
	cardDetailsChangeLimits._init();
});