$(function(){
	var cardDetails = {
		_init: function(){
			var that = this;
			window.blockDeferred = $.Deferred();
			$.when(window.blockDeferred).then(function(){
				that.element = $(that.options.selectors.main);
				that._createCardDetailsModal();
				that._bindEvents();
			});
		},

		_createCardDetailsModal: function(){
			that = this;
			var cardDetailsModal = $('#widget-bank-card-modal');

			cardDetailsModal.find('.modal-body').append('<img class="pull-left" width="150" src="./images/gold-card.png" alt="credit-card">\
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
								</nav>');

			that.detailsBlock = cardDetailsModal;
		},

		_bindEvents: function(){
			var that = this;
			that.element.on('click', '.widget-details-button a.btn', that.handlers.openBlockPopup.bind(that));
			that.detailsBlock.on('click', '.navbar-nav > li > a', that.handlers.blocksSelections.bind(that));
			that.detailsBlock.on('click', 'button[data-dismiss="modal"], .confirm_bank_card, .cancel_bank_card', that.handlers.closeModal.bind(that));
		},

		handlers: {
			openBlockPopup: function(event){
				var currentElement = $(event.currentTarget);
				that.detailsBlock.modal('show');
				that.detailsBlock.css('display', 'inline-block');
				that.detailsBlock.find('[href="#close-modal"]').hide();
			},

			blocksSelections: function(event){
				var currentElement = $(event.currentTarget);
				currentElement.closest('.navbar-nav').find('a.active').removeClass('active');
				currentElement.addClass('active');
			},

			closeModal: function(event){
				that.detailsBlock.find('[href="#close-modal"]').trigger('click');
			}
		},

		options: {
			selectors: {
				main: '.widget-bank-card'
			}
		}
	};

	cardDetails._init();
});