//
//
//egy resze a script.js-ben van, onnan nem emeltem meg at ide semmit!
//
/*
function selectDefaultAccount($this)
    {
        $($this).closest('ul').find('li').removeClass('active');
        $($this).addClass('active');
        $("#quickpayment .default_account_number").text($($this).attr('data-account_number'));
        qp_src_accname = $($this).attr('data-account_name'); 
        qp_src_accbal = $($this).attr('data-account_balance');
    }
*/
    function doConfirmPayment($this)
    {
        //$("#quickpayment header").hide();
        $("#review_payment_box").hide();

        $( "#payment_result_wait" ).fadeIn( "3000");
        $( "#payment_result header" ).show();
        
        setTimeout(function(){
            $("#payment_result_wait").hide();
            $("#payment_result").fadeIn( "3000");
        }, 2500);


        
    }
    function resetForDoPayment()
    {
        $('#quickpayment .action_btn').show();
    }
    function quickShowTopContent($this)
    {
        $("#quickpayment .quckpt_top_cntnt").slideDown(400);
    }
    function quickHideTopContent($this)
    {
        $("#quickpayment .quckpt_top_cntnt").slideUp( 500, function() {
            $("#quickpayment a.curracc span").text(qp_src_accname + " (" +qp_src_accbal +")");
          });
        
    }
    function quickShowBottomContent($this)
    {
        //$(".quckpt_bottom_cntnt").slideDown('slow');
         $('#quickpayment .quckpt_bottom_cntnt').animate({
            height: 'toggle'
            }, 500, function() {
        });
    }
    function selectUserForPayment($this)
    {
        $('#quickpayment .quckpt_bottom_cntnt').animate({
            height: 'toggle'
            }, 500, function() {
        });
    }
    function addNewBenificary($this)
    {
        $('#quickpayment .add_new_benificary').animate({
            height: 'toggle',
            }, 500, function() {
        });
    
    }
    function cancelAddBenificary($this)
    {
        $('#quickpayment .add_new_benificary').animate({
            height: 'toggle'
            }, 500, function() {
        });
    }
    function quickHideBottomContent($this)
    {
        $("#quickpayment .quckpt_bottom_cntnt").slideUp('slow');
    }
    function quickPaymentShowOriginal($this)
    {
        resetForDoPayment();
        clearQuickPayVariables();
        //$this = $($this).closest('.grid-stack-item');
        //$flipable = $($this).find('.card_flip');
        //$flipto = $($this).find('.review_payment');
        
        //$('#quickpayment .quick_payment .review_beneficiary_account_number').css("display", "block");
        //$("#quickpayment").revertFlip();
    }
	var qrcode = null;
    function aferSendBtnClicked($this)
    {
        
        //$this = $($this).closest('.grid-stack-item');
        //$flipable = $($this).find('.card_flip');
        //$flipto = $($this).find('.review_payment');
        //$flipable.css('background-color','#999');
        //$flipto.show(2);
        //setTimeout(function(){
            //$flipable = $($this).find('.card_flip');
            //$flipto = $($this).find('.review_payment');

    	$('#quickpayment .quick_payment .review_beneficiary_account_number').css("display", "none");
        qp_ben_flip = true;

        qp_ben_amount = $("#quickpayment .payment_form .form-group .input_payment input").val();
        qp_ben_currency = "EUR";
        qp_ben_desc = $("#quickpayment .payment_form .form-group textarea").val();

        $("#quickpayment #review_payment_box header").html("<strong>Quick Payment to</strong>" + qp_ben_name);
        
        $("#quickpayment #review_payment_box #quickpayment_review_row_1 div.p").text(qp_ben_desc);
        $("#quickpayment #review_payment_box #quickpayment_review_row_1 .beni_content .beni_out").html(
                '<i class="fa fa-arrow-down"></i>' + qp_ben_amount + " " + qp_ben_currency);
            //$flipable.css('background-color','rgba(255, 255, 255, 0.5)');
        $("#quickpayment #review_payment_box #quickpayment_review_row_1 .quickpayment-list li:first").html(
                '<span class="li-title">To</span>' + qp_ben_accno);
        $("#qp_review_bank_name").text(qp_ben_bankname);
        //$("#qp_review_bank_address").text(qp_ben_bankaddr);
        $("#qp_review_bank_code").text(qp_ben_bankcode);
        $("#quickpayment_src_acc_name").html('<span class="li-title">From</span>' + qp_src_accname);
        $("#quickpay_review_img").css("background-image", "url(" + qp_ben_imgsrc + ")"); 

        if( qp_ben_bankaddr == "" ) {
            $('#qp_review_bank_address').html("&nbsp;");
        } else {
            $('#qp_review_bank_address').text(qp_ben_bankaddr);
        }

        $("#quickpayment #quickpayment_review_row_2 .qp-auth").css("display", "none");
        $("#quickpayment #quickpayment_review_row_2 .qp-qrcode").css("display", "none");

        //if( qp_ben_flip ) {
            if( qp_ben_amount == "" || (!isNaN( qp_ben_amount ) && Number(qp_ben_amount) < 1000) ) {
            	$("#quickpayment #review_payment_box input.nav").css("display", "block");
            	$("#quickpayment #quickpayment_review_row_2 .qp-auth").css("display", "block");
            } else {
            	$("#quickpayment #review_payment_box input.nav").css("display", "none");
            	
            	$("#quickpayment #quickpayment_review_row_2 .qp-qrcode").css("display", "block");
            	setTimeout(function(){ $("#quickpayment #review_payment_box input.nav.btn-next").click() }, 10000);
            }
        //}
		
        //qrDivHeight = $("#quickpayment_review_row_2").height() - 10
        //alert(qrDivHeight);
		if (qrcode==null) {
			qrcode = new QRCode("quick-qr", {
				text: "",
				width: 200,
				height: 200,
				colorDark : "#000000",
				colorLight : "#ffffff",
				correctLevel : QRCode.CorrectLevel.M
			});
		}
		qrcode.clear();
		var pattern = {
			amount : qp_ben_amount+" "+qp_ben_currency,
			accountTo : qp_ben_accno,
			rate : "1.1395",
			accountFrom : qp_src_accname,
			otp : "123123123",
			message : qp_ben_desc,
			fee : "0.99 EUR",
			nameTo : qp_ben_name,
			imageId : qp_ben_imgsrc
		};
		qrcode.makeCode(JSON.stringify(pattern));
		
    }
    function searchBankByCode()
    {
        $this = $("#beneficiary_bank_code_add");
        if(!$($this).val())
        {
            showErrorOnField($this);
            $("#beneficiary_bank_name_add").text('');
            $("#beneficiary_bank_address_add").text('');
            $("#beneficiary_bank_country_add").text('');
        }
        else
        {
            $($this).closest('.form-group').removeClass('has-error');
            $("#beneficiary_bank_name_add").text('RVB Bank Isen­Sempt');
            $("#beneficiary_bank_address_add").text('85661 Forstinning, Münchener str. 35');
            $("#beneficiary_bank_country_add").text('Germany');
            
        }
    }
	/*
    function addBeneficiarySubmit()
    {
        if(!$("#beneficiary_name_add").val())
        {
            $this = $("#beneficiary_name_add");
            showErrorOnField($this);
            return false;
        }
        if(!$("#beneficiary_account_number_add").val())
        {
            $this = $("#beneficiary_account_number_add");
            showErrorOnField($this);
            return false;
        }
        if(!$("#beneficiary_address_add").val())
        {
            $this = $("#beneficiary_address_add");
            showErrorOnField($this);
            return false;
        }
        if(!$("#beneficiary_bank_code_add").val())
        {
            $this = $("#beneficiary_bank_code_add");
            showErrorOnField($this);
            return false;
        }
        var name = $("#beneficiary_name_add").val();
        var beneficiary_account_number = $("#beneficiary_account_number_add").val();
        var beneficiary_address = $("#beneficiary_account_number_add").val();
        var beneficiary_bank_code = $("#beneficiary_bank_code_add").val();
        var beneficiary_bank_name = 'Deutsche Bank';
        var beneficiary_bank_address = '89 Koning Strasse, Munchen';
        var beneficiary_bank_country = 'Germany';
        cancelAddBenificary();
        addBenificarySuccess(name,beneficiary_account_number,beneficiary_address,beneficiary_bank_code,beneficiary_bank_name,beneficiary_bank_address,beneficiary_bank_country);
    }*/
    function showErrorOnField($this)
    {
        $($this).closest('.form-group').addClass('has-error');
        $($this).focus();
    }
    function addBenificarySuccess(name,beneficiary_account_number,beneficiary_address,beneficiary_bank_code,beneficiary_bank_name,beneficiary_bank_address,beneficiary_bank_country)
    {
        var thishtml = '<a href="JavaScript:" data-benificery_name="'+name+'" data-beneficiary_account_number="'+beneficiary_account_number+'" data-beneficiary_address="'+beneficiary_address+'" data-beneficiary_bank_code="'+beneficiary_bank_code+'" data-beneficiary_bank_name="'+beneficiary_bank_name+'" data-beneficiary_bank_address="'+beneficiary_bank_address+'" data-beneficiary_bank_country="'+beneficiary_bank_country+'"   onclick="selectQuickPaymentUser(this)"><img class="img-responsive" src="img/no_image.png" /></a>';
        $('.quick_benificery_list a:last').remove();
        $('.quick_benificery_list').append(thishtml);
        setTimeout(function(){
            $('.quick_benificery_list a:last').trigger('click');
        },1000);
        
        
    }
    
    var qp_ben_name = "";
    var qp_ben_accno = "";
    var qp_ben_bankcode = "";
    var qp_ben_bankname = "";
    var qp_ben_bankaddr = "";
    var qp_ben_amount = "";
    var qp_ben_currency = "";
    var qp_ben_accname = "";
    var qp_ben_bankcountry = "";
    var qp_ben_desc = "";
    var qp_src_accname = "My Current Account";
    var qp_src_accbal="1,234.99 EUR"
    var qp_ben_imgsrc = "";
    var qp_ben_flip = false;

    function clearQuickPayVariables() {
        qp_ben_name = "";
        qp_ben_accno = "";
        qp_ben_bankcode = "";
        qp_ben_bankname = "";
        qp_ben_bankaddr = "";
        qp_ben_amount = "";
        qp_ben_currency = "";
        qp_ben_accname = "";
        qp_ben_bankcountry = "";
        qp_ben_desc = "";
        qp_src_accname = "My Current Account";
        qp_src_accbal = "1,234.99 EUR";
        qp_ben_flip = false;
    }


    function selectQuickPaymentUser($this) {
    	
        $($this).closest('.quick_payment').find('a').removeClass('selected');
        $($this).addClass('selected');
        qp_ben_name = $($this).attr('data-benificiary_name');
        qp_ben_accno = $($this).attr('data-beneficiary_account_number');
        var beneficiary_address = $($this).attr('data-beneficiary_address');
        qp_ben_bankcode = $($this).attr('data-beneficiary_bank_code');
        qp_ben_bankname = $($this).attr('data-beneficiary_bank_name');
        qp_ben_bankaddr = $($this).attr('data-beneficiary_bank_address');
        qp_ben_bankcountry = $($this).attr('data-beneficiary_bank_country');
        qp_ben_accname = $($this).attr('data-beneficiary_account_name');
        qp_ben_imgsrc = $($this).children().attr("src");
        
        $('#quickpayment .payment_to_name').text(qp_ben_name);

        $('#quickpayment .review_benificery_name').text(qp_ben_name);
        $('#quickpayment .review_beneficiary_account_number').css("visibility", "visible");
        $('#quickpayment .review_beneficiary_account_number').html(
                qp_ben_accname + " (" + qp_ben_accno + ")<i class=\"toggle-edit fa fa-pencil pull-right\"></i>");
        // $('#quickpayment
        // .review_beneficiary_account_name').text(beneficiary_account_name);
        $('#quickpayment .review_beneficiary_address').text(beneficiary_address);
        $('#quickpayment .review_beneficiary_bank_code').text(qp_ben_bankcode);
        $('#quickpayment .review_beneficiary_bank_name').text(qp_ben_bankname);
        $('#quickpayment .review_beneficiary_bank_address').text(qp_ben_bankaddr);
        $('#quickpayment .review_beneficiary_bank_country').text(qp_ben_bankcountry);

        $("#quickPaymentFirstNextButton").attr("disabled", false);
    }

    function selectQuickPaySrcAccount($this) {
        qp_src_accname = $($this).attr('data-account_name'); 
        qp_src_accbal = $($this).attr('data-account_balance');

        $("#quickpayment a.curracc span").text(qp_src_accname + " (" +qp_src_accbal +")");
    }
//]]>
    
