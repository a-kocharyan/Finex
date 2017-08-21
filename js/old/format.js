var activator = new WidgetActivator2();

function mainFormat(el, data) {
    var options = {
            cell_height : 180,
            vertical_margin : 10,
            animate : true,
            always_show_resize_handle : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            draggable: {
                handle : '.grid-stack-item-content .drag-handle',
                scroll: true
            },
            min_width : 200,
            width : 4
    };

    //console.log(options);
    console.log("init grid... ("+options.width+")");
	var sec = $('.grid-stack');
    sec.gridstack(options);
	
	//save position and size
	sec.on('dragstop', function (event, ui) {
		var arr = new Array();
		$('.grid-stack-item').each(function () {
			var node = $(this).data('_gridstack_node');
			if (typeof node !== "undefined") {
				var uuid = $(this).attr('UUID');
				if (typeof uuid !== "undefined") {
					arr[arr.length] = {"UUID":uuid, "X":node.x, "Y":node.y, "WIDTH":node.width, "HEIGHT":node.height,};
				}
			}
		});
		saveWidgetData(arr);
	});
	
	$("body").niceScroll({
		cursorborder : "",
		cursorcolor : "#000000",
		boxzoom : false,
		cursoropacitymax : 0.25,
		cursorwidth : "20px",
		mousescrollstep : 120,
		scrollspeed : 140,
		zindex: 100000
	});
	
	//addWindowResizeEvent();
}

var widgetDataAjax = null;

function saveWidgetData(data) {
	if (widgetDataAjax==null) {
		widgetDataAjax = new Ajax();
		widgetDataAjax.setServletUrl("http://172.16.10.14:8080/save_widget");
		widgetDataAjax.setContentType("application/json");
	}
	var resp = widgetDataAjax.getResponse();
	if (resp==null) {
		widgetDataAjax.servletCall(JSON.stringify(data), saveWidgetData);
	}
}

function accountOverviewFormat(el, data) {

	var content = getPureData(data);
	if (content!=null) {
		var ser = new Array();
		var accs = content["Accounts"];
		for (var i=0; i<accs.length; i++) {
			var acc = accs[i];
			ser[ser.length] = {name: (acc["Name"]+" "+acc["Currency"]), data: [Number(acc["Balance"])]};
		}
		//chartObj["series"] = ser;
		
		var curr = content["Currency"];
		if (typeof curr === 'string') $(el).find(".rightmargin").attr('class', 'fa fa-'+curr.toLowerCase()+' rightmargin');
	}
	//chart
	accountOverviewInit(ser);
	
    //$(el).find(".accOverview_graph").highcharts(chartObj);
	
	
	//to grid
	addToReadyGrid(el, data);
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

function transactionItemFormat(el, data) {
	var sign = data["Sign"];
	var par = data["parent"];
	var del = data["del"];
	if (typeof sign === 'string') $(el).find(".fa").attr("class", "fa fa-"+(sign=="-"?"minus":"plus")+"-circle");
	if (typeof par === 'string') {
		var art = findParent(el, "article");
		var dv = getElementByTagAndClassName(art, "div", par);
		var ul = getElementByTagAndClassName(dv, "ul", "transectoin_list");
		ul.insertBefore(el, ul.lastChild);
	} else if (del) {
		el.parentNode.removeChild(el);
	}
}

function transactionsFormat(el, data) {
	el.id = "TransactionsType_"+data["UUID"];

	
	createGridStackItemFunctions(el);
		
	var content = getPureData(data);
	var list = content["TransactionItemType"];
	for (var i=0; i<list.length; i++) {
		if (i>4) {
			list[i]["parent"] = "more_content_bottom";
		} else if (i>8) {
			list[i]["del"] = true;
		}
	}
	
	addToReadyGrid(el, data);
	setPureData(data, content);
	
	$(el).find(".tranDetailsBtn").on('click', function(e) {
		var id = $(this).closest(".grid-stack-item").attr("id");
		getDetailData("http://172.16.10.14:8080/landing_data2?detailId="+id.substring(id.indexOf("_")+1));
	});
}

function transactionDetailsFormat(el, data) {
	//filter button event
	$(el).find(".nav").on('click', function(e) {
		var art = $(this).closest(".grid-stack-item");
		var id = art.attr("id");
		var val = art.find(".transAccSearch").val();
		getDetailData("http://172.16.10.14:8080/landing_data2?detailId="+id.substring(id.indexOf("_")+1)+"&filterTitle=TransactionDetailsItemType&filterName=Account&filterValue="+val);
	});
	
	//FILTERING
	var art = document.getElementById("TransactionsType_"+data["UUID"]);
	if (art.getAttribute("actcont")==null) {
		setTimeout(  function () {activator.open(art,el); }, 100);
	} else {
		setTimeout(  function () {filterTransDetails(art,el); }, 100);
	}
}

function filterTransDetails(art,el) {
	var cont =  getElementByTagAndClassName(art, "div", "transparent");
	var chn = cont.childNodes;
	for (var i=1; i<chn.length; i++) {
		var ch = chn[i];
		if (ch.getAttribute("added")=="1") {
			cont.removeChild(ch);
			i--;
		}
	}
	var hei = activator.getContHeight(el);
	var artContDiv = getElementByTagAndClassName(el, "div", "main_body");
	var i=0;
	while (artContDiv.firstChild) {
		var ch = artContDiv.firstChild;
		if (i>0 && ch.tagName && (ch.tagName.toLowerCase()=="article" || ch.tagName.toLowerCase()=="div")) {
			cont.appendChild(ch);
			ch.setAttribute("added", "1");
		} else {
			artContDiv.removeChild(ch);
		}
		i++;
	}
	el.parentNode.removeChild(el);
	var grid = $('.grid-stack').data('gridstack');
	grid.resize(art, 4, hei);
}

function cardFormat(el, data) {
	$(el).find(".transectoin_list").empty();
	var content = getPureData(data);
	createGridStackItemFunctions(el);
	
	var list = content["TransactionItemType"];
	for (var i=0; i<list.length; i++) {
		if (i>4) {
			list[i]["del"] = true;
		}
	}
	addToReadyGrid(el, data);
	setPureData(data, content);
}

function accountFormat(el, data) {
	el.id = "AccountType_"+data["UUID"];
	$(el).find(".transectoin_list").empty();
	var content = getPureData(data);
	createDial($(el).find(".dial1"), content["Balance"], 10000, 90, "#f7573f", "#87b22e", 320);
	setKnobs(el);
	var curr = content["Currency"];
	if (typeof curr === 'string') $(el).find(".rightmargin").attr('class', 'fa fa-'+curr.toLowerCase()+' rightmargin');
	createGridStackItemFunctions(el);

	var list = content["TransactionItemType"];
	for (var i=0; i<list.length; i++) {
		if (i>4) {
			list[i]["del"] = true;
		}
	}
	addToReadyGrid(el, data);
	setPureData(data, content);
	
	$(el).find(".beni-balance").on('click', function(e) {
		var id = $(this).closest(".grid-stack-item").attr("id");
		getDetailData("http://172.16.10.14:8080/landing_data2?detailId="+id.substring(id.indexOf("_")+1));
	});
	
}

function accountDetailFormat(el, data) {
	activator.open(document.getElementById("AccountType_"+data["UUID"]),el);
}

function notifocationsFormat(el, data) {

	addToReadyGrid(el, data);
}

function notifocationItemFormat(el, data) {

	var al = data["Alert"];
	
	if (typeof al === 'string') $(el).attr('class', 'alert-group '+al.toLowerCase()+'-alert');
	
	
}

function draftsFormat(el, data) {
	var mc = getElementByTagAndClassName(el, "div", "col-md-12 main_content latest-tran");
	var ls = getElementByTagAndClassName(mc, "ul", "transectoin_list");
	clearNodes(ls);
	addToReadyGrid(el, data);
}

function signTransactionsFormat(el, data) {
	var mc = getElementByTagAndClassName(el, "div", "col-md-12 main_content latest-tran");
	var ls = getElementByTagAndClassName(mc, "ul", "transectoin_list");
	clearNodes(ls);
	addToReadyGrid(el, data);
}

function quickPaymentFormat(el, data) {
	el.id = "QuickPaymentType"+data["UUID"];
	createQuickPayment(el);
	addToReadyGrid(el, data);
}

function massPaymentFormat(el, data) {
	//el.id = "MassPaymentType"+data["UUID"];
	
	addToReadyGrid(el, data);
	
	initMassPayMent(el);
}

function accountDetailLimitItemFormat(el, data) {
	var usedAmount = data["UsedAmount"];
	var limitAmount = data["LimitAmount"];
	
	var perc = Math.round( Number(usedAmount) / Number(limitAmount) * 100);
	
	var divs = el.getElementsByTagName("div")[0].getElementsByTagName("div");
	divs[0].style.width = perc+"%";
	divs[1].style.width = (100-perc)+"%";

	var color = null;
	if (perc<33) {
		color = "green";
	} else if (perc<66) {
		color = "yellow";
	} else if (perc<=100) {
		color = "red";
	}
	divs[0].className = color;
}

function locatorFormat(el, data) {
	addToReadyGrid(el, data);
}

function addToReadyGrid(el, data) {
	var uuid = data["UUID"];
	el.setAttribute("UUID", uuid);
	var x = data["X"];
	var y = data["Y"];
	var w = data["WIDTH"];
	var h = data["HEIGHT"];
	var grid = $('.grid-stack').data('gridstack');
	var auto = x==null;
	grid.add_widget(el, x, y, w, h, auto);
}

function getPureData(data) {
	if (typeof data["JSON_CONTENT"] === "undefined") {
		return data;
	} else {
		return JSON.parse(data["JSON_CONTENT"])[0];
	}
}

function setPureData(data, content) {
	data["JSON_CONTENT"] = "["+JSON.stringify(content)+"]";
}

function clearNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function setKnobs(el) {


	$(el).find(".show_more_bottom").attr('data-current_display_status', 'hide').html('<i class="fa fa-angle-down"></i>');
	$(el).closest('.grid-stack-item').find('.more_content_bottom').hide();

	$(el).find(".show_more_right").attr('data-current_display_status', 'hide').html('<i class="fa fa-angle-right"></i>');
	$(el).closest('.grid-stack-item').find('.more_content_right').hide();
	$(el).closest('.grid-stack-item').find('.main_content').removeClass('col-md-6').addClass('col-md-12');


	if ($(el).find(".show_more_bottom").attr('data-current_display_status') == 'show') {
		$(el).find('.more_content_bottom').show();
		if ($(el).attr('data-knob_id') !== undefined) {
			knob_id = $(el).attr('data-knob_id');
			//console.log(knob_id + " max");
			setKnobLayout($(el), 'max');
		}
	} else {
		$(el).find('.more_content_bottom').hide();
		if ($(el).attr('data-knob_id') !== undefined) {
			knob_id = $(el).attr('data-knob_id');
			//console.log(knob_id + " min");
			setKnobLayout($(el), 'min');
		}
	}

}

var detailDataAjax = null;
function getDetailData(url) {
	if (detailDataAjax==null) {
		detailDataAjax = new Ajax();
		detailDataAjax.setHttpMethod("GET");
	}
	var resp = detailDataAjax.getResponse();
	if (resp==null) {
		detailDataAjax.setServletUrl(url);
		detailDataAjax.servletCall("", getDetailData);
	} else {
		if (!resp.error) {
			 var root = new Object();
			 var hasData = false;
			 for (var i=0; i<resp.length; i++) {
				hasData = true;
				var row = resp[i];
				var tp = row["WIDGET_TYPE"];
				var tpName = tp+"Type";
				if (typeof root[tpName] === "undefined") {
					root[tpName] = row;
				} else {
					var arr = root[tpName];
					if (arr instanceof Array) {
						arr[arr.length] = row;
					} else {
						var firstArr = new Array();
						firstArr[0] = arr;
						firstArr[1] = row;
						root[tpName] = firstArr;
					}
				}
			 }
			 if (hasData) processCore(root);
		}
	}
}

function WidgetActivator2() {
    var activeWidget = null;
    var tempContainer = null;
	var removeClickFunction = null;
	
	window.onbeforeunload = checkActive;
    
	this.open = open;
    function open(art, actCont) {
        checkActive();
        var grid = $('.grid-stack').data('gridstack');
        var x = $(art).attr("data-gs-x");
        var y = $(art).attr("data-gs-y");
        var w = $(art).attr("data-gs-width");
        var h = $(art).attr("data-gs-height");
        $(art).attr("original-x", x);
        $(art).attr("original-y", y);
        $(art).attr("original-w", w);
        $(art).attr("original-h", h);
		
		//get the det element
		
		//
        $(art).attr("actCont", actCont.id);     
        grid.move(art, 0, Number(y));
        
        activeWidget = art;
        
		var hei = getContHeight(actCont);
		

        var artContDiv = getElementByTagAndClassName(actCont, "div", "main_body");
        var cont =  getElementByTagAndClassName(art, "div", "widget-content");
		var remove =  getElementByTagAndClassName(art, "a", "fa fa-remove");
		removeClickFunction = remove.getAttribute("onclick");
		remove.removeAttribute("onclick");
		remove.onclick = function () {close(art);};
		if (tempContainer==null) {
			tempContainer = document.createElement("div");
			tempContainer.style.display = "none";
			document.body.appendChild(tempContainer);
		}
        while (cont.firstChild) {
            tempContainer.appendChild(cont.firstChild);
        }
        while (artContDiv.firstChild) {
            var ch = artContDiv.firstChild;
            if (ch.tagName && (ch.tagName.toLowerCase()=="article" || ch.tagName.toLowerCase()=="div")) {
                cont.appendChild(ch);
                ch.setAttribute("added", "1");
            } else {
                artContDiv.removeChild(ch);
            }
        }

        grid.resize(art, 4, hei);

        $(cont).removeClass("widget-content");
        $(cont).addClass("transparent");
        getElementByTagAndClassName(art, "header", "drag-handle").scrollIntoView(true);
		
		actCont.parentNode.removeChild(actCont);
    }
    
    function close(art) {
        var grid = $('.grid-stack').data('gridstack');
		grid.update(art, Number($(art).attr("original-x")), Number($(art).attr("original-y")), Number($(art).attr("original-w")), Number($(art).attr("original-h")))
        $(art).removeAttr("original-x");
        $(art).removeAttr("original-y");
        $(art).removeAttr("original-w");
        $(art).removeAttr("original-h");
        activeWidget = null;
        
        var cont =  getElementByTagAndClassName(art, "div", "transparent");
		var remove =  getElementByTagAndClassName(art, "a", "fa fa-remove");
		delete remove.onclick;
		remove.setAttribute("onclick", removeClickFunction);
		

        var chn = cont.childNodes;
        for (var i=0; i<chn.length; i++) {
            var ch = chn[i];
            if (ch.getAttribute("added")=="1") {
				cont.removeChild(ch);
                i--;
            }
        }
        
        while (tempContainer.firstChild) {
          cont.appendChild(tempContainer.firstChild);
        }
        
        $(cont).removeClass("transparent");
        $(cont).addClass("widget-content");
		$(art).removeAttr("actCont");     
    }
	
	this.getContHeight = getContHeight;
	function getContHeight(actCont) {
		actCont.style.position = "initial";
		actCont.style.display = "block";
		var height = actCont.offsetHeight;
		actCont.style.position = "";
		actCont.style.display = "";
		return Math.ceil(height/180);
	}
	
	function checkActive() {
		if (activeWidget!=null) close(activeWidget);
	}
}
