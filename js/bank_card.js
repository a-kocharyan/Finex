$(function(){
	var cardDetails = {
 		_init: function(){
			var that = this;
   			window.blockDeferred = $.Deferred();
   			$.when(window.blockDeferred).then(function(){
    			that.element = $(that.options.selectors.main);
 				that._createCardDetailsModal();
			    that._bindEvents();
			console.log(that.element)
		   });
  		},

 		_createCardDetailsModal: function(){
   			that = this;
  			that.detailsBlock = $('#widget-bank-card-modal');
   			// that.changeLimits = $('#widget-card-change-limits-modal');
   			that.changePin = $('#widget-bank-card-change-pin');
  		},

  		_bindEvents: function(){
   			var that = this;
   			that.element.on('click', '.widget-details-button a.btn', that.handlers.openDetailsModal.bind(that));
   			console.log($('.widget-details-button a.btn'))
   			that.element.on('click', 'a.copy-detail', that.handlers.openChangePinModal.bind(that));
   			// that.element.on('click', '.widget-details-button .btn-modify', that.handlers.openChangeLimitsModal.bind(that));
   			that.detailsBlock.on('click', '.navbar-nav > li > a', that.handlers.blocksSelections.bind(that));
   			that.detailsBlock.on('click', 'button[data-dismiss="modal"], .confirm_bank_card, .cancel_bank_card', that.handlers.closeModal.bind(that));
  		},

  		handlers: {
   			openDetailsModal: function(event){
    			console.log('mtav')
    			that.detailsBlock.modal('show');
    			that.detailsBlock.css('display', 'inline-block');
    			that.detailsBlock.find('[href="#close-modal"]').hide();
   			},
			/*
   			openChangeLimitsModal: function(event){
    			that.changeLimits.modal('show');
    			that.changeLimits.css('display', 'inline-block');
    			that.changeLimits.find('[href="#close-modal"]').hide();
   			},*/

   			openChangePinModal: function(event){
    			that.changePin.modal('show');
    			that.changePin.css('display', 'inline-block');
    			that.changePin.find('[href="#close-modal"]').hide();
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
   				 main: '#bankCard .widget-bank-card'
   			}
  		}
 	};

	cardDetails._init();
});