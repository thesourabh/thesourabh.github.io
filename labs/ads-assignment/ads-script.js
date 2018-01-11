var domString = "";

var hcXAxis = [];
var hcSeries = [];

// Preprocessing for both the table and the chart are done here in the same loop, but can be separated if required.
for (var i in studentData.schema) {
	
    var hcObject = {
        name: studentData.schema[i],
        data: []
    };
	
    domString += "<tr><td>" + studentData.schema[i] + "</td>";
    
	for (var j in studentData.data) {

		domString += "<td>" + studentData.data[j][i] + "</td>";

        if (i != 0) {
            hcObject.data.push(parseInt(studentData.data[j][i]));
        } else {
            hcXAxis.push(parseInt(studentData.data[j][i]));
        }
    }
	
    domString += "</tr>"
    
	if (i != 0) {
        hcSeries.push(hcObject);
    }
}

// Update DOM to generate the table
document.getElementById("table-1").innerHTML = domString;


// Use HighCharts.js to generate chart from our preprocessed data
Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Students'
    },
    subtitle: {
        text: 'Chart Using HighCharts.js'
    },
    xAxis: {
        categories: hcXAxis
    },
    yAxis: {
		title: ""
	},
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: hcSeries
});