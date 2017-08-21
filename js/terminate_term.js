$(function(){
	var termDeposit = {
 		_init: function(){
			var that = this;
   			window.termDeferred = $.Deferred();
   			$.when(window.termDeferred).then(function(){
    			that.element = $(that.options.selectors.main);
 				that._createCardDetailsModal();
			    that._bindEvents();
		   });
  		},

  		_createCardDetailsModal: function(){
   			that = this;
  			that.terminateBlock = $('#widget-terminate-details-term-modal');
   			
  		},

  		_bindEvents: function(){
   			var that = this;
   			that.element.on('click', '#terminate_modal', that.handlers.openTerminateModal.bind(that));
   			that.terminateBlock.on('click', '.navbar-nav > li > a', that.handlers.blocksSelections.bind(that));
   			that.terminateBlock.on('click', 'button[data-dismiss="modal"], .confirm_bank_card, .cancel_bank_card', that.handlers.closeModal.bind(that));
  		},

  		handlers: {
   			openTerminateModal: function(event){
    			that.terminateBlock.modal('show');
    			that.terminateBlock.css('display', 'inline-block');
    			that.terminateBlock.find('[href="#close-modal"]').hide();
   			},

   			blocksSelections: function(event){
   				var currentElement = $(event.currentTarget);
    			currentElement.closest('.navbar-nav').find('a.active').removeClass('active');
   				currentElement.addClass('active');
   			},

   			closeModal: function(event){
   				that.terminateBlock.find('[href="#close-modal"]').trigger('click');
   			}
  		},

  		options: {
   			selectors: {
   				 main: '#deposit .widget-term-deposit'
   			}
  		}
	};

  	termDeposit._init();
});