$.widget.bridge('uibutton', $.ui.button);
function initPfmDetailsNew() {
    'use strict';
    $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function (e) {
        var $target = $(e.target);
        var $tabs = $target.closest('.nav-tabs-responsive');
        var $current = $target.closest('li');
        var $parent = $current.closest('li.dropdown');
        $current = $parent.length > 0 ? $parent : $current;
        var $next = $current.next();
        var $prev = $current.prev();
        var updateDropdownMenu = function ($el, position) {
            $el
                .find('.dropdown-menu')
                .removeClass('pull-xs-left pull-xs-center pull-xs-right')
                .addClass('pull-xs-' + position);
        };
        $tabs.find('>li').removeClass('next prev');
        $prev.addClass('prev');
        $next.addClass('next');
        updateDropdownMenu($prev, 'left');
        updateDropdownMenu($current, 'center');
        updateDropdownMenu($next, 'right');
    });

    /* Category options*/

    var Select_List_Data = {
        // names match option values in controlling select box
        Housing: {
            option: 'Housing',
            text: ['Rent', 'House Loan', 'Utility Bills', 'Mobile Bills', 'Televesion & Internet', 'House Insurance'],
            icon: 'fa-bed'
        },
        Entertainment: {
            option: 'Entertainment',
            text: ['Hobbies', 'Sports', 'Travel', 'Gifts', 'Singing', 'Other'],
            icon: 'fa-gamepad'
        },
        Dining: {
            option: 'Food & Dining',
            text: ['Hotels', 'Restarunt', 'Party', 'Travel'],
            icon: 'fa-building-o'
        },
        Withdrawal: {
            option: 'Withdrawal',
            text: ['Slip Withdrawal', 'ATM Withdrawal', 'Cradit Card', 'Cash Withdrawal'],
            icon: 'fa-cc-mastercard'
        },
        Transportation: {
            option: 'Transportation',
            text: ['Hobbies', 'Sports', 'Travel', 'Gifts', 'Singing', 'Other'],
            icon: 'fa-car'
        },
        Education: {
            option: 'Education',
            text: ['School Fee', 'College Fee', 'Tution Fee', 'Class Expenses', 'Books Expenses', 'Library Fee'],
            icon: 'fa-university'
        },
    };

    $('.split-transaction-lstLft ul li').click(function (event) {
        var currOptionVal = $(this).text();
        var thisParent = $(this).parents('.show_edit_popup_cont');
        thisParent.find('.split-transaction-lstLft ul li').removeClass('active');
        $(this).addClass('active');
        $.each(Select_List_Data, function (index, val) {
            if (currOptionVal == val.option) {
                thisParent.find('.split-transaction-lstRgt ul').html('');
                $.each(val.text, function (ind, value) {
                    thisParent.find('.split-transaction-lstRgt ul').append('<li><a href="javascript:void(0);">' + value + '</a></li>');
                });
                thisParent.find('.undo-split-cont ul li.active a i').attr('class', 'fa ' + val.icon);
            }
        });
    });

    $('.split-transaction-lstRgt ul').on('click', 'li', function () {
        $('.split-transaction-lstRgt ul li').each(function () {
            $('.split-transaction-lstRgt ul li').removeClass('active');
        });
        $(this).addClass('active');
    });

    $('.advCol1').click(function (e) {
        $(this).addClass('searchActive');
        if ($('.advSearchSec').is(':hidden')) {
            $('.advSearchSec').show();
        }
        else {
            $('.advSearchSec').hide();
        }
    });

    $('.addtag').keypress(function (e) {
        if (e.which === 32 || e.which === 13 && $(this).val() != '') {
            $('.tagSec').append('<li>' + $(this).val() + ' <img src="images/close.png" alt="" class="removetag" /></li>');
            $(this).val('');
        }
    });

    $('.srcBtn').click(function (e) {
        $('.advCol1').removeClass('searchActive');
        $('.advSearchSec').hide();
    });

    $(document).on("click", '.removetag', function () {
        $(this).parent().remove();
    });

    $('.closeBtn').click(function (e) {
        $('.popupNew').fadeOut();
        $('.popupNewOverlay').fadeOut();
    });

    $('#transactionstable tr td').click(function (e) {
        $('.popupNew').fadeIn();
        $('.popupNewOverlay').fadeIn();
    });

    $('#transactionstable').DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        scrollY: '71vh',
        scrollCollapse: true,
    });

    $('#accounttable').DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        scrollY: '75vh',
        scrollCollapse: true,
    });

    $('#accounttable tr td').click(function () {
        var tabdata = "<tr id='myTableRow'>" +
            "<td colspan='4'  class='table-responsive'>" +
            "<div class='tab-child col-md-11 col-lg-11'>" +
            "<div class='col-md-4 col-lg-4'>" +
            "<table class='acname-child'>" +
            "<tr>" +
            "<td>BLZ</td>" +
            "<td>:</td>" +
            "<td>20010020</td>" +
            "</tr>" +
            "<tr>" +
            "<td>Account Type</td>" +
            "<td>:</td>" +
            "<td>Single Account</td>" +
            "</tr>" +
            "<tr>" +
            "<td colspan='3'></td>" +
            "</tr>" +
            "<tr>" +
            "<td>IBAN</td>" +
            "<td>:</td>" +
            "<td>DE31200100209999999999</td>" +
            "</tr>" +
            "<tr>" +
            "<td>BIC</td>" +
            "<td>:</td>" +
            "<td>PBNKDEFF</td>" +
            "</tr>" +
            "</table>" +
            "<p class='acdetails'><a href='widget.html'>Account Details</a></p>" +
            "</div>" +
            "<div  class='acno col-md-5 col-lg-5'>" +
            "<h3>Latest Transactions</h3>" +
            "<table class='acno-child'>" +
            "<tr>" +
            "<td>01/27/2016</td>" +
            "<td>Transfer</td>" +
            "<td><span class='amured'>-328.75</span></td>" +
            "</tr>" +
            "<tr>" +
            "<td>01/27/2016</td>" +
            "<td>Credit</td>" +
            "<td><span class='amugreen'>228.61</span></td>" +
            "</tr>" +
            "<tr>" +
            "<td>01/27/2016</td>" +
            "<td>Transfer</td>" +
            "<td><span class='amured'>-328.75</span></td>" +
            "</tr>" +
            "<tr>" +
            "<td>01/27/2016</td>" +
            "<td>Transfer</td>" +
            "<td><span class='amugreen'>787.56</span></td>" +
            "</tr>" +
            "</table>" +
            "<p class='alltrans'><span class='alltrans-ico'></span><a href='#'>All Transactions</a></p>" +
            "</div>" +
            "<div  class='col-md-2 col-md-2'>" +
            "<div id='tab1' class='pfm_graph'>" +
            "<span id='pfm_number' class='pfm_number'><i class='fa fa-euro'></i>3,233</span>" +
            "<div id='cashflow_graph'></div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</td>" +
            "</tr>";
        var parntTr = $(this).closest('tr');
        $('#accounttable tr td').removeClass('rowselected');
        $('#accounttable tr td span.colapps1').removeClass('colapps2');
        $(this).parent().children('td').addClass('rowselected');
        if ($(this).parent().next().attr('id') == "myTableRow") {
            $(this).parent().children('td').children('.colapps1').removeClass('colapps2');
            $('#myTableRow').remove();
            $(this).parent().children('td').removeClass('rowselected');
        }
        else {
            $(this).parent().children('td').children('.colapps1').addClass('colapps2');
            $('#myTableRow').remove();
            parntTr.after(tabdata).insertAfter(parntTr);
            doCreateChartPersonalFin1(null);
        }
    });

    $('#myDropdown').ddslick({
        width: '370',
    });

    $('#disablecategory').click(function () {
        var editbtnSrc = $(this).attr('src');
        if (editbtnSrc == 'images/editBtnGray.png') {
            $(this).attr('src', 'images/editBtnGreen.png');

            catflag = 2;
        }
        else {
            $(this).attr('src', 'images/editBtnGray.png');
            catflag = 1;
        }
    });

    $(document).ready(function (e) {
        var $document = $(document);
        var selector = '[data-rangeslider]';
        var $inputRange = $(selector);

        /** * Example functionality to demonstrate a value feedback * and change the output's value. */
        function valueOutput(element) {
            var value = element.value;
            var output = element.parentNode.getElementsByTagName('output')[0];
            output.innerHTML = value;
        }

        /** * Initial value output */
        console.log($inputRange);
        for (var i = $inputRange.length - 1; i >= 0; i--) {
            valueOutput($inputRange[i]);
        }
        ;
        /** * Update value output */
        $document.on('input', selector, function (e) {
            valueOutput(e.target);
        });
        /** * Initialize the elements */
        $inputRange.rangeslider({
            polyfill: false
        });
        /** * Example functionality to demonstrate programmatic value changes */

        $('.rangeslider.rangeslider--horizontal').wrap("<div class='sliderWrap'></div>");
    });

    function doCreateChartPersonalFin1(input) {
        var containerId = '#cashflow_graph';
        var chartTitle = 'Total Expenses';
        if (input != null) {
            containerId = '#cashflow' + input + '_graph';
            chartTitle = '';
        }
        $(containerId).highcharts({
            chart: {
                type: 'pie',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                spacingBottom: 0,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 10,
            },
            title: {
                text: '',
                style: {
                    display: 'none'
                }
            },
            subtitle: {
                text: '',
                style: {
                    display: 'none'
                }
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
                    center: ['50%', '20%'],
                    borderWidth: 0,
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                valueSuffix: '',
                formatter: function () {
                    return this.point.name + " : <strong>" + this.point.y + '% </strong>';
                }
            },
            series: [{
                name: false,
                data: [
                    {
                        name: 'Expense',
                        y: 13,
                        color: '#e74955'
                    },
                    {
                        name: 'Balance',
                        y: 22,
                        color: '#a5d16c'
                    }
                ],
                size: '85%',
                innerSize: '90%',
                dataLabels: {
                    formatter: function () {
                        // display only if larger than 1
                        // return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%'  : null;

                    }
                }
            }]
        });
        setTimeout(function () {
            $(window).trigger('resize');
        }, 2);
    }

    function createChartPersonalFin1() {
        setTimeout(function () {
            doCreateChartPersonalFin1(null);
        }, 300);
    }

    $('#disabletextarea').click(function () {
        var editbtnSrc = $(this).attr('src');
        if (editbtnSrc == 'images/editBtnGray.png') {
            $(this).attr('src', 'images/editBtnGreen.png');
            $('#acountTextarea').removeClass('disabledTxtarea');
        }
        else {
            $(this).attr('src', 'images/editBtnGray.png');
            $('#acountTextarea').addClass('disabledTxtarea');
        }
    });

    $('#disabletextbox').click(function () {
        var editbtnSrc = $(this).attr('src');
        if (editbtnSrc == 'images/editBtnGray.png') {
            $(this).attr('src', 'images/editBtnGreen.png');
            $('#tagsTextbox').removeClass('disabledTxtarea');
        }
        else {
            $(this).attr('src', 'images/editBtnGray.png');
            $('#tagsTextbox').addClass('disabledTxtarea');
        }
    });


    /*.................. NEW JS for Anaysis Page..............................*/
    var date = new Date();
    date.setDate(date.getDate() - 1);

    $('#targetDate').datepicker({ format: 'dd/mm/yyyy', startDate: date })
        .on('changeDate', function (ev) {
            $('#targetDate').datepicker('hide');
        });

    /*...................... Analysis Content Slider Control................*/

    $('#analysis-carousel').children('.left.carousel-control').removeAttr("data-slide='prev'");

    $('#analysis-carousel').children('.left.carousel-control').css({
        'opacity': '0.5',
        'cursor': 'default'
    });

    $('#analysis-carousel').bind('slid.bs.carousel', function (e) {
        var $this = $(this);
        $this.children('.right.carousel-control').attr("data-slide='next'");
        $this.children('.right.carousel-control').css({ 'opacity': '1', 'cursor': 'pointer' });
        $this.children('.left.carousel-control').attr("data-slide='prev'");
        $this.children('.left.carousel-control').css({ 'opacity': '1', 'cursor': 'pointer' });
        if ($('.carousel-inner .item:last').hasClass('active')) {
            $('#analysis-carousel').carousel('pause');
            $this.children('.right.carousel-control').removeAttr("data-slide='next'");
            $this.children('.right.carousel-control').css({ 'opacity': '0.5', 'cursor': 'default' });
        } else if ($('.carousel-inner .item:first').hasClass('active')) {
            $this.children('.left.carousel-control').removeAttr("data-slide='prev'");
            $this.children('.left.carousel-control').css({ 'opacity': '0.5', 'cursor': 'default' });
        }
    });

    /*...................... Analysis Content Slider Control................*/

    $('.sa-goal-create-icon-cont li a').click(function () {
        $('.sa-goal-create-icon-cont li').each(function () {
            $('.sa-goal-create-icon-cont li a').removeClass('active');
        });
        $(this).addClass('active');
    });

    $('.analysis-transction-category .pull-right i').on('click', function (e) {
        var num = $(this).parent().attr('id').split('analysis-transction-pop')[1];
        $(this).parent().popover({
            html: true,
            content: function () {
                return $('#analysis-transction-pop' + Number(num) + '-content').html();
            }
        });
        $(".popover").each(function () {
            var $this = $(this);
            $this.popover('hide');
        });
    });

    $('body').on('hidden.bs.popover', function (e) {
        $(e.target).data("bs.popover").inState.click = false;
    });

    $('#goalNmEdit').click(function () {
        var editbtnSrc = $(this).attr('src');
        if (editbtnSrc == 'images/editBtnGray.png') {
            $(this).attr('src', 'images/editBtnGreen.png');
            $('#goalNmTextbox').removeClass('disabledTxtarea');
        }
        else {
            $(this).attr('src', 'images/editBtnGray.png');
            $('#goalNmTextbox').addClass('disabledTxtarea');
        }
    });

    $('#goalTargetBalance').click(function () {
        var editbtnSrc = $(this).attr('src');
        if (editbtnSrc == 'images/editBtnGray.png') {
            $(this).attr('src', 'images/editBtnGreen.png');
            $('#targetTextbox').removeClass('disabledTxtarea');
        }
        else {
            $(this).attr('src', 'images/editBtnGray.png');
            $('#targetTextbox').addClass('disabledTxtarea');
        }
    });

    $('#goalTargetdate').click(function () {
        var editbtnSrc = $(this).attr('src');
        if (editbtnSrc == 'images/editBtnGray.png') {
            $(this).attr('src', 'images/editBtnGreen.png');
            $('#targetdateTextbox').removeClass('disabledTxtarea');
        }
        else {
            $(this).attr('src', 'images/editBtnGray.png');
            $('#targetdateTextbox').addClass('disabledTxtarea');
        }
    });

    $('#editgoalmnthlypymnt').click(function () {
        var editbtnSrc = $(this).attr('src');
        if (editbtnSrc == 'images/editBtnGray.png') {
            $(this).attr('src', 'images/editBtnGreen.png');
            $('#goalmnthlyTextbox').removeClass('disabledTxtarea');
        }
        else {
            $(this).attr('src', 'images/editBtnGray.png');
            $('#goalmnthlyTextbox').addClass('disabledTxtarea');
        }
    });

    $('.anyls-detail-collpse').click(function () {
        $('.anlys-detail-cont').toggleClass('collapse-expand');
        $('.anlys-fltr-result-cont').toggleClass('collapse-expand');
        $('.anyls-detail-collpse').toggleClass('collapse-expand');
        $('.anyls-fltr-collpse').toggleClass('collapse-expand');
        $('.anlys-detail-cont .anyls-detail-chart-rgt').toggle();
        $('.anlys-detail-cont .anlys-detail-hd-tabs').toggle();
        $('.anlys-fltr-result-cont .advSearchSec').toggle();
        create_expences_chart();
    });

    $('.anyls-fltr-collpse').click(function () {
        $('.anlys-detail-cont').toggleClass('collapse-expand');
        $('.anlys-fltr-result-cont').toggleClass('collapse-expand');
        $('.anyls-detail-collpse').toggleClass('collapse-expand');
        $('.anyls-fltr-collpse').toggleClass('collapse-expand');
        $('.anlys-detail-cont .anyls-detail-chart-rgt').toggle();
        $('.anlys-detail-cont .anlys-detail-hd-tabs').toggle();
        $('.anlys-fltr-result-cont .advSearchSec').toggle();
        create_expences_chart();
    });

    $('.anyls-detail-chart-rgt ul li.active:first-child()').click(function () {
        create_expences_chart();

        $('.anyls-detail-chart-rgt .tab-content #anyls-detail-tab1').html('');

        var innrHTML = "<tr title='Housing'><td><span class='clr1'></span></td><td>Housing</td><td>EUR 1,698.46</td></tr>";
        innrHTML += "<tr title='Food &amp; Dining'><td><span class='clr2'></span></td><td>Food &amp; Dining</td><td>EUR 1,136.27</td></tr>";
        innrHTML += "<tr title='Withdrawal'><td><span class='clr3'></span></td><td>Withdrawal</td><td>EUR 725.00</td></tr>";
        innrHTML += "<tr title='Auto &amp; Transport'><td><span class='clr4'></span></td><td>Auto &amp; Transport</td><td>EUR 495.76</td></tr>";
        innrHTML += "<tr title='Uncategorized exp'><td><span class='clr5'></span></td><td>Uncategorized exp</td><td>EUR 436.70</td></tr>";
        innrHTML += "<tr title='Self-care'><td><span class='clr6'></span></td><td>Self-care</td><td>EUR 316.07</td></tr>";
        innrHTML += "<tr title='Entertainment'><td><span class='clr7'></span></td><td>Entertainment</td><td>EUR 270.31</td></tr>";
        innrHTML += "<tr title='Education'><td><span class='clr8'></span></td><td>Education</td><td>EUR 89.88</td></tr>";
        innrHTML += "<tr title='Total'><td>Total</td><td>&nbsp;</td><td>EUR 5,168.45</td></tr>";

        $('.anyls-detail-chart-rgt .tab-content #anyls-detail-tab1').append("<table width='100%' cellpadding='0' cellspacing='0'><tbody>" + innrHTML + "</tbody></table>");
    });

    create_expences_chart();
    /*.......................... Start Analysis Main Chart.........................*/
    function create_expences_chart() {
        $('.analysis-transction-list ul li').show()
        $('#expensexChartId').highcharts({
            chart: {
                type: 'pie',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                margin: [50, 10, 10, 10],
                spacingBottom: 10,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 10,
                reflow: false,

                events: {
                    load: addTitle,
                    redraw: addTitle,
                },
            },
            title: {
                text: 'Expenses',
                align: 'center',
                y: 40,
                style: { color: '#333333', fontSize: '20px', fontFamily: 'Open Sans' }
            },
            subtitle: {
                text: '',
                style: { display: 'none' }
            },
            yAxis: {
                title: {
                    text: false
                }
            },
            plotOptions: {
                pie: {
                    size: '90%',
                    dataLabels: {
                        enabled: false
                    }

                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                valueSuffix: '',
                formatter: function () {
                    return this.point.name + " : <strong>€" + this.point.y + '</strong>';
                }
            },
            series: [{
                name: false,
                data: [
                    {
                        name: 'Housing', y: 1698.46, color: '#ff5a00', id: 'Housing'
                    },
                    {
                        name: 'Food & Dining', y: 1136.27, color: '#94c437', id: 'Food & Dining'
                    },
                    {
                        name: 'Withdrawal', y: 725.00, color: '#00c0ff', id: 'Withdrawal'
                    },
                    {
                        name: 'Auto & Transport',
                        y: 495.76,
                        color: '#ff9f09',
                        id: 'Auto & Transport'
                    },
                    {
                        name: 'Uncategorized exp',
                        y: 436.70,
                        color: '#afafaf',
                        id: 'Uncategorized exp'
                    },
                    {
                        name: 'Self-care', y: 316.07, color: '#00ce83', id: 'Self-care'
                    },
                    {
                        name: 'Entertainment', y: 270.31, color: '#7545ef', id: 'Entertainment'
                    },
                    {
                        name: 'Education', y: 89.88, color: '#4f7fe1', id: 'Education'
                    }
                ],
                point: {
                    events: {
                        click: function (event) {
                            update_subcategory_chart(this.id);
                        }
                    }
                },
                size: '90%',
                innerSize: '90%',
            }]
        });

    }

    function addTitle() {

        var total = 0;
        var r = this.renderer,
            x = this.series[0].center[0] + this.plotLeft,
            y = this.series[0].center[1] + this.plotTop - 20;

        for (var i = 0, len = this.series[0].yData.length; i < len; i++) {
            total += this.series[0].yData[i];
        }
        var text1 = this.renderer.text('€', 0, 0)
            .css({
                color: '#333333',
                fontSize: '32px',
                fontFamily: 'Open Sans',
                fontWeight: '600',
                floating: true,
                align: 'center',
                wrap: 'hard',
                'text-anchor': 'center'
            }).hide()
            .add();
        var bbox1 = text1.getBBox();
        text1.attr({
            x: x - (bbox1.width / 2),
            y: y
        }).show();


        var text = this.renderer.text(total, 0, 0)
            .css({
                color: '#333333',
                fontSize: '32px',
                fontFamily: 'Open Sans',
                fontWeight: '600',
                floating: true,
                align: 'center',
                wrap: 'hard',
                'text-anchor': 'center'
            }).hide()
            .add();
        var bbox = text.getBBox();
        text.attr({
            x: x - (bbox.width / 2),
            y: y + 50
        }).show();
    }

    function update_subcategory_chart(em) {

        $('.analysis-transction-list ul li').hide().dataFilter({ 'category': em }).show();

        if (em == 'Housing') {
            $('.anyls-detail-chart-rgt .tab-content #anyls-detail-tab1').html('');

            var innrHTML = "<tr title='Rent'><td><span class='icon c-rent'></span></td><td>Rent</td><td>EUR 600.00</td></tr>";
            innrHTML += "<tr title='House Loan'><td><span class='icon c-house-loan'></span></td><td>House Loan</td><td>EUR 538.47</td></tr>";
            innrHTML += "<tr title='Utility Bills'><td><span class='icon c-utility-bills'></span></td><td>Utility Bills</td><td>EUR 269.70</td></tr>";
            innrHTML += "<tr title='Mobile Bills'><td><span class='icon c-mobile-bills'></span></td><td>Mobile Bills</td><td>EUR 156.42</td></tr>";
            innrHTML += "<tr title='Television &amp; Internet'><td><span class='icon c-television-internet'></span></td><td>Television &amp; Internet</td><td>EUR 79.16</td></tr>";
            innrHTML += "<tr title='Home Insurance'><td><span class='icon c-home-insurance'></span></td><td>Home Insurance</td><td>EUR 54.71</td></tr>";
            innrHTML += "<tr title='Total'><td>Total</td><td>&nbsp;</td><td>EUR 1,698.46</td></tr>";

            $('.anyls-detail-chart-rgt .tab-content #anyls-detail-tab1').append("<div class='housing-expense-subcatgry-cont'><table width='100%' cellpadding='0' cellspacing='0'><tbody>" + innrHTML + "</tbody></table></div>");

            $('#expensexChartId').highcharts({
                chart: {
                    type: 'pie',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    margin: [50, 10, 10, 10],
                    spacingBottom: 10,
                    spacingTop: 10,
                    spacingLeft: 10,
                    spacingRight: 10,
                    reflow: true,

                    events: {
                        load: addTitle_subcat,
                        redraw: addTitle_subcat,
                    },
                },
                title: {
                    text: '<em onClick="changeToExpenses()">Expenses</em> > <strong> Housing</strong>',
                    align: 'center',
                    y: 40,
                    style: { color: '#333333', fontSize: '20px', fontFamily: 'Open Sans' },
                    useHTML: true
                },
                subtitle: {
                    text: '',
                    style: { display: 'none' }
                },
                yAxis: {
                    title: {
                        text: false
                    }
                },
                plotOptions: {
                    pie: {
                        size: '90%',
                        dataLabels: {
                            enabled: false
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: '',
                    formatter: function () {
                        return this.point.name + " : <strong>€" + this.point.y + '</strong>';
                    }
                },
                series: [{
                    name: false,
                    data: [
                        {
                            name: 'Rent', y: 600.00, color: '#ff5a00'
                        },
                        {
                            name: 'House Loan', y: 538.47, color: '#ff8200'
                        },
                        {
                            name: 'Utility Bills', y: 269.70, color: '#ffa86f'
                        },
                        {
                            name: 'Mobile Bills', y: 156.42, color: '#d48e6c'
                        },
                        {
                            name: 'Television & Internet', y: 79.16, color: '#f9cc29'
                        },
                        {
                            name: 'Home Insurance', y: 54.71, color: '#feec6c'
                        }
                    ],
                    size: '90%',
                    innerSize: '90%',
                }]
            });
        }

        function addTitle_subcat() {
            var total = 0;
            var r = this.renderer,
                x = this.series[0].center[0] + this.plotLeft,
                y = this.series[0].center[1] + this.plotTop - 20;

            for (var i = 0, len = this.series[0].yData.length; i < len; i++) {
                total += this.series[0].yData[i];
            }
            var text1 = this.renderer.text('€', 0, 0)
                .css({
                    color: '#333333',
                    fontSize: '32px',
                    fontFamily: 'Open Sans',
                    fontWeight: '600',
                    floating: true,
                    align: 'center',
                    wrap: 'hard',
                    'text-anchor': 'center'
                }).hide()
                .add();
            var bbox1 = text1.getBBox();
            text1.attr({
                x: x - (bbox1.width / 2),
                y: y
            }).show();


            var text = this.renderer.text(total.toFixed(2), 0, 0)
                .css({
                    color: '#333333',
                    fontSize: '32px',
                    fontFamily: 'Open Sans',
                    fontWeight: '600',
                    floating: true,
                    align: 'center',
                    wrap: 'hard',
                    'text-anchor': 'center'
                }).hide()
                .add();
            var bbox = text.getBBox();
            text.attr({
                x: x - (bbox.width / 2),
                y: y + 50
            }).show();
        }
    }

    /*.......................... End Analysis Main Chart.........................*/

    $(".anyls-detail-chart-lft").on('svg', 'click', function () {
        alert('hello');
    })

    /*.......................... Start Table row click.........................*/
    $('.anyls-detail-chart-rgt .tab-content').on('click', 'tr', function () {
        var currntTitle = $(this).attr('title');
        update_subcategory_chart(currntTitle);
    });

    /*.......................... END Analysis Table row click.........................*/

    $('.advCol1').click(function (e) {
        $(this).addClass('searchActive');
        $('.advSearchSec').show();
    });

    $('.srcBtn').click(function (e) {
        $('.advCol1').removeClass('searchActive');
        $('.advSearchSec').hide();
    });

    $('.show_edit_popup_cont .analysis-transction-li-head .pull-right a').click(function () {
        $(this).parent().parent().parent().fadeOut();
    });


    /*.......................... Saving Goals Script.......................*/
    creategoalChart();
    $('.create-goal-collpse').click(function () {
        $('.sa-goal-create-detail-cont').toggleClass('collapse-expand');
        $('.created-goal-result-cont').toggleClass('collapse-expand');
        $('.create-goal-collpse').toggleClass('collapse-expand');
        $('.created-goal-car-collpse').toggleClass('collapse-expand');
        $('.sa-goal-create-detail-cont .sa-goal-create-input-cont').toggle();
        $('.created-goal-result-cont .created-goals-car-chart').toggle();
        setTimeout(function () {
            creategoalChart();
        }, 200);
    });

    $('.created-goal-car-collpse').click(function () {
        $('.sa-goal-create-detail-cont').toggleClass('collapse-expand');
        $('.created-goal-result-cont').toggleClass('collapse-expand');
        $('.create-goal-collpse').toggleClass('collapse-expand');
        $('.created-goal-car-collpse').toggleClass('collapse-expand');
        $('.sa-goal-create-detail-cont .sa-goal-create-input-cont').toggle();
        $('.created-goal-result-cont .created-goals-car-chart').toggle();
        $('.created-goals-car-chart .chartContainer').highcharts().destroy();
        setTimeout(function () {
            creategoalChart();
        }, 300);
    });

    function creategoalChart() {
        $('.created-goals-car-chart .chartContainer').highcharts({
            chart: {
                renderTo: 'created-goalschartContainer',
                spacingBottom: 15,
                spacingTop: 20,
                spacingLeft: 20,
                spacingRight: 20,
                backgroundColor: 'rgba(255, 255, 255, 0)',
            },
            title: {
                text: '<b>Linked Account:</b> My Current Account',
                style: { fontWeight: 'bold', color: '#333', font: '14px Open Sans' }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['2016', '2017', '2018', '2019', '2020'],
                labels: {
                    style: { color: '#333', font: '12px Open Sans', fontWeight: 'normal' }
                },
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0
            },
            plotOptions: {
                line: {
                    size: '100%',
                    marker: {
                        enabled: false
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'SAVINGS PLAN',
                    style: { fontWeight: 'bold', color: '#333', font: '14px Open Sans' }
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080',

                }],
                labels: {
                    style: { color: '#333', font: '12px Open Sans', fontWeight: 'normal' },
                    formatter: function () {
                        return this.value + ' EUR';
                    }
                },
            },
            tooltip: {
                formatter: function () {
                    return '<b>DATE ' + this.x + '</b><br/><b>EUR </b> ' + this.y;
                }
            },
            series: [{
                showInLegend: false,
                name: 'EUR',
                data: [20, 45, 90, 135, 225]
            }]
        });
    }

    $('.goals-balance-cont .category-fld .pull-right a').click(function (e) {
        var categoryFld = {};
        var categoryFldParent = $(this).parents('.created-goal-result');
        categoryFldParent.addClass('categoryFldActive');
        categoryFld.title = categoryFldParent.find('.anlys-fltr-title').text();
        categoryFld.img = categoryFldParent.find('.created-goals-img-cont').children('img').attr('src');
        categoryFld.balance = categoryFldParent.find('.goals-balance').children('.pull-right').text();
        categoryFld.date = categoryFldParent.find('.goals-date').children('.pull-right').text();
        categoryFld.payment = categoryFldParent.find('.goals-payment').children('.pull-right').text();
        $('.popupgoalTop span').text(categoryFld.title);
        $('.popup-goal-img img').attr('src', categoryFld.img);
        $('.popupGoalTitle').val(categoryFld.title);
        $('.popupGoalBalance').val(categoryFld.balance);
        $('.popupGoalDate').val(categoryFld.date);
        $('.popupGoalPayment').val(categoryFld.payment);
        $('.popupEditGoal').fadeIn();
        $('.popupEditGoalOverlay').fadeIn();
    });

    $('.closegoal, .popupGoalClose').click(function (e) {
        $('.popupGoalTitle').addClass('disabledTxtarea');
        $('.popupGoalBalance').addClass('disabledTxtarea');
        $('.popupGoalDate').addClass('disabledTxtarea');
        $('.popupGoalPayment').addClass('disabledTxtarea');
        $('.detailEdit img').attr('src', 'images/editBtnGray.png');
        $('.popupEditGoal').fadeOut();
        $('.popupEditGoalOverlay').fadeOut();
    });

    $('.popupGoalSave').click(function (e) {
        var activeGoal = $('.categoryFldActive');
        console.log(activeGoal.html());
        activeGoal.find('.anlys-fltr-title').text($('.popupGoalTitle').val());
        activeGoal.find('.goals-balance').children('.pull-right').text($('.popupGoalBalance').val());
        activeGoal.find('.goals-date').children('.pull-right').text($('.popupGoalDate').val());
        activeGoal.find('.goals-payment').children('.pull-right').text($('.popupGoalPayment').val());
        activeGoal.removeClass('categoryFldActive');

        $('.popupGoalTitle').addClass('disabledTxtarea');
        $('.popupGoalBalance').addClass('disabledTxtarea');
        $('.popupGoalDate').addClass('disabledTxtarea');
        $('.popupGoalPayment').addClass('disabledTxtarea');
        $('.detailEdit img').attr('src', 'images/editBtnGray.png');
        $('.popupEditGoal').fadeOut();
        $('.popupEditGoalOverlay').fadeOut();
    });


    $('.new-villa-collpse').click(function () {
        $('.sa-goal-new-villa-cont').toggleClass('collapse-expand');
        $('.created-new-villa-desc-cont').toggleClass('collapse-expand');
        $('.renovate-goal-result-cont').toggleClass('collapse-expand');
        $('.renovate-goal-chart').toggle();
        $('.sa-goal-new-villa-cont .sa-goal-new-villa-chart').toggle();
        $('.sa-goal-new-villa-chart .chartContainer').highcharts().destroy();
        $('.renovate-goal-chart .chartContainer').highcharts().destroy();
        setTimeout(function () {
            newvillagoalChart();
        }, 300);

    });

    $('.renovate-goal-collpse').click(function () {
        $('.sa-goal-new-villa-cont').toggleClass('collapse-expand');
        $('.created-new-villa-desc-cont').toggleClass('collapse-expand');
        $('.renovate-goal-result-cont').toggleClass('collapse-expand');
        $('.renovate-goal-chart').toggle();
        $('.sa-goal-new-villa-cont .sa-goal-new-villa-chart').toggle();
        $('.sa-goal-new-villa-chart .chartContainer').highcharts().destroy();
        $('.renovate-goal-chart .chartContainer').highcharts().destroy();
        setTimeout(function () {
            newvillagoalChart();
        }, 300);
    });

    newvillagoalChart();

    function newvillagoalChart() {
        $('.sa-goal-new-villa-chart .chartContainer').highcharts({
            chart: {
                spacingBottom: 15,
                spacingTop: 20,
                spacingLeft: 20,
                spacingRight: 20,
                backgroundColor: 'rgba(255, 255, 255, 0)',
            },
            title: {
                text: '<b>Linked Account:</b> My Current Account',
                style: { fontWeight: 'bold', color: '#333', font: '14px Open Sans' }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['2016', '2017', '2018', '2019', '2020'],
                labels: {
                    style: {
                        color: '#333', font: '12px Open Sans', fontWeight: 'normal'
                    }
                },
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0
            },
            plotOptions: {
                line: {
                    size: '100%',
                    marker: { enabled: false }
                }
            },
            yAxis: {
                title: {
                    text: 'SAVINGS PLAN',
                    style: {
                        fontWeight: 'bold', color: '#333', font: '14px Open Sans',
                    }
                },
                plotLines: [{
                    value: 0, width: 1, color: '#808080',

                }],
                labels: {
                    style: {
                        color: '#333', font: '12px Open Sans', fontWeight: 'normal'
                    },
                    formatter: function () {
                        return this.value + ' EUR';
                    }
                },
            },
            tooltip: {
                formatter: function () {
                    return '<b>DATE ' + this.x + '</b><br/><b>EUR </b> ' + this.y;
                }
            },
            series: [{
                showInLegend: false,
                name: 'EUR',
                data: [20, 45, 90, 135, 225]
            }]
        });


        $('.renovate-goal-chart .chartContainer').highcharts({
            chart: {
                spacingBottom: 15,
                spacingTop: 20,
                spacingLeft: 20,
                spacingRight: 20,
                backgroundColor: 'rgba(255, 255, 255, 0)',
            },
            title: {
                text: '<b>Linked Account:</b> My Current Account',
                style: {
                    fontWeight: 'bold', color: '#333', font: '14px Open Sans',
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['2016', '2017', '2018', '2019', '2020'],
                labels: {
                    style: { color: '#333', font: '12px Open Sans', fontWeight: 'normal' }
                },
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0
            },
            plotOptions: {
                line: {
                    size: '100%', marker: { enabled: false }
                }
            },
            yAxis: {
                title: {
                    text: 'SAVINGS PLAN',
                    style: {
                        fontWeight: 'bold', color: '#333', font: '14px Open Sans',
                    }
                },
                plotLines: [{
                    value: 0, width: 1, color: '#808080'
                }],
                labels: {
                    style: { color: '#333', font: '12px Open Sans', fontWeight: 'normal' },
                    formatter: function () {
                        return this.value + ' EUR';
                    }
                },
            },
            tooltip: {
                formatter: function () {
                    return '<b>DATE ' + this.x + '</b><br/><b>EUR </b> ' + this.y;
                }
            },
            series: [{
                showInLegend: false,
                name: 'EUR',
                data: [20, 45, 90, 135, 225]
            }]
        });
    }
    /*.......................... End Saving Goals Script.......................*/

    $("#analysis_srch-range").change(function () {
        parMass.period = [];
        for (var i = $(this).val(), n = 0; i > 0; i--, n++) {
            parMass.period[n] = i;
        }
        filter(parMass);
    });

    $(".selectpicker[name='account']").change(function () {
        var value = $("option:selected", this).val();
        if (value != "All") {
            parMass.account = value;
        } else {
            delete parMass.account;
        }
        filter(parMass);
    })

    $(".selectpicker[name='category']").change(function () {
        var value = $("option:selected", this).val();
        if (value != "All") {
            parMass.category = value;
        } else {
            delete parMass.category;
        }
        filter(parMass);
    })
    $(".selectpicker[name='partner']").change(function () {
        var value = $("option:selected", this).val();
        if (value != "All") {
            parMass.partner = value;
        } else {
            delete parMass.partner;
        }
        filter(parMass);
    })

    $(".txtWidth").change(function () {
        filter(parMass);
    })

    function perm(arr) {
        if (arr.length > 1) {
            var beg = arr[0];
            var arr1 = perm(arr.slice(1));
            var arr2 = [];
            var l = arr1[0].length;
            for (var i = 0; i < arr1.length; i++)
                for (var j = 0; j <= l; j++)
                    arr2.push(arr1[i].slice(0, j).concat(beg, arr1[i].slice(j)));
            return arr2;
        } else return [arr];
    }

    $("#inputAnalysisTags0").change(function () {
        parMass.tag = [];
        var tags = $(this).val();
        if (tags == "") {
            delete parMass.tag;
        } else {
            parMass.tag = tags.split(",");
        }

        filter(parMass);

    });

    $('#cmn-toggle-1,#cmn-toggle-2,#cmn-toggle-3,#cmn-toggle-4').change(function () {
        filter(parMass);
    });

    transaction = $('.carousel-inner .item').clone();
    //filter(parMass);

    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var monthYearFlag = true;
    $("#prev-month").click(function () {
        if (monthYearFlag == true) {
            var month = $("#an-month").text();
            for (var i = 0; i < months.length; i++) {

                if (months[i] == month) {
                    if (months[i] == "January") {
                        break;
                    }
                    $("#an-month").html(months[i - 1]);
                    createrandomexpensesChart();
                    break;
                }
            }
        } else {
            var year = $("#an-year").text();
            $("#an-year").html(Number(year) - 1);
            createrandomexpensesChart();
        }
    });

    $("#next-month").click(function () {
        if (monthYearFlag == true) {
            var month = $("#an-month").text();
            for (var i = 0; i < months.length; i++) {
                if (months[i] == month) {
                    if (months[i] == "August") {
                        break;
                    }
                    $("#an-month").html(months[i + 1]);
                    createrandomexpensesChart();
                    break;
                }
            }
        } else {
            var year = $("#an-year").text();
            $("#an-year").html(Number(year) + 1);
            createrandomexpensesChart();
        }
    });

    $("#an-month-cl").click(function () {
        createrandomexpensesChart()
        $("#an-month").html("August");
        $("#an-year").html("2016");
        monthYearFlag = true;
        $("#an-year-cl").removeClass("active");
        $("#an-month-cl").addClass("active");
    });

    $("#an-year-cl").click(function () {
        createrandomexpensesChart()
        $("#an-month").html("");
        monthYearFlag = false;
        $("#an-month-cl").removeClass("active");
        $("#an-year-cl").addClass("active");
    });

    function randomInteger(min, max) {
        var rand = min + Math.random() * (max - min);
        rand = Math.round(rand);
        return rand;
    }

    function createrandomexpensesChart() {
        var y1 = randomInteger(100, 3000);
        var y2 = randomInteger(100, 3000);
        var y3 = randomInteger(100, 3000);
        var y4 = randomInteger(100, 3000);
        var y5 = randomInteger(100, 3000);
        var y6 = randomInteger(100, 3000);
        var y7 = randomInteger(100, 3000);
        var y8 = randomInteger(100, 3000);
        var y9 = randomInteger(100, 3000);

        $('#budgetingChart').highcharts({
            chart: {
                type: 'column',
                events: {
                    drillup: function (e) {
                        $('.analysis-transction-list ul li').show();
                    }
                },
            },
            title: {
                text: ' jgjjg ',
                style: { color: '#fff', font: '18px Open Sans', fontWeight: 'normal' }
            },
            xAxis: {
                type: 'category',
                minorTickLength: 0,
                tickLength: 0,
                labels: {
                    style: { color: '#8a8a8a', font: '13px Open Sans', fontWeight: 'normal' }
                },
            },
            yAxis: {
                title: {
                    text: '',
                },
                max: 100,
                min: 0,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: { stacking: 'normal', pointWidth: 45, pointPadding: 0.2, },
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.0f}%',
                        inside: true,
                        verticalAlign: "top",
                        style: {
                            textShadow: false,
                            color: '#fff',
                            fontSize: '14px',
                            fontFamily: 'Open Sans',
                            fontWeight: 'normal'
                        }
                    },
                    events: {
                        click: function (event) {
                            console.log(event);
                            if (event.point.id == "true" && event.point.name != "Total") {
                                var par = { 'category': event.point.name };
                                $('.analysis-transction-list ul li').hide().dataFilter(par).show();
                            }
                        }
                    },
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px"></span>',
                formatter: function () {
                    var point = this.point,
                        s = '<span style="color:#fff; font-size:13px; width:50px; font-family:"Open Sans"">' + point.mydata + '</span>';
                    if (point.drilldown) {
                        s = '<span style="color:#fff; font-size:13px; width:50px; font-family:"Open Sans"">' + point.mydata + '</span>';
                    } else {
                        s = '<span style="color:#fff; font-size:13px; width:50px; font-family:"Open Sans"">' + point.name + ' : ' + point.y + '%</span>';
                    }
                    return s;
                },
                backgroundColor: '#8f8f8f',
                borderColor: '#8f8f8f',
                borderRadius: 10,
                borderWidth: 1
            },
            series: [{

                dataLabels: {
                    enabled: true,
                    format: '€ {point.y}',
                    style: {
                        textShadow: false,
                        color: '#999999',
                        fontSize: '13px',
                        fontFamily: 'Open Sans',
                        fontWeight: 'normal',
                        verticalAlign: 'middle',
                    },
                    crop: false,
                    overflow: 'none',
                    inside: true,
                    backgroundColor: '#fff',
                    borderColor: '#d3d3d3',
                    borderRadius: 4,
                    borderWidth: 1,
                    pointPadding: 0.2,
                    y: -35
                },

                enableMouseTracking: false,

                data: [{
                    name: 'Total',
                    y: y1,
                    mydata: 'hello',
                    drilldown: false,
                    color: '#ededed'
                }, {
                    name: 'Housing',
                    y: y2,
                    drilldown: false,
                    color: '#ededed'
                }, {
                    name: 'Foods & Dining',
                    y: y3,
                    drilldown: false,
                    color: '#ededed'
                }, {
                    name: 'Widthdrawl',
                    y: y4,
                    drilldown: false,
                    color: '#ededed'
                }, {
                    name: 'Transport',
                    y: y5,
                    drilldown: false,
                    color: '#ededed'
                }, {
                    name: 'Self-Care',
                    y: y6,
                    drilldown: false,
                    color: '#ededed'
                }, {
                    name: 'Entertainment',
                    y: y7,
                    drilldown: false,
                    color: '#ededed'
                }, {
                    name: 'Education',
                    y: y8,
                    drilldown: false,
                    color: '#ededed'
                }, {
                    name: 'Health & Beauty',
                    y: y9,
                    drilldown: false,
                    color: '#ededed'
                }],

            },
                {
                    name: '',
                    data: [{
                        name: 'Total',
                        y: randomInteger(30, 70),
                        mydata: y1 + 'EUR / ' + Math.round(y1 * 1.5) + 'EUR',
                        drilldown: 'Total',
                        color: '#57c483',
                        id: 'true'
                    }, {
                        name: 'Housing',
                        y: randomInteger(30, 70),
                        mydata: y2 + 'EUR / ' + Math.round(y2 * 1.2) + 'EUR',
                        drilldown: 'Housing',
                        color: '#57c483',
                        id: 'true'

                    }, {
                        name: 'Foods & Dining',
                        y: randomInteger(71, 94),
                        mydata: y3 + 'EUR / ' + Math.round(y3 * 2) + 'EUR',
                        drilldown: 'Foods & Dining',
                        color: '#fdd34d',
                        id: 'true'
                    }, {
                        name: 'Widthdrawl',
                        y: randomInteger(30, 70),
                        mydata: y4 + 'EUR / ' + Math.round(y4 * 1.1) + 'EUR',
                        drilldown: 'Widthdrawl',
                        color: '#57c483',
                        id: 'true'
                    }, {
                        name: 'Transport',
                        y: randomInteger(71, 94),
                        mydata: y5 + 'EUR / ' + Math.round(y5 * 1.7) + 'EUR',
                        drilldown: 'Transport',
                        color: '#fdd34d',
                        id: 'true'
                    }, {
                        name: 'Self-Care',
                        y: randomInteger(30, 70),
                        mydata: y6 + 'EUR / ' + Math.round(y6 * 1.3) + 'EUR',
                        drilldown: 'Self-Care',
                        color: '#57c483',
                        id: 'true'
                    }, {
                        name: 'Entertainment',
                        y: randomInteger(95, 100),
                        mydata: y7 + 'EUR / ' + Math.round(y7 * 1.2) + 'EUR',
                        drilldown: 'Entertainment',
                        color: '#f2624a',
                        id: 'true'
                    }, {
                        name: 'Education',
                        y: randomInteger(71, 94),
                        mydata: y8 + 'EUR / ' + Math.round(y8 * 1.8) + 'EUR',
                        drilldown: 'Education',
                        color: '#fdd34d',
                        id: 'true'
                    }, {
                        name: 'Health & Beauty',
                        y: randomInteger(95, 100),
                        mydata: y9 + 'EUR / ' + Math.round(y9 * 1.4) + 'EUR',
                        drilldown: 'Health & Beauty',
                        color: '#f2624a',
                        id: 'true'
                    }],


                }],
            drilldown: {
                activeAxisLabelStyle: {
                    textDecoration: 'none',
                    fontStyle: 'normal',
                    textShadow: false,
                    fontWeight: 'normal',
                    color: '#999999',
                    fontSize: '13px',
                    fontFamily: 'Open Sans',
                    cursor: 'pointer',
                },
                activeDataLabelStyle: {
                    textDecoration: 'none',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    textShadow: false,
                    color: '#fff',
                    fontSize: '13px',
                    fontFamily: 'Open Sans',
                    cursor: 'pointer',
                },
                drillUpButton: {
                    relativeTo: 'spacingBox',
                    position: {
                        y: -10,
                        x: -10
                    },
                    theme: {
                        fill: 'white',
                        stroke: '#b7b7b7',
                        r: 3,
                        states: {
                            hover: {
                                fill: '#ebebeb'
                            },
                            select: {
                                stroke: '#b7b7b7',
                                fill: '#ebebeb'
                            }
                        }
                    }

                },
                series: [{
                    name: 'Total',
                    id: 'Total',
                    data: [
                        ['Rent', 56],
                        ['Housing Loan', 43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills', 68],
                        ['Televesion & Internet', 86],
                        ['Home Insurance', 48],

                    ]
                }, {
                    name: 'Housing',
                    id: 'Housing',
                    data: [
                        ['Rent', 56, '2115 EUR / 4500 EUR'],
                        ['Housing Loan', 43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills', 68],
                        ['Televesion & Internet', 86],
                        ['Home Insurance', 48]
                    ]
                }, {
                    name: 'Foods & Dining',
                    id: 'Foods & Dining',
                    data: [
                        ['Rent', 56],
                        ['Housing Loan', 43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills', 68],
                        ['Televesion & Internet', 86],
                        ['Home Insurance', 48]
                    ]
                }, {
                    name: 'Widthdrawl',
                    id: 'Widthdrawl',
                    data: [
                        ['Rent', 56],
                        ['Housing Loan', 43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills', 68],
                        ['Televesion & Internet', 86],
                        ['Home Insurance', 48]
                    ]
                }, {
                    name: 'Education',
                    id: 'Education',
                    data: [
                        ['Rent', 56],
                        ['Housing Loan', 43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills', 68],
                        ['Televesion & Internet', 86],
                        ['Home Insurance', 48]
                    ]
                }, {
                    name: 'Transport',
                    id: 'Transport',
                    data: [
                        ['Rent', 56],
                        ['Housing Loan', 43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills', 68],
                        ['Televesion & Internet', 86],
                        ['Home Insurance', 48]
                    ]
                }, {
                    name: 'Self-Care',
                    id: 'Self-Care',
                    data: [
                        ['Rent', 56],
                        ['Housing Loan', 43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills', 68],
                        ['Televesion & Internet', 86],
                        ['Home Insurance', 48]
                    ]
                }, {
                    name: 'Entertainment',
                    id: 'Entertainment',
                    data: [
                        ['Rent', 56],
                        ['Housing Loan', 43.2],
                        ['Utility Bills', 67],
                        ['Mobile Bills', 89],
                        ['Televesion & Internet', 86],
                        ['Home Insurance', 38]
                    ]
                }, {
                    name: 'Health & Beauty',
                    id: 'Health & Beauty',
                    data: [
                        ['Rent', 70],
                        ['Housing Loan', 56],
                        ['Utility Bills', 78],
                        ['Mobile Bills', 60],
                        ['Televesion & Internet', 86],
                        ['Home Insurance', 48]
                    ]
                }]
            }

        });
    }

}



transaction = $('.carousel-inner .item').clone();
parMass = {};

function filter(par) {

    var isOverspendings = !$('#cmn-toggle-1').prop('checked');
    var isAboveAvarage = !$('#cmn-toggle-2').prop('checked');
    var isAllFlaged = !$('#cmn-toggle-3').prop('checked');
    var isAll = !$('#cmn-toggle-4').prop('checked');

    if (isAll) {
        delete parMass.flag;
    } else if (isAllFlaged) {
        parMass.flag = ['overspending', 'above_average'];
    } else {
        parMass.flag = [];
        if (isAboveAvarage) {
            parMass.flag.push('above_average');
        }
        if (isOverspendings) {
            parMass.flag.push('overspending');

        }
    }


    //if(!$.isEmptyObject(parMass)) {
    var trans = transaction.clone(true).find('.analysis-transction-list>ul>li');
    var result = trans.dataFilter(par);

    var min = $('#minAmu');
    var max = $('#maxAmu');
    var minValue = parseFloat(min.val());
    var maxValue = parseFloat(max.val());
    //var remObj;
    var finalFilteredArray = [];
    $.each(result, function (key, value) {
        var itemData = $(value).data();
        var itemValue = parseFloat(itemData.amount);

        var hideElement = false;
        if (!isNaN(itemValue)) {
            if (!isNaN(minValue)) {
                if (itemData.amount < minValue) {
                    hideElement = true;
                }
            }
            if (!isNaN(maxValue)) {
                if (itemData.amount > maxValue) {
                    hideElement = true;
                }
            }
        } else {
            hideElement = true;
        }
        if (!hideElement) {
            finalFilteredArray.push(value);
            //$(value).remove();
            //remObj = $(value);
        }
    });


    //result.remove(remObj);
    //console.log(result.find(remObj));
    //console.log(remObj);
    //console.log(result);
    result = finalFilteredArray;
    //result.removeClass('nomargin-right');
    $('.carousel-inner').html('');
    var countPage = Math.ceil(result.length / 6);
    for (var i = 0; i < countPage; i++) {
        if (i == 0) {
            var cont = $('<div class="item active"><div class="analysis-transction-list"><ul>');
        } else {
            var cont = $('<div class="item"><div class="analysis-transction-list"><ul>');
        }
        var contUl = cont.find('ul');
        for (var j = 0; j < 6; j++) {
            $(result[((i * 6) + j)]).removeClass('nomargin-right');
            contUl.append(result[((i * 6) + j)]);
            //cont.find('li').show();
        }
        $('.carousel-inner').append(cont);
    }
    //} else {
    //    $('.carousel-inner').html('');
    //    $('.carousel-inner').append(transaction);
    //}

	
    $('.show_edit_popup_cont .analysis-transction-li-head .pull-right a').click(function () {
        $(this).parent().parent().parent().fadeOut();
    });

    $('.analysis-transction-category .pull-right i').on('click', function (e) {
        var num = $(this).parent().attr('id').split('analysis-transction-pop')[1];
        $(this).parent().popover({
            html: true,
            content: function () {
                return $('#analysis-transction-pop' + Number(num) + '-content').html();
            }
        });
        $(".popover").each(function () {
            var $this = $(this);
            $this.popover('hide');
        });
    });
}





/*.......................... Start Transaction List Edit Mode.........................*/
function show_edit_mode(em) {
    $(em).parent().find('.show_edit_popup_cont').fadeIn();
}

var newvar = false;
function show_split_transaction(em) {
    if (newvar == false) {
        $(em).parent().parent().find('.undo-split-cont').slideToggle();
        $(em).find('a').text('Undo Split');
        newvar = true;
    } else {
        $(em).parent().parent().find('.undo-split-cont').slideToggle();
        $(em).find('a').text('Split Transaction');
        newvar = false;
    }
}

/*.......................... End Transaction List Edit Mode.........................*/

function popover_event_func(em) {
    var popiclass = $(em).find('i.fa').attr('class').split(' ')[2];
    var popoverid = $(em).parent().parent().attr('id');
    $(em).parent().parent().parent().find('a[aria-describedby="' + popoverid + '"]').find('i').removeAttr('class').addClass('fa').addClass('fa-flag').addClass(popiclass);
    $(em).parent().parent().parent().find('a[aria-describedby="' + popoverid + '"]').popover('hide');

    var liContainer = $(em).parent().parent().parent().parent().parent().parent();
	var itemId = liContainer.data('id');
	var origTrans = transaction.find('.analysis-transction-list>ul>li[data-id="' + itemId + '"]');
	origTrans.find('>.analysis-transction-li-detail>.analysis-transction-category .analysis-flag-cont i.fa').removeAttr('class').addClass('fa').addClass('fa-flag').addClass(popiclass);

    if (popiclass == 'flag-clr-red') {
        liContainer.data('flag', 'overspending');
		origTrans.data('flag', 'overspending');
		origTrans.attr('data-flag', 'overspending');
    } else if (popiclass == 'flag-clr-ylw') {
        liContainer.data('flag', 'above_average');
		origTrans.data('flag', 'above_average');
		origTrans.attr('data-flag', 'above_average');
    } else {
        liContainer.data('flag', 'unflag');
		origTrans.data('flag', 'unflag');
		origTrans.attr('data-flag', 'unflag');
    }
    filter(parMass);
	if (popiclass == 'flag-clr-red') {
		$('.carousel-inner .item').find('.analysis-transction-list>ul>li[data-id="' + itemId + '"]').attr('data-flag', 'overspending');
    } else if (popiclass == 'flag-clr-ylw') {
		$('.carousel-inner .item').find('.analysis-transction-list>ul>li[data-id="' + itemId + '"]').attr('data-flag', 'above_average');
    } else {
		$('.carousel-inner .item').find('.analysis-transction-list>ul>li[data-id="' + itemId + '"]').attr('data-flag', 'unflag');
    }
}

/*..........Start Add New Saving Goal...............*/
function add_new_goal_func(em) {
    var iconArray = new Array("glass", "music", "search", "envelope-o", "heart", "star", "star-o", "user", "film", "th-large", "th", "th-list", "check", "remove", "close", "times", "search-plus", "search-minus", "power-off", "signal", "gear", "cog", "trash-o", "home", "file-o", "clock-o", "road", "download", "arrow-circle-o-down", "arrow-circle-o-up", "inbox", "play-circle-o", "rotate-right", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "dedent", "outdent", "indent", "video-camera", "photo", "image", "picture-o", "pencil", "map-marker", "adjust", "tint", "edit", "pencil-square-o", "share-square-o", "check-square-o", "arrows", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-circle", "minus-circle", "times-circle", "check-circle", "question-circle", "info-circle", "crosshairs", "times-circle-o", "check-circle-o", "ban", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "mail-forward", "share", "expand", "compress", "asterisk", "exclamation-circle", "gift", "leaf", "fire", "eye", "eye-slash", "warning", "exclamation-triangle", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder", "folder-open", "arrows-v", "arrows-h", "bar-chart-o", "bar-chart", "twitter-square", "facebook-square", "camera-retro", "key", "gears", "cogs", "comments", "thumbs-o-up", "thumbs-o-down", "star-half", "heart-o", "sign-out", "linkedin-square", "thumb-tack", "external-link", "sign-in", "trophy", "github-square", "upload", "lemon-o", "phone", "square-o", "bookmark-o", "phone-square", "twitter", "facebook-f", "facebook", "github", "unlock", "credit-card", "rss", "hdd-o", "bullhorn", "bell", "certificate", "hand-o-right", "hand-o-left", "hand-o-up", "hand-o-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-circle-down", "globe", "wrench", "tasks", "filter", "briefcase", "arrows-alt", "group", "users", "chain", "link", "cloud", "flask", "cut", "scissors", "copy", "files-o", "paperclip", "save", "floppy-o", "square", "navicon", "reorder", "bars", "list-ul", "list-ol", "strikethrough", "underline", "table", "magic", "truck", "pinterest", "pinterest-square", "google-plus-square", "google-plus", "money", "caret-down", "caret-up", "caret-left", "caret-right", "columns", "unsorted", "sort", "sort-down", "sort-desc", "sort-up", "sort-asc", "envelope", "linkedin", "rotate-left", "undo", "legal", "gavel", "dashboard", "tachometer", "comment-o", "comments-o", "flash", "bolt", "sitemap", "umbrella", "paste", "clipboard", "lightbulb-o", "exchange", "cloud-download", "cloud-upload", "user-md", "stethoscope", "suitcase", "bell-o", "coffee", "cutlery", "file-text-o", "building-o", "hospital-o", "ambulance", "medkit", "fighter-jet", "beer", "h-square", "plus-square", "angle-double-left", "angle-double-right", "angle-double-up", "angle-double-down", "angle-left", "angle-right", "angle-up", "angle-down", "desktop", "laptop", "tablet", "mobile-phone", "mobile", "circle-o", "quote-left", "quote-right", "spinner", "circle", "mail-reply", "reply", "github-alt", "folder-o", "folder-open-o", "smile-o", "frown-o", "meh-o", "gamepad", "keyboard-o", "flag-o", "flag-checkered", "terminal", "code", "mail-reply-all", "reply-all", "star-half-empty", "star-half-full", "star-half-o", "location-arrow", "crop", "code-fork", "unlink", "chain-broken", "question", "info", "exclamation", "superscript", "subscript", "eraser", "puzzle-piece", "microphone", "microphone-slash", "shield", "calendar-o", "fire-extinguisher", "rocket", "maxcdn", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-circle-down", "html5", "css3", "anchor", "unlock-alt", "bullseye", "ellipsis-h", "ellipsis-v", "rss-square", "play-circle", "ticket", "minus-square", "minus-square-o", "level-up", "level-down", "check-square", "pencil-square", "external-link-square", "share-square", "compass", "toggle-down", "caret-square-o-down", "toggle-up", "caret-square-o-up", "toggle-right", "caret-square-o-right", "euro", "eur", "gbp", "dollar", "usd", "rupee", "inr", "cny", "rmb", "yen", "jpy", "ruble", "rouble", "rub", "won", "krw", "bitcoin", "btc", "file", "file-text", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-numeric-asc", "sort-numeric-desc", "thumbs-up", "thumbs-down", "youtube-square", "youtube", "xing", "xing-square", "youtube-play", "dropbox", "stack-overflow", "instagram", "flickr", "adn", "bitbucket", "bitbucket-square", "tumblr", "tumblr-square", "long-arrow-down", "long-arrow-up", "long-arrow-left", "long-arrow-right", "apple", "windows", "android", "linux", "dribbble", "skype", "foursquare", "trello", "female", "male", "gittip", "gratipay", "sun-o", "moon-o", "archive", "bug", "vk", "weibo", "renren", "pagelines", "stack-exchange", "arrow-circle-o-right", "arrow-circle-o-left", "toggle-left", "caret-square-o-left", "dot-circle-o", "wheelchair", "vimeo-square", "turkish-lira", "try", "plus-square-o", "space-shuttle", "slack", "envelope-square", "wordpress", "openid", "institution", "bank", "university", "mortar-board", "graduation-cap", "yahoo", "google", "reddit", "reddit-square", "stumbleupon-circle", "stumbleupon", "delicious", "digg", "pied-piper", "pied-piper-alt", "drupal", "joomla", "language", "fax", "building", "child", "paw", "spoon", "cube", "cubes", "behance", "behance-square", "steam", "steam-square", "recycle", "automobile", "car", "cab", "taxi", "tree", "spotify", "deviantart", "soundcloud", "database", "file-pdf-o", "file-word-o", "file-excel-o", "file-powerpoint-o", "file-photo-o", "file-picture-o", "file-image-o", "file-zip-o", "file-archive-o", "file-sound-o", "file-audio-o", "file-movie-o", "file-video-o", "file-code-o", "vine", "codepen", "jsfiddle", "life-bouy", "life-buoy", "life-saver", "support", "life-ring", "circle-o-notch", "ra", "rebel", "ge", "empire", "git-square", "git", "hacker-news", "tencent-weibo", "qq", "wechat", "weixin", "send", "paper-plane", "send-o", "paper-plane-o", "history", "genderless", "circle-thin", "header", "paragraph", "sliders", "share-alt", "share-alt-square", "bomb", "soccer-ball-o", "futbol-o", "tty", "binoculars", "plug", "slideshare", "twitch", "yelp", "newspaper-o", "wifi", "calculator", "paypal", "google-wallet", "cc-visa", "cc-mastercard", "cc-discover", "cc-amex", "cc-paypal", "cc-stripe", "bell-slash", "bell-slash-o", "trash", "copyright", "at", "eyedropper", "paint-brush", "birthday-cake", "area-chart", "pie-chart", "line-chart", "lastfm", "lastfm-square", "toggle-off", "toggle-on", "bicycle", "bus", "ioxhost", "angellist", "cc", "shekel", "sheqel", "ils", "meanpath", "buysellads", "connectdevelop", "dashcube", "forumbee", "leanpub", "sellsy", "shirtsinbulk", "simplybuilt", "skyatlas", "cart-plus", "cart-arrow-down", "diamond", "ship", "user-secret", "motorcycle", "street-view", "heartbeat", "venus", "mars", "mercury", "transgender", "transgender-alt", "venus-double", "mars-double", "venus-mars", "mars-stroke", "mars-stroke-v", "mars-stroke-h", "neuter", "facebook-official", "pinterest-p", "whatsapp", "server", "user-plus", "user-times", "hotel", "bed", "viacoin", "train", "subway", "medium");
    var randIcon = Math.floor(Math.random() * (iconArray.length));
    $('<li><a href="javascript:void(0);"><i class="fa fa-' + iconArray[randIcon] + '" aria-hidden="true"></i></a></li>').insertBefore($(em));
}
/*..........End Add New Saving Goal...............*/

$(function () {

    // We can attach the `fileselect` event to all file inputs on the page
    $(document).on('change', ':file', function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    // We can watch for our custom `fileselect` event like this
    $(document).ready(function () {
        $(':file').on('fileselect', function (event, numFiles, label) {

            var input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;

            if (input.length) {
                input.val(log);
            } else {
                if (log) alert(log);
            }

        });
    });
});

function create_new_goal(goalNm, trgtamnt, monthsave, trgtdate) {
    var categoryname;
    var categoryicon;
    //var targetdate = $(trgtdate).split('/');
    $('.sa-goal-create-icon-cont ul li').each(function () {
        if ($(this).find('a').hasClass('active')) {
            categoryname = $(this).find('a').attr('title');
            categoryicon = $(this).find('a').html();
        }
    });


    $('.pfm-btm-cont').append('<div class="created-goal-result-cont new-goal-created"><div class="anlys-fltr-hd-cont">' + goalNm + '</div><div class="new-goal-collpse"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div><div class="created-goals-desc-cont"><div class="created-goals-imgprogress-cont"><div class="created-goals-img-cont"> <img src="images/goals/goal1.jpg" alt="Goals" /> </div><div class="created-goals-progress-cont"><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="120340" aria-valuemin="0" aria-valuemax="250000" style="width:48%"> <span class="sr-only">120,340</span> </div><span class="input-group-addon">250,000</span> </div><div class="current-balance-percent">48%</div><div class="current-balance-cont">Current balance: &euro; 120,340</div></div></div><div class="goals-balance-cont"><div class="goals-balance-fld"><div class="pull-left"><strong>Target balance:</strong></div><div class="pull-right">&euro; ' + trgtamnt + '</div></div><div class="goals-balance-fld"><div class="pull-left"><strong>Target date:</strong></div><div class="pull-right">' + trgtdate + '</div></div><div class="goals-balance-fld"><div class="pull-left"><strong>Monthly payment:</strong></div><div class="pull-right">&euro; ' + monthsave + '</div></div><div class="goals-balance-fld category-fld"><div class="pull-left"><strong>Category:&nbsp;</strong><span>' + categoryicon + ' ' + categoryname + '</span></div><div class="pull-right"><a href="javascript:void(0);"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;edit</a></div></div></div></div><div class="created-goals-car-chart"><div class="chartContainer" id="#created-goalschartContainer" style="width:100% !important"></div><div class="get-ur-goal-cont"> <a href="javascript:void(0);">Get your goal now!</a> </div></div></div>');

    setTimeout(function () {
        creategoalChart();
    }, 300);
}

function changeToExpenses() {
    $('#expensexChartId').highcharts({
        chart: {
            type: 'pie',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            margin: [50, 10, 10, 10],
            spacingBottom: 10,
            spacingTop: 10,
            spacingLeft: 10,
            spacingRight: 10,
            reflow: false,

            events: {
                load: addTitle,
                redraw: addTitle,
            },
        },
        title: {
            text: 'Expenses',
            align: 'center',
            y: 40,
            style: { color: '#333333', fontSize: '20px', fontFamily: 'Open Sans' }
        },
        subtitle: {
            text: '',
            style: { display: 'none' }
        },
        yAxis: {
            title: {
                text: false
            }
        },
        plotOptions: {
            pie: {
                size: '90%',
                dataLabels: {
                    enabled: false
                }

            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            valueSuffix: '',
            formatter: function () {
                return this.point.name + " : <strong>€" + this.point.y + '</strong>';
            }
        },
        series: [{
            name: false,
            data: [
                {
                    name: 'Housing', y: 1698.46, color: '#ff5a00', id: 'Housing'
                },
                {
                    name: 'Food & Dining', y: 1136.27, color: '#94c437', id: 'Food & Dining'
                },
                {
                    name: 'Withdrawal', y: 725.00, color: '#00c0ff', id: 'Withdrawal'
                },
                {
                    name: 'Auto & Transport',
                    y: 495.76,
                    color: '#ff9f09',
                    id: 'Auto & Transport'
                },
                {
                    name: 'Uncategorized exp',
                    y: 436.70,
                    color: '#afafaf',
                    id: 'Uncategorized exp'
                },
                {
                    name: 'Self-care', y: 316.07, color: '#00ce83', id: 'Self-care'
                },
                {
                    name: 'Entertainment', y: 270.31, color: '#7545ef', id: 'Entertainment'
                },
                {
                    name: 'Education', y: 89.88, color: '#4f7fe1', id: 'Education'
                }
            ],
            point: {
                events: {
                    click: function (event) {
                        update_subcategory_chart(this.id);
                    }
                }
            },
            size: '90%',
            innerSize: '90%',
        }]
    });
    function addTitle() {

        var total = 0;
        var r = this.renderer,
            x = this.series[0].center[0] + this.plotLeft,
            y = this.series[0].center[1] + this.plotTop - 20;

        for (var i = 0, len = this.series[0].yData.length; i < len; i++) {
            total += this.series[0].yData[i];
        }
        var text1 = this.renderer.text('€', 0, 0)
            .css({
                color: '#333333',
                fontSize: '32px',
                fontFamily: 'Open Sans',
                fontWeight: '600',
                floating: true,
                align: 'center',
                wrap: 'hard',
                'text-anchor': 'center'
            }).hide()
            .add();
        var bbox1 = text1.getBBox();
        text1.attr({
            x: x - (bbox1.width / 2),
            y: y
        }).show();


        var text = this.renderer.text(total, 0, 0)
            .css({
                color: '#333333',
                fontSize: '32px',
                fontFamily: 'Open Sans',
                fontWeight: '600',
                floating: true,
                align: 'center',
                wrap: 'hard',
                'text-anchor': 'center'
            }).hide()
            .add();
        var bbox = text.getBBox();
        text.attr({
            x: x - (bbox.width / 2),
            y: y + 50
        }).show();
    }

    $('.anyls-detail-chart-rgt .tab-content #anyls-detail-tab1').html('');

    var innrHTML = "<tr title='Housing'><td><span class='clr1'></span></td><td>Housing</td><td>EUR 1,698.46</td></tr>";
    innrHTML += "<tr title='Food &amp; Dining'><td><span class='clr2'></span></td><td>Food &amp; Dining</td><td>EUR 1,136.27</td></tr>";
    innrHTML += "<tr title='Withdrawal'><td><span class='clr3'></span></td><td>Withdrawal</td><td>EUR 725.00</td></tr>";
    innrHTML += "<tr title='Auto &amp; Transport'><td><span class='clr4'></span></td><td>Auto &amp; Transport</td><td>EUR 495.76</td></tr>";
    innrHTML += "<tr title='Uncategorized exp'><td><span class='clr5'></span></td><td>Uncategorized exp</td><td>EUR 436.70</td></tr>";
    innrHTML += "<tr title='Self-care'><td><span class='clr6'></span></td><td>Self-care</td><td>EUR 316.07</td></tr>";
    innrHTML += "<tr title='Entertainment'><td><span class='clr7'></span></td><td>Entertainment</td><td>EUR 270.31</td></tr>";
    innrHTML += "<tr title='Education'><td><span class='clr8'></span></td><td>Education</td><td>EUR 89.88</td></tr>";
    innrHTML += "<tr title='Total'><td>Total</td><td>&nbsp;</td><td>EUR 5,168.45</td></tr>";

    $('.anyls-detail-chart-rgt .tab-content #anyls-detail-tab1').append("<table width='100%' cellpadding='0' cellspacing='0'><tbody>" + innrHTML + "</tbody></table>");
}




function initBudgetDetail() {

	

    $('#budgetingChart').highcharts({
            chart: {
                type: 'column',
                 events:{
                       drillup: function (e) {
                     $('.analysis-transction-list ul li').show();
                }
            },
            },
            title: {
                text: ' jgjjg ',
                style: {color: '#fff', font: '18px Open Sans', fontWeight: 'normal'}
            },
            xAxis: {
                type: 'category',
                minorTickLength: 0,
                tickLength: 0,
                labels: {
                    style: {color: '#8a8a8a', font: '13px Open Sans', fontWeight: 'normal'}
                },
            },
            yAxis: {
                title: {
                    text: '',
                },
                max: 100,
                min: 0,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: {stacking: 'normal', pointWidth: 45, pointPadding: 0.2,},
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.0f}%',
                        inside: true,
                        verticalAlign: "top",
                        style: {
                            textShadow: false,
                            color: '#fff',
                            fontSize: '14px',
                            fontFamily: 'Open Sans',
                            fontWeight: 'normal'
                        }
                    },
                     events:{
                        click: function (event) {
                            console.log(event);
                          if(event.point.id == "true" && event.point.name != "Total") {
                            var par = {'category' : event.point.name};
                            $('.analysis-transction-list ul li').hide().dataFilter(par).show();
                          }
                  }
            },
                }
            },
	
		tooltip: {
			headerFormat: '<span style="font-size:11px"></span>',
			formatter: function() {
                var point = this.point,
                    s = '<span style="color:#fff; font-size:13px; width:50px; font-family:"Open Sans"">'+point.mydata+'</span>';
                if (point.drilldown) {
                    s = '<span style="color:#fff; font-size:13px; width:50px; font-family:"Open Sans"">'+point.mydata+'</span>';
                } else {
                    s = '<span style="color:#fff; font-size:13px; width:50px; font-family:"Open Sans"">'+point.name+' : '+point.y+'%</span>';
                }
                return s;
            },
			 backgroundColor: '#8f8f8f',
    				borderColor: '#8f8f8f',
    				borderRadius: 10,
    				borderWidth: 1
		},
        series: [{
            dataLabels: {
                enabled: true,
                format: '€ {point.y}',
    			style: { textShadow: false, color: '#999999', fontSize: '13px', fontFamily:'Open Sans', fontWeight: 'normal', verticalAlign: 'middle', },
				crop: false,
				overflow: 'none',
				inside:true,
				backgroundColor: '#fff',
				borderColor: '#d3d3d3',
				borderRadius: 4,
				borderWidth: 1,
				pointPadding: 0.2,
				y:-35
            },
            enableMouseTracking: false,
            data: [{
                name: 'Total',
                y: 2115,
                mydata:'hello',
                drilldown: false,
                color:'#ededed'
            }, {
                name: 'Housing',
                y: 870,
                drilldown: false,
                 color:'#ededed'
            }, {
                name: 'Foods & Dining',
                y: 264,
                drilldown: false,
                 color:'#ededed'
            }, {
                name: 'Widthdrawl',
                y: 870,
                drilldown: false,
                 color:'#ededed'
            }, {
                name: 'Transport',
                y: 870,
                drilldown: false,
                color:'#ededed'
            },{
                name: 'Self-Care',
                y: 265,
                drilldown: false,
                 color:'#ededed'
            },{
                name: 'Entertainment',
                y: 870,
               drilldown: false,
                color:'#ededed'
            },{
                name: 'Education',
                y: 264,
                drilldown: false,
                color:'#ededed'
            },{
                name: 'Health & Beauty',
                y: 870,
                drilldown: false,
                color:'#ededed'
            }]
        },{
            name: '',
            
            data: [{
                name: 'Total',
                y: 47,
                mydata: '2115 EUR / 4500 EUR',
                drilldown: 'Total',
                color:'#57c483',		
                id : "true"		
            }, {
                name: 'Housing',
                y: 65,
                mydata: '870 EUR / 1340 EUR',
                drilldown: 'Housing',
                color:'#57c483',    
                id : "true" 
            }, {
                name: 'Foods & Dining',
                y: 88,
                mydata: '264 EUR / 300 EUR',
                drilldown: 'Foods & Dining',
                color:'#fdd34d',    
                id : "true" 
            }, {
                name: 'Widthdrawl',
                y: 56,
                mydata: '870 EUR / 1554 EUR',
                drilldown: 'Widthdrawl',
                 color:'#57c483',   
                id : "true" 
            }, {
                name: 'Transport',
                y: 80,
                mydata: '880 EUR / 1087 EUR',
                drilldown: 'Transport',
                color:'#fdd34d',    
                id : "true" 
            },{
                name: 'Self-Care',
                y: 70,
                mydata: '265 EUR / 375 EUR',
                drilldown: 'Self-Care',
                color:'#57c483',    
                id : "true" 
            },{
                name: 'Entertainment',
                y: 95,
                mydata: '870 EUR / 916 EUR',
                drilldown: 'Entertainment',
                color:'#f2624a',    
                id : "true" 
            },{
                name: 'Education',
                y: 71,
                mydata: '264 EUR / 372 EUR',
                drilldown: 'Education',
                color:'#fdd34d',    
                id : "true" 
            },{
                name: 'Health & Beauty',
                y: 95,
                mydata: '870 EUR / 888 EUR',
                drilldown: 'Health & Beauty',
                color:'#f2624a',    
                id : "true" 
            }]
        }],
        drilldown: {
            activeAxisLabelStyle: {
                textDecoration: 'none',
                fontStyle: 'normal',
				textShadow: false,
				fontWeight:'normal',
				color: '#999999', 
				fontSize: '13px', 
				fontFamily:'Open Sans',
				cursor: 'pointer',
            },
            activeDataLabelStyle: {
                textDecoration: 'none',
                fontStyle: 'normal',
				fontWeight:'normal',
				textShadow: false,
				color: '#fff', 
				fontSize: '13px', 
				fontFamily:'Open Sans',
				cursor: 'pointer',
            },
			drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    y: -10,
                    x: -10
                },
                theme: {
                    fill: 'white',
                    stroke: '#b7b7b7',
                    r: 3,
	                    states: {
                        hover: {
                            fill: '#ebebeb'
                        },
                        select: {
                            stroke: '#b7b7b7',
                            fill: '#ebebeb'
                        }
                    }
                }

            },			 
            series: 
			[{
				
                name: 'Total',
                id: 'Total',
                data:[
                        ['Rent',56 ],
                        ['Housing Loan',43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills',68],
                        ['Televesion & Internet',86],
                        ['Home Insurance',48],
						
                ]
              }, {
                name: 'Housing',
                id: 'Housing',
                data: [
                        ['Rent',56, '2115 EUR / 4500 EUR'],
                        ['Housing Loan',43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills',68],
                        ['Televesion & Internet',86],
                        ['Home Insurance',48]
                ]
              }, {
                name: 'Foods & Dining',
                id: 'Foods & Dining',
                data: [
                        ['Rent',56],
                        ['Housing Loan',43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills',68],
                        ['Televesion & Internet',86],
                        ['Home Insurance',48]
                ]
              },  {
                name: 'Widthdrawl',
                id: 'Widthdrawl',
                data: [
                        ['Rent',56],
                        ['Housing Loan',43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills',68],
                        ['Televesion & Internet',86],
                        ['Home Insurance',48]
                ]
              }, {
                name: 'Education',
                id: 'Education',
                data: [
                        ['Rent',56],
                        ['Housing Loan',43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills',68],
                        ['Televesion & Internet',86],
                        ['Home Insurance',48]
                ]
              }, {
                name: 'Transport',
                id: 'Transport',
                data: [
                        ['Rent',56],
                        ['Housing Loan',43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills',68],
                        ['Televesion & Internet',86],
                        ['Home Insurance',48]
                ]
              }, {
                name: 'Self-Care',
                id: 'Self-Care',
                data: [
                        ['Rent',56],
                        ['Housing Loan',43.2],
                        ['Utility Bills', 36.8],
                        ['Mobile Bills',68],
                        ['Televesion & Internet',86],
                        ['Home Insurance',48]
                ]
              },{
                name: 'Entertainment',
                id: 'Entertainment',
                data: [
                        ['Rent',56],
                        ['Housing Loan',43.2],
                        ['Utility Bills', 67],
                        ['Mobile Bills',89],
                        ['Televesion & Internet',86],
                        ['Home Insurance',38]
                ]
              },{
                name: 'Health & Beauty',
                id: 'Health & Beauty',
                data: [
                        ['Rent',70],
                        ['Housing Loan',56],
                        ['Utility Bills', 78],
                        ['Mobile Bills',60],
                        ['Televesion & Internet',86],
                        ['Home Insurance',48]
                      ]
            }]
        }		
		
    });
	
	initPfmDetailsNew();
}


