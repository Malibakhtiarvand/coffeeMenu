var open_aside = document.getElementById("open-aside")
var aside = document.querySelector(".aside")
var data = document.querySelector(".data")

open_aside.addEventListener("click", () => {
    var width = aside.getClientRects().item(0).width
    console.log(width);

    if (width == 0) {
        aside.style.width = "300px"
    } else {
        aside.style.width = "0px"
    }
})

var options = {
    series: [{
        name: 'فروش کافه',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 1.4]
    }],
    chart: {
        height: 350,
        type: 'bar',
        events: {
            mounted: (chart) => {
                chart.windowResizeHandler();
            }
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },

    xaxis: {
        categories: ["قهوه", "کباب", "کیک", "بستنی", "ماهی", "هات چاکلت"],
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val) {
                return val + "%";
            }
        }

    },
    title: {
        text: 'مقدار فروش محصولات',
        floating: true,
        align: 'center',
        style: {
            color: '#444'
        }
    }
};

var chart = new ApexCharts(document.querySelector("#most-product"), options);
chart.render();



var options2 = {
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};

var chart = new ApexCharts(document.querySelector("#Progress-chart"), options2);
chart.render();
