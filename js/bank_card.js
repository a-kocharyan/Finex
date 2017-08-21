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
  			that.detailsBlock = $('#widget-bank-card-modal');
   			that.changeLimits = $('#widget-card-details-limits-modal');
   			that.changePin = $('#widget-bank-card-change-pin');
   			that.reissueCard = $('#widget-bank-card-reissue-card');
  		},

  		_bindEvents: function(){
   			var that = this;
   			that.element.on('click', '.widget-details-button a.btn', that.handlers.openDetailsModal.bind(that));
   			that.element.on('click', 'a#change-pin', that.handlers.openChangePinModal.bind(that));
   			that.element.on('click', 'a#reissue-card', that.handlers.openReissueCardModal.bind(that));
   			that.element.on('click', '.widget-details-button .btn-modify', that.handlers.openChangeLimitsModal.bind(that));
   			that.changeLimits.on('click', '#this-dropdown > ul > li',that.handlers.selectVal);
   			that.changeLimits.on('keypress', '.modal-euro-sign', that.handlers.changeLimitsFieldsActions.bind(that));
   			that.detailsBlock.on('click', '.navbar-nav > li > a', that.handlers.blocksSelections.bind(that));
   			that.detailsBlock.on('click', 'button[data-dismiss="modal"], .confirm_bank_card, .cancel_bank_card', that.handlers.closeModal.bind(that));
   			that.changeLimits.on('click', 'button[data-dismiss="modal"], .confirm_bank_card, .cancel_bank_card', that.handlers.closeModal.bind(that));
   			that.changePin.on('click', 'button[data-dismiss="modal"], .confirm_bank_card, .cancel_bank_card', that.handlers.closeModal.bind(that));
   			that.reissueCard.on('click', 'button[data-dismiss="modal"], .confirm_bank_card, .cancel_bank_card', that.handlers.closeModal.bind(that));
  		},

  		handlers: {
   			openDetailsModal: function(event){
    			that.detailsBlock.modal('show');
    			that.detailsBlock.css('display', 'inline-block');
    			that.detailsBlock.find('[href="#close-modal"]').hide();
   			},
			
   			openChangeLimitsModal: function(event){
    			that.changeLimits.modal('show');
    			that.changeLimits.css('display', 'inline-block');
    			that.changeLimits.find('[href="#close-modal"]').hide();
   			},

   			changeLimitsFieldsActions: function(event){
   				var sign = that.changeLimits.find('')
   				if(!event.key.match(/[0-9]/)){
	   				return false;
   				}
   				if($(event.currentTarget).val().length < 1){
   					$(event.currentTarget).val('$' + $(event.currentTarget).val());
   				}
   			},

   			openChangePinModal: function(event){
    			that.changePin.modal('show');
    			that.changePin.css('display', 'inline-block');
    			that.changePin.find('[href="#close-modal"]').hide();
   			},

   			openReissueCardModal: function(event){
    			that.reissueCard.modal('show');
    			that.reissueCard.css('display', 'inline-block');
    			that.reissueCard.find('[href="#close-modal"]').hide();
   			},

   			blocksSelections: function(event){
   				var currentElement = $(event.currentTarget);
    			currentElement.closest('.navbar-nav').find('a.active').removeClass('active');
   				currentElement.addClass('active');
   			},

   			selectVal: function(event){
   				console.log('a')
   			},

   			closeModal: function(event){
   				that.detailsBlock.find('[href="#close-modal"]').trigger('click');
   				that.reissueCard.find('[href="#close-modal"]').trigger('click');
   				that.changePin.find('[href="#close-modal"]').trigger('click');
   				that.changeLimits.find('[href="#close-modal"]').trigger('click');
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