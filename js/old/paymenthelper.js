//payment boxoknal ne kelljen mindig kiirni
//ajax loader kiegeszites
function addProcessing($parent) {
	$parent.append('<div class="overflow_hidden"><div class="widget-content loading"><div class="ajaxloader"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="ajaxloader-loading">processing...</div></div></div>');		
}

//payment boxoknal ne kelljen mindig kiirni
//header faremove es fa-settings gombok hozzaadasa
function addWidgetButtons($parent) {
	$parent.append('<a href="JavaScript:" onclick="removeWidget(this)" class="fa fa-remove"></a><div class="dropdown widget_setting"><button onClick="showWidgetSettings(this)" class="btn btn-link" type="button" data-toggle="dropdown"><i class="fa fa-gear"></i></button></div>');
}

/*
 * this will add the <header> to the given html object (<div class="turn-item">)
 * 
 */
function makeHeader($parent, titleHtml, hasAccountSelect, accSelectCallback, hasViewMoreOnSelect) {
	hdr = document.createElement("header");
	$(hdr).addClass("drag-handle").addClass("payment-widget-label");
	$(hdr).html(titleHtml);
	var myCurrentAccountOptions = '<option>My Current Account ($824.00)</option><option>My Euro Account (€586.31)</option><option>My Savings Account ($5,987.00)</option><option>My Euro Savings (€2,082.00)</option>';
	
	if( hasAccountSelect ) {
		$(hdr).append('<a class="curracc" href="JavaScript:" onclick="showAccSelectTopContent(this)"><span class="widget-header-payment-account"><div class="widget-header-payment-block"><select class="widget-header-payment-account-span">' + myCurrentAccountOptions + '</select></div></span></a>');
		$($parent).append(
			'<div class="quckpt_top_cntnt header">'+
			'	<div>'+
			'			<strong>Select another</strong>source account:'+
			'	</div>'+
			'	<ul class="pay_list">'+
			'			<li onclick="selectDefaultAccount(this, '+accSelectCallback+')" data-account_name="My Current Account" data-account_number="***55221" data-account_balance="1,234.99 EUR" class="active">My Current Account (***55221) 1,234.99 EUR</li>'+
			'			<li onclick="selectDefaultAccount(this, '+accSelectCallback+')" data-account_name="My Current Loan" data-account_number="***55341" data-account_balance="234.99 EUR">My Current Loan (***55341) 234.99 EUR</li>'+
			'			<li onclick="selectDefaultAccount(this, '+accSelectCallback+')" data-account_name="My Saving Account" data-account_number="***44221" data-account_balance="5,634.99 EUR">My Savings Account (***44221) 5,634.99 EUR</li>'+
			'</ul>'+
			'<div class="text-center">'+
			'		<button type="button" class="btn btn-transparent" onclick="hideAccSelectTopContent(this)">Select</button>'+
			'</div>'+
			'</div>');
	}
	
	if( hasViewMoreOnSelect ) {
		
		$($parent).closest(".bb-bookblock").append( //-bb-bookblock lehet jobb
		'<div class="quckpt_bottom_cntnt nicescroll quick_payment pt10">'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/no_image.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/nbc.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/star.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/payment_person.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/no_image.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/no_image.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/nbc.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/star.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/payment_person.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/no_image.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/no_image.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/nbc.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/star.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/payment_person.png" />'+
		'	</a>'+
		'	<a href="JavaScript:" onclick="'+hasViewMoreOnSelect+'">'+
		'			<img class="img-responsive" src="img/no_image.png" />'+
		'	</a>'+
		'	<div class="clearfix"></div>'+
		'	<div class="text-center">'+
		'			<button type="button" class="btn btn-transparent" onclick="toggleSelectUserBottom(this)">Select</button>'+
		'	</div>'+
		'</div>');
		
	}

	if ($parent.firstChild) {
	    $parent.insertBefore(hdr, $parent.firstChild);
	} else {
	    $parent.appendChild(hdr);
	}
}

function toggleSelectUserBottom($this) {
    $($this).closest(".quckpt_bottom_cntnt").animate({
        height: 'toggle'
        }, 500, function() {
    });
}

function hideAccSelectTopContent($this, callback) {
    $($this).closest(".quckpt_top_cntnt").slideUp( 500, function() {
    	//callback();
    });
    
}

function showAccSelectTopContent($this) {
	$($this).closest(".bb-item").parents(".bb-bookblock").children(".quckpt_top_cntnt").slideDown( 500 );
}
function showViewMoreBottomContent($this)
{
    //$(".quckpt_bottom_cntnt").slideDown('slow');
	$($this).closest(".bb-item").parents(".bb-bookblock").children(".quckpt_bottom_cntnt").animate({
        height: 'toggle'
        }, 500, function() {
    });
}


function selectDefaultAccount($this, callback) {
    $($this).closest('ul').find('li').removeClass('active');
    $($this).addClass('active');

    // ???, egyebkent nem is lenne mar jo a selector
    //$(".default_account_number").text($($this).attr('data-account_number'));
    
    callback($this);
}


function saveBeneficiary($this) {
	$($this).css("display", "none");
}

//]]>

