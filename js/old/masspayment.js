function initMassPayMent(el) {


	var bblock = (el==null?$("#masspaymentart .bb-bookblock"):$(el).find(".bb-bookblock"));
	
	addProcessing( bblock.find(".bb-item.processing") );
	
	makeHeader(bblock.find(".bb-item").get(0), "<strong>Mass Payment</strong>from", true, "selectMasspaySrcAccount", "masspayShowTopContent(this)");
	makeHeader(bblock.find(".bb-item").get(1), "<strong>Mass Payment</strong>review", false);
	//makeHeader(bblock.find(".bb-item").get(2), "<strong>Mass Payment</strong>result", false);
	makeHeader(bblock.find(".bb-item").get(3), "<strong>Mass Payment</strong>result", false);
	
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
	
	addMasspaymentInputNavClickEvent(bblock);
	Dropzone.discover();
}



//ez a regi mukodes volt, nem a flipes, hanem a fade-es
function addMasspaymentInputNavClickEvent(bblock) {
	bblock.find("input.nav").click( function(event) {

		return false;
		/*
		 * ennyi msec utan ugrik a kovetkezo oldalra (vagy undefined)
		 */
		var autotime=undefined;
		/*
		 * nem hasznaljuk, azt mondana meg, hogy merre menjen tovabb ha magatol valtana
		 */
		var autodir=undefined;
		/*
		 * az aktualisan megjelenitett, azaz lathato oldal
		 */
		var actItem = undefined;
		/*
		 * navigacios irany [next, prev, first]
		 */
		var direction = $(this).attr("data-nav-dir");
		
		if( "next" == direction) {
			
			//if( $(this).closest(".turn-item").next().length==0 ) {
				//ez ugyanaz mintha azt mondanank, hogy dir==first, lehet a feltetelt kivehetjuk es akkor html donti el, h hibara fut e
			//} else {
				
				//$(this).closest(".turn-item").children("header").css("display", "none");
			
				$(this).closest(".turn-item").fadeOut("slow");
				
				actItem=$(this).closest(".turn-item").next(".turn-item");
				
				$(actItem).fadeIn(500, function() {
					$(this).prev(".turn-item").css("display", "none");
				});

				;
				//setTimeout(function() {
				//	$(this).prev(".turn-item").css("display", "none");
				//}, 500);
				
				//$(actItem).css("display", "block");
				//$(this).closest(".turn-item").fadeOut("slow");
			//}
		}
		else if( "prev" == direction) {
			//$(this).closest(".turn-item").fadeOut("300");

			actItem=$(this).closest(".turn-item").prev();
			$(actItem).css("display", "inherit")
			
			$(this).closest(".turn-item").fadeOut(500, function() {
				//$(this).closest(".turn-item").prev(".turn-item").children("header").css("display", "inherit");
			});
			//$(actItem).fadeIn(2300, function() {
				//$(this).next(".turn-item").css("display", "none");
			//});
			//$(this).closest(".turn-item").fadeOut("slow");
		}
		else if( "first" == direction) {
			//elhideoljuk az elso es utolso kivetelevel mindet
			///for( i=1; i< $(this).closest(".turn-container").children(".turn-item").length-1; i++ ) {
			///	$($(this).closest(".turn-container").children(".turn-item").get(i)).css("display", "none");
			///}
			actItem=$(this).closest(".turn-container").children(".turn-item").get(0);

			$(actItem).css("display", "inherit")

			
			////$(actItem).fadeIn("slow");
			$($(this).closest(".turn-container").children(".turn-item").get(-1)).fadeOut("slow");
		}
		
		//auto skip kezeles, ha meg van adva, h mennyi ido mulva dobja at a kovetkezo oldalra
		autotime = $(actItem).attr("data-nav-auto-time"); //undefined, ha nincs
		if( autotime !== undefined ) {

			/*
				$(this).closest(".turn-item").fadeOut("slow");
				
				actItem=$(this).closest(".turn-item").next(".turn-item");
				
				$(actItem).fadeIn(500, function() {
					$(this).prev(".turn-item").css("display", "none");
				});

			 */
			
			
			//actItem == .processing
			
			toPage = $(actItem).next(".turn-item");
			$(actItem).prev(".turn-item").css("display", "none");
			$(actItem).css("display", "inherit");
			
			setTimeout(function(){
				
				//kovetkezo fadein
				toPage.fadeIn(500, function() {
					toPage.prev(".turn-item").css("display", "none");
				});
				//aktualis hide utana

				//$(actItem).fadeIn("300", function() {
				//	$(this).prev(".turn-item").css("display", "none");
				//});

				/*
				toPage.fadeIn("slow");
				toPage.prev(".turn-item").fadeOut("fast");
				actItem.fadeOut("fast");
				*/
			}, Number(autotime) );
		}
		
		autotime = undefined;
		actItem = undefined;
		
	});
}


Dropzone.options.masspayDropzone = {

		init: function() {
			/*
			this.on("dragenter", function(event) {
				console.log("dragenter");
				$("#masspay-dropzone .dz-default").addClass("drag");
			}),
			this.on("dragover", function(event) {
				console.log("dragleave");
				$("#masspay_dropzone .dz-default").removeClass("drag");
			}),
			*/
			this.on("sending", function(file, xhr, formData) {
				// Show the total progress bar when upload starts
				// And disable the start button
				console.log("sending...");
			}),

			this.on("totaluploadprogress", function(progress) {
				console.log("totalprogress: " + progress);
				//document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
			}),
			this.on("uploadprogress", function(file, progress, bytesSent) {
				console.log("progress: " + progress);
				//document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
			}),
			
			this.on("success", function(file) {
				console.log("success " + file.name);

				$("#masspay_dropzone").removeClass("fileloading");
				$("#masspay_dropzone_previews").hide();
				$("#masspay_dropzone .dz-preview").hide();

				$("#masspay_file_details").show();
				$("#masspay_filename_span").text(file.name);
				$("#masspay_filesize_span").text( Math.round(file.size / 1024) + " KB" );
				$("#masspay_file_details .fa-check-circle-o").removeClass("hide");
			
			}),

			this.on("error", function(file, event) {
				console.log("error occured "+file.name + ": " +event);
				
				//ugorjunk es csinaljuk ugy, mintha siekrult volna...
				$("#masspay_dropzone").removeClass("fileloading");
				$("#masspay_dropzone_previews").hide();
				$("#masspay_dropzone .dz-preview").hide();

				$("#masspay_file_details").show();
				$("#masspay_filename_span").text(file.name);
				$("#masspay_filesize_span").text( Math.round(file.size / 1024) + " KB" );
				$("#masspay_file_details .fa-ban").removeClass("hide");
				$("#masspay_error_span").text(event);
				
			}),

			this.on("addedfile", function(file) {
				console.log("added "+file.name);
				
				$("#masspay_filename").text(file.name);
				$("#masspay_filesize").text("Size: "+ Math.round(file.size / 1024) + " KB" );
				
				$("#masspay_dropzone .dz-default").hide();
				$("#masspay_dropzone").addClass("fileloading");
				$("#masspay_dropzone_previews").show();

				$("#masspay_filename").text(file.name);
				$("#masspay_filesize").text( Math.round(file.size / 1024) + " KB" );
				// Capture the Dropzone instance as closure.
				var _this = this;

				/*
				// Create the remove button
				var removeButton = Dropzone.createElement("<button>Remove file</button>");
				// Listen to the click event
				removeButton.addEventListener("click", function(e) {
				  // Make sure the button click doesn't submit the form:
				  e.preventDefault();
				  e.stopPropagation();
				  // Remove the file preview.
				  _this.removeFile(file);
				  // call deleteFileOnServer(file.name)
				});
				// Add the button to the file preview element.
				file.previewElement.appendChild(removeButton);
				*/
				$("#masspay_file_details .cancel").on("click", function(e) {
					// Make sure the button click doesn't submit the form:
					
					console.log("change file...");
					e.preventDefault();
					e.stopPropagation();
					// Remove the file preview.
					_this.removeFile(file);
					// call deleteFileOnServer(file.name)
					
					$("#masspay_dropzone_previews").hide();
					$("#masspay_dropzone .dz-preview").hide();
					$("#masspay_dropzone .dz-message").show();
					$("#masspay_dropzone .dz_default").css("display", "table");
					$("#masspay_file_details").hide();
					$("#masspay_file_details .fa-ban").addClass("hide");
					$("#masspay_file_details .fa-check-circle-o").addClass("hide");
					$("#masspay_error_span").text("");

					
					//meg kellene szuntetni ezt a listenert.
					$("#masspay_file_details .cancel").off("click");
					$("#masspay_filename_span").text("");
					$("#masspay_filesize_span").text("");
				  });

				$("#masspay_dropzone_previews .start").on("click", function(e) {
					// Make sure the button click doesn't submit the form:
					e.preventDefault();
					e.stopPropagation();
					// Remove the file preview.
					
					console.log("starting");
					_this.enqueueFile(file);
					_this.processQueue();
					//_this.enqueueFiles(_this.getFilesWithStatus(Dropzone.ADDED));
					// call deleteFileOnServer(file.name)
					
					//meg kellene szuntetni ezt a listenert.
				  });
			
			});
		},
		paramName: "file", // The name that will be used to transfer the file
		autoProcessQueue: true,
		//autoQueue: true,
		maxFiles: 1,
		maxFilesize: 5, // MB
		previewTemplate: '<div class="dz-preview dz-file-preview"> <div id="masspay_filename"></div><br/><div id="masspay_filesize"></div><br/><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress=""></span></div>  <div class="dz-error-message"><span data-dz-errormessage=""></span></div></div>',
		//previewsContainer: "#masspay-dropzone-previews",
		accept: function(file, done) {
			//itt meg lehetne csinalni, hogy csak bizonyos kiterjeszteseket engedjen feltolteni
			if (file.name == "ProduKey.cfg") {
				done("Naha, you don't.");
			} else { 
				done(); }
		}
		

};



/*/////////////*/
/*
function selectDefaultAccount($this)
    {
        $($this).closest('ul').find('li').removeClass('active');
        $($this).addClass('active');
        $(".default_account_number").text($($this).attr('data-account_number'));
        mp_src_accname = $($this).attr('data-account_name'); 
        mp_src_accbal = $($this).attr('data-account_balance');
    }
    */
    function doConfirmMasspayment($this)
    {
        $("#masspayment header").hide();
        $("#review_masspay_box").hide();
        
        

        $( "#masspay_result_wait" ).fadeIn( "3000");
        $( "#masspay_result header" ).show();
        
        setTimeout(function(){
            $("#masspay_result_wait").hide();
            $("#masspay_result").fadeIn( "3000");
        }, 1500);


        
    }

    function masspayShowTopContent($this)
    {
        $("#masspayment .quckpt_top_cntnt").slideDown(400);
    }
    function quickHideTopupTopContent($this)
    {
        $("#masspayment .quckpt_top_cntnt").slideUp( 500, function() {
            $("#masspayment a.curracc span").text(mp_src_accname + " (" +mp_src_accbal +")");
          });
        
    }

    function masspaymentShowOriginal($this)
    {
        resetForDoPayment();
        clearQuickPayVariables();
        
        $('.quick_payment .review_beneficiary_account_number').css("display", "block");
        //$("#masspayment").revertFlip();
    }
    
    
    function masspaySendBtnClicked($this) {
		var bblock = $($this).closest(".bb-bookblock");
    	bblock.bookblock( "next" );
    	return;

    	//TODO:
    	    //var mp_ben_phone_number = document.getElementById('masspayPhoneNumber').value;
            var mp_ben_phone_number = "";
            $('.quick_payment .review_beneficiary_phone_number').css("display", "none");
            mp_ben_flip = true;
            bblock.flip({
                direction:"lr",
                color:"transparent",
                speed:230,
                content: $("#review_masspay"),
                onBefore: function() {
                	mp_ben_amount = $("#masspayAmount").val();
                    mp_ben_currency = "EUR";
                    $('#masspayment .review_beneficiary_account_number').hide();
                },
                onEnd: function(){
                    $("#masspayment .masspay-header").html("<strong>Top-Up to</strong>" + mp_ben_name);
                    //$("#masspayment #review_masspay_box #masspay_review_row_1 div.p").text(mp_ben_desc);
                    $("#masspayment #review_masspay_box #masspay_review_row_1 .beni_content .beni_out").html(
                            '<i class="fa fa-arrow-down"></i>' + mp_ben_amount + " " + mp_ben_currency);
                        //$flipable.css('background-color','rgba(255, 255, 255, 0.5)');
                    
                    //$("#masspayment #review_masspay_box #masspay_review_row_1 .quickpayment-list li:first").html('<span class="li-title">To</span>' + mp_ben_phone_number);
                    
                    //$("#masspay_src_acc_name").text(mp_ben_bankname);
                    //$("#mp_review_bank_address").text(mp_ben_bankaddr);
                    $("#mp_review_bank_code").text("<b>From: </b>My current account");
                    $("#masspay_src_acc_name").html('<span class="li-title">From</span>' + mp_src_accname);
                    $("#masspay_review_img").css("background-image", "url(" + mp_ben_imgsrc + ")"); 

                    if( mp_ben_bankaddr == "" ) {
                        $('#mp_review_bank_address').html("&nbsp;");
                    } else {
                        $('#mp_review_bank_address').text(mp_ben_bankaddr);
                    }

                    $("#masspayment #review_masspay_box #masspayment_review_row_2 .qp-auth").css("display", "none");
                    $("#masspayment #review_masspay_box #masspayment_review_row_2 .qp-qrcode").css("display", "none");

                    if( mp_ben_flip ) {
                        if( mp_ben_amount == "" || (!isNaN( mp_ben_amount ) && Number(mp_ben_amount) < 1000) ) {
                        $("#masspayment #review_masspay_box #masspayment_review_row_2 .qp-auth").css("display", "block");
                      } else {
                          $("#masspayment #review_masspay_box #masspayment_review_row_2 .qp-qrcode").css("display", "block");
                          //setTimeout(function(){ doConfirmPayment($this); }, 5000);
                      }
                    }

                }
            })
        //},100);
        
    }
    function showErrorOnField($this)
    {
        $($this).closest('.form-group').addClass('has-error');
        $($this).focus();
    }
    
    var mp_ben_name = "";
    var mp_ben_accno = "";
    var mp_ben_bankcode = "";
    var mp_ben_bankname = "";
    var mp_ben_bankaddr = "";
    var mp_ben_amount = "";
    var mp_ben_currency = "";
    var mp_ben_accname = "";
    var mp_ben_bankcountry = "";
    var mp_ben_desc = "";
    var mp_src_accname = "My Current Account";
    var mp_src_accbal="1,234.99 EUR"
    var mp_ben_imgsrc = "";
    var mp_ben_flip = false;

    function clearQuickPayVariables() {
        mp_ben_name = "";
        mp_ben_accno = "";
        mp_ben_bankcode = "";
        mp_ben_bankname = "";
        mp_ben_bankaddr = "";
        mp_ben_amount = "";
        mp_ben_currency = "";
        mp_ben_accname = "";
        mp_ben_bankcountry = "";
        mp_ben_desc = "";
        mp_src_accname = "My Current Account";
        mp_src_accbal = "1,234.99 EUR";
        mp_ben_flip = false;
    }

    /*
    function clearSelect(){
    	var numberContainer = document.getElementById('masspayPhoneNumber');
    	for(var i=0; i<numberContainer.options.length; i++){
    		if(numberContainer.options[i].value.indexOf(")") == -1){
    			numberContainer.removeChild(numberContainer.options[i]);
    		}
    	}
    }
    */

    function selectMasspaymentUser($this) {
        $($this).closest('.quick_payment').find('a').removeClass('selected');
        $($this).addClass('selected');
        mp_ben_name = $($this).attr('data-benificiary_name');
        mp_ben_phone_number = $($this).attr('data-beneficiary_phone_number');
        mp_ben_phone_name = $($this).attr('data-beneficiary_phone_name');
        mp_ben_imgsrc = $($this).children().attr("src");
        mp_provider = $($this).attr('data-beneficiary_provider');
        
        $('#masspayment .masspay_to_name').text(mp_ben_name);

        $('#masspayment .review_benificery_name').text(mp_ben_name);
        $('#masspayment .review_beneficiary_account_number').css("visibility", "visible");
        
        var providerContainer = document.getElementById('masspayProvider');
        
        if(mp_provider != null && mp_provider!= undefined && mp_provider != ""){
	        $('#masspayment .review_beneficiary_account_number').html(
	        		mp_ben_phone_name + " (" + mp_ben_phone_number + ")<img align=\"absmiddle\" src=\"img/apsbank/" + mp_provider + "_logo_small.png\" class=\"pull-right\" style=\"margin-top: -2px;\" />"
	        );
	        providerContainer.setAttribute('value', mp_provider);
	        providerContainer.setAttribute('disabled', 'disabled');
	        providerContainer.className = "disabled";
	        $('#masspay_provider_logo').html(
	        		"<img align=\"absmiddle\" src=\"img/apsbank/" + mp_provider + "_logo.png\" class=\"pull-right\" />"
	        );
        } else {
	        $('#masspayment .review_beneficiary_account_number').html(
	        		mp_ben_phone_name + " (" + mp_ben_phone_number + ")"
	        );
	        providerContainer.removeAttribute('disabled');
	        providerContainer.className = "enabled";
	        $('#masspay_provider_logo').html(
	        		""
	        );
        }
        
        clearSelect();
        
        var phoneNumberContainer = document.getElementById('masspayPhoneNumber');
        var currentNumber = document.createElement('option');
        currentNumber.value = mp_ben_phone_number;
        currentNumber.text = mp_ben_phone_number;
        currentNumber.setAttribute('provider',mp_provider);
        phoneNumberContainer.appendChild(currentNumber);
        currentNumber.setAttribute('selected', 'selected');
        
        setProvideByName(mp_provider);
        
        $("#masspaymentFirstNextButton").attr("disabled", false);
    }

    function selectMasspaySrcAccount($this) {
        mp_src_accname = $($this).attr('data-account_name'); 
        mp_src_accbal = $($this).attr('data-account_balance');

    	$("#masspayment a.curracc span").text(mp_src_accname + " (" +mp_src_accbal +")");
    }


//]]>
    
