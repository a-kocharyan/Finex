var onlineData = false;
var current_width = 0;
var width = 0;
var detailUtil =  null;
var LOCAL_STORAGE_PREF = "ib-modern-preferences";
var cellHeight = 260;

var GRID_OPTIONS = {
			cellHeight : cellHeight,
			verticalMargin : 10,
			animate : true,
			alwaysShowResizeHandle : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
			draggable: {
				handle : '.grid-stack-item-content',
				scroll: true
			},
			minWidth : 200
};
var templatesOrder = {

}

function mainInit() {
        $("body").niceScroll({
            cursorborder : "",
            cursorcolor : "#4b3f2f",
            boxzoom : false,
            cursoropacitymax : 0.25,
            cursorwidth : "20px",
            mousescrollstep : 120,
            scrollspeed : 140,
            zindex: 100000
        });
		
		width = calculateWidth();
		current_width = width;
		
		$(window).resize(windowResize);
		
		detailUtil = new WidgetActivator();

		var gridEl = $(".grid-stack");
		
		gridEl.on("dragstop", function(event, ui) {
			setTimeout(updateWidgetsState, 500);
			//because gridstack elements have the prevoius state after event 'dragstop', later change maybe due to asyc operation
			//change event is not appropriate, it happens every time when anything happens with the grid
		});
		
		GRID_OPTIONS["width"] = current_width;
		//console.log("Init grid ("+current_width+") col!");
		gridEl.gridstack(GRID_OPTIONS);

		svgFix();
}

function windowResize() {
	clearTimeout(window.resizedFinished);
	window.resizedFinished = setTimeout(function(){
		width = calculateWidth();
		
		if (width != current_width) {
			$('.grid-stack').data('gridstack').setGridWidth(width);
			//console.log("Resized from "+current_width+" to "+width+"!");
			current_width = width;
			updateWidgetsState();
		}
	}, 250);
	doCreateChartPersonalFin1(null);
	chartShopping(null);
	chartEntertainment(null);
	chartFood(null);
	chartTransport(null);
	chartHome(null);
	//STPL
	doCreateChartNetWorth(null);
	doCreateTermDeposit(null);
	doCreateCarGoal(null);
	doCreateLoyalty(null);
	doCreateFutureCashPie(null);
}
setTimeout( function () {
	doCreateTermDeposit(null);
	doCreateLoyalty(null);
	doCreateFutureCashPie(null);
	doCreateCarGoal(null);
}, 500);

function svgFix () {
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
}

function calculateWidth() {
	var win_width = $(window).width();
	if (win_width < 1441 && win_width > 1024) {
		return 3;
	} else if (win_width < 1025 && win_width > 568) {
		return 2;
	} else if (win_width < 569) {
		return 1;
	} else {
		return 4;
	}
}

function removeWidget(el) {
	var wg = $(el).closest(".grid-stack-item");
	$(".grid-stack").data("gridstack").removeWidget(wg, true);
	updateWidgetsState();
}

function setShowMoreButtons(el, data) {
	if(data){
		if (data["bottom_show"] == 1) {
			$(el).find(".show_more_bottom").attr('data-current_display_status', 'show').html(
					'<i class="fa fa-angle-up"></i>');
			$(el).closest('.grid-stack-item').find('.more_content_bottom').slideDown();
			if ($(el).attr('data-knob_id')) {
				//knob_id = $($value).attr('data-knob_id');
				//setKnobLayout(knob_id,'max');
			}
		} else {
			$(el).find(".show_more_bottom").attr('data-current_display_status', 'hide').html(
					'<i class="fa fa-angle-down"></i>');
			$(el).closest('.grid-stack-item').find('.more_content_bottom').hide();
			if ($(el).attr('data-knob_id')) {
				//knob_id = $($value).attr('data-knob_id');
				//setKnobLayout(knob_id,'min');
			}
		}	
		if (data["right_show"] == 1) {
			$(el).find(".show_more_right").attr('data-current_display_status', 'show').html(
					'<i class="fa fa-angle-left"></i>');
			$(el).closest('.grid-stack-item').find('.more_content_right').removeClass('hide').slideDown();
			$(el).closest('.grid-stack-item').find('.main_content').removeClass('col-md-12').addClass(
					'col-md-6');
			if ($(el).attr('data-fix_right_height') == 'true') {

			}
		} else {
			$(el).find(".show_more_right").attr('data-current_display_status', 'hide').html(
					'<i class="fa fa-angle-right"></i>');
			$(el).closest('.grid-stack-item').find('.more_content_right').hide();
			$(el).closest('.grid-stack-item').find('.main_content').removeClass('col-md-6').addClass(
					'col-md-12');

		}	
		if (data["current_content"] == 1) {
			$(el).removeClass("hide_content").attr('data-current_content', 1);
			$(el).find('.content_hide_link').removeClass('fa-angle-down').addClass('fa-angle-up');
		} else if (data["right_show"] == 0) {
			// $(el).addClass("hide_content").attr('data-current_content',0);
			// $(el).find('.content_hide_link').removeClass('fa-angle-up').addClass('fa-angle-down');
		}
		if ($(el).find(".show_more_bottom").attr('data-current_display_status') == 'show') {
			$(el).find('.more_content_bottom').show();
			if ($(el).attr('data-knob_id') !== undefined) {
				//knob_id = $(el).attr('data-knob_id');
				setKnobLayout($(el), 'max');
			}
		} else {
			$(el).find('.more_content_bottom').hide();
			if ($(el).attr('data-knob_id') !== undefined) {
				//knob_id = $(el).attr('data-knob_id');
				//console.log(knob_id + " min");
				setKnobLayout($(el), 'min');
			}
		}
	}
}

function setKnobLayout(el,minmax) {
    var grid = $('.grid-stack').data('gridstack');
    var width = el.attr('data-gs-width');
	var id = el.attr('data-knob_id');

    if(minmax == 'min') {
        grid.resize(el, width, 1);
        el.find('.graph_content').removeClass('graph-center').addClass('graph-left');
        el.find('.beni-balance').show();
        el.find(id).trigger('configure', {'width':90,'height':90,'displayInput':false});
    } else {
        grid.resize(el, width, 2);
        el.find('.graph_content').removeClass('graph-left').addClass('graph-center');
        el.find('.beni-balance').hide();
        el.find(id).trigger('configure', {'width':cellHeight,'height':cellHeight,'displayInput':true});
        el.find(id).css('visibility','visible');
    }
}

function createDial(id, value, max, size, bgColor, fgColor, angleOffs, displayInput) {
    var inputColor = "#4b3f2f";
    id.knob({
                'width' : size,
                'height' : size,
                //'lineCap': 'round',
                'max' : max,
                'readOnly': true,
                'min': 0,
                'step' : 1,
                'angleOffset' : angleOffs,
                'displayInput': displayInput==null?true:displayInput, //valamiert csak igy jo
                'thickness': 0.05,
                'inputColor' : inputColor,
                'bgColor': bgColor,
                'fgColor': fgColor
    });
    id.val(value).trigger('change');
}
function hideThisBottomContent($this, grid) {
    //console.log("hideThisBottomContent("+$this+")");

    var $thisGrid = $this;
    if ($($thisGrid).attr('data-show_only_either') != 'true') {
        return true;
    }
    var $thisLinkBottom = $($thisGrid).find('.show_more_bottom');
    ////var grid = $('.grid-stack').data('gridstack');
    var height = $($this).attr('data-gs-height');
    var width = $($this).attr('data-gs-width');
    if ($($thisLinkBottom).attr('data-current_display_status') != 'hide') {
        $($thisGrid).find('.more_content_bottom').slideUp(200);
        $($thisLinkBottom).attr('data-current_display_status', 'hide').html('<i class="fa fa-angle-down"></i>');
        grid.resize($thisGrid, width, parseInt(height) - 1);
        $($thisGrid).attr('data-showmore-bottom', 0);
    }
}
function hideThisRightContent($this, grid) {
    //console.log("hideThisRightContent("+$this+")");

    var $thisGrid = $this;
    if ($($thisGrid).attr('data-show_only_either') != 'true') {
        return true;
    }
    var $thisLinkRight = $($thisGrid).find('.show_more_right');
    ////var grid = $('.grid-stack').data('gridstack');
    var height = $($this).attr('data-gs-height');
    var width = $($this).attr('data-gs-width');

    if ($($thisLinkRight).attr('data-current_display_status') != 'hide') {
        $($thisGrid).find('.more_content_right').slideUp(200);
        $('.widget', $thisGrid).removeClass("extended-right");
        $($thisGrid).find('.main_content').removeClass('col-md-6').addClass('col-md-12');
        $($thisLinkRight).attr('data-current_display_status', 'hide').html('<i class="fa fa-angle-right"></i>');
        grid.resize($thisGrid, parseInt(width) - 1, height);
        $($thisGrid).attr('data-showmore-right', 0);
    }
}
function changeElmenets(el1, el2) {
	if (typeof el1 !== "undefined" && typeof el2 !== "undefined") {
		var hasItem = false;
		for (var i=0; i<el1.childNodes.length; i++) {
			var ch = el1.childNodes[i];
			if (ch.nodeType==1 && ch.getAttribute("component")=="TransactionItem") {
				hasItem = true;
				break;
			}
		}
		if (hasItem) {
			var par1 = el1.parentNode;
			var par2 = el2.parentNode;
			par1.appendChild(el2);
			par2.appendChild(el1);
		}
	}
}
function setRightHeight(el) {
	if ($(el).attr('data-fix_right_height') == 'true') {
		var lsi_height = $(el).find('.main_content').height();
		$(el).find(".left_stack_item").css('height', lsi_height - parseInt(20));
	}
}

function setShowMoreButtonEvents(el, callBack) {

	var grid = $(".grid-stack").data("gridstack");
	$(el).find(".show_more_bottom").click(function(e) {
		var widget = $(this).closest('.grid-stack-item');
		var height = widget.attr('data-gs-height');
		var width = widget.attr('data-gs-width');
		if ($(this).attr('data-current_display_status') == 'hide') {
			changeElmenets(widget.find('.more_content_right .transectoin_list')[0], widget.find('.more_content_bottom .transectoin_list')[0]);
			hideThisRightContent(widget, grid);
			var is_knob = false;
			if (widget.attr('data-knob_id')) {
				//knob_id = widget.attr('data-knob_id');
				setKnobLayout(widget, 'max');
				is_knob = true;
			}
			widget.find('.more_content_bottom').slideDown(700);
			$(this).attr('data-current_display_status', 'show').html('<i class="fa fa-angle-up"></i>');
			if (!is_knob) {
				grid.resize(widget, width, parseInt(height) + 1);
			}
			widget.attr('data-showmore-bottom', 1);
		} else {
			widget.find('.more_content_bottom').slideUp();
			$(this).attr('data-current_display_status', 'hide').html('<i class="fa fa-angle-down"></i>');
			grid.resize(widget, width, parseInt(height) - 1);
			widget.attr('data-showmore-bottom', 0);
			if (widget.attr('data-knob_id')) {
				//knob_id = widget.attr('data-knob_id');
				setKnobLayout(widget, 'min');
			}
		}
		setRightHeight(widget);
		//save_widget_positions_json();            
	});
	$(el).find(".show_more_right").click(function(e) {
		var widget = $(this).closest('.grid-stack-item');
		var height = widget.attr('data-gs-height');
		var width = widget.attr('data-gs-width');
		var x_coord = widget.attr('data-gs-x');
		var y_coord = widget.attr('data-gs-y');
		if ($(this).attr('data-current_display_status') == 'hide') {
			changeElmenets(widget.find('.more_content_bottom .transectoin_list')[0], widget.find('.more_content_right .transectoin_list')[0]);
			hideThisBottomContent(widget, grid);
			widget.find('.more_content_right').slideDown(700);
			$(this).attr('data-current_display_status', 'show').html('<i class="fa fa-angle-left"></i>');
			widget.find('.main_content').removeClass('col-md-12').addClass('col-md-6');
			widget.find('.more_content_right').removeClass('hide').show();
            $('.widget', widget).addClass("extended-right");

			if( x_coord == grid.opts.width-1 ) {
				grid.move(widget, (parseInt(x_coord)-1), y_coord);
			}
			grid.resize(widget, (parseInt(width) + 1), height);

			$(this).attr('data-showmore-right', 1);
			setRightHeight(widget);
		} else {
			widget.find('.more_content_right').slideUp();
			widget.find('.main_content').removeClass('col-md-6').addClass('col-md-12');
			widget.find('.more_content_right').hide();
            $('.widget', widget).removeClass("extended-right");
			$(this).attr('data-current_display_status', 'hide').html('<i class="fa fa-angle-right"></i>');
			grid.resize(widget, parseInt(width) - 1, height);
			widget.attr('data-showmore-right', 0);
		}


		//save_widget_positions_json();            
	});
	$(this).find(".content_hide_link").click(function(e) {
		var widget = $(this).closest('.grid-stack-item');
		if (widget.hasClass('hide_content')) {
			widget.slideDown(500, function() {
				widget.removeClass("hide_content").attr('data-current_content', 1);
				widget.find('.content_hide_link').removeClass('fa-angle-down').addClass('fa-angle-up');
			});

		} else {
			widget.slideUp(500, function() {
				widget.addClass("hide_content").attr('data-current_content', 0);
				widget.find('.content_hide_link').removeClass('fa-angle-up').addClass('fa-angle-down');
			});
		}
		//save_widget_positions_json();            
	});

    el.addEventListener('transitionend',function (event) {
        if (event.propertyName == "width") {
            if (typeof callBack == "function") {
                callBack(el);
            }
        }
    });
}

/*WIDGET DETAIL MODE*/
function WidgetActivator() {
    var activeWidget = null;
    var tempContainer = null;
	var removeClickFunction = null;

	function init() {
		tempContainer = document.createElement("div");
        tempContainer.style.display = "none";
        document.body.appendChild(tempContainer);
	}
	
	this.openTemplate = function(el, templateName, data) {
		var div = document.createElement("div");
		var template = Handlebars.templates[templateName];
		div.innerHTML = template( data );
		div = div.getElementsByTagName("div")[0];
		document.body.appendChild(div);
		var func = templateFunctions[templateName];
		if (typeof func !== "undefined") func(div, data);

		open($(el).closest("div.grid-stack-item")[0], div);
	}
    
    function open(parentWidgetItem, replacementItemsDiv) {
        checkActive();
        var $parentWidgetItem = $(parentWidgetItem);
        var grid = $('.grid-stack').data('gridstack');
        var x = $parentWidgetItem.attr("data-gs-x");
        var y = $parentWidgetItem.attr("data-gs-y");
        var w = $parentWidgetItem.attr("data-gs-width");
        var h = $parentWidgetItem.attr("data-gs-height");
        $parentWidgetItem.attr("original-x", x);
        $parentWidgetItem.attr("original-y", y);
        $parentWidgetItem.attr("original-w", w);
        $parentWidgetItem.attr("original-h", h);
        $parentWidgetItem.attr("actCont", replacementItemsDiv.id);
        grid.move(parentWidgetItem, 0, Number(y));
        
        activeWidget = parentWidgetItem;

        replacementItemsDiv.style.position = "initial";
        replacementItemsDiv.style.display = "block";
		var height = replacementItemsDiv.offsetHeight;

        replacementItemsDiv.style.position = "";
        replacementItemsDiv.style.display = "";
		
        var replacementItemsDivContainer = $(replacementItemsDiv).find("div.main_body")[0];
        var parentContainerForReplace =  $parentWidgetItem.find("div.widget-body")[0];
		var remove =  $parentWidgetItem.find("a.fa-remove")[0];
		removeClickFunction = remove.getAttribute("onclick");
		remove.removeAttribute("onclick");
		remove.onclick = function () {close(parentWidgetItem);};
        while (parentContainerForReplace.firstChild) {
          tempContainer.appendChild(parentContainerForReplace.firstChild);
        }
        while (replacementItemsDivContainer.firstChild) {
            var child = replacementItemsDivContainer.firstChild;
            if (child.tagName && (child.tagName.toLowerCase()=="article" || child.tagName.toLowerCase()=="div")) {
                parentContainerForReplace.appendChild(child);
                child.setAttribute("added", "1");
            } else {
                replacementItemsDivContainer.removeChild(child);
            }
        }

        var cellNumber = Math.ceil(height/cellHeight);
        grid.resize(parentWidgetItem, grid.getGridWidth(), cellNumber);

        $(parentContainerForReplace).removeClass("widget-content");
        $(parentContainerForReplace).addClass("expanded");
        $parentWidgetItem.addClass("has-expanded-content");
        //$parentWidgetItem.find(".widget-label.drag-handle")[0].scrollIntoView(true);
		
		replacementItemsDiv.parentNode.removeChild(replacementItemsDiv);

		svgFix();

    }
    
    function close(art) {
        var grid = $('.grid-stack').data('gridstack');
		grid.update(art, Number($(art).attr("original-x")), Number($(art).attr("original-y")), Number($(art).attr("original-w")), Number($(art).attr("original-h")))
        $(art).removeAttr("original-x");
        $(art).removeAttr("original-y");
        $(art).removeAttr("original-w");
        $(art).removeAttr("original-h");
        activeWidget = null;
        

        var cont =  $(art).find("div.expanded")[0];
		var remove =  $(art).find("a.fa-remove")[0];
		delete remove.onclick;
		remove.setAttribute("onclick", removeClickFunction);

        hideDetailPopupOnDetailScreen($('.detail-screen-details',art));

        var chn = cont.childNodes;
        for (var i=0; i<chn.length; i++) {
            var ch = chn[i];
            if (ch.getAttribute("added")=="1") {
                //artContDiv.appendChild(ch);
				cont.removeChild(ch);
                i--;
            }
        }
        
        while (tempContainer.firstChild) {
          cont.appendChild(tempContainer.firstChild);
        }
        
        $(cont).removeClass("expanded");
        $(art).removeClass("has-expanded-content");
        $(cont).addClass("widget-content");
    }
	
	function checkActive() {
		if (activeWidget!=null) close(activeWidget);
	}
	
	init();
}
/*WIDGET DETAIL MODE END*/

function changeGrid(containerId, func) {
	var time = 600;
	var pos = $(window).width();
	var dv = document.getElementById(containerId);
	dv.style.transition = "all "+time+"ms ease";
	dv.style.transform = "translate3d("+pos+"px, 0px, 0px)";

	setTimeout(function () {
		func();
		dv.style.removeProperty("transition");			
		dv.style.transform = "translate3d(-"+pos+"px, 0px, 0px)";
		setTimeout(function () {
			dv.style.transition = "all "+time+"ms ease";
			dv.style.transform = "translate3d(0px, 0px, 0px)";
			setTimeout(function () {
				dv.style.removeProperty("transition");		
				dv.style.removeProperty("transform");		
			}, time);
		}, 100);
		//console.log("Grid '"+containerId+"' was changed!");
	}, time);
}


function closeModalGrid() {
	var modal = document.getElementsByClassName("modal-back")[0];
	modal.parentNode.removeChild(modal);
}

//for handlebars
function precompiledInit(cb){
	// console.log(userPref, '123', localStorage.getItem('LOCAL_STORAGE_PREF'));
	if (onlineData) {
		$.ajax({
			url: "landingData",
			method: "POST",
			data: { USER_ID: "finex"}
		}).done(function (data) {
			userPref = data["preferences"];
			precompiledInitCallBack(data);
			if (cb!=null) cb();
		});
	} else {
		//preferences from local storage
		var retrieved = localStorage.getItem(LOCAL_STORAGE_PREF);
		if (typeof retrieved !== "undefined" && retrieved!=null ) {
			userPref = JSON.parse(retrieved);
			console.log(userPref, "Preference found in local storage.");
		} else {
			//console.log("There is no preference in local storage.");
		}
		precompiledInitCallBack();
		if (cb!=null) cb();
	}
}

function precompiledInitCallBack(data) {
	var gridEl = $(".grid-stack");
	var grid = gridEl.data("gridstack");
	var cont = document.createElement("div");
	var hasAutoPositionHappened = false;
	grid.removeAll();
	grid.setStatic(false);
	grid.batchUpdate();


	var landingPref = userPref["LANDING_PAGE"];
	if (typeof landingPref === "undefined") {
		if (!onlineData) {
			//from offline allWgs

			for (var i=0; i < allWgs.length; i++) {
				var obj = allWgs[i];
                var tmpName = obj["template"];
                var template = Handlebars.templates[tmpName];
				cont.innerHTML = template( obj );
				var el = cont.firstChild;
				var uuid = obj["UUID"];
				el.setAttribute("UUID", uuid);
				el.setAttribute("template", tmpName);
				var measures = getMeasuresByUUID(uuid);
				if (measures==null) {
					grid.addWidget(el);
					hasAutoPositionHappened = true;
				} else {
					grid.addWidget(el, measures["X"], measures["Y"], measures["WIDTH"], measures["HEIGHT"], false);
				}

				var func = templateFunctions[tmpName];
				if (typeof func !== "undefined") func(el, obj);
			}
			if($('#bankCard').length > 0){
				window.blockDeferred.resolve();
			}
		}
	} else {
		//from pref
		var i = 0;
		for (var uuid in landingPref) {	
			var current = landingPref[uuid];
			var templateName = current["TYPE"];

			if($("#user-type").text() == "Jane Smith"){
				if(templateName != "CurrentAccount" && templateName != "Advertisment" && templateName != "SavingGoals" && templateName != "CurrentAccountTom" && templateName != "AdvertismentTom" && templateName != "SavingGoalsTom"){
					var template = Handlebars.templates[templateName];
					cont.innerHTML = template( current );
					var el = cont.firstChild;
					el.setAttribute("UUID", uuid);
					el.setAttribute("template", templateName);
					var measures = current[current_width.toString()];
					if (typeof measures === "undefined") {
						grid.addWidget(el);
						hasAutoPositionHappened = true;
					} else {
						grid.addWidget(el, measures["X"], measures["Y"], measures["WIDTH"], measures["HEIGHT"], false);
					}
					var func = templateFunctions[templateName];
					if (typeof func !== "undefined") func(el, current);
				}
			}
			else if($("#user-type").text() == "Tom Smith"){
				if(templateName != "CurrentAccount" && templateName != "Advertisment" && templateName != "SavingGoals" && templateName != "CurrentAccountJane" && templateName != "AdvertismentJane" && templateName != "SavingGoalsJane"){
					var template = Handlebars.templates[templateName];
					console.log(templateName,0)
					cont.innerHTML = template( current );
					var el = cont.firstChild;
					el.setAttribute("UUID", uuid);
					el.setAttribute("template", templateName);
					var measures = current[current_width.toString()];
					if (typeof measures === "undefined") {
						grid.addWidget(el);
						hasAutoPositionHappened = true;
					} else {
						grid.addWidget(el, measures["X"], measures["Y"], measures["WIDTH"], measures["HEIGHT"], false);
					}
					var func = templateFunctions[templateName];
					if (typeof func !== "undefined") func(el, current);
				}
			}
			else if(templateName != "CurrentAccountJane" && templateName != "AdvertismentJane" && templateName != "SavingGoalsJane" && templateName != "CurrentAccountTom" && templateName != "AdvertismentTom" && templateName != "SavingGoalsTom"){ 
				var template = Handlebars.templates[templateName];
				i++;
				cont.innerHTML = template( current );
				var el = cont.firstChild;
				el.setAttribute("UUID", uuid);
				el.setAttribute("template", templateName);
				var measures = current[current_width.toString()];
				if (typeof measures === "undefined") {
					grid.addWidget(el);
					hasAutoPositionHappened = true;
				} else {
					grid.addWidget(el, measures["X"], measures["Y"], measures["WIDTH"], measures["HEIGHT"], false);
				}
				var func = templateFunctions[templateName];
				if (typeof func !== "undefined") func(el, current);
			}
	}
		}
	grid.commit();
	//gridEl.show();
	if (hasAutoPositionHappened) updateWidgetsState();
	svgFix();
}

//add new widget
var addNewWgs = new Array();

function addNewWidgetEvent(el, data) {
	el.getElementsByTagName("i")[0].onclick = function () {
		var back = this.parentNode.parentNode.parentNode.cloneNode(true);
		var addBefore = this.parentNode.parentNode.parentNode.cloneNode(true);
		var addAfter = this.parentNode.parentNode.parentNode.cloneNode(true);
		changeGrid("playground", function () {
			var grid = $(".grid-stack").data("gridstack");
			grid.removeAll();
			grid.setStatic(true);

            //bind buttons for adding widgets and for back
			setAddWgBtn(back, "fa-step-backward", "Back");
			setAddWgBtn(addBefore, "fa-arrow-circle-o-up", "ADD TO TOP");
			setAddWgBtn(addAfter, "fa-arrow-circle-o-down", "ADD TO BOTTOM");
			back.onclick = backFromAddWidget;
			addBefore.onclick = addWidgetBefore;
			addAfter.onclick = addWidgetAfter;

            //form widgets for adding
			if (onlineData) {
				var existingUUIDs = new Array();
				var landingPref = userPref["LANDING_PAGE"];
				if (typeof landingPref !== "undefined") {
					for (var uuid in landingPref) {
						existingUUIDs[existingUUIDs.length] = obj;
					}
				}
				
				$.ajax({
					url: "addNewData",
					method: "POST",
					data: { USER_ID: "finex", EXISTING: existingUUIDs}
				}).done(function(data) {
					addNewWgs = data;
					addNewWidgetEventCallBack(grid, back, addBefore, addAfter, addNewWgs);
				});
			} else {
				var landingPref = userPref["LANDING_PAGE"];
				if (typeof landingPref !== "undefined") {
					for (var i=0; i<allWgs.length; i++) {
						var obj = allWgs[i];
						var tempName = obj["template"];
						if (typeof landingPref[obj["UUID"]] === "undefined") {
							addNewWgs[addNewWgs.length] = obj;
							//console.log("ADDED TO NEW: "+obj["UUID"]+" "+tempName);
						}
					}
				}
				addNewWidgetEventCallBack(grid, back, addBefore, addAfter, addNewWgs);
			}
		});
	};
}

function addNewWidgetEventCallBack(grid, back, addBefore, addAfter, addNewWgs) {
	var dv = document.createElement("div");
	for (var i=0; i<addNewWgs.length; i++) {
		var obj = addNewWgs[i];
		var tmpName = obj["template"];
		var template = Handlebars.templates[tmpName];
		dv.innerHTML = template( obj );
		var newWg = dv.firstChild;
		grid.addWidget(newWg, 0, 0, null, null, false);
		
		var func = templateFunctions[tmpName];
		if (typeof func !== "undefined") func(newWg, obj);
		
		removeEvents(newWg);
		newWg.onclick = selectWidget;
		//newWg.style.transform = "scale(.7,.7)";
		newWg.style.opacity = "0.4";
		newWg.style.filter = "alpha(opacity=40)";
		newWg.setAttribute("template", tmpName);
		obj["GRID_ELEMENT"] = newWg;
	}
	
	grid.addWidget(addAfter, 0, 0, null, null, false);
	grid.addWidget(addBefore, 0, 0, null, null, false);
	grid.addWidget(back, 0, 0, null, null, false);
	grid.setGridWidth(grid.getGridWidth());
	window.scrollTo(0, 0);
}

function setAddWgBtn(btn, cls, title) {
	var i = btn.getElementsByTagName("i")[0];
	$(i.parentNode).removeClass("drag-handle");
	i.setAttribute("class", "fa "+cls);
	i.nextSibling.nodeValue=title;
}

function removeEvents(el) {
	if (el.nodeType==1) {
		el.removeEventListener("click", el.onclick);
		el.removeAttribute("onclick");
		var ch = el.childNodes;
		for (var i=0; i<ch.length; i++) {
			if (ch[i].nodeType==1) removeEvents(ch[i]);
		}
	}
}

function selectWidget() {
	this.style.transition =  "all 100ms linear";
	if (this.getAttribute("selected")=="1") {
		//this.style.transform = "scale(.7,.7)";
		this.style.opacity = "0.4";
		this.style.filter = "alpha(opacity=40)";
		this.removeAttribute("selected");
	} else {
		this.style.removeProperty("transform");
		this.style.removeProperty("opacity");
		this.style.removeProperty("filter");
		this.setAttribute("selected", "1");
	}

}

function backFromAddWidget() {
	changeGrid("playground", function () {
		addNewWgs.splice(0, addNewWgs.length);
		precompiledInit();
	});
}

function addWidgetBefore() {
	precompiledInit( function () { addWidgetMain(true); } );
}

function addWidgetAfter() {
	precompiledInit( function () { addWidgetMain(false); } );
}

function addWidgetMain(before) {

	changeGrid("playground", function () {
		var grid = $(".grid-stack").data("gridstack");
		var cont = document.createElement("div");

		for (var i=0; i<addNewWgs.length; i++) {
			var obj = addNewWgs[i];
			var tempName = obj["template"];
			var wg = obj["GRID_ELEMENT"];
			if (wg.getAttribute("selected")=="1") {
				delete obj["GRID_ELEMENT"];
				var template = Handlebars.templates[tempName];
				cont.innerHTML = template( obj );
				var newWg = cont.firstChild;
				newWg.setAttribute("UUID", obj["UUID"]);
				newWg.setAttribute("template", tempName);
				if (before) {
					grid.addWidget(newWg, 0, 0);
				} else {
					grid.addWidget(newWg, 0, 200);
				}
				//format
				var func = templateFunctions[tempName];
				if (typeof func !== "undefined") func(newWg, obj);
			}

		}
		addNewWgs.splice(0, addNewWgs.length);
		updateWidgetsState();
	});
}

function listWgsPropsFromGrid() {
	var cont = document.getElementById("playground");
	var wgs = cont.childNodes;
	var json = "[\n";
	for (var i=0; i<wgs.length; i++) {
		var wg = wgs[i];
		
		json += ("\t{\n");
		json += ("\t\ttemplate: \""+wg.getAttribute("template")+"\",\n");
		json += ("\t\tUUID: "+i+"\n");
		json += ("\t"+"}");
		if (i!=wgs.length-1) json += (",\n");
	}
	json += ("\n]");
	var dv = document.createElement("div");
	dv.innerHTML = json;
	document.body.appendChild(dv);
}

function listWgsProps() {
	var temps = Handlebars.templates;
	var json = "[\n";
	var i = 0;
	for (var key in temps) {
		var temp = temps[key];
		
		if (i!=0) json += (",\n");
		
		json += ("\t{\n");
		json += ("\t\ttemplate: \""+key+"\",\n");
		json += ("\t\tUUID: "+i+"\n");
		json += ("\t"+"}");
		
		
		i++;
	}
	json += ("\n]");
	var dv = document.createElement("div");
	dv.innerHTML = json;
	document.body.appendChild(dv);
}

function updateWidgetsState() {
	var cont = document.getElementById("playground");
	var wgs = cont.childNodes;
	console.log('wgs',)
	var landingPref = userPref["LANDING_PAGE"];
	if (typeof landingPref === "undefined") {
		landingPref = new Object();
		userPref["LANDING_PAGE"] = landingPref;
	}
	for (var i=0; i<wgs.length; i++) {
		var wg = wgs[i];
		var uuid = wg.getAttribute("UUID");
		var wgPref = landingPref[uuid];
		if (typeof wgPref === "undefined") {
			wgPref = new Object();
			landingPref[uuid] = wgPref;
		}
		wgPref["TYPE"] = wg.getAttribute("template");
		var measures = wgPref[current_width.toString()];
		if (typeof measures === "undefined") {
			measures = new Object();
			wgPref[current_width.toString()] = measures;
		}
		measures["X"] = 	Number(wg.getAttribute("data-gs-x"));
		measures["Y"] = 	Number(wg.getAttribute("data-gs-y"));
		measures["WIDTH"] = Number(wg.getAttribute("data-gs-width"));
		measures["HEIGHT"] =Number(wg.getAttribute("data-gs-height"));
		wgPref["CHECKED"] = true;
		//console.log(i+". "+wgPref["TYPE"]+":\t\t\t"+measures["X"]+" "+measures["Y"]);
	}
	for (var key in landingPref) {
		var wgPref = landingPref[key];
		if (typeof wgPref["CHECKED"] === "undefined") {
			delete landingPref[key];
			//console.log("deleted: "+key+" "+wgPref["TYPE"]);
		} else {
			delete wgPref["CHECKED"];
			//console.log("exixts: "+key+" "+wgPref["TYPE"]);
		}
	}
	saveUserPreferences();
	svgFix();
}

function accountOverviewInit(ser) {
	var chartObj = {
        chart: {
            type: 'column',
			backgroundColor: 'rgba(0,0,0,0)',
			width: 300,
			height: 220
        },
        title: {
            text: ''
        },
		yAxis: {
			title : {
				text : ""
			}
		},
        xAxis: {
            categories: ['Account'],
			endOnTick: true,
			title : {
				text : ""
			}
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
				animation: true,
				depth : 25,
                dataLabels: {
                        enabled: false
                    },
                shadow: false,
                center: ['50%', '50%'],
                borderWidth: 0,
            }            
        },
        series: [{
            name: 'My Current EUR',
            data: [1800]
        }, {
            name: 'My Current USD',
            data: [-500]
        }, {
            name: 'Thrird EUR',
            data: [500]
        }]
    };
	if (ser!=null) chartObj["series"] = ser;
	//chart
    $(".accOverview_graph").highcharts(chartObj);
}

function saveUserPreferences() {
	if (onlineData) {
		$.ajax({
			url: "savePreferences",
			method: "POST",
			data: { USER_ID: "finex", CONTENT : JSON.stringify(userPref)}
		}).done(function (data) {//console.log("Preferences (col "+current_width+") saved to DB.");
	});
	} else {
		localStorage.setItem(LOCAL_STORAGE_PREF, JSON.stringify(userPref));
		//console.log("Preferences (col "+current_width+") saved to local storage.");
	}
}

function getMeasuresByUUID(uuid) {
	var landingPref = userPref["LANDING_PAGE"];
	if (typeof landingPref !== "undefined") {
		var wgPref = landingPref[uuid];
		if (typeof wgPref !== "undefined") {
			var measures = wgPref[current_width.toString()];
			if (typeof measures === "undefined") {
				//console.log("Measures to width "+current_width+" not found!");
				return null;
			} else {
				//console.log("Measures to width "+current_width+" found!");
				return measures;
			}
		}
	}
	//console.log("LANDING_PAGE preference still not found!");
	return null;
}

function resetLanding() {
	localStorage.clear();
	delete userPref["LANDING_PAGE"];
	//saveUserPreferences();
	location.reload();
}

//user preferences
var userPref = {

};

//static data
var allWgs = [
		{
			template: "CurrentAccount",
			UUID: 0
		},
    {
        template: "Transactions",
        UUID: 1
    },
    {
        template: "Deposit",
        UUID: 2
    },
    {
        template: "AddNewWidget",
        UUID: 3
    },
    {
        template: "QuarterlyReport",
        UUID: 4
    },
    {
        template: "SignedTransactions",
        UUID: 5
    },
    {
        template: "Payment",
        UUID: 6
    },
    {
        template: "PendingTransactions",
        UUID: 7
    },
    {
        template: "FailedTransactions",
        UUID: 8
    },
    {
        template: "Envelope",
        UUID: 9
    },
    {
        template: "QuickPayment",
        UUID: 10
    },
    {
        template: "OwnAccountPayment",
        UUID: 11
    },
    {
        template: "FilePayment",
        UUID: 12
    },
    {
        template: "Notifications",
        UUID: 13
    },
    {
        template: "SavingGoals",
        UUID: 14
    },
    {
        template: "FutureCashFlow",
        UUID: 15
    },
    {
        template: "NetWorth",
        UUID: 16
    },
    {
        template: "Popular",
        UUID: 17
    },
    {
        template: "Loyalty",
        UUID: 18
    },
    {
        template: "Beneficiary",
        UUID: 19
    },
    {
        template: "StandingOrder",
        UUID: 20
    },
    {
        template: "Chequebook",
        UUID: 21
    },
    {
        template: "Switch",
        UUID: 22
    },
	{
        template: "Contact",
        UUID: 24
    },
	{
        template: "Advertisment",
        UUID: 25
    },
	{
        template: "AdvertismentText",
        UUID: 26
    },
	{
        template: "AdvertismentTwoSlotText",
        UUID: 27
    },
	{
        template: "AdvertismentAdditional",
        UUID: 28
    },
	{
        template: "BankCard",
        UUID: 29
    },
	{
        template: "PFM",
        UUID: 30
    },
	{
        template: "Video",
        UUID: 31
    },
	{
        template: "MyEuroAccount",
        UUID: 32
    },
	{
        template: "MySavingsAccount",
        UUID: 33
    },
	{
        template: "MyEuroSavings",
        UUID: 34
    },
	{
        template: "MyVisaDebitCard",
        UUID: 35
    },
	{
        template: "Video1",
        UUID: 36
    },
	{
        template: "Video2",
        UUID: 37
    }	,
	{
        template: "CharityPayment",
        UUID: 38
    }	,
	{
        template: "AccountOpening",
        UUID: 39
    },
	{
        template: "LoneRequest",
        UUID: 40
    },
	{
        template: "CardApplication",
        UUID: 41
    },
	{
        template: "TermDepositOpening",
        UUID: 42
    },
    {
		template: "CurrentAccountJane",
		UUID: 43
	},
	{
        template: "AdvertismentJane",
        UUID: 44
    },
    {
        template: "SavingGoalsJane",
        UUID: 45
    },
    {
		template: "CurrentAccountTom",
		UUID: 46
	},
	{
        template: "AdvertismentTom",
        UUID: 44
    },
    {
        template: "SavingGoalsTom",
        UUID: 45
    },
    {
        template: "PersonalLoan",
        UUID: 46
    },
    {
        template: "CreditAdvertisment",
        UUID: 47
    },
    {
    	template: "CardDetailsModal",
    	UUID: 48
    }


];

var templateFunctions = {
	AddNewWidget : addNewWidgetEvent
	,CurrentAccount : setMyCurrent
	,Deposit : setDeposit
	,QuarterlyReport : setQuarterlyReport
	,SavingsAccount : setSavingsAccount
	,LoanAccount : setLoanAccount
	,Transactions : setTransactions
  ,SignedTransactions : setSignedTransactions
  ,PendingTransactions : setPendingTransactions
  ,FailedTransactions : setFailedTransactions
  ,Envelope : setEnvelope
	,CreditCard : setCreditCard
	,DebitCard : setDebitCard
	,Payment : setPayment
	,QuickPayment : setQuickPayment
	,CharityPayment : setCharityPayment
	,OwnAccountPayment : setOwnAccountPayment
	,FilePayment : setFilePayment
	,Notifications : setNotifications
	,SavingGoals : setSavingGoals
	,FutureCashFlow : setFutureCashFlow
	,NetWorth : setNetWorth
	,Popular : setPopular
	,Loyalty : setLoyalty	
	,Beneficiary : setBeneficiary
	,StandingOrder : setStandingOrder
	,Chequebook : setChequebook
	,Switch : setSwitch
	,Contact : setContact
	,Advertisment : setAdvertisment
	,AdvertismentText : setAdvertismentText	
	,AdvertismentTwoSlotText : setAdvertismentTwoSlotText
	,AdvertismentAdditional : setAdvertismentAdditional
	,BankCard : setBankCard
	,PFM : setPFM
	,Video : setVideo
	,Video1 : setVideo1
	,Video2 : setVideo2
	,MyEuroAccount : setMyEuroAccount
	,MySavingsAccount : setMySavingsAccount
	,MyEuroSavings : setMyEuroSavings
	,MyVisaDebitCard : setMyVisaDebitCard
	,AccountOpening: setAccountOpening
	,LoneRequest: setLoneRequest
	,CardApplication: setCardApplication
	,TermDepositOpening: setTermDepositOpening
	,CurrentAccountJane: setCurrentAccountJane
	,AdvertismentJane : setAdvertismentJane
	,SavingGoalsJane : setSavingGoalsJane
	,CurrentAccountTom: setCurrentAccountTom
	,AdvertismentTom : setAdvertismentTom
	,SavingGoalsTom : setSavingGoalsTom
	,PersonalLoan : setPersonalLoan
	,CreditAdvertisment : setCreditAdvertisment
	,CardDetailsModal : setCardDetailsModal
}

function setMyCurrent(el, data) {
	createDial($(el).find(".currentAccount"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "AccountDetails", null);		
		$('#open-transactions-details').click(function(e) {
			e.preventDefault();
			var p = $("#lastTen").position();
			$(window).scrollTop(p.top);	
			detailUtil.openTemplate($('#lastTen'), "TransactionDetails", null);
		});
	});
}
function setCurrentAccountJane(el, data) {
	createDial($(el).find(".currentAccount"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "AccountDetails", null);		
		$('#open-transactions-details').click(function(e) {
			e.preventDefault();
			var p = $("#lastTen").position();
			$(window).scrollTop(p.top);	
			detailUtil.openTemplate($('#lastTen'), "TransactionDetails", null);
		});
	});
}

function setCurrentAccountTom(el, data) {
	createDial($(el).find(".currentAccount"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "AccountDetails", null);		
		$('#open-transactions-details').click(function(e) {
			e.preventDefault();
			var p = $("#lastTen").position();
			$(window).scrollTop(p.top);	
			detailUtil.openTemplate($('#lastTen'), "TransactionDetails", null);
		});
	});
}

function setDeposit(el, data) {
	createDial($(el).find(".dial2"), 2754, 3500, 90, "#f7573f", "#87b22e", "0", false);
    setShowMoreButtons(el, data);
    setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
		detailUtil.openTemplate(this, "DepositAccountDetails", null);
	});
}

function setQuarterlyReport(el, data) {
		createDial($(el).find(".quarterlyReport"), 2754, 3500, 90, "#f7573f", "#87b22e", "0", false);
    setShowMoreButtons(el, data);
    setShowMoreButtonEvents(el, setSizeForQuarterlyReport);
    var chart = {}
    var graphData = {
        graphContainer : "quarterly-report",
        backgroundColor : "transparent",
        xLabelColor : '#464646',
        yLabelColor : '#464646',
        plotLinesColor : '#88a375'
    };
    var fullGraphData = {
        graphContainer : "full-quarterly-report",
        backgroundColor : "transparent",
        xLabelColor : '#464646',
        yLabelColor : '#464646',
        plotLinesColor : '#88a375'
    };
    setTimeout( function () {
        chart = showQuarterlyReportGraph(el, graphData);
    }, 500);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "QuarterlyReportDetails", null);
        setTimeout( function () {
            var fullChart = showQuarterlyReportGraph(el, fullGraphData);
        }, 500);
	});
}

function setSizeForQuarterlyReport (element) {
    var $container = $(element).find("#quarterly-report");
    if ($container.length > 0) {
        $container.highcharts().setSize($container.width(), $container.height());
    }
}

function setSavingsAccount(el, data) {
	createDial($(el).find(".dial3"), 4102, 5400, 90, "rgba(0,0,0,.03)", "#fbb03b", "0", false);
	$(el).find(".beni-balance").click(function(e) {			
		detailUtil.openTemplate(this, "SavingsAccountDetails", null);
	});
}
function setLoanAccount(el, data) {
	createDial($(el).find(".dial4"), 2754, 3500, 90, "rgba(0,0,0,.03)", "#a5d16c", "0", false);
	$(el).find(".beni-balance").click(function(e) {			
		detailUtil.openTemplate(this, "LoanAccountDetails", null);
	});
}
function setLoyalty(el, data) { 
	createDial($(el).find(".loyalty"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "Loyalty", null);
	});
}
function setFutureCashFlow(el, data) { 
	createDial($(el).find(".futureCashFlow"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "FutureCashFlow", null);
	});
}
function setUpcoming(el, data) {
	$(el).find(".trans_close").click(function() {
		$(this).parent().remove();
	});
}
function setNotes(el, data) {
	$(el).find(".trans_close").click(function() {
		$(this).parent().remove();
	});
}
function setHabits(el, data) {
	setTimeout( function () {showContainerGraph(el);}, 500);
}
function setNetWorth(el, data) {
	showPfm(el);
	// $(el).find("input.btn-transparent").click(function(e) {			
	// 	detailUtil.openTemplate(this, "NetWorthDetails", null);
	// });
	$(el).find(".widget-details-button a").click(function(e) {
		alert();
		e.preventDefault();			
		// detailUtil.openTemplate(this, "NetWorthDetails", null);
	});

}
function setAccountOverview(el, data) {
	var ser = [
		{name: "Current HUF", data: [435]},
		{name: "Savings EUR", data: [1356]}
		,{name: "Loan USD", data: [342]}
	];
	accountOverviewInit(ser);
}
function setTransactions(el, data) {
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
		e.preventDefault();
		detailUtil.openTemplate(this, "TransactionDetails", null);
	});
}
function setSignedTransactions(el, data) {
    setShowMoreButtons(el, data);
    setShowMoreButtonEvents(el);
    $(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
        detailUtil.openTemplate(this, "SignedTransactionDetails", null);
        $('.widget-transactions-to-be-signed-unit').on('click', function() {showDetailPopupOnDetailScreen(el, this, 'signed')});
    });
}
function setPendingTransactions(el, data) {
    setShowMoreButtons(el, data);
    setShowMoreButtonEvents(el);
    $(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
        detailUtil.openTemplate(this, "PendingTransactionDetails", null);
        setTimeout(function () {
            $( "#period-datepicker", el ).datepicker({
                showOn: "button",
                buttonImage: "images/small-calendar.png",
                buttonImageOnly: true,
                buttonText: "Select date"
            });
        } ,500);
        setTimeout(function () {
            $( "#amount-slider", el ).slider({
                range: true,
                min: 0,
                max: 1000,
                values: [ 75, 300 ],
                slide: function( event, ui ) {
                    $("#from", el).val( "$" + ui.values[ 0 ]);
                    $("#to", el).val( "$" + ui.values[1]);
                }
            });
            $("#from").val("$" + $("#amount-slider").slider("values", 0));
            $("#to").val("$" + $("#amount-slider").slider("values", 1));
        } ,500);
        $('.widget-transactions-history-unit').on('click', function() {showDetailPopupOnDetailScreen(el, this, 'pending')});
    });
}
function setFailedTransactions(el, data) {
    setShowMoreButtons(el, data);
    setShowMoreButtonEvents(el);
    $(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
        detailUtil.openTemplate(this, "FailedTransactionDetails", null);
        setTimeout(function () {
            $( "#period-datepicker", el ).datepicker({
                showOn: "button",
                buttonImage: "images/small-calendar.png",
                buttonImageOnly: true,
                buttonText: "Select date"
            });
        } ,500);
        setTimeout(function () {
            $( "#amount-slider", el ).slider({
                range: true,
                min: 0,
                max: 1000,
                values: [ 75, 300 ],
                slide: function( event, ui ) {
                    $("#from", el).val( "$" + ui.values[ 0 ]);
                    $("#to", el).val( "$" + ui.values[1]);
                }
            });
            $("#from").val("$" + $("#amount-slider").slider("values", 0));
            $("#to").val("$" + $("#amount-slider").slider("values", 1));
        } ,500);
        $('.widget-transactions-history-unit').on('click', function() {showDetailPopupOnDetailScreen(el, this, 'failed')});
    });
}
function setEnvelope(el, data) {
    setShowMoreButtons(el, data);
    setShowMoreButtonEvents(el);
    $(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
        detailUtil.openTemplate(this, "EnvelopeDetails", null);
        $('.widget-transactions-history-unit').on('click', function() {showDetailPopupOnDetailScreen(el, this, 'envelope')});
    });
}
function setCreditCard(el, data) {
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find("img.cardimage").click(function(e) {			
		detailUtil.openTemplate(this, "CreditCardDetails", null);
	});
}
function setDebitCard(el, data) {
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find("img.cardimage").click(function(e) {			
		detailUtil.openTemplate(this, "DebitCardDetails", null);
	});
}
function setPayment(el, data) {
	createPayment(el, ".payment-widget-label");
    $('.payment-type', el).on('click', function() {
        managePaymentType(el, this);
    });
    $('.benefeciaries-tab-header', el).on('click', function () {
        manageTabs(el, this, '.benefeciaries-tab-header', '.benefeciaries-tab', '#tab-to-show');
    });
    $('.benefeciaries-tabs', el).niceScroll({
        cursorborder : "",
        cursorcolor : "#af8d60",
        boxzoom : false,
        cursoropacitymax : 1,
        cursorwidth : "10px",
        mousescrollstep : 120,
        scrollspeed : 140,
        zindex: 100000
    });

    setTimeout(function () {
        $( "#date-datepicker", el ).datepicker({
            showOn: "button",
            buttonImage: "images/small-calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        }).datepicker("setDate", new Date());
    } ,500);
}
function setQuickPayment(el, data) {
    createQuickPayment(el, ".payment-widget-label");
    $('.benefeciaries-tab-header', el).on('click', function () {
        manageTabs(el, this, '.benefeciaries-tab-header', '.benefeciaries-tab', '#tab-to-show');
    });
    selectPaymentUser($('.benefeciaries-tab .benefeciary-list-item', el)[0], 'quick');
    $('.benefeciaries-tabs', el).niceScroll({
        cursorborder : "",
        cursorcolor : "#af8d60",
        boxzoom : false,
        cursoropacitymax : 1,
        cursorwidth : "10px",
        mousescrollstep : 120,
        scrollspeed : 140,
        zindex: 100000
    });

    setTimeout(function () {
        $( "#date-datepicker-quick", el ).datepicker({
            showOn: "button",
            buttonImage: "images/small-calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        }).datepicker("setDate", new Date());
    } ,500);
}
function setCharityPayment(el, data) {
    createCharityPayment(el, ".payment-widget-label");    
    var val = 0;
    $('.charAdd').keyup(function(event) {
    	val = 0;
    	$('.charAdd').each(function(){
    		if($(this).val().split('$ ')[1]){
		    	num = $(this).val().split('$ ')[1];
		    }else{
		    	num = $(this).val();
		    }
    		if($.isNumeric(num)){    			
    			val += parseFloat(num);    			    			    			
    		}    		
    	});
    	if($.isNumeric($('.charMin').val().split('$ ')[1])){
  			val = val - $('.charMin').val().split('$ ')[1]
  		}
  		$('.netAssets').html('$ '+ val.toFixed(2));
  		if(((val*2.5)/100) < 267){
  			$('.zakat').html('$ 267')
  		}else{
  			$('.zakat').html('$ '+ ((val*2.5)/100).toFixed(2))
  		}
    });
    $('.charMin, .charAdd').blur(function(){
    	if($(this).val().split('$ ')[1]){
	    	$(this).val('$ '+ $(this).val().split('$ ')[1])
	    }else if($.trim($(this).val()) == "$"){
	    }else{
	    	$(this).val('$ '+ $(this).val());
	    }
    })
    $('.charMin').keyup(function(event){  	
    	if($(this).val().split('$ ')[1]){
	    	num = $(this).val().split('$ ')[1];
	    }else{
	    	num = $(this).val();
	    }
  		if($.isNumeric(num)){     
  			$('.netAssets').html('$ '+ (val-parseFloat(num)).toFixed(2));
  			if((((val-parseFloat(num))*2.5)/100) < 267){
	  			$('.zakat').html('$ 267')
	  		}else{
	  			$('.zakat').html('$ '+ (((val-parseFloat(num))*2.5)/100).toFixed(2))
	  		}  			
  		}
    });
    $('.benefeciaries-tab-header', el).on('click', function () {
        manageTabs(el, this, '.benefeciaries-tab-header', '.benefeciaries-tab', '#tab-to-show');
    });
    selectPaymentUser($('.benefeciaries-tab .benefeciary-list-item', el)[0], 'charity');
    $('.benefeciaries-tabs', el).niceScroll({
        cursorborder : "",
        cursorcolor : "#af8d60",
        boxzoom : false,
        cursoropacitymax : 1,
        cursorwidth : "10px",
        mousescrollstep : 120,
        scrollspeed : 140,
        zindex: 100000
    });

    setTimeout(function () {
        $( "#date-datepicker-charity", el ).datepicker({
            showOn: "button",
            buttonImage: "images/small-calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        }).datepicker("setDate", new Date());
    } ,500);
}

function setOwnAccountPayment(el, data) {
    createOwnAccountPayment(el, ".payment-widget-label");
    $('.accounts-tab-header', el).on('click', function () {
        manageTabs(el, this, '.accounts-tab-header', '.accounts-tab', '#tab-to-show');
    });

    $('.payment-benefeciary-type').on('click' , function(event){
    	$('.payment-benefeciary-choose').find('.payment-benefeciary-type').removeClass("active");
    	$('.payment-benefeciary-type').not(event.currentTarget).addClass("pasive");
    	$(event.currentTarget).removeClass("pasive");
    	$(event.currentTarget).addClass("active");
    	console.log($(event.currentTarget).hasClass)
    	$(event.currentTarget).closest('#ownaccountpayment-benefeciary-fields-first').find('.payment-benefeciary-detail-type').removeClass('payment-benefeciary-detail-active');
	})

    selectAccount($('.accounts-list .accounts-list-item', el)[0], '#ownaccountpayment_container_1 .info-block', '#transactions-list-euro-account');
    $('.benefeciaries-tabs', el).niceScroll({
        cursorborder : "",
        cursorcolor : "#af8d60",
        boxzoom : false,
        cursoropacitymax : 1,
        cursorwidth : "10px",
        mousescrollstep : 120,
        scrollspeed : 140,
        zindex: 100000
    });

    setTimeout(function () {
        $( "#date-datepicker-own", el ).datepicker({
            showOn: "button",
            buttonImage: "images/small-calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        }).datepicker("setDate", new Date());
    } ,500);
}

function setFilePayment(el, data) {
    createFilePayment(el, ".payment-widget-label");
    $(".payment-file-download-link").on("click", function (event) {
        event.preventDefault();
    });
    $('.benefeciaries-tab-header', el).on('click', function () {
        manageTabs(el, this, '.benefeciaries-tab-header', '.benefeciaries-tab', '#tab-to-show');
    });
    $('.rows-wrapper', el).niceScroll({
        cursorborder : "",
        cursorcolor : "#af8d60",
        boxzoom : false,
        cursoropacitymax : 1,
        cursorwidth : "10px",
        mousescrollstep : 120,
        scrollspeed : 140,
        zindex: 100000
    });
}

function manageTabs (parentElement, clickedElement, tabHeaderClass, tabContentClass, uniqueTabContentIdPrefix) {
    $(tabContentClass, parentElement).removeClass('active');
    $(tabHeaderClass, parentElement).removeClass('active');
    var id = $(clickedElement).attr('id');
    $(clickedElement).addClass("active");
    $(uniqueTabContentIdPrefix + "-" + id, parentElement).addClass('active');
}

function showDetailPopupOnDetailScreen(parentContainer, clickedElement, transactionsType) {
    var $clickedElement = $($(clickedElement).closest(".into-expanded-item"));
    var $openedDetailsScreen = $('.detail-screen-details', parentContainer);
    if ($clickedElement.hasClass('no-details')) {
        return;
    }
    if ($openedDetailsScreen.length > 0 && $clickedElement.hasClass('clicked') == false) {
        hideDetailPopupOnDetailScreen($openedDetailsScreen, function () {
            showDetailPopupOnDetailScreen(parentContainer, clickedElement, transactionsType);
        });
        return false;
    } else if ($openedDetailsScreen.length > 0 && $clickedElement.hasClass('clicked') == true) {
        return;
    }
    $(".into-expanded-item").removeClass('clicked');
    $clickedElement.addClass('clicked');

    var transactionData = collectDetailsFromTransactionsInDetails($clickedElement);
    var popupHtml = getHtmlForDetailPanel(transactionData);

    var topOffsetFromParent = $clickedElement.position().top;
    var $firstElementInNextRow;
    $(".into-expanded-item", parentContainer).each(function(index, element) {
        if ($firstElementInNextRow === undefined && $(element).position().top > topOffsetFromParent) {
            $firstElementInNextRow = $(element);
        }
    });
    if ($firstElementInNextRow !== undefined) {
        $firstElementInNextRow.before(popupHtml);
    } else {
        $('.widget-body.expanded').append(popupHtml);
    }
    $('.detail-screen-details', parentContainer).animate({'height' : $clickedElement.height()}, 300, 'swing', function () {
        $('.close-button', parentContainer).on('click',function () {
            hideDetailPopupOnDetailScreen($('.detail-screen-details', parentContainer));
        });
    });

    var grid = $('.grid-stack').data('gridstack');
    grid.resize($(parentContainer), grid.getGridWidth(), +$(parentContainer).attr('data-gs-height') + 1);

    var elementWidth = $clickedElement.width();
    var widthOffsetFromParent = $clickedElement.position().left;
    var offsetForTriangle = widthOffsetFromParent + Math.floor(elementWidth / 2) - 20;
    $('.detail-screen-details .triangle', parentContainer).css('margin-left', offsetForTriangle);
}

function hideDetailPopupOnDetailScreen($element, callBack) {
    $element.animate({'height': 0}, 300, 'swing', function () {
        var grid = $('.grid-stack').data('gridstack');
        var parentContainer = $element.closest('.grid-stack-item')[0];
        $element.detach();
        grid.resize($(parentContainer), grid.getGridWidth(), $(parentContainer).attr('data-gs-height') - 1);

        if (typeof callBack == "function") {
            callBack();
        }
    });
}

function collectDetailsFromTransactionsInDetails ($element) {
    return {
        'date' : (typeof $element.data('date') != "undefined") ? $element.data('date') : "",
        'type' : (typeof $element.data('type') != "undefined") ? $element.data('type') : "",
        'to' : (typeof $element.data('to') != "undefined") ? $element.data('to') : "",
        'reference' : (typeof $element.data('reference') != "undefined") ? $element.data('reference') : "",
        'notes' : (typeof $element.data('notes') != "undefined") ? $element.data('notes') : ""
    }
}

function getHtmlForDetailPanel (transactionData) {
    return
    "<div class='col-xs-12 detail-screen-details'>" +
        "<div class='triangle'></div>" +
        "<i class='fa fa-close close-button'></i>" +
        "<div class='row'>" +
            "<div class='col-xs-12 col-md-4'>" +
                "<div class='details'>" +
                    "<div class='detail'>" +
                        "<div class='detail-label'>Value date</div>" +
                        "<div class='detail-content'>" + transactionData.date + "</div>" +
                    "</div>" +
                    "<div class='detail'>" +
                        "<div class='detail-label'>Type</div>" +
                        "<div class='detail-content'>" + transactionData.type + "</div>" +
                    "</div>" +
                    "<div class='detail'>" +
                        "<div class='detail-label'>To</div>" +
                        "<div class='detail-content'>" + transactionData.to + "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class='col-xs-12 col-md-4'>" +
                "<div class='details'>" +
                    "<div class='detail'>" +
                        "<div class='detail-label'>Reference</div>" +
                        "<div class='detail-content'>" + transactionData.reference + "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class='col-xs-12 col-md-4'>" +
                "<div class='details'>" +
                    "<div class='detail'>" +
                        "<div class='detail-label'>Notes</div>" +
                        "<div class='detail-content'>" + transactionData.notes + "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>" +
    "<div>";
}

function setNotifications(el, data) {
	createDial($(el).find(".notifications"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "NotificationDetails", null);
		$('.second-part1').hide();
		$('.second-part2').hide();
		$('.second-part3').hide();
		$('.block1').hide();
		$('.block2').hide();
		$('.block3').hide();
		$('.second-part4').hide();
		$('.second-part5').hide();
		$('.second-part6').hide();
		$('.block4').hide();
		$('.block5').hide();
		$('.block6').hide();
		$('.open-block1').click(function(){
			$('.second-part2').hide();
			$('.second-part3').hide();
			$('.second-part4').hide();
			$('.second-part5').hide();
			$('.second-part6').hide();
			$('.block2').hide();
		$('.block3').hide();
			$('.block1').show();
			$('.second-part1').show();
		});
		$('.open-block2').click(function(){
			$('.second-part1').hide();
			$('.second-part3').hide();
			$('.second-part4').hide();
			$('.second-part5').hide();
			$('.second-part6').hide();
			$('.block1').hide();
			$('.block3').hide();
			$('.block2').show();
			$('.second-part2').show();
		});
		$('.open-block3').click(function(){
			$('.second-part1').hide();
			$('.second-part2').hide();
			$('.second-part4').hide();
			$('.second-part5').hide();
			$('.second-part6').hide();
			$('.block1').hide();
			$('.block2').hide();
			$('.block3').show();
			$('.second-part3').show();
		});
		$('.open-block4').click(function(){
			$('.second-part1').hide();
			$('.second-part2').hide();
			$('.second-part3').hide();
			$('.second-part5').hide();
			$('.second-part6').hide();
			$('.block5').hide();
			$('.block6').hide();
			$('.block4').show();
			$('.second-part4').show();
		});

		$('.open-block5').click(function(){
			$('.second-part1').hide();
			$('.second-part2').hide();
			$('.second-part3').hide();
			$('.second-part4').hide();
			$('.second-part6').hide();
			$('.block4').hide();
			$('.block6').hide();
			$('.block5').show();
			$('.second-part5').show();
		});
		$('.open-block6').click(function(){
			$('.second-part1').hide();
			$('.second-part2').hide();
			$('.second-part3').hide();
			$('.second-part4').hide();
			$('.second-part5').hide();
			$('.block4').hide();
			$('.block5').hide();
			$('.block6').show();
			$('.second-part6').show();
		});
	});
}

function setSavingGoals(el, data) {
	createDial($(el).find(".savingGoals"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {

        e.preventDefault();
		detailUtil.openTemplate(this, "SavingGoals_Details_New", null);
		setTimeout(function(){createStepsSavingGoals(el, ".payment-widget-label");},500)
		$('.carousel').carousel();
	});
}
function setSavingGoalsJane(el, data) {
	createDial($(el).find(".savingGoals"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {

        e.preventDefault();
		detailUtil.openTemplate(this, "SavingGoals_Details_New", null);
		setTimeout(function(){createStepsSavingGoals(el, ".payment-widget-label");},500)
		$('.carousel').carousel();
	});
}
function setSavingGoalsTom(el, data) {
	createDial($(el).find(".savingGoals"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "SavingGoalsTomDetails_New", null);

		var chart = {}
	    var graphData = {
	        graphContainer : "high_goalchart_container",
	        backgroundColor : "transparent",
	        xLabelColor : '#464646',
	        yLabelColor : '#464646',
	        plotLinesColor : '#88a375'
	    };
	    $('.carousel').carousel();
	    setTimeout( function () {
	        chart = showSavingGoalsTomGraph(el, graphData);
	    }, 500);
	});
}

function setNetWorth(el, data) {
	createDial($(el).find(".netWorth"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "NetworthDetails_New", null);
		setTimeout( function () {
			doChartNetWorthDetails1(null);
			doChartNetWorthDetails2(null);
			doChartNetWorthDetails3(null);

		}, 200);
		networthDetailProcess();
	});
	//STPL
	setTimeout( function () {doCreateChartNetWorth(null);}, 500);
}

function setPopular(el, data) {
	createDial($(el).find(".popular"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "Popular", null);
	});
}

function setBeneficiary(el, data) {
	createDial($(el).find(".beneficiary"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "BeneficiaryDetails", null);
	});
}

function setStandingOrder(el, data) {
	createDial($(el).find(".standingOrder"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "StandingOrderDetails", null);
		$('.part-1').hide();
		$('.part-2').hide();
		$('.part-3').hide();
		$('.part-4').hide();
		$('.part-5').hide();
		$('.part-6').hide();
        $('.open1').click(function(){
        	$('.part-2').hide();
			$('.part-3').hide();
			$('.part-4').hide();
			$('.part-5').hide();
			$('.part-6').hide();
            $('.part-1').show();
        });
        $('.open2').click(function(){
        	$('.part-1').hide();
        	$('.part-3').hide();
        	$('.part-4').hide();
        	$('.part-5').hide();
        	$('.part-6').hide();
            $('.part-2').show();
        });
        $('.open3').click(function(){
        	$('.part-1').hide();
        	$('.part-2').hide();
        	$('.part-4').hide();
        	$('.part-5').hide();
        	$('.part-6').hide();
            $('.part-3').show();
        });
        $('.open4').click(function(){
        	$('.part-1').hide();
        	$('.part-2').hide();
        	$('.part-3').hide();
        	$('.part-5').hide();
        	$('.part-6').hide();
            $('.part-4').show();
        });

        $('.open5').click(function(){
        	$('.part-1').hide();
        	$('.part-2').hide();
        	$('.part-3').hide();
        	$('.part-4').hide();
        	$('.part-6').hide();
            $('.part-5').show();
        });
        $('.open6').click(function(){
        	$('.part-1').hide();
        	$('.part-2').hide();
        	$('.part-3').hide();
        	$('.part-4').hide();
        	$('.part-5').hide();
            $('.part-6').show();
        });		
	});
}

//function setChequebook(el, data) {
//	createDial($(el).find(".chequebook"), 500, 500, 90, "#f7573f", "#87b22e", 320);
//	setShowMoreButtons(el, data);
//	setShowMoreButtonEvents(el);
//	$(el).find(".widget-details-button a").click(function(e) {
//        e.preventDefault();
//		detailUtil.openTemplate(this, "Chequebook", null);
//	});
//}

function setChequebook(el, data) {
    createChequebookPayment(el, ".payment-widget-label");
	 $('.payment-type', el).on('click', function() {
        manageChequebookType(el, this);
    });
    $('.accounts-tab-header', el).on('click', function () {
        manageTabs(el, this, '.accounts-tab-header', '.accounts-tab', '#tab-to-show');
    });
    selectAccount($('.accounts-list .accounts-list-item', el)[0], '#ownaccountpayment_container_1 .info-block');
    $('.benefeciaries-tabs', el).niceScroll({
        cursorborder : "",
        cursorcolor : "#af8d60",
        boxzoom : false,
        cursoropacitymax : 1,
        cursorwidth : "10px",
        mousescrollstep : 120,
        scrollspeed : 140,
        zindex: 100000
    });

    setTimeout(function () {
        $( "#date-datepicker-own", el ).datepicker({
            showOn: "button",
            buttonImage: "images/small-calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        }).datepicker("setDate", new Date());
    } ,500);
}
//STPL
function setAccountOpening(el, data){
	 createAccountOpenPayment(el, ".payment-widget-label");
	 $('.payment-type', el).on('click', function() {
        manageChequebookType(el, this);
    });
    $('.accounts-tab-header', el).on('click', function () {
        manageTabs(el, this, '.accounts-tab-header', '.accounts-tab', '#tab-to-show');
    });
    selectAccount($('.accounts-list .accounts-list-item', el)[0], '#accountOpening_container_1 .info-block');
    $('.benefeciaries-tabs', el).niceScroll({
        cursorborder : "",
        cursorcolor : "#af8d60",
        boxzoom : false,
        cursoropacitymax : 1,
        cursorwidth : "10px",
        mousescrollstep : 120,
        scrollspeed : 140,
        zindex: 100000
    });

    setTimeout(function () {
        $( "#date-datepicker-own", el ).datepicker({
            showOn: "button",
            buttonImage: "images/small-calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        }).datepicker("setDate", new Date());
    } ,500);
}
//STPL LoneRequest
function setLoneRequest(el, data){
	 createLoneRequestPayment(el, ".payment-widget-label");
	 $('.payment-type', el).on('click', function() {
        manageChequebookType(el, this);
    });
    $('.accounts-tab-header', el).on('click', function () {
        manageTabs(el, this, '.accounts-tab-header', '.accounts-tab', '#tab-to-show');
    });
    selectAccount($('.accounts-list .accounts-list-item', el)[0], '#loneRequest_container_1 .info-block');
    $('.benefeciaries-tabs', el).niceScroll({
        cursorborder : "",
        cursorcolor : "#af8d60",
        boxzoom : false,
        cursoropacitymax : 1,
        cursorwidth : "10px",
        mousescrollstep : 120,
        scrollspeed : 140,
        zindex: 100000
    });

    setTimeout(function () {
        $( "#date-datepicker-own", el ).datepicker({
            showOn: "button",
            buttonImage: "images/small-calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        }).datepicker("setDate", new Date());
    } ,500);
}
//STPL LoneRequest
function setCardApplication(el, data){
	 createCardApplicationPayment(el, ".payment-widget-label");
	 $('.payment-type', el).on('click', function() {
        manageChequebookType(el, this);
    });
    $('.accounts-tab-header', el).on('click', function () {
        manageTabs(el, this, '.accounts-tab-header', '.accounts-tab', '#tab-to-show');
    });
    selectAccount($('.accounts-list .accounts-list-item', el)[0], '#cardApplication_container_1 .info-block');
    $('.benefeciaries-tabs', el).niceScroll({
        cursorborder : "",
        cursorcolor : "#af8d60",
        boxzoom : false,
        cursoropacitymax : 1,
        cursorwidth : "10px",
        mousescrollstep : 120,
        scrollspeed : 140,
        zindex: 100000
    });

    setTimeout(function () {
        $( "#date-datepicker-own", el ).datepicker({
            showOn: "button",
            buttonImage: "images/small-calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        }).datepicker("setDate", new Date());
    } ,500);
 
}

//STPL LoneRequest
function setTermDepositOpening(el, data){
	 createTermDepositOpeningPayment(el, ".payment-widget-label");
	 $('.payment-type', el).on('click', function() {
        manageChequebookType(el, this);
    });
    $('.accounts-tab-header', el).on('click', function () {
        manageTabs(el, this, '.accounts-tab-header', '.accounts-tab', '#tab-to-show');
    });
    selectAccount($('.accounts-list .accounts-list-item', el)[0], '#termDepositOpening_container_1 .info-block');
    $('.benefeciaries-tabs', el).niceScroll({
        cursorborder : "",
        cursorcolor : "#af8d60",
        boxzoom : false,
        cursoropacitymax : 1,
        cursorwidth : "10px",
        mousescrollstep : 120,
        scrollspeed : 140,
        zindex: 100000
    });

    setTimeout(function () {
        $( "#date-datepicker-own", el ).datepicker({
            showOn: "button",
            buttonImage: "images/small-calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        }).datepicker("setDate", new Date());
    } ,500);
}
function setSwitch(el, data) {
	createDial($(el).find(".switch"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "Switch", null);
	});
}

function setContact(el, data) {
	createDial($(el).find(".contact"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "Contact", null);
	});
}

function setAdvertisment(el, data) {
	createDial($(el).find(".advertisment"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "Advertisment", null);
	});
}
function setAdvertismentJane(el, data) {
	createDial($(el).find(".advertisment"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "Advertisment", null);
	});
}
function setCreditAdvertisment(el, data) {
	createDial($(el).find(".advertisment"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "Advertisment", null);
	});
}

function setAdvertismentTom(el, data) {
	createDial($(el).find(".advertisment"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "Advertisment", null);
	});
}
function setPersonalLoan(el, data) {
	createDial($(el).find(".advertisment"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "Advertisment", null);
	});
}

function setAdvertismentText(el, data) {
	createDial($(el).find(".advertisment-text"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "AdvertismentText", null);
	});
}

function setAdvertismentTwoSlotText(el, data) {
	createDial($(el).find(".advertisment-two-slot-text"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "AdvertismentTwoSlotText", null);
	});
}

function setAdvertismentAdditional(el, data) {
	createDial($(el).find(".advertisment-additional"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "AdvertismentAdditional", null);
	});
}

function setBankCard(el, data) {
	createDial($(el).find(".bank-card"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "BankCardDetails", null);
	});
	
	$(el).find("#bank-card-more-bottom, #bank-card-more-right").click(function(e) {	
		var displayStatus = $(this).find("span").attr('data-current_display_status')
//		if(displayStatus == 'show'){
//			$('#bank-card-hover').removeClass('hide');
//			$('#bank-card-hover').show();
//			$('#bank-card').hide();
//			$('#bank-card').addClass('hide');
//		} else {
//			$('#bank-card-hover').addClass('hide');
//			$('#bank-card-hover').hide();
//			$('#bank-card').removeClass('hide');
//			$('#bank-card').show();
//		}

	});	
	$(el).find("#bank-card-less-bottom, #bank-card-less-right").click(function(e) {
//		$('#bank-card-hover').hide();
//		$('#bank-card').show();
	});
}

function setPFM(el, data) {
	createDial($(el).find(".pfmw"), 500, 500, 90, "#f7573f", "#87b22e", 320);

	$(el).find("#pfm").tabs();
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".pfm_number").click(function(e) {			
		detailUtil.openTemplate(this, "PFMDetailsNew", null);
	});
	$(el).find('.widget-details-button a').click(function(e){
		e.preventDefault();
		detailUtil.openTemplate(this, "PFM_Details_New", null);
		setTimeout( function () {
			doCreateChartPersonalFin2(null);
			 $('.carousel').carousel({
		      interval: 6000
		    })
		}, 500);

		$('img[src="images/pfc-edit.png"]').click(function(){
			var content = $('.pfm-overlay').html();
			$('#myNav').html(content);
				openNav();
			$('.dismiss_overlay').click(function(){
				closeNav();
			})
		})
		$('.pfm_dtails_expenses_header ul li').click(function(){
			$('.pfm_dtails_expenses_header ul li').removeClass('active');
			$(this).addClass('active');
		})

	})

	setTimeout( function () {doCreateChartPersonalFin1(null);}, 500);
	setTimeout( function () {chartShopping(null);}, 500);
	setTimeout( function () {chartEntertainment(null);}, 500);
	setTimeout( function () {chartFood(null);}, 500);
	setTimeout( function () {chartTransport(null);}, 500);
	setTimeout( function () {chartHome(null);}, 500);
}
function openNav() {
    $('#myNav').show()
}

/* Close */
function closeNav() {
   $('#myNav').hide();
}
function setVideo(el, data) {
	createDial($(el).find(".video"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-video").click(function(e) {
        e.preventDefault();				
		$("#modal").modal({});
//		detailUtil.openTemplate(this, "VideoDetails", null);
		$('#video-full').get(0).play();
	});
}
function setVideo1(el, data) {
	createDial($(el).find(".video1"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-video").click(function(e) {
        e.preventDefault();				
		$("#modal1").modal({});
//		detailUtil.openTemplate(this, "VideoDetails", null);
		$('#video-full1').get(0).play();
	});
}
function setVideo2(el, data) {
	createDial($(el).find(".video1"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-video").click(function(e) {
        e.preventDefault();				
		$("#modal2").modal({});
//		detailUtil.openTemplate(this, "VideoDetails", null);
		$('#video-full2').get(0).play();
	});
}
function setMyEuroAccount(el, data) {
	createDial($(el).find(".myEuroAccount"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "MyEuroAccountDetails", null);
	});
}

function setMySavingsAccount(el, data) {
	createDial($(el).find("mySavingsAccount"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "MySavingsAccountDetails", null);
	});
}

function setMyEuroSavings(el, data) {
	createDial($(el).find(".myEuroSavings"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "MyEuroSavingsDetails", null);
	});
}


function setMyVisaDebitCard(el, data) {
	createDial($(el).find(".myVisaDebitCard"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	setShowMoreButtonEvents(el);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "MyVisaDebitCardDetails", null);
	});
}
function setCardDetailsModal(el,data){
	createDial($(el).find("#widget-bank-card-modal"), 500, 500, 90, "#f7573f", "#87b22e", 320);
	setShowMoreButtons(el, data);
	$(el).find(".widget-details-button a").click(function(e) {
        e.preventDefault();
		detailUtil.openTemplate(this, "CardDetailsModal", null);
	});
}

function doCreateChartPersonalFin2(input)
{    
    var containerId = '#circle_finance_detail';
    var chartTitle = '€';
    if(input != null){
        containerId = '#circle' + input + '_finance';
        chartTitle = '';
    }
    $(containerId).highcharts({
        chart: {
            type: 'pie'
            ,backgroundColor:'rgba(255, 255, 255, 0)'
            ,margin: [0, 0, 0, 0]
            ,spacingTop: 0
            ,spacingBottom: 0
            ,spacingLeft: 0
            ,spacingRight: 0
        },
        title: {
            text : chartTitle,
            y: 150,
            style: { "font-family":"'SourceSansPro'", "color": "#4b3f2f", "font-size":"28px"},
        },
        yAxis: {
            title: {
                text: false
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                        enabled: false
                    },
                shadow: false,
                center: ['50%', '50%'],
                borderWidth: 0,
            }
        },
         credits: {
            enabled: false
        },
        tooltip: {
            valueSuffix: '',
            formatter: function() {
                return this.point.name + " : <strong>" + this.point.y + '% </strong>';   
            }
        },
        series: [{
            name: false,
            data: [{
                name:'Foods & Dining',
                y: 13,
                color:'#78c8e6'
                },
                {
                    name:'Entertainment',
                    y: 22,
                    color:'#a5d16c'
                },
                {
                    name:'Transport',
                    y: 13,
                    color:'#fbb03b'
                        //#ffe349
                },
                {
                    name:'Home',
                    y: 3,
                    color:'#e74955'
                        //#ff895b
                },
                {
                    name:'Shopping',
                    y: 45,
                    color: '#7c94be'
                },
            ],
            size: '145%',
            innerSize: '90%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                   // return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%'  : null;
                    
                }
            }
        }]
    });
    
    $('.highcharts-title tspan:last-child').attr('dy', '40');
    setTimeout(function(){
      //$(window).trigger('resize');
    },2);
    
}