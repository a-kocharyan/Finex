function createSavingGoal(el) {


	var bblock = (el==null?$("#article_createsavings .bb-bookblock"):$(el).find(".bb-bookblock"));
	
	addProcessing( bblock.find(".bb-item.processing") );
	
	//makeHeader(bblock.find(".bb-item").get(0), "Create <strong>Savings Goal</strong>", true, "selectInnerCreateSavingsSrcAccount", "selectInnerCreateSavingsAnotherDstAccount");
	makeHeader(bblock.find(".bb-item").get(0), "Create <strong>Savings Goal</strong>", false);
	makeHeader(bblock.find(".bb-item").get(1), "Create <strong>Savings Goal</strong>", false);
	makeHeader(bblock.find(".bb-item").get(2), "Create <strong>Savings Goal</strong>", false);
	makeHeader(bblock.find(".bb-item").get(4), "Create <strong>Savings Goal</strong>result", false);

	bblock.bookblock({
		speed : 800,
		shadowSides : 0.8,
		shadowFlip : 0.7,
		onEndFlip	: function( old, page, isLimit ) {
			try {
				if( (page == 3 && old == 2) ){
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




ctd_src_accname = "";
ctd_src_accbal = "";
ctd_src_curr = "";

function createTermDepoShowAccountSelector($this) {
    $("#termdepo_acc_select").slideDown(400);
}
function createTermDepoHideAccountSelector($this) {
    $( "#termdepo_acc_select" ).slideUp( 500, function() {
        $("#createtermdepo_container_1 a.curracc span").text(ctd_src_accname + " (" +ctd_src_accbal +")");
        $("#cretermdepo_scr2_acc").text(ctd_src_accname + " (" +ctd_src_accbal +")");
        
      });
}
function selectCreateTermDepoDefaultAccount($this) {
    $($this).closest("ul").find("li").removeClass("active");
    $($this).addClass("active");
    $(".default_account_number").text($($this).attr("data-account_number"));
    ctd_src_accname = $($this).attr('data-account_name');
    ctd_src_accbal = $($this).attr('data-account_balance');
}

function createTermDepositNext1() {
    $("#createtermdepo").flip({
        direction:"lr",
        //color:"rgba(255, 255, 255, 0)",
        speed:300,
        content: $("#createtermdepo_container_2"),
        color: "rgba(0,0,0,.1)",
    });

    $("#cretermdepo_scr2_maturity").text( $("#cretermdepo_maturity").val() );
    $("#cretermdepo_scr2_freq").text( $("#cretermdepo_freq").val() );
    $("#cretermdepo_scr2_amount").text( $("#cretermdepo_amount").val() + " " + ctd_src_curr );
    
}
function createTermDepositPrev1() {
    $("#createtermdepo").revertFlip();
}

function createTermDepositNext2() {
    $("#createtermdepo > .this_main_content").hide();
    //$("#createtermdepo_container_2").hide();

    $("#createtermdepo_container_5").fadeIn( "3000");
    
    setTimeout(function(){
        $("#createtermdepo_container_5").hide();
        $("#createtermdepo_container_4").fadeIn( "3000");
    }, 1500);
}


function createTermDepositFirstScreen(){
    $("#createtermdepo").revertFlip();
    /*
    $("#createtermdepo_container_4").hide();
    $("#createtermdepo_container_1").fadeIn(3000);
    */
}

function selectTermDepo($this, type) {
    $($this).closest(".payment_type_list").find("div").removeClass("selected");
    $("#cretermdepo_curr").attr("class", "fa fa-"+type.substring(0,3));
    ctd_src_curr = type.substring(0,3).toUpperCase();
    $($this).addClass("selected");
}
function createTermDepoShowBottomContent($this) {
}



Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}
Date.prototype.format = function()
{
    var dd = this.getDate();
    var mm = this.getMonth()+1;
    if(dd<10){dd='0'+dd} 
    if(mm<10){mm='0'+mm} 
    
    return this.getFullYear() + "-" + mm + "-" + dd;
}

function selectSavingGoalType($this, type) {
    $($this).closest(".payment_type_list").find("div").removeClass("selected");
    $($this).addClass("selected");
    var saveGoalType = $($this).attr("data-saving-type");
    
    $("#savingsGoalName").val( $($this).attr("title") );
    $("#cresavgoal_scr2_img").attr( "class", $($this).children("i").attr("class") + " fa-4x" );
    $("#cresavgoal_scr3_img").attr( "class", $($this).children("i").attr("class") + " fa-4x" );
    
}

function calculateSavingsGoalDate() {
    var targetAmount=parseFloat($("#savingsGoalTargetAmount").val());
    var monthlySave=parseFloat($("#savingsGoalMonthlySave").val());

    if( !isNaN(targetAmount) && !isNaN(monthlySave) ){
        var addendum = (Math.floor(monthlySave / targetAmount )+1) * 31
        var date = new Date().addDays(addendum);
        
        $("#savingsTargetDate").val( date.format() );
    }
}

function createSavingsGoalsNext1() {
    $("#createsaving").flip({
        direction:"lr",
        //color:"rgba(255, 255, 255, 0)",
        speed:300,
        content: $("#createsaving_container_2"),
        color: "rgba(0,0,0,.1)",
    });
    
    $("#cresavgoal_scr2_amount").text( "EUR " + $("#savingsGoalTargetAmount").val());
    $("#cresavgoal_scr2_title").text( $("#savingsGoalName").val() );
    $("#cresavgoal_scr2_date").text( $("#savingsTargetDate").val() );
    $("#cresavgoal_scr3_amount").text( "EUR " + $("#savingsGoalTargetAmount").val());
    $("#cresavgoal_scr3_title").text( $("#savingsGoalName").val() );
    $("#cresavgoal_scr3_date").text( $("#savingsTargetDate").val() );
    
    $("#cresavgoal_scr2_amount2").text( "EUR " + $("#savingsGoalTargetAmount").val());
    
}

function createSavingsGoalsPrev1() {
    $("#createsaving").revertFlip();
}
function createSavingsGoalsNext2() {

    $("#createsaving > .this_main_content").hide();

    $( "#createsaving_container_3" ).fadeIn( "3000");
    $( "#payment_result header" ).show();
}
function createSavingsGoalsPrev2() {
    $("#createsaving_container_3").hide();

    $("#createsaving > .this_main_content").fadeIn( "3000");
    $("#payment_result header").show();
}

function createSavingsGoalsFirstScreen(){
    
    $("#createsaving").revertFlip();
    
}


function createSavingsGoalsNext3() {
    $("#createsaving_container_3").hide();

    $("#createsaving_container_5").fadeIn( "3000");
    $("#payment_result header").show();
    
    
    setTimeout(function(){
        $("#createsaving_container_5").hide();
        $("#createsaving_container_4").fadeIn( "3000");
    }, 1500);

}

function cresavgoal($this, type) {
    $(".cresavgoal_btns a").removeClass("selected");
    $($this).addClass("selected");
    
    if( type == 1 ) {
        $("#cresavgoal_newacc").hide();
        $("#cresavgoal_linkto").css("display", "block");
        $("#cresavgoal_storder").css("display", "block");
    } else if( type == 2 ) {
        $("#cresavgoal_linkto").css("display", "none");
        $("#cresavgoal_storder").css("display", "none");
        $("#cresavgoal_newacc").show();
    } else if( type == 3 ) {
        $("#cresavgoal_newacc").hide();
        $("#cresavgoal_linkto").css("display", "none");
        $("#cresavgoal_storder").css("display", "none");
    }
}


