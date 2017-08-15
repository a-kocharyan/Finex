// article types
function WidgetTypeHandler() {
    
    var buttons = new Array();
    var currentButton = null;
    var articles = new Array();
	var articleData = new Object();
    var sec = null;
	var grid = $('.grid-stack').data('gridstack');

    function changeArticleType(e) {
        var event = getEvent(e);
        var src = getSourceElement(event);
        if (currentButton == src) {
            checkWidgetArray(articles, null);
            src.className = "";
            currentButton = null;
            // appear remove, put back gear function
            for (var i = 0; i < articles.length; i++) {
                var art = articles[i];
                var delBtn = getElementByTagAndClassName(art, "a", "fa-remove");
                if (delBtn != null) delBtn.style.display = "";
                var gearBtn = getElementByTagAndClassName(art, "button", "btn-link");
                if (gearBtn != null) gearBtn.style.display = "";
                var shareBtn = getElementByTagAndClassName(art, "a", "fa fa-share-square-o");
                if (shareBtn != null) {
                    shareBtn.parentNode.removeChild(shareBtn);
                }
            }
            // add widget article to normal
			/*
            if (src.id=="addNewWidgetBtn") {
                src.className = "fa fa-plus";
                src.parentNode.removeChild(src.nextSibling);
                src.parentNode.appendChild(document.createTextNode(" Add Widget"));
            }*/

            // change small icons
            var foot = document.getElementsByTagName("footer")[0];
            var arts = foot.getElementsByClassName("article");
            for (var i = 0; i < arts.length; i++) {
                var art = arts[i];
                var id = art.getAttribute("artId");
                var bigArt = document.getElementById(id);
                // putBack(bigArt);
                bigArt.getElementsByTagName("div")[0].style.display = "none";
                bigArt.appendChild(document.createTextNode(art.innerHTML));
                $(bigArt).draggable("destroy");
                bigArt.className = "smallWidgetIcon";
                foot.insertBefore(bigArt, art);
                foot.removeChild(art);
                $(bigArt).draggable({
                    stop : function() {
                        this.getElementsByTagName("div")[0].style.display = "";
                        this.className = "grid-stack-item ui-draggable ui-resizable ui-resizable-autohide";
                        this.removeChild(this.lastChild);
                        sec.appendChild(this);
                        this.style.position = "";
                        this.style.top = "";
                        this.style.left = "";
                        putBack(this);
                        checkFooterIsEmpty(foot);
                        localStorage.setItem($(this).attr('data-name') + '_deleted', 0);
                        this.scrollIntoView(true);
                    }
                });
            }
            //load_widget_positions_json();
        } else {
			collectArtData(articles);
            var tp = src.id;
            // hide remove, change gear function
            for (var i = 0; i < articles.length; i++) {
                var art = articles[i];
                var delBtn = getElementByTagAndClassName(art, "a", "fa-remove");
                if (delBtn!=null) {
                    delBtn.style.display = "none";
                var shareBtn = document.createElement("a");
                shareBtn.href = "JavaScript:";
                shareBtn.className = "fa fa-share-square-o";
                shareBtn.onclick = addIconToSelectBar;
                delBtn.parentNode.insertBefore(shareBtn, delBtn);
                }
                var gearBtn = getElementByTagAndClassName(art, "button", "btn-link");
                if (gearBtn!=null) gearBtn.style.display = "none";
            }
            // add widget article to back
			/*
            if (tp=="addNewWidgetBtn") {
                src.className = "fa fa-backward";
                src.parentNode.removeChild(src.nextSibling);
                src.parentNode.appendChild(document.createTextNode(" Go Back"));
            }*/

            for (var i = 0; i < buttons.length; i++) {
                var btn = buttons[i];
                btn.className = btn == src ? "typeButtonAct" : "";
            }
            currentButton = src;
            checkWidgetArray(articles, tp);
        }
    }

    function checkWidgetArray(arts, tp) {
        for (var i = 0; i < arts.length; i++) {
            var art = arts[i];
            var found = false;
            if (tp == null) {
                found = true;
			/*
            } else if (tp == "addNewWidgetBtn") { // deleted widgets
                var del = localStorage.getItem(art.getAttribute("data-name") + "_deleted");
                if (del == 1 || art.id=="addNewWidget") found = true;
			*/
            } else {
                var id = art.id;
                if (typeof id != "undefined" && id != "") {
                    var arr = widgetTypes[id];
                    if (arr) {
                        for (var j = 0; j < arr.length; j++) {
                            if (arr[j] == tp) {
                                found = true;
                                break;
                            }
                        }
                    }
                }
            }
			remove(art); //remove if exists before replacing
            if (found) {
				//put back to original position
				putBack(art);
            }
        }
    }
	
	function collectArtData(arts) {
		for (var i = 0; i < arts.length; i++) {
			var art = arts[i];
			var x = $(art).attr("data-gs-x");
			var y = $(art).attr("data-gs-y");
			var w = $(art).attr("data-gs-width");
			var h = $(art).attr("data-gs-height");
			articleData[art.id] = {"data-gs-x" : x, "data-gs-y" : y, "data-gs-width" : w, "data-gs-height" : h};
		}
	}
	
	function remove(art) {
		if (art.parentNode) {
			grid.remove_widget(art, true);
		}
	}

    function putBack(art) {
		var data = articleData[art.id];
		if (data) {
			grid.add_widget(art, Number(data["data-gs-x"]), Number(data["data-gs-y"]), Number(data["data-gs-width"]), Number(data["data-gs-height"]), false);
		}
    }

    function checkFooterIsEmpty(footer) {
        var chn = footer.childNodes;
        if (chn.length == 1 && chn[0].tagName.toLowerCase() == "span") {
            chn[0].style.display = "";
            footer.className = "";
        }
    }

    this.renderTypeButtons = renderTypeButtons;
    function renderTypeButtons() {
		var sec = document.getElementsByClassName("section")[0];
        var arts = sec.getElementsByClassName("article");
        for (var i = 0; i < arts.length; i++) {
			var art = arts[i];
            articles[i] = art;
			//add id if not exists
			if (art.id==null) {
				art.id = ("fakeId"+i);
			}
        }
        sec = document.getElementById("playground");
        for ( var key in typeTitles) {
            var btn = document.createElement("li");
            var anc = document.createElement("a");
            anc.innerHTML = typeTitles[key];
            anc.id = key;
            anc.onclick = changeArticleType;
            btn.appendChild(anc);
            $("#menu1").append(btn);
            buttons[buttons.length] = anc;
        }
		/*
        var btn = document.getElementById("addNewWidgetBtn");
        if (btn!=null) btn.onclick = changeArticleType;
		*/
    }

    function addIconToSelectBar(e) {
        var event = getEvent(e);
        var src = getSourceElement(event);
        var prn = findParent(src, "article");
        var id = prn.id;
        var widg = document.getElementById(id);
        if (localStorage.getItem(widg.getAttribute("data-name") + "_deleted") == 1) {
            var foot = document.getElementsByTagName("footer")[0];
            var chn = foot.childNodes;
            var found = false;
            for (var i = 0; i < chn.length; i++) {
                var ch = chn[i];
                if (ch.tagName.toLowerCase() == "span") {
                    ch.style.display = "none";
                } else {
                    var artId = ch.getAttribute("artId");
                    if (artId == id) {
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                var nw = document.createElement("div");
                nw.setAttribute("artId", id);
                nw.innerHTML = id;
                nw.setAttribute("class", "article smallWidgetIcon");
                
                nw.style.backgroundImage="url(./img/widgeticons/savings.png)";
                nw.style.width="150px"
                nw.style.height="73px";
                foot.appendChild(nw);
                foot.className = "moving";

            }
        }
    }

    var widgetTypes = {
        myCurrent : [ "acc" ],
        saving : [ "acc" ],
        deposit : [ "acc" ],
        loan : [ "acc" ],
        nic : [ "ben" ],
        bir : [ "ben" ],
        quickp : [ "pay" ],
        cashf : [ "pfm" ],
        vid : [ "misc" ],
        sphab : [ "pfm" ],
        debit : [ "card" ],
        credit : [ "card" ],
        lastTen : [ "pfm" ],
        alertArt : [ "pfm" ],
        upcome : [ "pfm" ],
        contact : [ "misc" ],
        pfmw : [ "pfm" ],
        popular : [ "pfm" ],
        netWorth : [ "pfm" ],
        future : [ "pfm" ],
        loyPoint : [ "acc" ],
        prPackage : [ "acc" ],
        myNotes : [ "misc" ],
        saveGoal : [ "pfm" ],
        savePlus : [ "acc" ],
        commonpay : [ "pay" ]
    };

    var typeTitles = {
        acc : "Accounts",
        ben : "Beneficiaries",
        pay : "Payments",
        misc : "Miscellaneous",
        pfm : "PFM",
        card : "Cards"
    };

    function getEvent(e) {
        var mainEvent = e;
        if (!mainEvent) {
            mainEvent = window.event;
        }
        return mainEvent;
    }

    function getSourceElement(e) {
        var el = null;
        if (e.srcElement)
            el = e.srcElement;
        else if (e.target)
            el = e.target;
        return el;
    }
}

function findParent(el, prn) {
	//console.log("findParent called: " + el + ", " + prn);
    while (el.tagName.toLowerCase() != prn.toLowerCase()) {
        el = el.parentNode;
    }
    return el;
}

function findParentArticle(el) {
	console.log("findParentArticle called: " + el);
	//ertelemszeruen ez csak akkor fog moukodni, ha nem az article az utoslo className
    while ( el.className.indexOf("article ") == -1 ) {
        el = el.parentNode;
    }
    return el;
}

function getElementByTagAndClassName(el, tag, cls) {
	console.log(el+" "+tag+" "+cls);
    var chn = el.getElementsByTagName(tag);
    for (var i = 0; i < chn.length; i++) {
        if (chn[i].className.indexOf(cls) > -1) {
            return chn[i];
        }
    }
    return null;
}

// style switch
function StyleSwitch() {

    var btn = null;
    var current = null;
	var files = [
  		"bookblock.css",
   		"bootstrap.css",
 		"bootstrap-theme.css",
		"createsaving.css",
		"widgets.css",
		"hint.css",
		"inline.css",
		"masspayment.css",
		"payment.css",
		"topup.css",
		"mobilePayment.css"
	];
	var commonfiles = [
		"flowplayer-minimalist",
   		"font-awesome.min.css",
		"gridstack-extra.css",
		"gridstack.css",
		//"superslides.css"
   	];
	
    function renderSwitch() {
		var cont = document.getElementById("styleSwitch");
		var dvs = cont.getElementsByTagName("div");
		for (var i=0; i<dvs.length; i++) {
			dvs[i].onclick = change;
		}
    }

    function change(e) {
        var event = getEvent(e);
        var src = getSourceElement(event);
		var prn = findParent(src, "div");
		var cls = prn.className;
		var type = cls.substring(cls.indexOf("-")+1);
		//alert(type);
		if (current!=type) {
			removeCss();
			createCss(type);
			current = type;
		}
		
        $("#cssmenu_active").removeClass("css-dark");
        $("#cssmenu_active").removeClass("css-light");
        $("#cssmenu_active").removeClass("css-izola");
        $("#cssmenu_active").removeClass("css-apsbank");
        $("#cssmenu_active").addClass("css-"+type);
		
    }

    function createCss(type) {
        var hd = document.getElementsByTagName("head")[0];
		for (var i=0; i<files.length; i++) {
			var css = document.createElement("link");
			css.rel = "stylesheet";
			css.type = "text/css";
			
			css.href = "css/"+type+"/"+files[i];
			
			
			hd.appendChild(css);
		}
		for (var i=0; i<commonfiles.length; i++) {
			var css = document.createElement("link");
			css.rel = "stylesheet";
			css.type = "text/css";
			
			css.href = "css/common/"+commonfiles[i];
			
			
			hd.appendChild(css);
		}
    }

    function removeCss() {
        var links = document.getElementsByTagName("link");
        for (var i = 0; i < links.length; i++) {
            var ln = links[i];
			ln.parentNode.removeChild(ln);
			i--;
        }
    }

    function getEvent(e) {
        var mainEvent = e;
        if (!mainEvent) {
            mainEvent = window.event;
        }
        return mainEvent;
    }

    function getSourceElement(e) {
        var el = null;
        if (e.srcElement)
            el = e.srcElement;
        else if (e.target)
            el = e.target;
        return el;
    }
	renderSwitch();
}

//widget open to active
function WidgetActivator() {
    var activeWidget = null;
    var tempContainer = null;
	var removeClickFunction = null;
	
	document.body.onbeforeunload = checkActive;
    
    function addEvents() {
        //alert("adde");
        tempContainer = document.createElement("div");
        tempContainer.style.display = "none";
        document.body.appendChild(tempContainer);
        
        $(document).on('click', '.tranDetailsBtn', function(e) {
            open(document.getElementById("lastTen"), document.getElementById("setting_modal_tran"));
        });
		
        $(document).on('click', '.standDetailsBtn', function(e) {
            open(document.getElementById("standing"), document.getElementById("setting_modal_stand"));
        });

        /* Added uuid to use as input */
        $(document).on('click', '.graph_content input', function(e){
        	var currentUuid = this.getAttribute("data-uuid");
        	if(currentUuid != null){
        		getDetailContent(currentUuid, 'Account', 'setting_modal_acc', this.id);
        		//alert("Loading account details with uuid: " + currentUuid);
        	} else {
                open(findParentArticle(this), document.getElementById("setting_modal_acc"));
        	}
        });
		
        $(document).on('click', '#saving_acc_btn', function(e) {
            open(findParentArticle(this), document.getElementById("setting_modal_acc_savings"));
        });
		
        /* Added uuid to use as input */
        $(document).on('click', '#current_acc_btn', function(e) {            
			openTemplate(this, "AccountDetails.html", null);
        });

		
        $(document).on('click', '#deposit_acc_btn', function(e) {
        	var currentUuid = this.getAttribute("data-uuid");
        	if(currentUuid != null){
        		getDetailContent(currentUuid, 'Deposit', 'setting_modal_acc_depo', this.id);        		
        	} else {
        		open(findParentArticle(this), document.getElementById("setting_modal_acc_depo"));
        	}
        });
		
        $(document).on('click', '#loan_acc_btn', function(e) {
            open(findParentArticle(this), document.getElementById("setting_modal_acc_loan"));
        });
		
        $(document).on('click', '.loy-balance-point', function(e) {
            open(findParentArticle(this), document.getElementById("setting_modal_loyal"));
        });
		
        $(document).on('click', '#loyalPartnerButton', function(e) {
            open(findParentArticle(this), document.getElementById("setting_modal_loypart"));
        });
		
        $(document).on('click', '#credit1', function(e) {
            open(findParentArticle(this), document.getElementById("setting_modal_card_credit"));
        });
        
        /* Added uuid to use as input */
        $(document).on('click', '#debit1', function(e) {
        	var currentUuid = this.getAttribute("data-uuid");
        	if(currentUuid != null){
        		alert("Not implemented: " + currentUuid);
        	}
            open(findParentArticle(this), document.getElementById("setting_modal_card_debit"));	
        });
		
        $(document).on('click', '.beneficiary', function(e) {
            open(findParentArticle(this), document.getElementById("setting_modal_benef"));
        });
        
        /* Goals Details modal */
        $(document).on('click', '#goalsDetails', function(e) {
            open(findParentArticle(this), document.getElementById("setting_modal_goals"));
        });
		
        /*PFM Spending Analysis modal */
        $(document).on('click', '#pfm_number', function(e) {
            open(findParentArticle(this), document.getElementById("setting_modal_pfm_spending"));
            /* Show first graph*/
            createChartPersonalFin1_m('_m');
        });
        
        /*PFM Net Worth details modal */
        $(document).on('click', '#netWorthDetails', function(e) {
            open(findParentArticle(this), document.getElementById("setting_modal_pfm_networth"));
            /* Show first graph*/
            createChartPersonalFin1_m('_a');
            createChartPersonalFin1_m('_l');
        });        

        //unknown place of code
        //setting_modal_pfm_networth
        
    }
	
	function openTemplate(el, templateName, data) { 
		var div = document.createElement("div");
		var template = Handlebars.templates[templateName];
        console.log(templateName);
		div.innerHTML = template( data );
		div = div.getElementsByTagName("div")[0]
		document.body.appendChild(div);
		open($(el).closest("div.grid-stack-item")[0], div);
	}
    
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
        $(art).attr("actCont", actCont.id);     
        grid.move(art, 0, Number(y));
        
        activeWidget = art;
        
		actCont.style.position = "initial";
		actCont.style.display = "block";
		
		var height = actCont.offsetHeight;
		
		actCont.style.position = "";
		actCont.style.display = "";
		

        var artContDiv = getElementByTagAndClassName(actCont, "div", "main_body");
        var cont =  getElementByTagAndClassName(art, "div", "widget-content");
		var remove =  getElementByTagAndClassName(art, "a", "fa fa-remove");
		removeClickFunction = remove.getAttribute("onclick");
		remove.removeAttribute("onclick");
		remove.onclick = function () {close(art);};
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


        var hei = Math.ceil(height/180);

        grid.resize(art, grid.getGridWidth(), hei);

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
        
        //var actCont = document.getElementById($(art).attr("actCont"));
        //var artContDiv = getElementByTagAndClassName(actCont, "div", "main_body");
        var cont =  getElementByTagAndClassName(art, "div", "transparent");
		var remove =  getElementByTagAndClassName(art, "a", "fa fa-remove");
		delete remove.onclick;
		remove.setAttribute("onclick", removeClickFunction);
		
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
        
        $(cont).removeClass("transparent");
        $(cont).addClass("widget-content");
    }
	
	function checkActive() {
		if (activeWidget!=null) close(activeWidget);
	}
    
    addEvents();
}