	function checkdate(str){
	    var re = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/; 
	    var err = document.getElementById('date-err');
	    if(!re.test(str))
	    err.style.display='block';
		setTimeout(function(){
			err.style.display='none';	
		},2000);
	}

	function checkEmail(str){
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    var emailErr = document.getElementById('email-err');
	    if(!re.test(str))
	    emailErr.style.display='block';
		setTimeout(function(){
			emailErr.style.display='none';	
		},2000);
	}

	function checkmobile(str){
		    var re = /\d/g;
	    var err = document.getElementById('mobile-err');
	    if(!re.test(str))
	    err.style.display='block';
		setTimeout(function(){
			err.style.display='none';	

		},2000);
	}

	function checkcurrency(str){
		var re = /^\$?[0-9][0-9\,]*(\.\d{1,2})?$|^\$?[\.]([\d][\d]?)$|EUR/;
	    var err = document.getElementById('cur-err');
	    if(!re.test(str))
	    err.style.display='block';
		setTimeout(function(){
			err.style.display='none';	

		},2000);
	}

