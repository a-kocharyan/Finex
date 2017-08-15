function createStandingOrder(el) {
	//id = article_id + space
	var id="#article_createsto ";
	var bblock = (el==null?$("#article_createsto .bb-bookblock"):$(el).find(".bb-bookblock"));
	addProcessing( bblock.find(".bb-item.processing") );
	
	makeHeader(bblock.find(".bb-item").get(0), "Create <strong>Standing Order</strong>from", true, "selectSTOSrcAccount", "selectSTOAnotherDstAccount");
	makeHeader(bblock.find(".bb-item").get(1), "Create <strong>Standing Order</strong>review", false);
	//makeHeader(bblock.find(".bb-item").get(2), "Create <strong>Standing Order</strong>processing ...", false);
	makeHeader(bblock.find(".bb-item").get(3), "Create <strong>Standing Order</strong>result", false);

	bblock.bookblock({
		speed : 800,
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
		//console.log("direction " + direction );
		bblock.bookblock(direction);
	});
	
}

function selectSTOSrcAccount($this) {
	var sto_src_accname = $($this).attr('data-account_name'); 
	var sto_src_accbal = $($this).attr('data-account_balance');

	$("#innercreatestandingorder a.curracc span").text(sto_src_accname + " (" +sto_src_accbal +")");
}

function selectSTOUser($this) {
	$("#standingOrderName").val($($this).attr("data-benificiary_name"));
	$("#crestodesc").text($($this).attr("data-beneficiary_account_number"));
}
    
