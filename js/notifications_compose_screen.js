$(function(){
	var composeScreen = {
		_init: function(){
			var that = this;
			window.notificationsDeferred = $.Deferred();
			$.when(window.notificationsDeferred).then(function(){
				that.element = $(that.options.selectors.main);
				that._createNotificationsModal();
				that._bindEvents();
			});
		},

		_createNotificationsModal: function(){
			var that = this;
			that.notificationsModal = $('#widget-notifications-compose-screen-modal');
		},

		_bindEvents: function(){
			var that = this;
			that.element.on('click', '.compose', that.handlers.openNotificationsModal.bind(that));
		},

		handlers: {
			openNotificationsModal: function(event){
				var that = this;
				that.notificationsModal.modal('show');
				that.notificationsModal.css('display', 'inline-block');
				that.notificationsModal.find('[href="#close-modal"]').hide();
			}
		},

		options: {
			selectors: {
				main: '#alertArt'
			}
		}
	};

	composeScreen._init();
})