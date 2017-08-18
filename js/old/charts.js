function createCharts() {
    createChartPersonalFin1();
    //createCashFlowGraph();
}

function hideChartsInModal(onlyShows, input){
	var firstItem = document.getElementById('tab' + onlyShows + input);
	if(firstItem != null){
		var items = firstItem.parentNode.children;
		for(i=0; i < items.length; i++){
			if(items[i].getAttribute("id")){
				var currentId = items[i].getAttribute("id");
				if(currentId != 'tab' + onlyShows + input){	
					items[i].style.display = 'none';
				} else {
					items[i].style.display = 'block';
				}
			}
		 }
	}
}

function createCashFlowGraph(el)
{
	var dv = el==null?$("#cashflow_graph"):$(el).find(".graph-left div");
	
    dv.highcharts({
        chart: {
            type: 'pie',
            backgroundColor:'rgba(255, 255, 255, 0)'
        },
        title: {
            text: false
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
            },
            series: {
                states: {
                    hover: {
                        enabled: false,
                        halo: {
                            size: 0
                        }
                    }
                }
            },
            
        },
         credits: {
            enabled: false
        },
        tooltip: {
            enabled: false,
            valueSuffix: '%'
        },
        series: [{
            name: 'Cash Flow',
            data: [
                {
                    name: 'Incoming',
                    y: 40,
                   
                    //color: '#87b22e'
                    color: '#a5d16c'
                },
                {
                    name: 'Outgoing',
                    y: 30,
                    color: 'rgba(255,255,255,.2)'
                },
                {
                    name: '',
                    y: 30,
                     color: 'rgba(255, 255, 255, 0)'
                }
                
            ],
            size: '160%',
            innerSize: '80%',
            dataLabels: {
                enabled: false,
                formatter: function () {
                    // display only if larger than 1
                    //return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%'  : null;
                    return false;
                }
            }
        }]
    });
}
function createChartPersonalFin1()
{
    setTimeout(function(){    
       doCreateChartPersonalFin1(null);       
    },300);
}

function createChartPersonalFin1_m(input)
{
	hideChartsInModal(1, input);
    setTimeout(function(){    
    	doCreateChartPersonalFin1(input);
    },300);
}

function doCreateChartPersonalFin1(input)
{    
    var containerId = '#circle_finance';
    var chartTitle = 'Total Expenses<br> in June';
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
//STPL
function doCreateChartPersonalFin2(input)
{    
    alert()
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
//STPL
//STPL
function doCreateCarGoal(input)
{
     var containerId = '#nextCarGoal';
    var chartTitle = '';
    if(input != null){
        containerId = '#circle' + input + '_finance';
        chartTitle = '';
    }
    $(containerId).highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: chartTitle
    },
    credits: {
        enabled: false
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'Saving Years',
            style: { "font-family":"'SourceSansPro'", "color": "#4b3f2f", "font-size":"12px"}
        },
        labels: {
            style: { "font-family":"'SourceSansPro'", "color": "#4b3f2f", "font-size":"10px"}
        }
    },
    yAxis: {
        title: {
            text: 'Savings Amount',
            style: { "font-family":"'SourceSansPro'", "color": "#4b3f2f", "font-size":"12px"}
        },
        labels: {
            style: { "font-family":"'SourceSansPro'", "color": "#4b3f2f", "font-size":"10px"}
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Savings Amount: <b>{point.y:.1f} millions</b>'
    },
    colors:['#214c77'],
    series: [{
        name: 'Population',
        data: [
            ['1', 1],
            ['2', 2],
            ['3', 4],
            ['5', 5],
            ['6', 6],
            ['7', 7],
            ['8', 8],
            ['9',9],
            ['10',10],
            ['11',11],
            ['12',12],
            ['13',13],
            ['14',14],
            ['15',15],
            ['16',16],
            ['17',17],
            ['18',18],
            ['19',19],
            ['20',20],
            ['21',21],
            ['22',22],
            ['23',23],           
            ['24',24],
            ['25',25],
            ['26',26],
            ['27',27],
            ['28',28],
            ['29',29],
            ['30',30]
        ],
        dataLabels: {
            
        }
    }]
});
}
function doCreateTermDeposit(input)
{    
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'term_deposit',
            type: 'pie',
            height:130
        },
        title: {
            text: ''
        },
        credits:{
            enabled:false
        },
        plotOptions: {
            pie: {
                shadow: false,
                borderColor:null
            }
        },
        series: [{
            name: 'Days',
            startAngle: 180,
            data: [
                { 
                   "name": 'Days Left',
                   "y": 75,
                   "color": '#326395'
               },
                { 
                    "name": 'Days Gone',
                    "y": 15,
                   "color": '#a7bfd8'
               }
               
               
            ],
            size: '140%',
            innerSize: '91%',
            showInLegend:false,
            dataLabels: {
                enabled: false
            }
        }]
    }); 

    $('.term_days').show(); 
}


//STPL
function doCreateLoyalty(input)
{   
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'loyaltyBal',
            type: 'pie',
            height:130,
        },
        title: {
            text: ''
        },
        credits:{
            enabled:false
        },
        plotOptions: {
            pie: {
                shadow: false,
                borderColor:null
            }
        },
        series: [{
            name: 'Days',
            startAngle: -90,
            data: [
                { 
                    "name": 'Points Balance',
                    "y": 25,
                   "color": '#e9e9e9'
               },
               { 
                   "name": 'Points Earn',
                   "y": 12,
                   "color": '#cccccc'
               }
               
            ],
            size: '140%',
            innerSize: '91%',
            showInLegend:false,
            dataLabels: {
                enabled: false
            }
        }]
    }); 

    $('.loyalty_points').show(); 
}
//STPL
function doCreateFutureCashPie(input)
{    
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'future_cash_pie',
            type: 'pie',
            height:130
        },
        title: {
            text: ''
        },
        credits:{
            enabled:false
        },
        plotOptions: {
            pie: {
                shadow: false,
                borderColor:null
            }
        },
        series: [{
            name: 'Days',
            data: [
                { 
                   "name": 'Balance',
                   "y": 100,
                   "color": '#d04b4b'
               }                
            ],
            size: '140%',
            innerSize: '91%',
            showInLegend:false,
            dataLabels: {
                enabled: false
            }
        }]
    }); 
    //Line Chart
     chart = new Highcharts.Chart({
        chart: {
            type: 'line',
            renderTo: 'future_cash_pie_line',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 0,
            height:180
        },
        title: {
            text: false
        },
        xAxis: {
            categories: ['1-5', '5-10', '10-15', '15-20', '20-25', '25-30'],
            labels: {
                style: {
                    color: '#a1a1a1'
                }
            }
        },
        yAxis: {
            title: {
                text: false
            },
            labels: {
                style: {
                    color: '#a1a1a1'
                },
                formatter: function () {
                    vals = this.value;                    
                    if(!String(vals).indexOf('-')){
                        return "-$"+String(this.value).split('-')[1];
                    }else{
                        return "$"+this.value;
                    }                    
                },
            },
            // plotLines: [{
            //     value: 0,
            //     width: 1,
            //     color: '#a1a1a1'
            // }]
        },
        plotOptions: {
            area: {
                fillColor: {                    
                    /*stops: [
                        [0, data.plotLinesColor],
                        [1, Highcharts.Color(data.plotLinesColor).setOpacity(0).get('rgba')]
                    ]*/
                },

                marker: {
                    radius: 4,
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null,
                },
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                threshold: null
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            type: 'area',
            name: 'CashFlow Report', 
            data: [0,100,-250,100,150,-500]
        }],
        colors: ['#ccab76'],
        responsive: {
            rules: [{
                chartOptions: undefined,
                condition: {}
            }]
        }
    });
    //Line Cahrt
    $('.future_cash_price').show(); 
}

function doChartNetWorthDetails1(input)
{    
    var containerId = '#networthPieChart_detail1';
    var chartTitle = 'Total Expenses<br> in June';
    if(input != null){
        containerId = '#networthPieChart' + input;
        chartTitle = '';
    }
    $(containerId).highcharts({
        chart: {
            type: 'pie'
            ,backgroundColor:'rgba(255, 255, 255, 0)'
            ,margin: [0, 0, 0, -70]
            ,spacingTop: 0
            ,spacingBottom: 0
            ,spacingLeft: 0
            ,spacingRight: 0,
            height:120,
            width:280
        },
        title: {
            text : false,
            y: 0,
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
                    enabled: true
                },
                shadow: false,                
                borderWidth: 0,
                showInLegend: true,
                startAngle:120
            },           
        },
         credits: {
            enabled: false
        },
        legend:{
            labelFormatter:function(){
                if(this.name === 'Assets')
                return '<span style="color:#1d1e1e; font-size:22px; font-weight:bold; margin:-10px 0 0 0;">+$' + this.y +  '</span><br>' + this.name;
                return '<span style="color:#1d1e1e; font-size:22px; font-weight:bold; margin:-10px 0 0 0;">-$' + this.y +  '</span><br>' + this.name;
            },
            align:"right",
            verticalAlign:"top",
            layout:"vertical",
            x:10,
            y:0,
            floating:false,
            itemMarginTop:10,
            symbolRadius:4,
            symbolWidth:10,
            symbolHeight:10,
            itemStyle: { "font-family":"'SourceSansPro'", "color": "#b5b5b5", "font-size":"12px"},
        },  
        tooltip: {
            valueSuffix: '',
            formatter: function() {
                return this.point.name + " : <strong>" + this.point.y + '</strong>';   
            }
        },
        series: [{
            name: false,
            slicedOffset:5,
            data: [{
                    name:'Assets',
                    y: 42000,
                    color:'#306395'
                },
                {
                    name:'Liabilities',
                    y: 254,
                    color:'#d04a4a',
                    sliced: true,
                    selected: true
                }                
            ],
            size: '90%',
            innerSize: '0%',
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
function doChartNetWorthDetails2(input)
{    
    var containerId = '#networthPieChart_detail2';
    var chartTitle = 'Total Expenses<br> in June';
    if(input != null){
        containerId = '#networthPieChart' + input;
        chartTitle = '';
    }
    $(containerId).highcharts({
         chart: {
            type: 'pie'
            ,backgroundColor:'rgba(255, 255, 255, 0)'
            ,spacingTop: 0
            ,spacingBottom: 0
            ,spacingLeft: 0
            ,spacingRight: 0,
            height:120,
            width:280
        },
        title: {
            text : false,
            y: 0,
            style: { "font-family":"'SourceSansPro'", "color": "#4b3f2f", "font-size":"28px"},
        },
        xAxis: {
           lineWidth: 0,
           minorGridLineWidth: 0,
           lineColor: 'transparent',
           labels: {
               enabled: false
           },
           minorTickLength: 0,
           tickLength: 0
        },
        legend:{
            labelFormatter:function(){
                return '<span style="color:#1d1e1e; font-size:22px; font-weight:bold;">$' + this.y +  '</span><br>' + this.name;
            },
            align:"right",
            verticalAlign:"top",
            layout:"vertical",
            x:10,
            y:0,
            floating:false,
            itemMarginTop:10,
            symbolRadius:4,
            symbolWidth:10,
            symbolHeight:20,
            itemStyle: { "font-family":"'SourceSansPro'", "color": "#b5b5b5", "font-size":"12px"},
        },  
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
         yAxis: {
            title: {
                text: false
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %',
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 36.85,
                color:'#D1190D'
            }, {
                name: 'Chrome',
                y: 19.98,
                color:'#7094AE'
            }, {
                name: 'Firefox',
                y: 19.98,
                color:'#A62923'
            }, {
                name: 'Safari',
                y: 9.02,
                color:'#7B547E'
            }, {
                name: 'Opera',
                y: 8.07,
                color:'#FDDA01'
            }, {
                name: 'Proprietary or Undetectable',
                y: 6.10,
                color:'#FDFE02'
            }]
        }]
    });
    
    $('.highcharts-title tspan:last-child').attr('dy', '40');
    setTimeout(function(){
      //$(window).trigger('resize');
    },2);
    
}
function doChartNetWorthDetails3(input)
{    
    var containerId = '#networthPieChart_detail3';
    var chartTitle = 'Total Expenses<br> in June';
    if(input != null){
        containerId = '#networthPieChart' + input;
        chartTitle = '';
    }
    $(containerId).highcharts({
         chart: {
            type: 'pie'
            ,backgroundColor:'rgba(255, 255, 255, 0)'
            ,spacingTop: 0
            ,spacingBottom: 0
            ,spacingLeft: 0
            ,spacingRight: 0,
            height:120,
            width:280
        },
        title: {
            text : false,
            y: 0,
            style: { "font-family":"'SourceSansPro'", "color": "#4b3f2f", "font-size":"28px"},
        },
        xAxis: {
           lineWidth: 0,
           minorGridLineWidth: 0,
           lineColor: 'transparent',
           labels: {
               enabled: false
           },
           minorTickLength: 0,
           tickLength: 0
        },
        legend:{
            labelFormatter:function(){
                return '<span style="color:#1d1e1e; font-size:22px; font-weight:bold;">$' + this.y +  '</span><br>' + this.name;
            },
            align:"right",
            verticalAlign:"top",
            layout:"vertical",
            x:10,
            y:0,
            floating:false,
            itemMarginTop:10,
            symbolRadius:4,
            symbolWidth:10,
            symbolHeight:10,
            itemStyle: { "font-family":"'SourceSansPro'", "color": "#b5b5b5", "font-size":"12px"},
        },  
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
         yAxis: {
            title: {
                text: false
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %',
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'My Personal Load:EUR -2,307',
                color:'#d04a4a',
                y: 36.85
            }, {
                name: 'Chrome',
                y: 19.98,
                color:'#306395'
            }, {
                name: 'Firefox',
                y: 19.98
            }, {
                name: 'Safari',
                y: 9.02
            }, {
                name: 'Opera',
                y: 8.07
            }, {
                name: 'Proprietary or Undetectable',
                y: 6.10
            }]
        }]
    });
    
    $('.highcharts-title tspan:last-child').attr('dy', '40');
    setTimeout(function(){
      //$(window).trigger('resize');
    },2);
    
}


function doCreateChartNetWorth(input)
{    
	var containerId = '#networthPieChart';
	var chartTitle = 'Total Expenses<br> in June';
	if(input != null){
		containerId = '#networthPieChart' + input;
		chartTitle = '';
	}
    $(containerId).highcharts({
        chart: {
            type: 'pie'
            ,backgroundColor:'rgba(255, 255, 255, 0)'
			,margin: [0, 0, 0, -70]
			,spacingTop: 0
			,spacingBottom: 0
			,spacingLeft: 0
			,spacingRight: 0,
            height:120,
            width:280
        },
        title: {
            text : false,
			y: 0,
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
                    enabled: true
                },
                shadow: false,                
                borderWidth: 0,
                showInLegend: true
            },           
        },
         credits: {
            enabled: false
        },
        legend:{
            labelFormatter:function(){
                return '<span style="color:#1d1e1e; font-size:22px; font-weight:bold; margin:-10px 0 0 0;">$' + this.y +  '</span><br>' + this.name;
            },
            align:"right",
            verticalAlign:"top",
            layout:"vertical",
            x:10,
            y:0,
            floating:false,
            itemMarginTop:10,
            symbolRadius:4,
            symbolWidth:10,
            symbolHeight:10,
            itemStyle: { "font-family":"'SourceSansPro'", "color": "#b5b5b5", "font-size":"12px"},
        },  
        tooltip: {
            valueSuffix: '',
            formatter: function() {
                return this.point.name + " : <strong>" + this.point.y + '</strong>';   
            }
        },
        series: [{
            name: false,
            slicedOffset:5,
            data: [{
                    name:'Assets',
                    y: 420,
                    color:'#306395'
                },
                {
                    name:'Liabilities',
                    y: 254,
                    color:'#d04a4a',
                    sliced: true,
                    selected: true
                }                
            ],
            size: '90%',
            innerSize: '0%',
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

function chartShopping(input) {
	var containerId = '#chart-shopping';
    $(containerId).highcharts({
        chart: {
            type: 'pie'
			,height: '50'
			,width: '50'
            ,backgroundColor:'rgba(255, 255, 255, 0)'
			,margin: [0, 0, 0, 0]
			,spacingTop: 0
			,spacingBottom: 0
			,spacingLeft: 0
			,spacingRight: 0
        },
        title: {
            text : false
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
            data: [
                {
                    name:'Shopping',
                    y: 45,
                    color: '#4b98dc'
                },
				{
                name:'Foods & Dining',
                y: 55,
                color:'#d7d7d7'
                },
            ],
            size: '90%%',
            innerSize: '70%'
        }]
    });
}

function chartEntertainment(input) {
	var containerId = '#chart-entertainment';
    $(containerId).highcharts({
        chart: {
            type: 'pie'
			,height: '50'
			,width: '50'
            ,backgroundColor:'rgba(255, 255, 255, 0)'
			,margin: [0, 0, 0, 0]
			,spacingTop: 0
			,spacingBottom: 0
			,spacingLeft: 0
			,spacingRight: 0
        },
        title: {
            text : false
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
            data: [
                {
                    name:'Ent',
                    y: 22,
                    color: '#88a375'
                },
				{
                name:' ',
                y: 78,
                color:'#d7d7d7'
                },
            ],
            size: '90%%',
            innerSize: '70%'
        }]
    });
}

function chartFood(input) {
	var containerId = '#chart-food';
    $(containerId).highcharts({
        chart: {
            type: 'pie'
			,height: '50'
			,width: '50'
            ,backgroundColor:'rgba(255, 255, 255, 0)'
			,margin: [0, 0, 0, 0]
			,spacingTop: 0
			,spacingBottom: 0
			,spacingLeft: 0
			,spacingRight: 0
        },
        title: {
            text : false
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
            data: [
                {
                    name:'Food',
                    y: 15,
                    color: '#f1a94e'
                },
				{
                name:' ',
                y: 85,
                color:'#d7d7d7'
                },
            ],
            size: '90%%',
            innerSize: '70%'
        }]
    });
}

function chartTransport(input) {
	var containerId = '#chart-transport';
    $(containerId).highcharts({
        chart: {
            type: 'pie'
			,height: '50'
			,width: '50'
            ,backgroundColor:'rgba(255, 255, 255, 0)'
			,margin: [0, 0, 0, 0]
			,spacingTop: 0
			,spacingBottom: 0
			,spacingLeft: 0
			,spacingRight: 0
        },
        title: {
            text : false
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
            data: [
                {
                    name:'Transport',
                    y: 13,
                    color: '#ef7955'
                },
				{
                name:' ',
                y: 87,
                color:'#d7d7d7'
                },
            ],
            size: '90%%',
            innerSize: '70%'
        }]
    });
}

function chartHome(input) {
	var containerId = '#chart-home';
    $(containerId).highcharts({
        chart: {
            type: 'pie'
			,height: '50'
			,width: '50'
            ,backgroundColor:'rgba(255, 255, 255, 0)'
			,margin: [0, 0, 0, 0]
			,spacingTop: 0
			,spacingBottom: 0
			,spacingLeft: 0
			,spacingRight: 0
        },
        title: {
            text : false
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
            data: [
                {
                    name:'Home',
                    y: 3,
                    color: '#9dbabe'
                },
				{
                name:' ',
                y: 97,
                color:'#d7d7d7'
                },
            ],
            size: '90%%',
            innerSize: '70%'
        }]
    });
}

function createChartPersonalFin2_m(input)
{
	hideChartsInModal(2, input);
    setTimeout(function(){
	       doCreateChartPersonalFin2(input);
	    },300);		
}

function createChartPersonalFin2()
{
	setTimeout(function(){
	    doCreateChartPersonalFin2(null);
	 },300);
}

function doCreateChartPersonalFin2(input)
{
	var containerId = '#graph_person_fin_2';
	if(input != null){
		containerId = '#graph' + input + '_person_fin_2';
	}
    $(containerId).highcharts({
        chart: {
            type: 'bar',
            backgroundColor:'rgba(255, 255, 255, 0)',
        },
        title: {
            text: false
        },
        subtitle: {
            text: false
        },
        xAxis: {
            categories: ['Food and Dining', 'Entertainment', 'Transport', 'Home', 'Shopping'],
            title: {
                text: null
            },
            labels: {
                enabled: false,
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: false,
                align: 'high'
            },
            labels: {
                overflow: 'justify',
            }
        },
        tooltip: {
            //valueSuffix: ' %',
            formatter: function() {
                return this.point.category + " : <strong>" + this.point.y + '% </strong>';   
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: false,
            data: [{
                name:'Foods & Dining',
                y: 13,
                color:'#78c8e6'
                },
                {
                    
                    y: 22,
                    color:'#00cc0a'
                },
                {
                    
                    y: 13,
                    color:'#ffe349'
                },
                {
                    
                    y: 3,
                    color:'#ff895b'
                },
                {
                    
                    y: 45,
                    color:'#7c94be'
                },]
        }]
    });
}

function createChartPersonalFin3_m(input)
{
	hideChartsInModal(3, input);
    setTimeout(function(){
	       doCreateChartPersonalFin3(input);
	    },300);		
}

function createChartPersonalFin3()
{
	setTimeout(function(){
	    doCreateChartPersonalFin3(null);
	 },300);
}

function doCreateChartPersonalFin3(input)
{
	var containerId = '#graph_person_fin_3';
	if(input != null){
		containerId = '#graph' + input + '_person_fin_3';
	}
    $(containerId).highcharts({
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            backgroundColor:'rgba(255, 255, 255, 0)',
        },

        title: {
            text: false
        },

        xAxis: {
            gridLineWidth: 1
        },

        yAxis: {
             title: {
                    text: false
                },
            startOnTick: false,
            endOnTick: false
        },
         credits: {
            enabled: false
        },
        legend: {
            enabled: false,
        },
        series: [{
            data: [
                [9, 81, 63],
                [98, 5, 89],
                [51, 50, 73],
                [41, 22, 14],
                [58, 24, 20],
                [78, 37, 34],
                [55, 56, 53],
                [18, 45, 70],
                [42, 44, 28],
                [3, 52, 59],
                [31, 18, 97],
                [79, 91, 63],
                [93, 23, 23],
                [44, 83, 22]
            ],
            marker: {
                fillColor: {
                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255,255,255,0.5)'],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
                    ]
                }
            }
        }]

    });
}

function createChartPersonalFin4_m(input)
{
	hideChartsInModal(4, input);
    setTimeout(function(){
	       doCreateChartPersonalFin4(input);
	    },300);		
}

function createChartPersonalFin4()
{
	setTimeout(function(){
	    doCreateChartPersonalFin4(null);
	 },300);
}

function doCreateChartPersonalFin4(input)
{
	var containerId = '#graph_person_fin_4';
	if(input != null){
		containerId = '#graph' + input + '_person_fin_4';
	}
    $(containerId).highcharts({
        chart: {
            type: 'column',
            backgroundColor:'rgba(255, 255, 255, 0)',
        },
        title: {
            text: false
        },
        xAxis: {
             categories: ['Food and Dining', 'Entertainment', 'Transport', 'Home', 'Shopping'],
        },
        yAxis: {
            min: 0,
            title: {
                text: false
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
         credits: {
            enabled: false
        },
        legend: {
            enabled: false,
        },
        series: [{
            name: 'Jan',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Feb',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Mar',
            data: [3, 4, 4, 2, 5]
        }]
    });
}

function showContainerGraph(el) {
	var graph = el==null?$("#container_graph"):$(el).find("#container_graph");
    graph.highcharts({
            chart: {
                // type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 0,
                backgroundColor:'rgba(255, 255, 255, 0)',
                
                events: {
                  
                }
            },
            title: {
                text: false
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        color: '#115d1b'
                    }
                }
            },
            yAxis: {
                title: {
                    text: false
                },
                labels: {
                    style: {
                        color: '#115d1b'
                    },
                    formatter: function () {
                        return this.value + " EUR";
                    },
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        });
}

function showPfm(el) {
	var tbs = el==null?$("#tabs"):$(el).find("#tabs");
    tbs.tabs();

    var assets = 50500;
    var liab = 10500;
	var cont = el==null?$("#container_pfm_networt_graph"):$(el).find("#container_pfm_networt_graph");
    cont.highcharts({
        chart : {
            animation : Highcharts.svg, // don't animate
            // in old IE
            margin : [ 0, 0, 10, 0 ],
            backgroundColor : 'rgba(255, 255, 255, 0)',
        },
        plotOptions : {
            pie : {
                allowPointSelect : true,
                cursor : 'pointer',
                dataLabels : {
                    enabled : false,
                    distance : -30
                },
                size : 80,
                center : [ 60, 80 ],  //RTL-nel 240,80
            }
        },
        title : {
            text: false
        },
        colors : [ "#e74955", "#a5d16c" ],
        credits : false,
        tooltip : false,
        series : [ {
            type : 'pie',
            name : false,
            innerSize : '90%',
            size : '80%',
            data : [ [ "Liabilities", (assets + liab) / assets * 100 ], [ "Assets", (assets + liab) / liab * 100 ] ]

        } ]
    });
    
}

/***** Quick fix for account graphs *****/

function showMyAccGraph(input)
{
	var containerId = '#circle_finance';
	var chartTitle = 'Total Expenses in June';
	if(input != null){
		containerId = '#circle' + input + '_finance';
		chartTitle = '';
	}
    $(containerId).highcharts({
        chart: {
            type: 'pie',
            backgroundColor:'rgba(255, 255, 255, 0)',
        },
        title: {
            text : chartTitle,
            style: { "font-family":"'Roboto'", "color": "#da5d1b", "font-size":"18px"},
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
            data: [
                {
                	name:'',
                    y: 85,
                    color:'#e74955'
                },
                {
                    name:'',
                    y: 15,
                    color:'#a5d16c'
                        //#e74955
                }
            ],
            size: '100%',
            innerSize: '90%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                   // return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%'  : null;
                    
                }
            }
        }]
    });
    setTimeout(function(){
      $(window).trigger('resize');
    },2);
    
}

//Draw quarterly report
function showQuarterlyReportGraph(el, data) {
    //var graph = el==null?$(data.graphContainer):$(el).find(data.graphContainer);
    return Highcharts.chart(data.graphContainer,{
        chart: {
            type: 'line',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 0,
            backgroundColor:data.backgroundColor,
            events: {

            }
        },
        title: {
            text: false
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            labels: {
                style: {
                    color: '#a1a1a1'
                }
            }
        },
        yAxis: {
            title: {
                text: false
            },
            labels: {
                style: {
                    color: '#a1a1a1'
                },
                formatter: function () {
                    return "$"+this.value;
                },
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#a1a1a1'
            }]
        },
        plotOptions: {
            area: {
                fillColor: {                    
                    stops: [
                        [0, data.plotLinesColor],
                        [1, Highcharts.Color(data.plotLinesColor).setOpacity(0).get('rgba')]
                    ]
                },

                marker: {
                    radius: 4,
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null,
                },
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                threshold: null
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            type: 'area',
            name: 'Quaterly Report', 
            data: [29.9, 71.5, 106.4, 60.4, 82.8, 120.8]
        }],
        colors: ['#ccab76'],
        responsive: {
            rules: [{
                chartOptions: undefined,
                condition: {}
            }]
        }
    });
}
//Draw quarterly report
function showSavingGoalsTomGraph(el, data) {
    //var graph = el==null?$(data.graphContainer):$(el).find(data.graphContainer);
    return Highcharts.chart(data.graphContainer,{
        chart: {
            type: 'line',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 0,
            backgroundColor:data.backgroundColor,
            events: {

            }
        },
        title: {
            text: false
        },
        xAxis: {
            categories: ['2016', '2017', '2018', '2019', '2020'],
            labels: {
                style: {
                    color: '#a1a1a1'
                }
            }
        },
        yAxis: {
            title: {
                text: false
            },
            labels: {
                style: {
                    color: '#a1a1a1'
                },
                formatter: function () {
                    // change_15.08.17
                    return this.value + " EUR";
                },
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#a1a1a1'
            }]
        },
        plotOptions: {
            area: {
                fillColor: {                    
                    stops: [
                        [0, data.plotLinesColor],
                        [1, Highcharts.Color(data.plotLinesColor).setOpacity(0).get('rgba')]
                    ]
                },

                marker: {
                    radius: 4,
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null,
                },
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                threshold: null
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +Highcharts.numberFormat(this.y, 2)+ '<br/>' + this.x;
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            type: 'area',
            name: 'EUR', 
            data: [10, 45, 90, 135, 180]
        }],
        colors: ['#ccab76'],
        responsive: {
            rules: [{
                chartOptions: undefined,
                condition: {}
            }]
        }
    });
}