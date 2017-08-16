function createPayment(el, headerCLass) {
	var bblock = (el==null?$("#commonpay .bb-bookblock"):$(el).find(".bb-bookblock"));
	addProcessing( bblock.find(".bb-item.processing") );
    bblock.find(".bb-item").each(function (index, bbItemElement) {
        if (index == 4 ) { //last screen
            makeHeader(this, "&nbsp;", false, "selectCommonPaySrcAccount");
        } else {
            makeHeader(this, "Third party payment from", true, "selectCommonPaySrcAccount");
        }
	});
    var stepsClass = "steps";
    makeSteps(el, 5, headerCLass, stepsClass);
    setSteps(el, stepsClass);

	bblock.bookblock({
		speed : 500,
		shadowSides : 0.8,
		shadowFlip : 0.7,
        circular : true,
		onEndFlip : function( old, page, isLimit ) {}
	});
	
	bblock.find("#payment-benefeciary-fields-first input").click( function(e) {
			var placeholderOld = $(this).attr('placeholderOld');
			$(this).attr('placeholder', placeholderOld);
			$(this).attr('style', '" "');
			$(this).removeClass('placeholder-error');
	});
	
	bblock.find("#payment-benefeciary-fields-second input").click( function(e) {
			var placeholderOld = $(this).attr('placeholderOld');
			$(this).attr('placeholder', placeholderOld);
			$(this).attr('style', '" "');
			$(this).removeClass('placeholder-error');
	});
	
	bblock.find("#payment-benefeciary-fields-third input").click( function(e) {
			var placeholderOld = $(this).attr('placeholderOld');
			$(this).attr('placeholder', placeholderOld);
			$(this).attr('style', '" "');
			$(this).removeClass('placeholder-error');
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

    setStepsNumbers('#commonpay' , 5);
}

function createQuickPayment(el, headerCLass) {
    var bblock = (el==null?$("#quickpay .bb-bookblock"):$(el).find(".bb-bookblock"));
    addProcessing( bblock.find(".bb-item.processing") );
    bblock.find(".bb-item").each(function (index, bbItemElement) {
        if (index == 3) {
            makeHeader(this, "&nbsp;", false, "selectCommonPaySrcAccount");
        } else {
            makeHeader(this, "Quick payment from", true, "selectCommonPaySrcAccount");
        }
    });
    var stepsClass = "steps";
    makeSteps(el, 4, headerCLass, stepsClass);
    setSteps(el, stepsClass);

    bblock.bookblock({
        speed : 500,
        shadowSides : 0.8,
        shadowFlip : 0.7,
        circular : true
    });

    bblock.find("input.nav").click( function(event) {
        var direction = $(this).attr("data-nav-dir");
        bblock.bookblock(direction);

        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 3){
                currentStep = 0;
            } else {
                currentStep++;
            }
        }

        $(el).attr('data-current-step', currentStep);
    });

    setStepsNumbers('#quickpay' , 4);
}
//STPL
function createCharityPayment(el, headerCLass) {
    var bblock = (el==null?$("#charitypay .bb-bookblock"):$(el).find(".bb-bookblock"));
    addProcessing( bblock.find(".bb-item.processing") );
    bblock.find(".bb-item").each(function (index, bbItemElement) {
        if (index == 0) {
            makeHeader(this, "Charity Calculator", false, "selectCommonPaySrcAccount");
        }else if(index == 4){
            makeHeader(this, "&nbsp;", false, "selectCommonPaySrcAccount");            
        } else {
            makeHeader(this, "Charity payment from", true, "selectCommonPaySrcAccount");
        }
    });
    bblock.find("#charitypayment-benefeciary-fields-second input").click( function(e) {        
        var placeholderOld = $(this).attr('placeholderOld');
        $(this).attr('placeholder', placeholderOld);
        $(this).attr('style', '" "');
        $(this).removeClass('placeholder-error');
    });
    var stepsClass = "steps";
    makeSteps(el, 5, headerCLass, stepsClass);
    setSteps(el, stepsClass);
    bblock.bookblock({
        speed : 500,
        shadowSides : 0.8,
        shadowFlip : 0.7,
        circular : true
    });
    bblock.find("input.nav").click( function(event) {
        var direction = $(this).attr("data-nav-dir");
        bblock.bookblock(direction);

        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 3){
                currentStep = 0;
            } else {
                currentStep++;
            }
        }
        $(el).attr('data-current-step', currentStep);
    });
    setStepsNumbers('#charitypay' , 5);
}
function setSteps(el, stepsClass) {
    var i = 0;
    $('.' + stepsClass, el).each(function(){
        var step = 0;
        $('li', this).each(function(){
            if(step <= i){
                $(this).addClass('active');
                step++;
            }
        });

        i++;
    });
}

function setStepsNumbers(element,amount){
    var stepCounter = 1;
    $(element + ' .steps-title span.delta-number').each(function(){
        if(stepCounter > amount)
        $(this).closest('.steps').css({display:'none'})
    else{
        $(this).html(stepCounter);
        stepCounter++;
    }
    });
}

function createOwnAccountPayment(el, headerCLass) {
    var bblock = (el==null?$("#commonpay .bb-bookblock"):$(el).find(".bb-bookblock"));
    addProcessing( bblock.find(".bb-item.processing") );
    bblock.find(".bb-item").each(function (index, bbItemElement) {
        if (index == 3) {
            makeHeader(this, "&nbsp;", false, "selectCommonPaySrcAccount");
        } else {
            makeHeader(this, "Own Account payment from", true, "selectCommonPaySrcAccount");
        }
    });
    var stepsClass = "steps";
    makeSteps(el, 4, headerCLass, stepsClass);
    setSteps(el, stepsClass);

    bblock.bookblock({
        speed : 500,
        shadowSides : 0.8,
        shadowFlip : 0.7,
        circular : true,
        onEndFlip	: function( old, page, isLimit ) {}
    });

	bblock.find("#ownaccountpayment-benefeciary-fields-first input").click( function(e) {
			var placeholderOld = $(this).attr('placeholderOld');
			$(this).attr('placeholder', placeholderOld);
			$(this).attr('style', '" "');
			$(this).removeClass('placeholder-error');
	});
	
	bblock.find("#ownaccountpayment-benefeciary-fields-second input").click( function(e) {
			var placeholderOld = $(this).attr('placeholderOld');
			$(this).attr('placeholder', placeholderOld);
			$(this).attr('style', '" "');
			$(this).removeClass('placeholder-error');
	});

    bblock.find("input.nav").click( function(event) {
        var direction = $(this).attr("data-nav-dir");
        bblock.bookblock(direction);

        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 3){
                currentStep = 0;
            } else {
                currentStep++;
            }
        }
        $(el).attr('data-current-step', currentStep);
    });

    setStepsNumbers('#commonpay_own_account'  , 4);
}

function createChequebookPayment(el, headerCLass) {
    var bblock = (el==null?$("#commonpay .bb-bookblock"):$(el).find(".bb-bookblock"));
    addProcessing( bblock.find(".bb-item.processing") );
    bblock.find(".bb-item").each(function (index, bbItemElement) {
        if (index == 2) {
            makeHeader(this, "&nbsp;", false, "selectCommonPaySrcAccount");
        } else {
            makeHeader(this, "Review Details", false, "selectCommonPaySrcAccount");
        }
    });
    var stepsClass = "steps";
    makeSteps(el, 3, headerCLass, stepsClass);
    setSteps(el, stepsClass);

    bblock.bookblock({
        speed : 500,
        shadowSides : 0.8,
        shadowFlip : 0.7,
        circular : true,
        onEndFlip	: function( old, page, isLimit ) {}
    });

    bblock.find("input.nav").click( function(event) {
        var direction = $(this).attr("data-nav-dir");
        bblock.bookblock(direction);

        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 2){
                currentStep = 0;
            } else {
                currentStep++;
            }
        }
        $(el).attr('data-current-step', currentStep);
    });

    setStepsNumbers('#chequebook' , 3);
}
//STPL
function createAccountOpenPayment(el, headerCLass) {    
    var bblock = (el==null?$("#commonpay .bb-bookblock"):$(el).find(".bb-bookblock"));
    addProcessing( bblock.find(".bb-item.processing") );
    bblock.find(".bb-item").each(function (index, bbItemElement) {
        if (index == 1) {
            makeHeader(this, "REVIEW DETAILS", false, "selectCommonPaySrcAccount");
        } else if (index == 2) {
            makeHeader(this, "RESULTS", false, "selectCommonPaySrcAccount");
        }else{
            makeHeader(this, "ACCOUNT OPENING", false, "selectCommonPaySrcAccount");
        }
    });
    var stepsClass = "steps";
    makeSteps(el, 3, headerCLass, stepsClass);
    setSteps(el, stepsClass);

    bblock.bookblock({
        speed : 500,
        shadowSides : 0.8,
        shadowFlip : 0.7,
        circular : true,
        onEndFlip   : function( old, page, isLimit ) {}
    });

    bblock.find("input.nav").click( function(event) {
        var direction = $(this).attr("data-nav-dir");
        bblock.bookblock(direction);

        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 2){
                currentStep = 0;
            } else {
                currentStep++;
            }
        }
        $(el).attr('data-current-step', currentStep);
    });

    setStepsNumbers('#accountOpening' , 2);
}
//STPL
function createLoneRequestPayment(el, headerCLass) {    
    var bblock = (el==null?$("#commonpay .bb-bookblock"):$(el).find(".bb-bookblock"));
    addProcessing( bblock.find(".bb-item.processing") );
    bblock.find(".bb-item").each(function (index, bbItemElement) {
        if (index == 2) {
            makeHeader(this, "REVIEW DETAILS", false, "selectCommonPaySrcAccount");
        }else if(index == 3){
            makeHeader(this, "RESULTS", false, "selectCommonPaySrcAccount");
        } else {
            makeHeader(this, "LOAN REQUEST", false, "selectCommonPaySrcAccount");
        }
    });
    var stepsClass = "steps";
    makeSteps(el, 4, headerCLass, stepsClass);
    setSteps(el, stepsClass);

    bblock.bookblock({
        speed : 500,
        shadowSides : 0.8,
        shadowFlip : 0.7,
        circular : true,
        onEndFlip   : function( old, page, isLimit ) {}
    });

    bblock.find("input.nav").click( function(event) {
        var direction = $(this).attr("data-nav-dir");
        bblock.bookblock(direction);

        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 2){
                currentStep = 0;
            } else {
                currentStep++;
            }
        }
        $(el).attr('data-current-step', currentStep);
    });

    setStepsNumbers('#loneRequest' , 3);
}
//STPL
function createCardApplicationPayment(el, headerCLass) {    
    var bblock = (el==null?$("#commonpay .bb-bookblock"):$(el).find(".bb-bookblock"));
    addProcessing( bblock.find(".bb-item.processing") );
    bblock.find(".bb-item").each(function (index, bbItemElement) {
        if (index == 2) {
            makeHeader(this, "REVIEW DETAILS", false, "selectCommonPaySrcAccount");
        }else if(index == 3){
            makeHeader(this, "RESULTS", false, "selectCommonPaySrcAccount");
        } else {
            makeHeader(this, "CREDIT CARD REQUEST", false, "selectCommonPaySrcAccount");
        }
    });
    var stepsClass = "steps";
    makeSteps(el, 4, headerCLass, stepsClass);
    setSteps(el, stepsClass);

    bblock.bookblock({
        speed : 500,
        shadowSides : 0.8,
        shadowFlip : 0.7,
        circular : true,
        onEndFlip   : function( old, page, isLimit ) {}
    });

    bblock.find("input.nav").click( function(event) {
        var direction = $(this).attr("data-nav-dir");
        bblock.bookblock(direction);

        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 2){
                currentStep = 0;
            } else {
                currentStep++;
            }
        }
        $(el).attr('data-current-step', currentStep);
    });

    setStepsNumbers('#cardApplication' , 3);
}

//STPL
function createTermDepositOpeningPayment(el, headerCLass) {    
    var bblock = (el==null?$("#commonpay .bb-bookblock"):$(el).find(".bb-bookblock"));
    addProcessing( bblock.find(".bb-item.processing") );
    bblock.find(".bb-item").each(function (index, bbItemElement) {
        if (index == 2) {
            makeHeader(this, "REVIEW DETAILS", false, "selectCommonPaySrcAccount");
        }else if(index == 3){
            makeHeader(this, "RESULTS", false, "selectCommonPaySrcAccount");
        } else {
            makeHeader(this, "TERM DEPOSIT APPLICATION", false, "selectCommonPaySrcAccount");
        }
    });
    var stepsClass = "steps";
    makeSteps(el, 3, headerCLass, stepsClass);
    setSteps(el, stepsClass);

    bblock.bookblock({
        speed : 500,
        shadowSides : 0.8,
        shadowFlip : 0.7,
        circular : true,
        onEndFlip   : function( old, page, isLimit ) {}
    });

    bblock.find("input.nav").click( function(event) {
        var direction = $(this).attr("data-nav-dir");
        bblock.bookblock(direction);

        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 2){
                currentStep = 0;
            } else {
                currentStep++;
            }
        }
        $(el).attr('data-current-step', currentStep);
    });

    setStepsNumbers('#termDepositOpening',3);
}
function createFilePayment(el, headerCLass) {
    var bblock = (el==null?$("#commonpay .bb-bookblock"):$(el).find(".bb-bookblock"));
    addProcessing( bblock.find(".bb-item.processing") );
    bblock.find(".bb-item").each(function (index, bbItemElement) {
        if (index == 3) {
            makeHeader(this, "&nbsp;", false, "selectCommonPaySrcAccount");
        } else {
            makeHeader(this, "File upload payment", false, "selectCommonPaySrcAccount");
        }
    });
    var stepsClass = "steps";
    makeSteps(el, 4, headerCLass, stepsClass);
    setSteps(el, stepsClass);

    bblock.bookblock({
        speed : 500,
        shadowSides : 0.8,
        shadowFlip : 0.7,
        circular : true,
        onEndFlip	: function( old, page, isLimit ) {}
    });
	bblock.find("input.nav").click( function(event) {
        var direction = $(this).attr("data-nav-dir");
        bblock.bookblock(direction);
        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 3){
                currentStep = 0;
            } else {
                currentStep++;
            }
        }
        $(el).attr('data-current-step', currentStep);
    });

    setStepsNumbers('#commonpay_file' , 4);
}

function nextPageValidations(el, me){
	 var bblock = (el==null?$("#commonpay .bb-bookblock"):$(el).find(".bb-bookblock"));
        var direction = $(me).attr("data-nav-dir");
		bblock.bookblock(direction);
        var currentStep = (typeof $(el).attr('data-current-step') == "undefined") ? 0 : $(el).attr('data-current-step');
		//console.log(currentStep);
		//console.log(direction);
        if (direction == "prev") {
            currentStep--;
        } else if (direction == "next") {
            if(currentStep == 3){
                currentStep = 0;
            } else {
                currentStep++;
            }
        }
        $(el).attr('data-current-step', currentStep);
}

function makeSteps (element, numberOfSteps, headerClass, stepsClass) {
	//console.log(headerClass);
	//console.log(stepsClass);
    var stepsHtml = "" +
        "<div class=\"" + stepsClass + "\">" +
        "<div class=\"steps-title\">Step <span class='delta-number'>1</span>/<span>" + numberOfSteps + "</span></div>" +
        "<ul>";
    for (var i = 0; i < numberOfSteps; i++) {
        if (i == 0) {
            stepsHtml += "<li class=\"active\"></li>";
        } else {
            stepsHtml += "<li></li>";
        }
    }
    stepsHtml += "</ul></div>";
    $(element).find(headerClass).append(stepsHtml);
}

function setStepActive (element, stepsClass, indexOfActive) {
	//console.log(element);
	//console.log(stepsClass);
	var steps = $(stepsClass, element);
	//console.log(steps.length);
    if (steps.length > 0) {
        var selectedStep = steps.find("li").get(indexOfActive);
        if (selectedStep != "") {
            $(selectedStep).addClass("active");
        }
    }
}

function setStepInActive (element, stepsClass, indexOfActive) {
	var steps = $(element).find(stepsClass);
    if (steps.length > 0) {
        var selectedStep = steps.find("li").get(indexOfActive);
        if (selectedStep != "") {
            $(selectedStep).removeClass("active");
        }
    }
}

//manage payment type between international and EU payment
function managePaymentType (parentElement, clickedElement) {
    $(".content-to-show", parentElement).removeClass('active');
    $(".payment-type", parentElement).removeClass('active');
    var id = $(clickedElement).attr('id');
    $(clickedElement).addClass("active");
    $('#content-to-show-' + id, parentElement).addClass('active');
}

//manage payment type between pages(25,50)
function manageChequebookType (parentElement, clickedElement) {
    console.log("worked")
    $(".content-to-show", parentElement).removeClass('active');
    $(".payment-type", parentElement).removeClass('active');
    var id = $(clickedElement).attr('id');
    $(clickedElement).addClass("active");
    $('.content-to-show-' + id, parentElement).addClass('active');
}

function selectCommonPaymentDefaultAccount($this)
{
	$($this).closest("ul").find("li").removeClass("active");
	$($this).addClass("active");
	$(".default_account_number").text($($this).attr("data-account_number"));
    cp_src_accname = $($this).attr('data-account_name');
    cp_src_accbal = $($this).attr('data-account_balance');
}
function doConfirmCommonPayment($this)
{
	$("#payment_review_row_1 div.p").text(cp_ben_desc);
	$("#payment_review_row_1 .beni_content .beni_out").html(
			'<i class="fa fa-arrow-down"></i>' + cp_ben_amount + " " + cp_ben_currency);
		//$flipable.css('background-color','rgba(255, 255, 255, 0.5)');
	$("#payment_review_row_1 .quickpayment-list li:first").html(
			'<span class="li-title">To</span>' + cp_ben_accno);
	
	$("#payment_review_row_2 .quickpayment-list li:first").html(
			'<span class="li-title">Type</span>' + cp_payment_type);

	$("#cp_review_bank_name").text(cp_ben_bankname);
	//$("#cp_review_bank_address").text(cp_ben_bankaddr);
	if( cp_ben_bankaddr == "" ) {
		$('#cp_review_bank_address').html("&nbsp");
	} else {
		$('#cp_review_bank_address').text(cp_ben_bankaddr);
	}

	$("#cp_review_bank_code").text(cp_ben_bankcode);
	
	$("#payment_src_acc_name").html('<span class="li-title">From</span>' + cp_src_accname);
    //$("#commonpayment_container_3 header").html("<strong>Payment to</strong>" + cp_ben_name);
    
    $("#compayment_review_img").css("background-image", "url(" + cp_ben_imgsrc + ")"); 

    //Special field handling   
    if(cp_ben_imgsrc.indexOf("eon") != -1){
    	document.getElementById('review_spec_fields_eon').style.display = '';
    	document.getElementById('review_spec_fields_t').style.display = 'none';
    	//default fields
    	document.getElementById('default_bank_review_fields').style.display = 'none';
    	
    	var meterSerialValue = document.getElementById('eonMeterSerial').value;
    	var eonMeterPositionValue = document.getElementById('eonMeterPosition').value;
    	
    	$("#review_eonMeterSerial").text(meterSerialValue);
    	$("#review_eonMeterPosition").text(eonMeterPositionValue);
    	
    } else if(cp_ben_imgsrc.indexOf("telekom") != -1){
    	document.getElementById('review_spec_fields_eon').style.display = 'none';
    	document.getElementById('review_spec_fields_t').style.display = '';
    	//default fields
    	document.getElementById('default_bank_review_fields').style.display = 'none';

    	var phoneNumberValue = document.getElementById('phoneNumber').value;
    	var loyaltyCardNumberValue = document.getElementById('loyaltyCardNumber').value;
    	
    	$("#review_phoneNumber").text(phoneNumberValue);
    	$("#review_loyaltyCardNumber").text(loyaltyCardNumberValue);
    	
    } else {
        if($('#review_spec_fields_eon').length){
        	document.getElementById('review_spec_fields_eon').style.display = 'none';
        	document.getElementById('review_spec_fields_t').style.display = 'none';
        	//default fields
        	document.getElementById('default_bank_review_fields').style.display = 'none';
        }
    }

}
function resetForDoPayment()
{
	$(".action_btn").show();
}
function paymentShowAccountSelector($this)
{
	$("#payment_acc_select").slideDown(400);
}
function paymentHideAccountSelector($this)
{
	$( "#payment_acc_select" ).slideUp( 500, function() {
	    $("#commonpayment_container_1 a.curracc span").text(cp_src_accname + " (" +cp_src_accbal +")");
	  });
}
function paymentShowMoreBeneficiaries($this)
{
	//$(".quckpt_bottom_cntnt").slideDown("slow");
	 $("#payment_more_beneficiaries").animate({
        height: "toggle"
        }, 500, function() {
    });
}
function paymentHideMoreBeneficiaries($this)
{
	$("#payment_more_beneficiaries").animate({
        height: "toggle"
        }, 500, function() {
    });
}
function addNewBenificary($this)
{
	$($this).addClass("selected");
	$(".add_new_benificary").animate({
       	height: "toggle",
        }, 500, function() {
    });

}
function cancelAddBenificary($this)
{
	$(".add_new_benificary").animate({
        height: "toggle"
        }, 500, function() {
    });
}
function quickHideBottomContent($this)
{
	$(".quckpt_bottom_cntnt").slideUp("slow");
}
function commonPaymentShowOriginal($this)
{
	resetForDoPayment();
	
	$("#commonpayment").revertFlip();
	setTimeout(function(){ document.getElementById('paymentDueDate').valueAsDate = new Date(); }, 1400);
	
}
function nextBtnClickedPayment($this)
{
	
		$("#commonpayment").flip({
			direction:"lr",
			//color:"rgba(255, 255, 255, 0)",
			speed:300,
			content: $("#review_common_payment"),
			color: "transparent"
		})
	//},100);
	
}

var cp_payment_type="";
var cp_paymentCategory = null;

function selectPaymentType($this, category)
{
	$($this).closest(".payment_type_list").find("div").removeClass("selected");
	$($this).addClass("selected");
	var paymentType = $($this).attr("data-payment-type");
	
	cp_paymentCategory = category;
	

	if( category == "util" ) {
        //$("#spec_fields_t").css("display", "block");
        //$("#spec_fields_eon").css("display", "block");

        $("#cp_payment_beneficiary_id_1").css("display", "block");
        $("#cp_payment_beneficiary_id_2").css("display", "block");

        $("#cp_payment_beneficiary_id_3").css("display", "none");
        $("#cp_payment_beneficiary_id_4").css("display", "none");
        $("#cp_payment_beneficiary_id_5").css("display", "none");
        $("#cp_payment_beneficiary_id_6").css("display", "none");
        $("#cp_payment_beneficiary_id_7").css("display", "none");
        $("#cp_payment_beneficiary_id_8").css("display", "none");
        $("#cp_payment_beneficiary_id_9").css("display", "none");

	    $("#paymentNotUtil").css("display", "none");

	} else if( category == "chrty" ) {
        $("#spec_fields_t").css("display", "none");
        $("#spec_fields_eon").css("display", "none");
        
        $("#cp_payment_beneficiary_id_3").css("display", "block");
        $("#cp_payment_beneficiary_id_4").css("display", "block");

        $("#cp_payment_beneficiary_id_1").css("display", "none");
        $("#cp_payment_beneficiary_id_2").css("display", "none");
        $("#cp_payment_beneficiary_id_5").css("display", "none");
        $("#cp_payment_beneficiary_id_6").css("display", "none");
        $("#cp_payment_beneficiary_id_7").css("display", "none");
        $("#cp_payment_beneficiary_id_8").css("display", "none");
        $("#cp_payment_beneficiary_id_9").css("display", "none");

	    $("#paymentNotUtil").css("display", "none");
    } else {
        $("#spec_fields_t").css("display", "none");
        $("#spec_fields_eon").css("display", "none");
        
        $("#cp_payment_beneficiary_id_1").css("display", "none");
        $("#cp_payment_beneficiary_id_2").css("display", "none");
        $("#cp_payment_beneficiary_id_3").css("display", "none");
        $("#cp_payment_beneficiary_id_4").css("display", "none");

        $("#cp_payment_beneficiary_id_5").css("display", "block");
        $("#cp_payment_beneficiary_id_6").css("display", "block");
        $("#cp_payment_beneficiary_id_7").css("display", "block");
        $("#cp_payment_beneficiary_id_8").css("display", "block");
        $("#cp_payment_beneficiary_id_9").css("display", "block");

        $("#paymentNotUtil").css("display", "block");
        
    	if ( category == "mtopup" ) {
            $("#paymentNotUtil").css("display", "none");
    	    $("#commonpayment_container_1 .col-sm-7 form div").hide("1000");
    	    $("#commonpayment_container_1 .col-sm-7 form").css("background-color", "transparent");
    	}
	}

    //ha nem mtopup es nem util (es nem charity??
	    //$("#commonpayment_container_1 .col-sm-7 form div").show("1000");
	    //$("#commonpayment_container_1 .col-sm-7 form").css("background-color", "rgba(0,0,0,0.05)");

	/*
	var beneficiary_account_number = $($this).attr("data-beneficiary_account_number");
	var beneficiary_address = $($this).attr("data-beneficiary_address");
	var beneficiary_bank_code = $($this).attr("data-beneficiary_bank_code");
	var beneficiary_bank_name = $($this).attr("data-beneficiary_bank_name");
	var beneficiary_bank_address = $($this).attr("data-beneficiary_bank_address");
	var beneficiary_bank_country = $($this).attr("data-beneficiary_bank_country");
	var beneficiary_account_name = $($this).attr("data-beneficiary_account_name");
	*/
	$(".payment_type_name").text(paymentType);
	cp_payment_type = paymentType;
}

function filterBeneficiaryByCategory(){
	var currentContainer = document.getElementById("commonpayment_container_2");
	var beneficiaryArr = currentContainer.getElementsByTagName("a");
	if(beneficiaryArr.length > 0 ){
		for(var c=0; c<beneficiaryArr.length; c++){
			var currentItem = beneficiaryArr[c];
			if(currentItem.getAttribute("data-beneficiary_category") == cp_paymentCategory){
				currentItem.setAttribute("style", "display: '' ");
			} else {
				currentItem.setAttribute("style", "display: none ");
			}
		}
	}
	
}

function swipePaymentPartnerScreen($this) {
    if(cp_paymentCategory != null){
		filterBeneficiaryByCategory();
		
	}

	cp_ben_desc = $("#commonpayment_container_1 .payment_form .form-group textarea").val();
	cp_ben_amount = $("#commonpayment_container_1 .payment_form .form-group .input_payment input").val();
	cp_ben_currency = "EUR";

}

var cp_ben_name="";
var cp_ben_accno="";
var cp_ben_bankcode="";
var cp_ben_bankname="";
var cp_ben_bankaddr="";
var cp_ben_amount="";
var cp_ben_currency="";
var cp_ben_accname="";
var cp_ben_bankcountry="";
var cp_ben_desc="";
var cp_benAddress = "";
var cp_src_accname="My Current Account";
var cp_src_accbal="1,234.99 EUR";
var cp_ben_imgsrc="";

function selectPaymentUser($this, paymentType) {
	$($this).closest(".benefeciaries-tab").find(".benefeciary-list-item").removeClass("active");
	$($this).addClass("active");

    var userData = {
        cp_ben_name : $($this).find(".benefeciary-name").html(),
        cp_ben_accno : $($this).attr("data-beneficiary_account_number"),
        cp_ben_address : $($this).attr("data-beneficiary_address"),
        cp_ben_city : $($this).attr("data-beneficiary_city"),
        cp_ben_zip : $($this).attr("data-beneficiary_zip"),
        cp_ben_bankcode : $($this).attr("data-beneficiary_bank_code"),
        cp_ben_bankname : $($this).attr("data-beneficiary_bank_name"),
        cp_ben_bankaddr : $($this).attr("data-beneficiary_bank_address"),
        cp_ben_bankcountry : $($this).attr("data-beneficiary_bank_country"),
        cp_ben_accname : $($this).attr("data-beneficiary_account_name"),
        cp_ben_imgsrc : $($this).find('.benefeciary-icon img').attr("src"),
		cp_ben_img : $($this).find(".benefeciary-icon").html(),
        cp_ben_from_list : true
    };

	if (paymentType == 'quick') {
        fillQuickPaymentSelectedUser(userData, "#quickpayment_container_1 .info-block", paymentType);
        fillQuickPaymentSelectedUser(userData, "#quickpayment_container_2", paymentType);
        fillQuickPaymentSelectedUser(userData, "#quickpayment_container_3", paymentType);
    }else if (paymentType == 'charity') {
        fillQuickPaymentSelectedUser(userData, "#charitypayment_container_1 .info-block", paymentType);
        fillQuickPaymentSelectedUser(userData, "#charitypayment_container_2", paymentType);
        fillQuickPaymentSelectedUser(userData, "#charitypayment_container_3", paymentType);   
        fillQuickPaymentSelectedUser(userData, "#charitypayment_container_4", paymentType);
    } else if (paymentType == 'thirdParty') {
		//console.log(userData.cp_ben_img);	
        fillThirdPartyPaymentSelectedUser(userData, "#commonpayment_container_2 .payment-benefeciary-details", paymentType);
        var townZipString = userData.cp_ben_city;
        if (userData.cp_ben_zip != "" && typeof userData.cp_ben_zip != 'undefined') {
            townZipString += ', ' + userData.cp_ben_zip;
        }
        userData.cp_ben_address += ',' + townZipString;
        fillQuickPaymentSelectedUser(userData, "#commonpayment_container_3", paymentType);
        fillQuickPaymentSelectedUser(userData, "#commonpayment_container_4", paymentType);
    }
}

function fillQuickPaymentSelectedUser (userData, container, paymentType) {
    var $container = $(container);
    $('.name', $container).html(userData.cp_ben_name);
    $('.account-number', $container).html(userData.cp_ben_accno);
    $('.address', $container).html(userData.cp_ben_address.replace(",", ",<br/>"));
	
	if (paymentType == 'thirdParty') {
		$('.benefeciary-icon-full', $container).html(userData.cp_ben_img);
		//console.log(userData.cp_ben_img);
	} else {
		var $imageWrapper = $('.payment-logo', $container);
		if ($('img',$imageWrapper).length == 0) {
			var image = "<img src=" + userData.cp_ben_imgsrc + ">";
			$imageWrapper.empty().append(image);
		} else {
			$('img',$imageWrapper).attr('src', userData.cp_ben_imgsrc);
		}
	}
    if ($('.save-benefeciary', $container).length > 0) {
        $('.save-benefeciary', $container).html(userData.cp_ben_name);
    }
}

function fillThirdPartyPaymentSelectedUser (userData, container) {
    var $container = $(container);
    $('.name', $container).val(userData.cp_ben_name);
    $('.account-number', $container).val(userData.cp_ben_accno);
	$('.bic', $container).val(userData.cp_ben_bankcode);
    $('.address', $container).val(userData.cp_ben_address);
    var townZipString = userData.cp_ben_city;
    if (userData.cp_ben_zip != "" && typeof userData.cp_ben_zip != 'undefined') {
        townZipString += ', ' + userData.cp_ben_zip;
    }
    $('.town-zip', $container).val(townZipString);
    if ($('.from-list', $container).length > 0) {
        $('.from-list', $container).val(userData.cp_ben_from_list);
    }
}

function clearThirdPartyPaymentSelectedUser (container, buttonElement) {
    var $container = $(container);
    $('.name', $container).val("");
    $('.account-number', $container).val("");
    $('.address', $container).val("");
    $('.town-zip', $container).val("");
    $('.from-list', $container).val("");
    $(buttonElement).siblings().removeClass("active");
}

function fillTransactionDetails (container, dataContainer) {
    var $container = $(container);  
    console.log(container.indexOf())
    if(container.indexOf('charitypayment') != -1){
        $('.amount').val($('.charity_calculator_value.zakat').html());
        $('.transaction-date').val($('#date-datepicker-charity').val());
        if($('#charitypayment_container_5').css('display')=='block'){         
           $('.password-block').hide();
           $('.spiner-block').show();
           nextPageValidations(el, me);
    	   setTimeout(function() {
            $('.password-block').show();
            $('.spiner-block').hide();
           }, 2000);
        }
    }else if(container.indexOf('termDepositOpening') != -1){
        $('.amount').val($('.charity_calculator_value.zakat').html());
        $('.transaction-date').val($('#date-datepicker-charity').val());
        if($('#termDepositOpening_container_4').css('display')=='block'){         
           $('.password-block').hide();
           $('.spiner-block').show();
           nextPageValidations(el, me);
           setTimeout(function() {
            $('.password-block').show();
            $('.spiner-block').hide();
           }, 2000);
        }
    }
    else if(container.indexOf('cardApplication') != -1){

        $('.amount').val($('.charity_calculator_value.zakat').html());
        $('.transaction-date').val($('#date-datepicker-charity').val());
     //   if($('#cardApplication_container_4').css('display')=='block'){ 
           $('.password-block').hide();
           $('.spiner-block').show();
          // nextPageValidations(el, me);
           setTimeout(function() {
            $('.password-block').show();
            $('.spiner-block').hide();
           }, 2000);
       // }
    }
    else if(container.indexOf('loneRequest') != -1){

        $('.amount').val($('.charity_calculator_value.zakat').html());
        $('.transaction-date').val($('#date-datepicker-charity').val());
     //   if($('#cardApplication_container_4').css('display')=='block'){ 
           $('.password-block').hide();
           $('.spiner-block').show();
          // nextPageValidations(el, me);
           setTimeout(function() {
            $('.password-block').show();
            $('.spiner-block').hide();
           }, 2000);
       // }
    }  
    else if(container.indexOf('accountOpening') != -1){

        $('.amount').val($('.charity_calculator_value.zakat').html());
        $('.transaction-date').val($('#date-datepicker-charity').val());
     //   if($('#cardApplication_container_4').css('display')=='block'){ 
           $('.password-block').hide();
           $('.spiner-block').show();
          // nextPageValidations(el, me);
           setTimeout(function() {
            $('.password-block').show();
            $('.spiner-block').hide();
           }, 2000);
       // }
    }
    else if(container.indexOf('chequebook') != -1){

        $('.amount').val($('.charity_calculator_value.zakat').html());
        $('.transaction-date').val($('#date-datepicker-charity').val());
     //   if($('#cardApplication_container_4').css('display')=='block'){ 
           $('.password-block').hide();
           $('.spiner-block').show();
          // nextPageValidations(el, me);
           setTimeout(function() {
            $('.password-block').show();
            $('.spiner-block').hide();
           }, 2000);
       // }
    }    
    else if(container.indexOf('commonpayment') != -1){

        $('.amount').val($('.charity_calculator_value.zakat').html());
        $('.transaction-date').val($('#date-datepicker-charity').val());
     //   if($('#cardApplication_container_4').css('display')=='block'){ 
           $('.password-block').hide();
           $('.spiner-block').show();
          // nextPageValidations(el, me);
           setTimeout(function() {
            $('.password-block').show();
            $('.spiner-block').hide();
           }, 2000);
       // }
    }
    else if(container.indexOf('quickpayment') != -1){

        $('.amount').val($('.charity_calculator_value.zakat').html());
        $('.transaction-date').val($('#date-datepicker-charity').val());
     //   if($('#cardApplication_container_4').css('display')=='block'){ 
           $('.password-block').hide();
           $('.spiner-block').show();
          // nextPageValidations(el, me);
           setTimeout(function() {
            $('.password-block').show();
            $('.spiner-block').hide();
           }, 2000);
       // }
    }
    $(".transaction-amount", $container).html($('.currency', dataContainer).val() + ' ' + $('.amount', dataContainer).val());
    $(".transaction-date", $container).html($('.datepicker-input', dataContainer).val());
    $(".transaction-reference", $container).html($('.reference', dataContainer).val());
}
/*function pageLoader(container){
    setTimeout(function(){
    if($(container).css('display')=='block'){        
           $(container).find('.left-part').hide();
           $('.spiner-block').show();
          // nextPageValidations(el, me);
           setTimeout(function() {
            $(container).find('.left-part').show();
            $('.spiner-block').hide();
           }, 2000);
        }
    }, 200);
}*/
function clearTransactionDetails (container) {
    var $container = $(container);
    $('.currency', $container).val("USD");
    $('.amount', $container).val("");
    $('.datepicker-input', $container).datepicker("setDate", new Date());
    $('.reference', $container).val("");
}

function defaulValues(container){
    $('.name',container).val($('.name',container).attr("value"))
}

function fillPaymentBenefeciary (fromContainer, toContainer) {
    var $container = $(toContainer);
    $('.name', $container).html($('.name',fromContainer).val());
    $('.account-number', $container).html($('.account-number',fromContainer).val());
    var addressString = $('.address',fromContainer).val();
    var townZipString = $('.town-zip',fromContainer).val();
    if (townZipString != "" && typeof townZipString != 'undefined') {
        addressString += ', ' + townZipString;
    }
    $('.address', $container).html(addressString.replace(",", ",<br/>"));
    if ($('.from-list', fromContainer).length > 0 && $('.from-list', fromContainer).val() == "") {
        $('.payment-logo', $container).html("<img src='images/svg/nickname.svg' class='svg'>");
        svgFix();
    }
}

function validationPaymentFirst (el, me, fromContainer, toContainer) {	
	var isValidate = true;	
	var placeholderOld = '';
	var isIgnore = false;
	$( "#payment-benefeciary-fields-first input" ).each(function( index ) {
		
		isIgnore = $(this).attr('notrequired');
		if($(this).val() == '' && isIgnore == undefined){
			$(this).attr('style', 'border-color: currentcolor currentcolor red;');
			$(this).addClass('placeholder-error');
			placeholderOld = $(this).attr('placeholder');
			$(this).attr('placeholderOld', placeholderOld);
			$(this).attr('placeholder', 'Empty field');
			isValidate = false;
		}
	});
	if(isValidate){
		nextPageValidations(el, me);
	}
}

function validationPayment (el, me, fromContainer, toContainer, id, enabledLoader) {	
    // alert(2222)
    debugger
	var isValidate = true;	
	var placeholderOld = '';
	var isIgnore = false;
	$(id + " input" ).each(function( index ) {
		isIgnore = $(this).attr('notrequired');		
		//console.log(isIgnore);
		if($(this).val() == '' && isIgnore == undefined){
           // alert(43333)
			$(this).attr('style', 'border-color: currentcolor currentcolor red;');
			$(this).addClass('placeholder-error');
			placeholderOld = $(this).attr('placeholder');
			$(this).attr('placeholderOld', placeholderOld);
			$(this).attr('placeholder', 'Empty field');
			isValidate = false;
		}
	});     
	if(isValidate){  
  		if(enabledLoader){
			$(el+' .password-block').hide();
			$(el+' .spiner-block').show();
			nextPageValidations(el, me);
			setTimeout(function() {
				$(el+' .password-block').show();
				$(el+' .spiner-block').hide();
			}, 2000);			
		} else {
			nextPageValidations(el, me);
		}
	}
}

function selectAccount (infoElement, toContainer, lastPaymentId) {
    var $container = $('.payment-info', toContainer);
    $('.name', $container).html($(infoElement).data('name'));
    $('.balance', $container).html($(infoElement).data('balance'));
    $('.payment-logo', toContainer).html($('.accounts-icon', infoElement).html());	
	if(lastPaymentId != undefined){
		$('.widget-own-account-payment .transactions-list').hide();
		$(lastPaymentId).show();
	}
}

function fillAccountInfo (fromContainer, toContainer) {
    $('.name', toContainer).html($('.name', fromContainer).html());
    $('.balance', toContainer).html($('.balance', fromContainer).html());
    $('.payment-logo', toContainer).html($('.payment-logo', fromContainer).html());
}

var prevBeneficiaryValue = null;
function selectBeneficiaryInput($this) {
	$($this).parent().parent().find(".fa-remove").css("display", "none");
	$($this).parent().parent().find(".fa-check").css("display", "none");
	var input = $($this);
	prevBeneficiaryValue = $(input).val();
	$($this).closest(".payment_beneficiary").find("input").removeClass("selected");
	$($this).addClass("selected");
	$($this).next("i.fa-check").css("display", "initial");
	$($this).next("i.fa-check").next("i.fa-remove").css("display", "initial");
	
}


function deselectBeneficiaryInput($this, ok) {
	$($this).parent().find(".fa-remove").css("display", "none");
	$($this).parent().find(".fa-check").css("display", "none");
	var input = $($this).parent().find(".selected");
	$(input).removeClass("selected");
	if( !ok ) {
		$(input).val(prevBeneficiaryValue);
		$("#paymentBeneficiarySave").hide(300);
	} else {
		$("#paymentBeneficiarySave").show(300);
	}
	prevBeneficiaryValue = null;
}

function addNewBeneficiary($this) {
	$("#payBeneficiaryName").val("");
	$("#payBeneficiaryAccNo").val("");
	$("#payBeneficiaryAddress").val("");
	$("#payBeneficiaryBankCode").val("");
	$("#payBeneficiaryBankName").html("<span>Bank name</span>");
	$("#payBeneficiaryBankAddress").html("<span>Address</span>");
	$("#payBeneficiaryBankCountry").html("<span>Country</span>");
	$("#paymentBeneficiarySave").show(300);
	
}

function commonPaymentShowContainer2($this) {
    $("#commonpayment_container_3").hide();

    $("#commonpayment > .this_main_content").fadeIn( "3000");
   	$("#payment_result header").show();

}

function enableSignButton($this) {
	$('#paymentSignCompleteButton').prop('disabled', false);
}


function showPaymentResult($this)
{
    $("#commonpayment_container_3").hide();

    $("#commonpayment_container_5").fadeIn( "3000");
   	$("#payment_result header").show();
   	
    $("#commonpayment_container_4 .btncontainer a").show(); //hack, vlamiert nem akarta megjeleniteni
   	setTimeout(function(){
   	    $("#commonpayment_container_5").hide();
   	    $("#commonpayment_container_4").fadeIn( "3000");
   	}, 3000);

}


function showError(articleId) {
    $("#" + articleId + " .article-error span").css("display", "none");
/*    
    $("#" + articleId + " .article-error").animate({width:"toggle"},{
        duration:200,
        start:function(){
            $("#payment_error_desc").show("display", "block !important");
        },
        complete:function(){
            $("#" + articleId + " .article-error span").css("display", "block");
            $("#" + articleId + " .article-error-sub").css("display", "block");
        }
    });
  */
    
  
    $("#" + articleId + " .article-error").animate( {width: "toggle"}, 200, "linear"

    ,function () {
        $("#" + articleId + " .article-error span").css("display", "block");
        $("#" + articleId + " .article-error-sub").css("display", "block");
        $("#payment_error_desc").css("display", "block");
    }

    );

    //$("#" + articleId + " .article-error ").css("display", "table");
}
function hideError(_this, articleId) {
    $("#" + articleId + " .article-error span").css("display", "none");
    $("#" + articleId + " .article-error-desc").css("display", "none");

    $("#" + articleId + " .article-error").animate({width: 'toggle'}, 200, "linear");
    //$("#" + articleId + " .article-error").hide("slow");
    //$("#" + articleId + " .article-error").css("display", "none");
    //$("#" + articleId).parent().parent(".payment_error")
}

function selectCommonPaySrcAccount($this) {
    cp_src_accname = $($this).attr('data-account_name'); 
    cp_src_accbal = $($this).attr('data-account_balance');

	$("#commpayment a.curracc span").text(cp_src_accname + " (" +cp_src_accbal +")");
}

function fillAccountOpening($this , fromContainer , toContainer) {
    $('.acc-op-nickname', toContainer).html($('.name', fromContainer).val());
    $('.acc-op-curerency', toContainer).html($('.select-curency option:selected', fromContainer).html());
}

function fillTermDepositOpening($this , fromContainer , toContainer) {
    $('.deposit-amount', toContainer).html($('.name', fromContainer).val());
    $('.deposit-term', toContainer).html($('.select-term option:selected', fromContainer).html());
    $('.deposit-acc', toContainer).html($('.select-deposit-acc option:selected', fromContainer).html());
    $('.deposit-rollover', toContainer).html($('.select-rollover option:selected', fromContainer).html());
}

function fillLoanRequest($this , fromContainer , toContainer) {
    $('.loan-amount', toContainer).html($('.amount1', fromContainer).val());
    $('.loan-term', toContainer).html($('.select-loan-term option:selected', fromContainer).html());
    $('.loan-repayment', toContainer).html($('.result', fromContainer).html());
    $('.loan-empstatus', toContainer).html($('.select-employmentstatus option:selected', fromContainer).html());
    $('.loan-salary', toContainer).html('$'+$('.a_name', fromContainer).val());
    $('.loan-marstatus', toContainer).html($('.select-status option:selected', fromContainer).html());
}

function fillcardApplication($this , fromContainer , toContainer){
    $('.transaction-name', toContainer).html($('.name', fromContainer).val());
    $('.transaction-type', toContainer).html($('.select-curency option:selected', fromContainer).html());
    $('.transaction-nickname', toContainer).html($('.nickname', fromContainer).val());
    $('.emplayment-status', toContainer).html($('.select-curency-2 option:selected', fromContainer).html());
    $('.transaction-salary', toContainer).html($('.gross-salary', fromContainer).val());
    $('.martial-status', toContainer).html($('.select-curency-3 option:selected', fromContainer).html());

}

function fillChequebook($this , fromContainer , toContainer){
    $('.chequebook-branch', toContainer).html($('.select-branch option:selected', fromContainer).html());
}

function countAmount(container) {
    var val = $('.amount1', container).val();
    var amount = val.split("");
    amount.shift();
    var res = [];
    var j = 0;
    for(var i=0; i<amount.length; i++)
    {
        if(amount[i].match(/\d/))
        {
            res[j] = amount[i];
            j++;
        }
    }
    
    $('.result' , container).html('$'+Math.round((res.join(""))/parseInt($('.select-loan-term option:selected' , container).html())))
}

function checkMinAmount(container,li_position){
    var val = $('.name', container).val();
    var min_amount = $('.text>ul>li:nth-child('+li_position+')', container).html();
    var amount = val.split("");
    var amount1 = min_amount.split("");
    var res = [];
    var res1 = [];
    var shown_res = [];
    var j = 0;
    for(var i=0; i<amount.length; i++)
    {
        if(amount[i].match(/\d/))
        {
            res[j] = amount[i];
            shown_res[j] = amount[i]; 
            j++;
        }
    }
    if(res[0] == 0)
    {
        shown_res.shift();
    }

    var j = 0;
    for(var i=0; i<amount1.length; i++)
    {
        if(amount1[i].match(/\d/))
        {
            res1[j] = amount1[i];
            j++;
        }
    }
    var j = shown_res.length-1;
    while(j>=2)
    {
        shown_res.splice(j-2 , 0 ,',');
        j-=3;    
        
    }

    if(Number(res.join('')) < Number(res1.join(''))){
    var j = res1.length-1;
    while(j>2)
    {
        res1.splice(j-2 , 0 ,',');
        j-=3;    
        
    }
        if(min_amount.match(/\USD/) || min_amount.match(/\$/))
        $('.name', container).val('$' + res1.join(''))
        else if(min_amount.match(/\EUR/))
        $('.name', container).val('€' + res1.join(''))
        else if(min_amount.match(/\CHF/))
        $('.name', container).val('CHF' + res1.join(''))
    }
    else{
        if(min_amount.match(/\USD/) || min_amount.match(/\$/))
        $('.name', container).val('$' + shown_res.join(''))
        else if(min_amount.match(/\EUR/))
        $('.name', container).val('€' + shown_res.join(''))
        else if(min_amount.match(/\CHF/))
        $('.name', container).val('CHF' + shown_res.join(''))
    }
}

function checkMaxAmount(container,li_position){
    var val = $('.name', container).val();
    var min_amount = $('.text>ul>li:nth-child('+li_position+')', container).html();
    var amount = val.split("");
    var amount1 = min_amount.split("");
    var res = [];
    var res1 = [];
    var shown_res = [];
    var j = 0;
    for(var i=0; i<amount.length; i++)
    {
        if(amount[i].match(/\d/))
        {
            res[j] = amount[i];
            shown_res[j] = amount[i]; 
            j++;
        }
    }
    if(res[0] == 0)
    {
        shown_res.shift();
    }

    var j = 0;
    for(var i=0; i<amount1.length; i++)
    {
        if(amount1[i].match(/\d/))
        {
            res1[j] = amount1[i];
            j++;
        }
    }
    var j = shown_res.length-1;
    while(j>2)
    {
        shown_res.splice(j-2 , 0 ,',');
        j-=3;    
        
    }

    if(Number(res.join('')) > Number(res1.join(''))){
    var j = res1.length-1;
    while(j>2)
    {
        res1.splice(j-2 , 0 ,',');
        j-=3;    
    }
        $('.name', container).val('$' + res1.join(''))
    }
        else
        $('.name', container).val('$' + shown_res.join(''))
        
}
//]]>
