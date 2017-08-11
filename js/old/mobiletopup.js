
function initMobileTopUp(el) {

	//id = article_id + space
	var bblock = (el==null?$("#mobiletopupart .bb-bookblock"):$(el).find(".bb-bookblock"));
	
	addProcessing( bblock.find(".bb-item.processing") );
	
	makeHeader(bblock.find(".bb-item").get(0), "<strong>Mobile Topup</strong>from", true, "selectTopupSrcAccount", "selectTopupAnotherDstAccount");
	makeHeader(bblock.find(".bb-item").get(1), "<strong>Mobile Topup</strong>to", false);
	//makeHeader(bblock.find(".bb-item").get(2), "<strong>Mobile Topup</strong>result", false);
	makeHeader(bblock.find(".bb-item").get(3), "<strong>Mobile Topup</strong>result", false);

	bblock.bookblock({
		speed : 500,
		shadowSides : 0.8,
		shadowFlip : 0.7,
		onEndFlip	: function( old, page, isLimit ) {
			try {
				if( (page == 2 && old == 1) ){
					var time = bblock[0].getElementsByClassName("bb-item")[page].getAttribute("data-nav-auto-time");
					setTimeout(function(){
						bblock.bookblock("next");
					}, Number(time) );
				}
			}catch(err){}
		}
	});

	
	bblock.find("input.nav").click( function(event) {
		var direction = $(this).attr("data-nav-dir");
		$(this).closest(".bb-bookblock").bookblock(direction);
	});
	
}


/*
function selectDefaultAccount($this)
    {
        $($this).closest('ul').find('li').removeClass('active');
        $($this).addClass('active');
        $(".default_account_number").text($($this).attr('data-account_number'));
        tu_src_accname = $($this).attr('data-account_name'); 
        tu_src_accbal = $($this).attr('data-account_balance');
    }
    */
    function doConfirmTopup($this)
    {
    	
    	return true;
        $("#mobiletopup header").hide();
        $("#review_topup_box").hide();

        $( "#topup_result_wait" ).fadeIn( "3000");
        $( "#topup_result header" ).show();
        
        setTimeout(function(){
            $("#topup_result_wait").hide();
            $("#topup_result").fadeIn( "3000");
        }, 1500);


        
    }

    function topupShowTopContent($this)
    {
        $("#mobiletopup .quckpt_top_cntnt").slideDown(400);
    }
    function topupShowBottomContent($this)
    {
        //$(".quckpt_bottom_cntnt").slideDown('slow');
         $('.quckpt_bottom_cntnt').animate({
            height: 'toggle'
            }, 500, function() {
        });
    }

    function mobiletopupShowOriginal($this)
    {
        resetForDoPayment();
        clearVariables();
        //$this = $($this).closest('.grid-stack-item');
        //$flipable = $($this).find('.card_flip');
        //$flipto = $($this).find('.review_payment');
        
        $('#mobiletopup .quick_payment .review_beneficiary_account_number').css("display", "block");
    }
    function topupSendBtnClicked($this) {
	    var tu_ben_phone_number = document.getElementById('topupPhoneNumber').value;
        tu_ben_flip = true;
        //tu_ben_amount = $("#mobiletopup .topup_form .form-group .input_payment input").val();
    	tu_ben_amount = $("#topupAmount").val();
        tu_ben_currency = "EUR";
        $('#mobiletopup .review_beneficiary_account_number').hide();

        $($("#mobiletopup.bb-bookblock .bb-item")[1]).children("header").html("<strong>Mobile Top-Up</strong>to " + tu_ben_name);
        //$("#mobiletopup #review_topup_payment header").html("<strong>Mobile Topup</strong>to " + qp_ben_name);

        
        $("#mobiletopup #topup_review_row_1 .beni_content .beni_out").html(
        		'<i class="fa fa-arrow-down"></i>' + tu_ben_amount + " " + tu_ben_currency);
        $("#mobiletopup #topup_review_row_1 .quickpayment-list li:first").html(
                '<span class="li-title">To</span>' + tu_ben_phone_number);
        
        $("#tu_review_bank_code").text("<b>From: </b>My current account");
        $("#topup_src_acc_name").html('<span class="li-title">From</span>' + tu_src_accname);
        $("#topup_review_img").css("background-image", "url(" + tu_ben_imgsrc + ")"); 

        if( tu_ben_bankaddr == "" ) {
            $('#tu_review_bank_address').html("&nbsp;");
        } else {
            $('#tu_review_bank_address').text(tu_ben_bankaddr);
        }

        $("#mobiletopup #review_topup_box #mobiletopup_review_row_2 .qp-auth").css("display", "none");
        $("#mobiletopup #review_topup_box #mobiletopup_review_row_2 .qp-qrcode").css("display", "none");

        if( tu_ben_flip ) {
            if( tu_ben_amount == "" || (!isNaN( tu_ben_amount ) && Number(tu_ben_amount) < 1000) ) {
            $("#mobiletopup #review_topup_box #mobiletopup_review_row_2 .qp-auth").css("display", "block");
          } else {
              $("#mobiletopup #review_topup_box #mobiletopup_review_row_2 .qp-qrcode").css("display", "block");
              //setTimeout(function(){ doConfirmPayment($this); }, 5000);
          }
        }
    	
        //},100);
        
    }
    function showErrorOnField($this)
    {
        $($this).closest('.form-group').addClass('has-error');
        $($this).focus();
    }
    
    var tu_ben_name = "";
    var tu_ben_accno = "";
    var tu_ben_bankcode = "";
    var tu_ben_bankname = "";
    var tu_ben_bankaddr = "";
    var tu_ben_amount = "";
    var tu_ben_currency = "";
    var tu_ben_accname = "";
    var tu_ben_bankcountry = "";
    var tu_ben_desc = "";
    var tu_src_accname = "My Current Account";
    var tu_src_accbal="1,234.99 EUR"
    var tu_ben_imgsrc = "";
    var tu_ben_flip = false;

    function clearVariables() {
        tu_ben_name = "";
        tu_ben_accno = "";
        tu_ben_bankcode = "";
        tu_ben_bankname = "";
        tu_ben_bankaddr = "";
        tu_ben_amount = "";
        tu_ben_currency = "";
        tu_ben_accname = "";
        tu_ben_bankcountry = "";
        tu_ben_desc = "";
        tu_src_accname = "My Current Account";
        tu_src_accbal = "1,234.99 EUR";
        tu_ben_flip = false;
    }
    
    function clearSelect(){
    	var numberContainer = document.getElementById('topupPhoneNumber');
    	for(var i=0; i<numberContainer.options.length; i++){
    		if(numberContainer.options[i].value.indexOf(")") == -1){
    			numberContainer.removeChild(numberContainer.options[i]);
    		}
    	}
    }

    function selectmobiletopupUser($this) {
        $($this).closest('.quick_payment').find('a').removeClass('selected');
        $($this).addClass('selected');
        tu_ben_name = $($this).attr('data-benificiary_name');
        tu_ben_phone_number = $($this).attr('data-beneficiary_phone_number');
        tu_ben_phone_name = $($this).attr('data-beneficiary_phone_name');
        tu_ben_imgsrc = $($this).children().attr("src");
        tu_provider = $($this).attr('data-beneficiary_provider');
        
        $('#mobiletopup .topup_to_name').text(tu_ben_name);

        $('#mobiletopup .review_benificery_name').text(tu_ben_name);
        $('#mobiletopup .review_beneficiary_account_number').css("visibility", "visible");
        
        var providerContainer = document.getElementById('topupProvider');
        
        if(tu_provider != null && tu_provider!= undefined && tu_provider != ""){
	        $('#mobiletopup .review_beneficiary_account_number').html(
	        		tu_ben_phone_name + " (" + tu_ben_phone_number + ")<img align=\"absmiddle\" src=\"img/apsbank/" + tu_provider + "_logo_small.png\" class=\"pull-right\" style=\"margin-top: -2px;\" />"
	        );
	        providerContainer.setAttribute('value', tu_provider);
	        providerContainer.setAttribute('disabled', 'disabled');
	        //providerContainer.className = "disabled";
	        $(providerContainer).toggleClass("disabled");
	        $('#topup_provider_logo').html(
	        		"<img align=\"absmiddle\" src=\"img/apsbank/" + tu_provider + "_logo.png\" class=\"pull-right\" />"
	        );
        } else {
	        $('#mobiletopup .review_beneficiary_account_number').html(
	        		tu_ben_phone_name + " (" + tu_ben_phone_number + ")"
	        );
	        providerContainer.removeAttribute('disabled');
	        $(providerContainer).toggleClass("enabled");
	        $('#topup_provider_logo').html(
	        		""
	        );
        }
        
        clearSelect();
        
        var phoneNumberContainer = document.getElementById('topupPhoneNumber');
        var currentNumber = document.createElement('option');
        currentNumber.value = tu_ben_phone_number;
        currentNumber.text = tu_ben_phone_number;
        currentNumber.setAttribute('provider',tu_provider);
        phoneNumberContainer.appendChild(currentNumber);
        currentNumber.setAttribute('selected', 'selected');
        
        setProvideByName(tu_provider);
        
        $("#mobiletopupFirstNextButton").attr("disabled", false);
    }
    
    function setProvideByName(providerInput){
    	console.log("setProvideByName called: " + providerInput);
    	var providerContainer = document.getElementById('topupProvider');
    	providerContainer.value = providerInput;
    	for(var i=0; i<providerContainer.options.length; i++){
    		if(providerContainer.options[i].value == providerInput){
    			changeProvider('topupProvider', i);
    		}
    	} 
    }
    
    function setProvider(objId, optionIndex){
    	console.log("setProvider called: " + objId + ", " + optionIndex);
    	var providerContainer = document.getElementById('topupProvider');
    	var currentOption = document.getElementById(objId).options[optionIndex];
    	var currentProvider = currentOption.getAttribute('provider');
    	console.log(currentProvider);
    	if(currentProvider == 'go'){
	        $('#topup_provider_logo').html(
	        		"<img align=\"absmiddle\" src=\"img/apsbank/go_logo.png\" class=\"pull-right\" />"
	        );
	        providerContainer.setAttribute('disabled', 'disabled');
	        providerContainer.className = "disabled";
    	} else if(currentProvider == 'vodafone'){
	        $('#topup_provider_logo').html(
	        		"<img align=\"absmiddle\" src=\"img/apsbank/vodafone_logo.png\" class=\"pull-right\" />"
	        );
	        providerContainer.setAttribute('disabled', 'disabled');
	        providerContainer.toggleClass("disabled");
    	} else {
	        $('#topup_provider_logo').html(
	        		""
	        );
	        providerContainer.removeAttribute('disabled');
	        providerContainer.toggleClass("enabled");
    	}
    }
    
    function clearAmount(){
    	var numberContainer = document.getElementById('topupAmount');
    	for(var i=0; i<numberContainer.options.length; i++){
    		if(numberContainer.options[i].value == '75' || numberContainer.options[i].value == '100' ){
    			numberContainer.removeChild(numberContainer.options[i]);
    		}
    	}
    }
    
    function changeProvider(sel){
		
		var objId = sel.id;
		var optionIndex = this.selectedIndex;
		
    	console.log("changeProvider called: " + objId + ", " + optionIndex);
    	var currentOption = document.getElementById(objId).options[optionIndex];
    	var currentProvider = currentOption.value;
    	
    	var amountSelect = document.getElementById('topupAmount');
    	
    	if(currentProvider == 'go'){
	        $('#topup_provider_logo').html(
	        		"<img align=\"absmiddle\" src=\"img/apsbank/go_logo.png\" class=\"pull-right\" />"
	        );
	        
	        clearAmount();
	        var currentValue = document.createElement('option');
	        currentValue.value = '75';
	        currentValue.text = 'EUR 75';
	        amountSelect.appendChild(currentValue);
	        
    	} else if(currentProvider == 'vodafone'){
	        $('#topup_provider_logo').html(
	        		"<img align=\"absmiddle\" src=\"img/apsbank/vodafone_logo.png\" class=\"pull-right\" />"
	        );
	        
	        clearAmount();
	        var currentValue = document.createElement('option');
	        currentValue.value = '100';
	        currentValue.text = 'EUR 100';
	        amountSelect.appendChild(currentValue);	        
	        
    	}    	
    }

    function selectTopupSrcAccount($this) {
    	
        tu_src_accname = $($this).attr('data-account_name'); 
        tu_src_accbal = $($this).attr('data-account_balance');
        
        $("#mobiletopup a.curracc span").text(tu_src_accname + " (" +tu_src_accbal +")");
    }
//]]>
    
