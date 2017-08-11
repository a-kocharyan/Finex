
var grid = {};

$(document).ready(function () {
    var options = {
        cellHeight: 80,
        verticalMargin: 10
    };

    $('.grid-stack').gridstack(options);
    grid = $('.grid-stack').data('gridstack');
    bindWidgetToolsButtons('.grid-stack');
    $(".widget-transactions .widget-body").niceScroll({cursorcolor: "#4b3f2f", cursorwidth: "7px"});
    $(".widget-transactions-to-be-signed .widget-body").niceScroll({cursorcolor: "#4b3f2f", cursorwidth: "7px"});
    $(".widget-transactions-pending .widget-body").niceScroll({cursorcolor: "#4b3f2f", cursorwidth: "7px"});
    $(".widget-transactions-failed .widget-body").niceScroll({cursorcolor: "#4b3f2f", cursorwidth: "7px"});
    $(".widget-envelope .widget-body").niceScroll({cursorcolor: "#4b3f2f", cursorwidth: "7px"});
    $(".widget-account-statements .widget-body").niceScroll({cursorcolor: "#4b3f2f", cursorwidth: "7px"});
    //mainInit();
    //precompiledInit();

    //var chartInstance = new Chart(ctx, {
    //    type: 'line',
    //    data: data,
    //    options: {
    //        responsive: false
    //    }
    //});

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
});

function widgetExtendRight (id) {
    var $item = $(id);
    var dimensions = getDimensions($item);
    dimensions.width = dimensions.width * 2;
    setDimensions($item, dimensions);
    $(".widget",$item).addClass('extended-right');
    $(".widget-more-right", $item).hide();
    $(".widget-less-right", $item).show();
    gridstackUpdate();
}

function widgetExtendBottom (id) {
    var $item = $(id);
    var dimensions = getDimensions($item);
    dimensions.height = dimensions.height * 2;
    setDimensions($item, dimensions);
    $(".widget",$item).addClass('extended-bottom');
    $(".widget-more-bottom", $item).hide();
    $(".widget-less-bottom", $item).show();
    gridstackUpdate();
}

function widgetDecreaseRight (id) {
    var $item = $(id);
    var dimensions = getDimensions($item);
    dimensions.width = dimensions.width / 2;
    setDimensions($item, dimensions);
    $(".widget",$item).removeClass('extended-right');
    $(".widget-more-right", $item).show();
    $(".widget-less-right", $item).hide();
    gridstackUpdate();
}

function widgetDecreaseBottom (id) {
    var $item = $(id);
    var dimensions = getDimensions($item);
    dimensions.height = dimensions.height / 2;
    setDimensions($item, dimensions);
    $(".widget",$item).removeClass('extended-bottom');
    $(".widget-more-bottom", $item).show();
    $(".widget-less-bottom", $item).hide();
    gridstackUpdate();
}

function widgetClose (id) {
    $(id).remove();
}

function getWidgetId (element) {
    return "#" + $(element).closest(".grid-stack-item").attr("id");
}

function getDimensions ($gsElement) {
    return {
        x : $gsElement.data("gsX"),
        y : $gsElement.data("gsY"),
        width : $gsElement.data("gsWidth"),
        height : $gsElement.data("gsHeight")
    }
}

function setDimensions ($gsElement, dimensions) {
    $gsElement.data("gsX", dimensions.x).attr("data-gs-x", dimensions.x);
    $gsElement.data("gsY", dimensions.y).attr("data-gs-y", dimensions.y);
    $gsElement.data("gsWidth", dimensions.width).attr("data-gs-width", dimensions.width);
    $gsElement.data("gsHeight", dimensions.height).attr("data-gs-height", dimensions.height);
    return true;
}

function gridstackUpdate () {
    grid.update();
}

function bindWidgetToolsButtons (container) {
    $(".widget-more-right", container).on('click', function () {
        widgetExtendRight(getWidgetId(this));
    });

    $(".widget-more-bottom", container).on('click', function () {
        widgetExtendBottom(getWidgetId(this));
    });

    $(".widget-less-right", container).on('click', function () {
        widgetDecreaseRight(getWidgetId(this));
    });

    $(".widget-less-bottom", container).on('click', function () {
        widgetDecreaseBottom(getWidgetId(this));
    });

    $(".widget-close", container).on('click', function () {
        widgetClose(getWidgetId(this));
    });
}
